/*
  33 LEAGUE SITE SETTINGS
  Edit only the values in quotes. Every page reads from this file.
*/
window.SITE = {
  email: "33league.official@gmail.com",
  whatsapp: "",
  whatsappText: "Hi 33 League, I'd like to talk about my brand.",
  booking: "",
  instagram: "",
  linkedin: "",
  web3formsKey: ""
};

/* Keep the public site free of unfinished template content until real assets/details are supplied. */
document.addEventListener("DOMContentLoaded", function () {
  if (document.body.classList.contains("home")) {
    document.querySelectorAll(".proof, .stats").forEach(function (el) {
      var section = el.closest("section");
      if (section) section.remove(); else el.remove();
    });

    document.querySelectorAll(".quote").forEach(function (el) {
      var section = el.closest("section");
      if (section) section.remove(); else el.remove();
    });

    document.querySelectorAll(".surface section:has(.section-head)").forEach(function (section) {
      section.remove();
    });
  }

  document.querySelectorAll(".team-group").forEach(function (group) {
    var eyebrow = group.querySelector(".eyebrow");
    if (eyebrow && eyebrow.textContent.trim().toLowerCase() === "honorary advisors") {
      group.remove();
    }
  });

  document.querySelectorAll(".placeholder-tag").forEach(function (el) { el.remove(); });
});
