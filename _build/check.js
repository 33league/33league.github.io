/* Checks every local link and image on the site: node _build/check.js */
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
const files = ["index.html", "work.html", "about.html", "contact.html", "404.html", ...fs.readdirSync(path.join(root, "case-studies")).map((f) => "case-studies/" + f)];
const broken = []; let n = 0;
for (const f of files) {
  const html = fs.readFileSync(path.join(root, f), "utf8");
  for (const m of html.matchAll(/(?:href|src)="([^"#]+)/g)) {
    if (/^(https?:|mailto:|data:)/.test(m[1])) continue;
    n++;
    let t = m[1].startsWith("/") ? path.join(root, m[1]) : path.resolve(path.dirname(path.join(root, f)), m[1]);
    if (fs.existsSync(t) && fs.statSync(t).isDirectory()) t = path.join(t, "index.html");
    if (!fs.existsSync(t)) broken.push(`${f} -> ${m[1]}`);
  }
}
console.log(`${files.length} pages, ${n} local links checked, ${broken.length} broken`);
broken.forEach((b) => console.log("  " + b));
process.exitCode = broken.length ? 1 : 0;
