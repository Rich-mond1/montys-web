# Monty's nutrition calculator

Plain HTML/JS, no build step. Works on any static host (GitHub Pages, Webflow embed, etc.).

## Files (load in this order)

| File | What it holds | Who edits it |
|---|---|---|
| `ingredients.js` | Raw ingredients, per 100 g: fat, saturates, carbs, sugars, fibre, protein, salt. No kcal (calculated). `src: "est"` = replace with supplier spec sheet. | Anyone, when a supplier/spec changes |
| `recipes.js` | Batch recipes from the kitchen sheets: items in grams + **yield** (finished weight). `drained` = share of an item that stays in the food (pasta water, brine, bicarb soak). | When a batch recipe changes |
| `menu.js` | Dishes from the build cards: `[ref, grams]` or `[ref, "1pc"]`. `units` = grams per piece (salmon, ciabatta, egg, avocado). `categories` = tabs. | When a build card changes |
| `engine.js` | Pure maths. `MN.computeItems(list)` works for any list of items. | Developer only |
| `calculator.js` / `.css` | The page UI (tabs, list, UK table, traffic lights, breakdown). | Developer only |

Page markup needed:

```html
<link rel="stylesheet" href="nutrition/calculator.css">
<div id="montys-nutrition-calculator"></div>
<script src="nutrition/ingredients.js"></script>
<script src="nutrition/recipes.js"></script>
<script src="nutrition/menu.js"></script>
<script src="nutrition/engine.js"></script>
<script src="nutrition/calculator.js"></script>
```

## How the numbers are made

1. Recipe per 100 g = sum of (ingredient per 100 g × grams × drained share) ÷ **yield** × 100. Cooking water loss is handled by the yield, so values are never inflated by raw weights.
2. Dish = sum of (recipe/ingredient per 100 g × portion grams from the build card).
3. Energy from macros with UK/EU factors: kcal = 9·fat + 4·carb + 4·protein + 2·fibre; kJ = 37·fat + 17·carb + 17·protein + 8·fibre.
4. %RI on adult Reference Intakes (8400 kJ / 2000 kcal, fat 70 g, sat 20 g, carbs 260 g, sugars 90 g, protein 50 g, salt 6 g).
5. Traffic lights: FSA front-of-pack criteria per 100 g, plus the per-portion red rule for portions over 100 g.

## Common edits

- **Change a portion:** edit the grams in `menu.js`.
- **Change a batch recipe:** edit `recipes.js` (keep the yield up to date: it changes everything).
- **New supplier product:** add or replace the line in `ingredients.js` with the spec-sheet values (per 100 g) and set `src:"label"`.
- **New dish:** copy a block in `menu.js`, give it a new `id`, `cat`, `name`, `desc`, `items`.
- **New tab:** add to `categories` in `menu.js`; dishes with that `cat` appear in it.

## Next step: Build Your Own (not built yet)

Designed so it can be added **without touching** `ingredients.js`, `recipes.js` or `engine.js`.

1. In `menu.js` add a `byo` object with the steps and choices, reusing existing refs and portions:

```js
window.MONTYS_NUTRITION.byo = {
  steps: [
    {id:"base",    label:"Base",    max:2, split:true, options:[["quinoa",130],["bulgur",130],["fusilli",300]]},
    {id:"greens",  label:"Greens",  max:2, split:true, options:[["kale",100],["spinach",70],["romaine",190]]},
    {id:"protein", label:"Protein", max:1, options:[["cookedChicken",130],["cookedBeef",130],["koreanTofu",100],["salmonRaw","1pc"]]},
    {id:"toppings",label:"Toppings",max:5, options:[["edamame",20],["pickledCabbage",75],["sweetPotatoes",100],["carrot",35]]},
    {id:"crunch",  label:"Crunch",  max:2, options:[["crispyCorn",10],["crispyOnions",10],["seeds",10],["cashew",15]]},
    {id:"sauce",   label:"Sauce",   max:1, options:[["salsaVerde",45],["chimichurri",45],["tahiniSauce",45],["misoSauce",45],["caesar",45],["pesto",45]]}
  ]
};
```
   `split:true` = when 2 are chosen each gets half the portion (like Honi Poke's 50:50 bases).

2. Uncomment the `byo` line in `categories`.
3. Add a `byo.js` UI file (load after `calculator.js`). When the BYO tab is active it renders the steps as chips; every change builds a list such as `[["quinoa",65],["bulgur",65],["cookedChicken",130],…]` and calls `MN.computeItems(list)`. That returns the same object the dishes use (`total`, `per100`, `rows`, `weight`), so the same UK table, traffic lights and breakdown work unchanged.
4. In `calculator.js` the only change: when `cat === "byo"`, hand the list/detail area to `byo.js` instead of rendering dishes (one `if`).

Still to confirm with the kitchen for BYO: the real portion of each option when sold separately, and the max number of toppings.

## Confirmed

- Caesar egg: "2 ½" = 2 halves = 1 egg.
- Cooked chicken: 6 kg cooked from 10 kg raw (+1.5 kg marinade).
- Pickled cucumber: 100 ml dill pickle juice per 1 kg cucumber.

## Open assumptions (replace when confirmed)

- `units.salmonRaw` 140 g raw per fillet, `units.ciabatta` 110 g per roll, avocado ½ = 70 g flesh.
- Brine retention 30% for fermented cabbage / pickled onions.
- Béchamel yield = raw weight (sheet cut off).
- Lines with `src:"est"` in `ingredients.js`: mixed cheese, anchovy paste, kimchee sauce, black bean paste, mixed seeds, crispy corn.
