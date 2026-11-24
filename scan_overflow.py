"""Scan every route at several viewports for horizontal overflow + clipped elements."""
import json
from playwright.sync_api import sync_playwright

ROUTES = ["/", "/work", "/about", "/uses", "/contact", "/work/seekret"]
VIEWPORTS = [
    ("wide", 1440, 900),
    ("laptop", 1180, 800),
    ("tablet", 820, 1180),
    ("phone-lg", 414, 896),
    ("phone", 360, 780),
    ("phone-sm", 320, 700),
]

JS_OVERFLOW = r"""
() => {
  const vw = document.documentElement.clientWidth;
  const doc = document.documentElement;
  const pageOverflow = doc.scrollWidth - vw;
  const offenders = [];
  const clipped = [];
  const all = document.querySelectorAll('body *');
  for (const el of all) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.position === 'fixed') continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    // element sticks out past the viewport right edge
    if (r.right > vw + 1 || r.left < -1) {
      // ignore wide decorative background layers that are meant to bleed
      const cls = (el.className && el.className.toString) ? el.className.toString() : '';
      if (/\bbg-|ticker|mesh|glow|floor|shape/.test(cls)) continue;
      offenders.push({
        tag: el.tagName.toLowerCase(),
        cls: cls.slice(0, 70),
        left: Math.round(r.left),
        right: Math.round(r.right),
        w: Math.round(r.width),
        text: (el.textContent || '').trim().slice(0, 60),
      });
    }
    // element clips its own content horizontally
    if (el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0) {
      const ov = cs.overflowX;
      if (ov === 'hidden' || ov === 'clip' || ov === 'auto' || ov === 'scroll') {
        const cls = (el.className && el.className.toString) ? el.className.toString() : '';
        if (/\bbg-|ticker/.test(cls)) continue;
        clipped.push({
          tag: el.tagName.toLowerCase(),
          cls: cls.slice(0, 70),
          scrollW: el.scrollWidth,
          clientW: el.clientWidth,
          overflowX: ov,
          text: (el.textContent || '').trim().slice(0, 50),
        });
      }
    }
  }
  return { vw, pageOverflow, offenders: offenders.slice(0, 25), clipped: clipped.slice(0, 15) };
}
"""

results = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for vp_name, w, h in VIEWPORTS:
        ctx = browser.new_context(viewport={"width": w, "height": h})
        page = ctx.new_page()
        errors = []
        page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
        page.on("pageerror", lambda e: errors.append(str(e)))
        for route in ROUTES:
            page.goto(f"http://localhost:5173{route}", wait_until="networkidle")
            page.wait_for_timeout(350)
            data = page.evaluate(JS_OVERFLOW)
            data.update({"route": route, "viewport": vp_name, "size": f"{w}x{h}"})
            if data["pageOverflow"] > 0 or data["offenders"] or data["clipped"]:
                results.append(data)
                shot = f"shots/{vp_name}_{route.strip('/').replace('/', '_') or 'home'}.png"
                page.screenshot(path=shot, full_page=False)
        if errors:
            results.append({"route": "CONSOLE", "viewport": vp_name, "errors": errors[:8]})
        ctx.close()
    browser.close()

print(json.dumps(results, indent=1, ensure_ascii=False))
with open("scan_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=1, ensure_ascii=False)
print(f"\n{len(results)} issue groups recorded")
