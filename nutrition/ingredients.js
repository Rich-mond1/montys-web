/* =====================================================================
   MONTY'S NUTRITION — 1/4  RAW INGREDIENTS (per 100 g, as purchased)
   ---------------------------------------------------------------------
   Columns (UK label order, grams per 100 g):
     fat, sat (of which saturates), carb (available carbohydrate, fibre
     NOT included), sugars (of which sugars), fibre, protein, salt
   Energy is NOT stored: the engine derives it from these columns with
   the UK/EU factors (fat 9, carb 4, protein 4, fibre 2 kcal/g), so kcal
   always matches the macros.

   src: "cofid"  = UK CoFID / McCance & Widdowson typical values
        "label"  = typical UK retail label for that product type
        "est"    = estimate — REPLACE with the supplier spec sheet
   To update a value: edit the numbers here. Nothing else needs to change.
   ===================================================================== */
window.MONTYS_NUTRITION = window.MONTYS_NUTRITION || {};
window.MONTYS_NUTRITION.ingredients = {
  // ---- Fats & oils ----
  oliveOil:        {n:"Extra virgin olive oil", fat:99.9, sat:14.3, carb:0,   sugars:0,   fibre:0,   protein:0,   salt:0,    src:"cofid"},
  pomaceOil:       {n:"Pomace olive oil",       fat:99.9, sat:14.3, carb:0,   sugars:0,   fibre:0,   protein:0,   salt:0,    src:"cofid"},
  rapeseedOil:     {n:"Rapeseed oil",           fat:99.9, sat:7.4,  carb:0,   sugars:0,   fibre:0,   protein:0,   salt:0,    src:"cofid"},
  sesameOil:       {n:"Sesame oil",             fat:99.9, sat:14.2, carb:0,   sugars:0,   fibre:0,   protein:0,   salt:0,    src:"cofid"},
  chilliOil:       {n:"Chilli oil",             fat:99.0, sat:14.0, carb:0.5, sugars:0.2, fibre:0.3, protein:0.2, salt:0.1,  src:"label"},
  butter:          {n:"Butter (salted)",        fat:82.2, sat:52.1, carb:0.6, sugars:0.6, fibre:0,   protein:0.6, salt:1.6,  src:"cofid"},
  mayo:            {n:"Hellmann's Real Mayonnaise", fat:79.0, sat:6.2, carb:1.3, sugars:1.3, fibre:0, protein:1.1, salt:1.5, src:"label"},

  // ---- Dairy & eggs ----
  wholeMilk:       {n:"Whole milk",             fat:3.6,  sat:2.3,  carb:4.6, sugars:4.6, fibre:0,   protein:3.4, salt:0.11, src:"cofid"},
  parmesan:        {n:"Parmesan",               fat:29.7, sat:19.3, carb:0,   sugars:0,   fibre:0,   protein:36.2,salt:1.6,  src:"cofid"},
  cheddar:         {n:"Cheddar",                fat:34.9, sat:21.7, carb:0.1, sugars:0.1, fibre:0,   protein:25.4,salt:1.8,  src:"cofid"},
  mixCheese:       {n:"Grated mixed cheese",    fat:28.0, sat:18.0, carb:1.0, sugars:0.5, fibre:0,   protein:25.0,salt:1.6,  src:"est"},
  egg:             {n:"Egg, boiled",            fat:9.6,  sat:2.6,  carb:0.6, sugars:0.6, fibre:0,   protein:12.6,salt:0.35, src:"cofid"},
  eggYolk:         {n:"Egg yolk",               fat:30.5, sat:8.7,  carb:0,   sugars:0,   fibre:0,   protein:16.1,salt:0.12, src:"cofid"},

  // ---- Meat & fish (raw) ----
  chickenRaw:      {n:"Chicken breast, raw",    fat:1.1,  sat:0.3,  carb:0,   sugars:0,   fibre:0,   protein:24.0,salt:0.15, src:"cofid"},
  beefRaw:         {n:"Bavette (flank) steak, raw", fat:7.0, sat:3.0, carb:0, sugars:0, fibre:0, protein:21.0, salt:0.15, src:"cofid"},
  salmonRaw:       {n:"Salmon fillet, farmed, raw", fat:14.7, sat:2.9, carb:0, sugars:0, fibre:0, protein:20.4, salt:0.12, src:"cofid"},
  anchovyPaste:    {n:"Anchovy paste",          fat:10.0, sat:2.0,  carb:2.0, sugars:1.0, fibre:0,   protein:20.0,salt:15.0, src:"est"},

  // ---- Plant protein ----
  tofu:            {n:"Tofu, firm",             fat:7.5,  sat:1.1,  carb:1.0, sugars:0.5, fibre:1.0, protein:13.0,salt:0.02, src:"label"},
  edamame:         {n:"Edamame beans",          fat:5.2,  sat:0.6,  carb:4.5, sugars:2.2, fibre:5.2, protein:11.9,salt:0.02, src:"label"},

  // ---- Grains & bread (dry) ----
  pastaDry:        {n:"Pasta, dried",           fat:1.5,  sat:0.3,  carb:72.0,sugars:3.5, fibre:3.0, protein:12.5,salt:0.01, src:"cofid"},
  bulgurDry:       {n:"Bulgur wheat, dried",    fat:1.3,  sat:0.2,  carb:64.0,sugars:0.4, fibre:12.5,protein:12.3,salt:0.02, src:"cofid"},
  quinoaDry:       {n:"Quinoa, dried",          fat:6.1,  sat:0.7,  carb:57.0,sugars:1.0, fibre:7.0, protein:14.1,salt:0.01, src:"cofid"},
  flour:           {n:"Plain flour",            fat:1.3,  sat:0.2,  carb:71.0,sugars:1.5, fibre:3.1, protein:10.0,salt:0,    src:"cofid"},
  ciabatta:        {n:"Ciabatta",               fat:3.7,  sat:0.6,  carb:49.0,sugars:2.5, fibre:2.5, protein:9.4, salt:1.1,  src:"label"},
  croutons:        {n:"Herb croutons",          fat:15.0, sat:1.5,  carb:63.0,sugars:3.0, fibre:3.5, protein:11.0,salt:1.8,  src:"label"},

  // ---- Vegetables & fruit (raw) ----
  kale:            {n:"Kale",                   fat:1.6,  sat:0.2,  carb:1.4, sugars:1.3, fibre:3.1, protein:3.4, salt:0.11, src:"cofid"},
  spinach:         {n:"Baby spinach",           fat:0.8,  sat:0.1,  carb:1.6, sugars:1.5, fibre:2.1, protein:2.8, salt:0.35, src:"cofid"},
  romaine:         {n:"Romaine lettuce",        fat:0.3,  sat:0,    carb:1.7, sugars:1.2, fibre:1.2, protein:1.2, salt:0.02, src:"cofid"},
  lettuce:         {n:"Lettuce",                fat:0.3,  sat:0,    carb:1.9, sugars:1.9, fibre:0.6, protein:0.7, salt:0.01, src:"cofid"},
  whiteCabbage:    {n:"White cabbage",          fat:0.2,  sat:0,    carb:4.1, sugars:4.0, fibre:2.4, protein:1.0, salt:0.02, src:"cofid"},
  redCabbage:      {n:"Red cabbage",            fat:0.2,  sat:0,    carb:6.6, sugars:3.8, fibre:2.1, protein:1.4, salt:0.07, src:"cofid"},
  carrot:          {n:"Carrot",                 fat:0.3,  sat:0.1,  carb:7.9, sugars:7.4, fibre:2.4, protein:0.6, salt:0.07, src:"cofid"},
  babyPotato:      {n:"Baby potatoes",          fat:0.3,  sat:0.1,  carb:15.6,sugars:0.7, fibre:1.5, protein:1.7, salt:0.02, src:"cofid"},
  sweetPotato:     {n:"Sweet potato",           fat:0.3,  sat:0.1,  carb:20.5,sugars:5.7, fibre:2.4, protein:1.2, salt:0.1,  src:"cofid"},
  beetroot:        {n:"Beetroot, cooked",       fat:0.1,  sat:0,    carb:9.5, sugars:8.0, fibre:1.9, protein:2.3, salt:0.17, src:"cofid"},
  cherryTomato:    {n:"Cherry tomatoes",        fat:0.3,  sat:0.1,  carb:3.1, sugars:3.1, fibre:1.2, protein:0.7, salt:0.02, src:"cofid"},
  cucumber:        {n:"Cucumber",               fat:0.1,  sat:0,    carb:1.5, sugars:1.4, fibre:0.6, protein:0.7, salt:0.01, src:"cofid"},
  gherkin:         {n:"Gherkins",               fat:0.2,  sat:0,    carb:2.4, sugars:1.9, fibre:1.1, protein:0.6, salt:1.8,  src:"label"},
  redOnion:        {n:"Red onion",              fat:0.2,  sat:0,    carb:7.9, sugars:5.6, fibre:1.4, protein:1.2, salt:0.01, src:"cofid"},
  springOnion:     {n:"Spring onions",          fat:0.5,  sat:0.1,  carb:3.0, sugars:2.3, fibre:1.5, protein:2.0, salt:0.02, src:"cofid"},
  mushroom:        {n:"Mushrooms",              fat:0.5,  sat:0.1,  carb:0.4, sugars:0.2, fibre:1.1, protein:1.8, salt:0.02, src:"cofid"},
  aubergine:       {n:"Aubergine",              fat:0.4,  sat:0.1,  carb:2.2, sugars:2.0, fibre:2.0, protein:0.9, salt:0,    src:"cofid"},
  courgette:       {n:"Courgette",              fat:0.4,  sat:0.1,  carb:1.8, sugars:1.7, fibre:0.9, protein:1.8, salt:0,    src:"cofid"},
  pepper:          {n:"Peppers",                fat:0.4,  sat:0.1,  carb:6.4, sugars:6.0, fibre:1.6, protein:1.0, salt:0,    src:"cofid"},
  greenPepper:     {n:"Green pepper",           fat:0.2,  sat:0,    carb:2.9, sugars:2.4, fibre:1.7, protein:0.9, salt:0,    src:"cofid"},
  avocado:         {n:"Avocado",                fat:19.5, sat:4.1,  carb:1.9, sugars:0.5, fibre:3.4, protein:1.9, salt:0.01, src:"cofid"},
  pomegranate:     {n:"Pomegranate seeds",      fat:1.2,  sat:0.1,  carb:18.7,sugars:13.7,fibre:4.0, protein:1.7, salt:0,    src:"cofid"},
  garlic:          {n:"Garlic paste",           fat:0.6,  sat:0.1,  carb:16.3,sugars:1.6, fibre:4.1, protein:7.9, salt:0.04, src:"cofid"},
  ginger:          {n:"Ginger",                 fat:0.8,  sat:0.2,  carb:15.0,sugars:1.7, fibre:2.0, protein:1.8, salt:0.03, src:"cofid"},
  lemonJuice:      {n:"Lemon juice",            fat:0,    sat:0,    carb:1.6, sugars:1.6, fibre:0.1, protein:0.3, salt:0,    src:"cofid"},

  // ---- Herbs & spices ----
  parsley:         {n:"Parsley",                fat:1.3,  sat:0.2,  carb:2.7, sugars:2.7, fibre:5.0, protein:3.0, salt:0.08, src:"cofid"},
  coriander:       {n:"Coriander",              fat:0.5,  sat:0,    carb:1.8, sugars:0.9, fibre:2.8, protein:2.1, salt:0.1,  src:"cofid"},
  dill:            {n:"Dill",                   fat:1.1,  sat:0.1,  carb:7.0, sugars:0,   fibre:2.1, protein:3.5, salt:0.15, src:"cofid"},
  mint:            {n:"Mint",                   fat:0.9,  sat:0.2,  carb:8.0, sugars:0,   fibre:8.0, protein:3.8, salt:0.08, src:"cofid"},
  basil:           {n:"Basil",                  fat:0.6,  sat:0,    carb:2.7, sugars:0.3, fibre:1.6, protein:3.2, salt:0.01, src:"cofid"},
  herbs:           {n:"Rosemary / thyme",       fat:5.0,  sat:2.5,  carb:15.0,sugars:0,   fibre:14.0,protein:3.3, salt:0.06, src:"cofid"},
  oregano:         {n:"Dried oregano",          fat:4.3,  sat:1.6,  carb:26.0,sugars:4.0, fibre:42.0,protein:9.0, salt:0.04, src:"cofid"},
  chilliFlakes:    {n:"Chilli flakes",          fat:17.0, sat:3.0,  carb:27.0,sugars:10.0,fibre:27.0,protein:12.0,salt:0.08, src:"cofid"},
  paprika:         {n:"Smoked paprika",         fat:13.0, sat:2.0,  carb:34.0,sugars:10.0,fibre:35.0,protein:14.0,salt:0.17, src:"cofid"},
  cumin:           {n:"Cumin",                  fat:22.0, sat:1.5,  carb:34.0,sugars:2.0, fibre:11.0,protein:18.0,salt:0.4,  src:"cofid"},
  pepperGround:    {n:"Ground pepper",          fat:3.0,  sat:1.0,  carb:39.0,sugars:0.6, fibre:25.0,protein:10.0,salt:0.05, src:"cofid"},
  nutmeg:          {n:"Nutmeg",                 fat:36.0, sat:26.0, carb:28.0,sugars:3.0, fibre:21.0,protein:6.0, salt:0.04, src:"cofid"},

  // ---- Seasoning, sauces & condiments ----
  salt:            {n:"Salt",                   fat:0,    sat:0,    carb:0,   sugars:0,   fibre:0,   protein:0,   salt:100,  src:"cofid"},
  msg:             {n:"MSG",                    fat:0,    sat:0,    carb:0,   sugars:0,   fibre:0,   protein:0,   salt:30.7, src:"cofid"},
  bicarb:          {n:"Bicarbonate of soda",    fat:0,    sat:0,    carb:0,   sugars:0,   fibre:0,   protein:0,   salt:68.4, src:"cofid"},
  sugar:           {n:"Sugar",                  fat:0,    sat:0,    carb:100, sugars:100, fibre:0,   protein:0,   salt:0,    src:"cofid"},
  brownSugar:      {n:"Brown sugar",            fat:0,    sat:0,    carb:97.0,sugars:97.0,fibre:0,   protein:0.1, salt:0.05, src:"cofid"},
  honey:           {n:"Honey",                  fat:0,    sat:0,    carb:82.0,sugars:82.0,fibre:0.2, protein:0.3, salt:0.01, src:"cofid"},
  riceVinegar:     {n:"Rice vinegar",           fat:0,    sat:0,    carb:0.5, sugars:0.5, fibre:0,   protein:0,   salt:0.01, src:"label"},
  wineVinegar:     {n:"Wine vinegar",           fat:0,    sat:0,    carb:0.3, sugars:0,   fibre:0,   protein:0,   salt:0.02, src:"cofid"},
  soySauce:        {n:"Soy sauce",              fat:0.1,  sat:0,    carb:7.0, sugars:3.0, fibre:0.8, protein:7.0, salt:14.5, src:"label"},
  misoPaste:       {n:"Miso paste",             fat:6.0,  sat:1.0,  carb:25.0,sugars:6.0, fibre:5.0, protein:12.0,salt:12.0, src:"label"},
  tahini:          {n:"Tahini",                 fat:58.9, sat:8.5,  carb:0.9, sugars:0.4, fibre:8.0, protein:18.5,salt:0.06, src:"cofid"},
  kimcheeSauce:    {n:"Kimchee sauce",          fat:1.0,  sat:0.1,  carb:26.0,sugars:20.0,fibre:2.0, protein:3.0, salt:6.0,  src:"est"},
  blackBeanPaste:  {n:"Black bean paste",       fat:6.0,  sat:1.0,  carb:28.0,sugars:14.0,fibre:4.0, protein:8.0, salt:10.0, src:"est"},
  gochujang:       {n:"Gochujang paste",        fat:1.5,  sat:0.3,  carb:44.0,sugars:24.0,fibre:3.0, protein:5.0, salt:7.0,  src:"label"},
  tabasco:         {n:"Tabasco",                fat:0.8,  sat:0.1,  carb:0.8, sugars:0,   fibre:0.6, protein:1.3, salt:1.6,  src:"label"},
  mustard:         {n:"Yellow mustard",         fat:3.3,  sat:0.2,  carb:5.8, sugars:0.9, fibre:4.0, protein:3.7, salt:2.8,  src:"label"},
  worcestershire:  {n:"Worcestershire sauce",   fat:0,    sat:0,    carb:19.0,sugars:10.0,fibre:0,   protein:1.0, salt:2.5,  src:"label"},
  xanthan:         {n:"Xanthan gum",            fat:0,    sat:0,    carb:0,   sugars:0,   fibre:0,   protein:0,   salt:0,    src:"cofid"},
  water:           {n:"Water",                  fat:0,    sat:0,    carb:0,   sugars:0,   fibre:0,   protein:0,   salt:0,    src:"cofid"},

  // ---- Nuts, seeds & crunch (bought in) ----
  cashew:          {n:"Cashew nuts, roasted",   fat:50.9, sat:10.0, carb:18.8,sugars:5.6, fibre:3.2, protein:20.5,salt:0.02, src:"cofid"},
  seeds:           {n:"Mixed seeds",            fat:46.0, sat:5.5,  carb:10.0,sugars:1.5, fibre:10.0,protein:25.0,salt:0.03, src:"est"},
  sesameSeeds:     {n:"Sesame seeds",           fat:58.0, sat:8.3,  carb:0.9, sugars:0.4, fibre:7.9, protein:18.2,salt:0.05, src:"cofid"},
  crispyCorn:      {n:"Crispy corn",            fat:16.0, sat:3.0,  carb:68.0,sugars:2.0, fibre:6.0, protein:7.0, salt:1.2,  src:"est"},
  crispyOnions:    {n:"Crispy fried onions",    fat:44.0, sat:21.0, carb:40.0,sugars:10.0,fibre:5.0, protein:6.0, salt:1.2,  src:"label"}
};
