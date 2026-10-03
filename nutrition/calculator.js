/* =====================================================================
   MONTY'S NUTRITION — UI
   Renders into <div id="montys-nutrition-calculator"></div>.
   Reads data from ingredients.js, recipes.js, menu.js; maths from engine.js.
   ===================================================================== */
(function () {
  const MN = window.MONTYS_NUTRITION;
  const root = document.getElementById("montys-nutrition-calculator");
  if (!root || !MN || !MN.computeDish) return;

  const R = Math.round;
  const g1 = v => (v < 10 ? v.toFixed(1) : String(R(v))) + "g";
  const salt = v => v.toFixed(2) + "g";
  const pct = (v, ri) => R(v / ri * 100) + "%";
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  // FSA front-of-pack traffic lights (food). Per 100 g thresholds, plus
  // the per-portion red rule for portions over 100 g.
  const TL = {
    fat:    { low: 3,   high: 17.5, portion: 21 },
    sat:    { low: 1.5, high: 5,    portion: 6 },
    sugars: { low: 5,   high: 22.5, portion: 27 },
    salt:   { low: 0.3, high: 1.5,  portion: 1.8 }
  };
  function light(k, per100, serving, weight) {
    const t = TL[k];
    if (per100 > t.high || (weight > 100 && serving > t.portion)) return "red";
    if (per100 <= t.low) return "green";
    return "amber";
  }

  const results = {};
  MN.menu.forEach(d => { results[d.id] = MN.computeDish(d.id); });

  let cat = MN.categories[0].id;
  let selected = MN.menu.find(d => d.cat === cat).id;

  root.innerHTML =
    '<div class="mn-tabs" role="tablist" aria-label="Menu sections"></div>' +
    '<div class="mn-grid"><div class="mn-list" aria-label="Menu items"></div>' +
    '<div class="mn-detail" aria-live="polite"></div></div>';
  const tabsEl = root.querySelector(".mn-tabs");
  const listEl = root.querySelector(".mn-list");
  const detailEl = root.querySelector(".mn-detail");

  function renderTabs() {
    tabsEl.innerHTML = "";
    MN.categories.forEach(c => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "mn-tab"; b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", c.id === cat); b.textContent = c.label;
      b.onclick = () => {
        cat = c.id; selected = MN.menu.find(d => d.cat === cat).id;
        renderTabs(); renderList(); renderDetail();
      };
      tabsEl.appendChild(b);
    });
  }

  function renderList() {
    listEl.innerHTML = "";
    MN.menu.filter(d => d.cat === cat).forEach(d => {
      const r = results[d.id];
      const b = document.createElement("button");
      b.type = "button"; b.className = "mn-item"; b.setAttribute("aria-current", d.id === selected);
      b.innerHTML = '<div><div class="mn-item-name">' + esc(d.name) + '</div>' +
        (d.veg ? '<span class="mn-veg">V</span>' : '') + '<div class="mn-item-sub">' + g1(r.total.protein) + ' protein · ' + R(r.weight) + 'g serving</div></div>' +
        '<div class="mn-kcal">' + R(r.total.kcal) + '<small>kcal</small></div>';
      b.onclick = () => {
        selected = d.id; renderList(); renderDetail();
        if (window.innerWidth <= 860) detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      listEl.appendChild(b);
    });
  }

  function renderDetail() {
    const r = results[selected], d = r.dish, t = r.total, p = r.per100, w = r.weight;
    const fop = [
      ["Energy", R(t.kcal) + " kcal", pct(t.kcal, MN.RI.kcal), "energy"],
      ["Fat", g1(t.fat), pct(t.fat, MN.RI.fat), light("fat", p.fat, t.fat, w)],
      ["Saturates", g1(t.sat), pct(t.sat, MN.RI.sat), light("sat", p.sat, t.sat, w)],
      ["Sugars", g1(t.sugars), pct(t.sugars, MN.RI.sugars), light("sugars", p.sugars, t.sugars, w)],
      ["Salt", salt(t.salt), pct(t.salt, MN.RI.salt), light("salt", p.salt, t.salt, w)]
    ].map(([n, v, ri, c]) => '<div class="tl-' + c + '"><b>' + n + '</b><span>' + v + '</span><i>' + ri + ' RI</i></div>').join("");

    const row = (label, k, fmt, ri, cls) =>
      '<tr' + (cls === "strong" ? ' class="strong"' : '') + '><td' + (cls === "sub" ? ' class="sub"' : '') + '>' + label + '</td>' +
      '<td>' + fmt(p[k]) + '</td><td>' + fmt(t[k]) + '</td><td>' + (ri ? pct(t[k], ri) : "") + '</td></tr>';

    const table =
      '<div class="mn-table-wrap"><table><thead><tr><th>Typical values</th><th>Per 100g</th><th>Per serving (' + R(w) + 'g)</th><th>%RI*</th></tr></thead><tbody>' +
      '<tr class="strong"><td>Energy</td><td>' + R(p.kj) + 'kJ<br>' + R(p.kcal) + 'kcal</td><td>' + R(t.kj) + 'kJ<br>' + R(t.kcal) + 'kcal</td><td>' + pct(t.kcal, MN.RI.kcal) + '</td></tr>' +
      row("Fat", "fat", g1, MN.RI.fat) +
      row("of which saturates", "sat", g1, MN.RI.sat, "sub") +
      row("Carbohydrate", "carb", g1, MN.RI.carb) +
      row("of which sugars", "sugars", g1, MN.RI.sugars, "sub") +
      row("Fibre", "fibre", g1, 0) +
      row("Protein", "protein", g1, MN.RI.protein) +
      row("Salt", "salt", salt, MN.RI.salt) +
      '</tbody></table></div>';

    const breakdown = r.rows.map(x =>
      '<tr><td>' + esc(x.label) + '</td><td>' + R(x.g) + 'g</td><td>' + R(x.kcal) + '</td><td>' + x.fat.toFixed(1) +
      '</td><td>' + x.carb.toFixed(1) + '</td><td>' + x.protein.toFixed(1) + '</td><td>' + x.salt.toFixed(2) + '</td></tr>').join("");

    detailEl.innerHTML =
      '<h3>' + esc(d.name) + (d.veg ? ' <span class="mn-veg mn-veg-lg">Vegetarian</span>' : '') + '</h3><p class="mn-desc">' + esc(d.desc) + '</p>' +
      '<div class="mn-fop" aria-label="Per serving, front-of-pack summary">' + fop + '</div>' + table +
      '<details><summary>Ingredient breakdown</summary><div class="mn-table-wrap"><table><thead><tr><th>Ingredient</th><th>Portion</th><th>kcal</th><th>Fat</th><th>Carbs</th><th>Protein</th><th>Salt</th></tr></thead><tbody>' +
      breakdown + '</tbody></table></div></details>' +
      '<p class="mn-note">*Reference intake of an average adult (8400kJ / 2000kcal). Values are calculated from our recipes and standard ingredient data, so small variations between servings are normal.</p>';
  }

  renderTabs(); renderList(); renderDetail();
})();
