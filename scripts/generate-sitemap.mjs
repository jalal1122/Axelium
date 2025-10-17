#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

// Resolve project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

// Import products data (ESM module)
const productsPath = path.join(root, "src", "products.js");
const productsModule = await import(pathToFileURL(productsPath).href);
const products =
  productsModule.default || productsModule.products || productsModule;

const BASE_URL = process.env.SITEMAP_BASE_URL || "https://axelium.eu";

// Static routes
const urls = [
  { loc: `${BASE_URL}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${BASE_URL}/contact`, changefreq: "monthly", priority: "0.6" },
  { loc: `${BASE_URL}/product/IDEAL`, changefreq: "monthly", priority: "0.6" },
];

// Helper to slugify names for URLs that are directly the name (we use encodeURIComponent to preserve spaces/caps)
const enc = (s) => encodeURIComponent(s);

// Dynamic product routes
if (products?.windows) {
  products.windows.forEach((p) => {
    urls.push({
      loc: `${BASE_URL}/product/windows/${enc(p.name)}`,
      changefreq: "monthly",
      priority: "0.8",
    });
  });
}
if (products?.doors) {
  products.doors.forEach((p) => {
    urls.push({
      loc: `${BASE_URL}/product/doors/${enc(p.name)}`,
      changefreq: "monthly",
      priority: "0.8",
    });
  });
}
if (products?.terraceSystems) {
  products.terraceSystems.forEach((p) => {
    urls.push({
      loc: `${BASE_URL}/product/terracesystems/${enc(p.name)}`,
      changefreq: "monthly",
      priority: "0.8",
    });
  });
}
if (products?.shutters) {
  products.shutters.forEach((p) => {
    urls.push({
      loc: `${BASE_URL}/product/shutters/${enc(p.name)}`,
      changefreq: "monthly",
      priority: "0.8",
    });
  });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join("\n")}\n</urlset>\n`;

const outPath = path.join(root, "public", "sitemap.xml");
fs.writeFileSync(outPath, xml, "utf8");
console.log(`Sitemap generated with ${urls.length} URLs at ${outPath}`);
