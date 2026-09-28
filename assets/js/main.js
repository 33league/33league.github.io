(function () {
  var S = window.SITE || {};
  var wa = "https://wa.me/" + (S.whatsapp || "") + "?text=" + encodeURIComponent(S.whatsappText || "");
  var links = {
    email: "mailto:" + (S.email || ""),
    whatsapp: wa,
    booking: S.booking,
    instagram: S.instagram,
    linkedin: S.linkedin
  };

  document.querySelectorAll("[data-link]").forEach(function (el) {
    var k = el.getAttribute("data-link");
    if (links[k]) el.setAttribute("href", links[k]);
    if (k !== "email") { el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
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
        "\nBrand: " + data.get("brand") + "\nNeeds: " + needs +
        "\nBudget: " + data.get("budget") + "\nGoal: " + data.get("message");

      var submitBtn = form.querySelector("button[type='submit']");

      if (!S.web3formsKey) {
        window.open("https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent("New enquiry via website\n\n" + summary), "_blank", "noopener");
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
            status.innerHTML = "Thank you. We have your details and will get back within one working day. Want to talk sooner? <a data-link='booking' target='_blank' rel='noopener' href='" + S.booking + "'>Book a call</a>.";
          } else { throw new Error("fail"); }
        })
        .catch(function () {
          status.className = "form-status err";
          status.innerHTML = "Something went wrong. Please message us on <a target='_blank' rel='noopener' href='" + wa + "'>WhatsApp</a> instead.";
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send";
        });
    });
  }
})();
