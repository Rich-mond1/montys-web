/* =====================================================================
   MONTY'S NUTRITION — 4/4  ENGINE (pure maths, no UI)
   ---------------------------------------------------------------------
   MN.per100(ref)           -> nutrients per 100 g of an ingredient or recipe
   MN.computeItems(items)   -> totals + per-line breakdown for any list of
                               [ref, grams|"Npc", label?]  (dishes AND a
                               future Build-Your-Own bowl use this same call)
   MN.computeDish(id)       -> computeItems(menu dish) + per-100 g values
   MN.RI                    -> UK Reference Intakes (adult)
   Energy: kcal = 9·fat + 4·carb + 4·protein + 2·fibre
           kJ   = 37·fat + 17·carb + 17·protein + 8·fibre
   ===================================================================== */
(function () {
  const MN = window.MONTYS_NUTRITION;
  const KEYS = ["fat", "sat", "carb", "sugars", "fibre", "protein", "salt"];
  MN.KEYS = KEYS;
  MN.RI = { kj: 8400, kcal: 2000, fat: 70, sat: 20, carb: 260, sugars: 90, protein: 50, salt: 6 };

  const zero = () => KEYS.reduce((o, k) => (o[k] = 0, o), {});
  const cache = {};

  MN.energy = function (n) {
    return {
      kcal: 9 * n.fat + 4 * n.carb + 4 * n.protein + 2 * n.fibre,
      kj: 37 * n.fat + 17 * n.carb + 17 * n.protein + 8 * n.fibre
    };
  };

  MN.per100 = function (ref, stack) {
    if (cache[ref]) return cache[ref];
    const ing = MN.ingredients[ref];
    if (ing) return (cache[ref] = KEYS.reduce((o, k) => (o[k] = ing[k], o), {}));
    const r = MN.recipes[ref];
    if (!r) throw new Error("Monty's nutrition: unknown ingredient/recipe '" + ref + "'");
    stack = stack || [];
    if (stack.includes(ref)) throw new Error("Monty's nutrition: recipe loop at '" + ref + "'");
    const sum = zero();
    r.items.forEach(([key, g]) => {
      const keep = r.drained && key in r.drained ? r.drained[key] : 1;
      const v = MN.per100(key, stack.concat(ref));
      KEYS.forEach(k => { sum[k] += v[k] * g / 100 * keep; });
    });
    KEYS.forEach(k => { sum[k] = sum[k] / r.yield * 100; });
    return (cache[ref] = sum);
  };

  MN.grams = function (ref, qty) {
    if (typeof qty === "number") return qty;
    const m = /^([\d.]+)\s*pc$/.exec(String(qty));
    const u = MN.units[ref];
    if (!m || !u) throw new Error("Monty's nutrition: no unit weight for '" + ref + "' (" + qty + ")");
    return parseFloat(m[1]) * u.g;
  };

  MN.label = function (ref) {
    return (MN.labels && MN.labels[ref]) ||
      (MN.recipes[ref] && MN.recipes[ref].n) ||
      (MN.ingredients[ref] && MN.ingredients[ref].n) || ref;
  };

  MN.computeItems = function (items) {
    const total = zero(), rows = [];
    let weight = 0;
    items.forEach(([ref, qty, label]) => {
      const g = MN.grams(ref, qty), v = MN.per100(ref), row = { ref, label: label || MN.label(ref), g, qty };
      KEYS.forEach(k => { row[k] = v[k] * g / 100; total[k] += row[k]; });
      Object.assign(row, MN.energy(row));
      rows.push(row); weight += g;
    });
    Object.assign(total, MN.energy(total));
    const per100 = {};
    ["kj", "kcal"].concat(KEYS).forEach(k => { per100[k] = weight ? total[k] / weight * 100 : 0; });
    return { total, per100, rows, weight };
  };

  MN.computeDish = function (id) {
    const d = MN.menu.find(x => x.id === id);
    return Object.assign({ dish: d }, MN.computeItems(d.items));
  };
})();
