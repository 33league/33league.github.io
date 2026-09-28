// Lightweight twinkling starfield for inner pages
(function () {
  var c = document.getElementById("stars");
  if (!c) return;
  var ctx = c.getContext("2d");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var stars = [], w, h, dpr;

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = c.clientWidth; h = c.clientHeight;
    c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round((w * h) / 2600);
    stars = [];
    for (var i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() < 0.92 ? Math.random() * 0.9 + 0.2 : Math.random() * 1.4 + 0.8,
        a: Math.random() * 0.7 + 0.2, s: Math.random() * 1.5 + 0.3, p: Math.random() * 6.28
      });
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    var g = ctx.createRadialGradient(w * 0.5, h * 1.25, 0, w * 0.5, h * 1.25, h * 1.1);
    g.addColorStop(0, "rgba(58,111,208,0.28)");
    g.addColorStop(1, "rgba(5,7,13,0)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    var off = window.scrollY * 0.04;
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var a = reduce ? s.a : s.a * (0.65 + 0.35 * Math.sin(t * 0.001 * s.s + s.p));
      var y = (s.y - off * s.r) % h; if (y < 0) y += h;
      ctx.globalAlpha = a;
      ctx.fillStyle = s.r > 1.2 ? "#dfe9ff" : "#ffffff";
      ctx.beginPath(); ctx.arc(s.x, y, s.r, 0, 6.283); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduce) requestAnimationFrame(draw);
  }

  size();
  window.addEventListener("resize", size);
  if (reduce) draw(0); else requestAnimationFrame(draw);
  if (reduce) window.addEventListener("scroll", function () { draw(0); }, { passive: true });
})();
