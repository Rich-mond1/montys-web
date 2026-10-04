/* =====================================================================
   MONTY'S NUTRITION — 3/4  MENU (what goes in each bowl / box / sandwich)
   ---------------------------------------------------------------------
   Copied from the Build Card Training Guide (SBS). Each dish lists
   [ref, grams, "optional label"] where ref is a recipe key (recipes.js) or an ingredient
   key (ingredients.js). Grams are the portion that goes in the dish.

   Items sold "per piece" use UNITS below (grams per piece). Write them
   as [ref, "1pc"] / [ref, "2.5pc"] and the engine converts.
   Lines marked est:true in UNITS are assumptions — weigh and replace.

   Add a dish: copy one block, change id/name/desc/items. Done.
   ===================================================================== */
window.MONTYS_NUTRITION = window.MONTYS_NUTRITION || {};
window.MONTYS_NUTRITION.units = {
  salmonRaw:  {g:140, label:"salmon fillet",  est:true},   // raw weight of 1 portion — weigh & confirm
  ciabatta:   {g:110, label:"ciabatta",       est:true},   // weigh 1 roll & confirm
  egg:        {g:50,  label:"egg",            est:false},  // medium egg, edible part (Caesar: 2 halves = 1 egg)
  avocado:    {g:140, label:"avocado",        est:true}    // flesh of 1 whole avocado (½ = 70 g)
};

window.MONTYS_NUTRITION.categories = [
  {id:"bowls",      label:"Salad Bowls"},
  {id:"sandwiches", label:"Sandwiches"},
  {id:"boxes",      label:"Protein Boxes"}
  // {id:"byo", label:"Build Your Own"}   ← see README.md
];

window.MONTYS_NUTRITION.menu = [
  // ---------------- SALAD BOWLS ----------------
  {id:"montys-chicken", cat:"bowls", name:"Monty's Chicken",
   desc:"Roasted chicken, kale and spinach, shredded carrots, edamame mix, pickled cabbage, salsa verde, roasted sweet potatoes, crispy corn",
   items:[["kale",100],["spinach",40],["cookedChicken",130],["edamame",20],["pickledCabbage",75],["sweetPotatoes",100],["carrot",35],["crispyCorn",10],["salsaVerde",45]]},
  {id:"beef-steak", cat:"bowls", name:"Bavette Steak",
   desc:"Bavette steak, spinach & bulgur, pickled onions, edamame mix, chimichurri, roasted potatoes and carrots, crispy onions",
   items:[["bulgur",130],["spinach",70],["cookedBeef",130],["potatoCarrot",100],["edamame",20],["pickledOnions",30],["crispyOnions",10],["chimichurri",45]]},
  {id:"miso-salmon", cat:"bowls", name:"Miso Salmon",
   desc:"Miso glazed salmon, kale & quinoa, fermented cabbage, shredded carrots, miso dressing, roasted sweet potatoes, mixed seeds",
   items:[["quinoa",130],["kale",130],["pickledCabbage",75],["carrot",35],["sweetPotatoes",100],["salmonRaw","1pc"],["misoSauce",10,"Miso glaze (on salmon)"],["seeds",10],["misoSauce",45,"Miso dressing"]]},
  {id:"chicken-caesar", cat:"bowls", name:"Chicken Caesar",
   desc:"Roasted chicken, romaine, parmesan, cherry tomatoes, halved boiled egg, croutons, Caesar dressing",
   items:[["romaine",190],["cookedChicken",130],["egg","1pc"],["cherryTomato",60],["parmesan",20],["croutons",20],["caesar",45]]},
  {id:"chicken-pasta", cat:"bowls", name:"Chicken Pasta",
   desc:"Grilled chicken, fusilli pasta, spinach, cherry tomatoes, parmesan, edamame, mixed seeds, mediterranean pesto",
   items:[["fusilli",300],["spinach",30],["cookedChicken",100],["parmesan",20],["edamame",20],["cherryTomato",60],["seeds",10],["pesto",45]]},
  {id:"marinated-tofu", cat:"bowls", veg:true, name:"Marinated Tofu",
   desc:"Marinated tofu, spinach & quinoa, cucumber, beetroot, avocado, spring onions, shredded carrots, tahini, cashew nuts",
   items:[["quinoa",130],["spinach",70],["koreanTofu",100],["beetrootDill",35],["springOnion",10],["carrot",35],["avocado","0.5pc"],["pickledCucumber",90],["cashew",15],["tahiniSauce",45]]},

  // ---------------- SANDWICHES ----------------
  {id:"beef-ciabatta", cat:"sandwiches", name:"Bavette Steak Ciabatta",
   desc:"Ciabatta, bavette steak, Monty's hot mayo, romaine lettuce, gherkin, cheddar, chimichurri",
   items:[["ciabatta","1pc"],["montysMayo",15],["lettuce",40],["chimichurri",25],["gherkin",15],["cookedBeef",130],["cheddar",30]]},
  {id:"chicken-ciabatta", cat:"sandwiches", name:"Chicken Ciabatta",
   desc:"Ciabatta, roasted chicken, marinade, romaine lettuce, parmesan, Caesar sauce",
   items:[["ciabatta","1pc"],["chickenMarinade",15],["cookedChicken",130],["lettuce",40],["caesar",25],["parmesan",15]]},

  // ---------------- PROTEIN BOXES ----------------
  {id:"chicken-box", cat:"boxes", name:"Chicken Box",
   desc:"Roasted chicken, spinach, roasted vegetables, bulgur, salsa verde",
   items:[["bulgur",130],["spinach",30],["veggiesMix",100],["cookedChicken",130],["salsaVerde",35]]},
  {id:"bavette-box", cat:"boxes", name:"Bavette Steak",
   desc:"Glazed bavette steak, spinach, roasted potatoes and carrots, mac & cheese, chimichurri sauce",
   items:[["macCheese",240],["spinach",30],["potatoCarrot",90],["cookedBeef",100],["chimichurri",35]]},
  {id:"miso-salmon-box", cat:"boxes", name:"Miso Glazed Salmon",
   desc:"Miso glazed salmon, kale, sweet potatoes, mac & cheese, miso dressing",
   items:[["macCheese",240],["kale",65],["sweetPotatoes",100],["salmonRaw","1pc"],["misoSauce",10,"Miso glaze (on salmon)"],["misoSauce",35,"Miso dressing"]]},
  {id:"korean-tofu-box", cat:"boxes", veg:true, name:"Korean Tofu",
   desc:"Korean tofu, spinach, quinoa, sweet potatoes and tahini",
   items:[["quinoa",130],["spinach",30],["sweetPotatoes",100],["koreanTofu",100],["tahiniSauce",35]]}
];

/* Display names for the ingredient breakdown (optional — falls back to
   the recipe/ingredient name). The miso salmon has 10 g of glaze on the
   fish plus the dressing portion, so both lines appear. */
window.MONTYS_NUTRITION.labels = {
  cookedChicken:"Smoky paprika chicken", cookedBeef:"Bavette steak", koreanTofu:"Korean tofu",
  salmonRaw:"Salmon fillet", pickledCabbage:"Fermented cabbage", sweetPotatoes:"Roasted sweet potatoes",
  potatoCarrot:"Roasted potatoes & carrots", veggiesMix:"Roasted mixed veg", beetrootDill:"Beetroot & dill",
  edamame:"Edamame mix", carrot:"Shredded carrot", chickenMarinade:"Chicken marinade juice"
};
