(function () {
  var S = window.SITE || {};
  var digits = String(S.whatsapp || "").replace(/\D/g, "");
  var wa = digits ? "https://wa.me/" + digits + "?text=" + encodeURIComponent(S.whatsappText || "") : "";
  var mail = "mailto:" + (S.email || "") + "?subject=" + encodeURIComponent("Enquiry from the 33 League website");
  var onContact = !!document.getElementById("lead-form");
  var contactUrl = (document.querySelector("link[rel='stylesheet'][href*='assets/css']") || { getAttribute: function () { return ""; } }).getAttribute("href").replace("assets/css/style.css", "") + "contact.html";
  var links = {
    email: mail,
    whatsapp: wa,
    booking: S.booking,
    instagram: S.instagram,
    linkedin: S.linkedin
  };

  // Every link either goes somewhere real or is replaced/hidden. Nothing opens a dead "#".
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var k = el.getAttribute("data-link");
    var url = links[k];
    if (url) {
      el.setAttribute("href", url);
      if (k !== "email") { el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
      return;
    }
    if (k === "booking") {
      // No calendar link yet: send people to the enquiry form instead.
      el.setAttribute("href", onContact ? "#lead-form" : contactUrl);
      var p = el.querySelector("p");
      if (p && el.classList.contains("way")) { el.querySelector("h3").textContent = "Book a Free Call"; p.textContent = "Share a few details and we will set up a 20-minute call."; }
    } else if (k === "whatsapp") {
      // No WhatsApp number yet: fall back to email so the button still reaches us.
      el.setAttribute("href", mail);
      el.removeAttribute("target");
      var li = el.closest("li");
      var list = el.closest("ul, .ways");
      if (list && list.querySelector("[data-link='email'], a[href^='mailto:']")) { (li || el).remove(); return; }
      var icon = el.querySelector("svg");
      if (icon && !el.classList.contains("way")) icon.remove();
      el.innerHTML = el.innerHTML.replace(/WhatsApp( Us)?/, "Email$1");
    } else {
      // Social profile not set: hide the link rather than show a dead one.
      var li = el.closest("li");
      (li || el).remove();
    }
  });
  document.querySelectorAll("[data-text='email']").forEach(function (el) { el.textContent = S.email || ""; });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Header state + mobile bar
  var header = document.querySelector("header.site");
  var bar = document.querySelector(".mobile-bar");
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 30);
    if (bar) bar.classList.toggle("show", y > window.innerHeight * 0.6);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  // Work filters
  var filters = document.querySelectorAll(".filter");
  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      filters.forEach(function (x) { x.classList.remove("active"); x.setAttribute("aria-pressed", "false"); });
      f.classList.add("active");
      f.setAttribute("aria-pressed", "true");
      var cat = f.getAttribute("data-filter");
      document.querySelectorAll(".work-card[data-cat]").forEach(function (c) {
        var cats = c.getAttribute("data-cat").split(" ");
        c.classList.toggle("hide", cat !== "all" && cats.indexOf(cat) === -1);
      });
    });
  });

  // Contact form
  var form = document.getElementById("lead-form");
  if (form) {
    var status = document.getElementById("form-status");
    var started = Date.now();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";

      // Spam checks: honeypot filled, or submitted too fast to be human
      if (form.querySelector("[name='botcheck']").checked || Date.now() - started < 3000) {
        status.className = "form-status ok";
        status.textContent = "Thank you. We will be in touch.";
        form.reset();
        return;
      }

      var data = new FormData(form);
      var needs = data.getAll("needs").join(", ") || "Not specified";
      data.delete("needs");
      data.append("needs", needs);

      var summary = "Name: " + data.get("name") + "\nContact: " + data.get("contact") +
        "\nBusiness: " + (data.get("brand") || "Not given") + "\nNeeds: " + needs +
        "\nBudget: " + (data.get("budget") || "Not given") + "\nGoal: " + (data.get("message") || "Not given");

      var submitBtn = form.querySelector("button[type='submit']");

      if (!S.web3formsKey) {
        // No form service connected yet: hand the enquiry to WhatsApp if set, otherwise to the visitor's email app.
        var text = "New enquiry via website\n\n" + summary;
        if (wa) window.open("https://wa.me/" + digits + "?text=" + encodeURIComponent(text), "_blank", "noopener");
        else window.location.href = "mailto:" + S.email + "?subject=" + encodeURIComponent("New enquiry: " + (data.get("brand") || data.get("name"))) + "&body=" + encodeURIComponent(text);
        status.className = "form-status ok";
        status.innerHTML = "Thanks. Your " + (wa ? "WhatsApp" : "email app") + " should open with your details filled in, so just press send. If nothing opened, write to us at <a href='mailto:" + S.email + "'>" + S.email + "</a>.";
        return;
      }

      data.append("access_key", S.web3formsKey);
      data.append("subject", "New enquiry: " + (data.get("brand") || data.get("name")));
      data.append("from_name", "33 League Website");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            form.reset();
            status.className = "form-status ok";
            status.innerHTML = "Thank you. We have your details and will get back within one working day." + (S.booking ? " Want to talk sooner? <a target='_blank' rel='noopener' href='" + S.booking + "'>Book a call</a>." : "");
          } else { throw new Error("fail"); }
        })
        .catch(function () {
          status.className = "form-status err";
          status.innerHTML = "Something went wrong. Please " + (wa ? "message us on <a target='_blank' rel='noopener' href='" + wa + "'>WhatsApp</a>" : "email us at <a href='mailto:" + S.email + "'>" + S.email + "</a>") + " instead.";
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send My Enquiry";
        });
    });
  }
})();
