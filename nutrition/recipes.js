/* =====================================================================
   MONTY'S NUTRITION — 2/4  BATCH RECIPES (sub-recipes)
   ---------------------------------------------------------------------
   Copied from the kitchen recipe sheets (Bases & Sides, Proteins &
   Marinades, Sauces & Dressings). One entry per batch:

     key: { n: "Name",
            items: [ [ref, grams], ... ],   // ref = ingredient key OR another recipe key
            yield: grams,                   // finished weight of the batch
            drained: { ref: fraction } }    // OPTIONAL: share of that item that stays in
                                            // the food (1 = all, 0 = all poured away)

   How it is calculated: nutrients of every item (x its "drained" share)
   are added up and spread over the YIELD weight. Water lost in cooking
   concentrates the food, so 100 g served is never inflated or diluted.
   To change a recipe: edit the grams/yield here. Menu items update alone.
   ===================================================================== */
window.MONTYS_NUTRITION = window.MONTYS_NUTRITION || {};
window.MONTYS_NUTRITION.recipes = {
  // ---------------- BASES & SIDES ----------------
  beetrootDill:   {n:"Beetroot & dill", items:[["beetroot",500],["dill",10],["salt",10],["oliveOil",30]], yield:500},
  pomegranateMix: {n:"Pomegranate mix", items:[["pomegranate",500],["pickledCabbage",350],["mint",20],["honey",10],["salt",2]], yield:800},
  macaroni:       {n:"Macaroni pasta", items:[["pastaDry",1000],["water",4000],["salt",20]], yield:2000,
                   drained:{water:0.25, salt:0.25}},          // 1000 g of 4000 g water absorbed
  fusilli:        {n:"Pasta fusilli", items:[["pastaDry",1000],["water",4000],["salt",20]], yield:2250,
                   drained:{water:0.3125, salt:0.3125}},      // 1250 g of 4000 g water absorbed
  bulgur:         {n:"Bulgur", items:[["bulgurDry",1000],["water",2000]], yield:2000},
  quinoa:         {n:"Quinoa", items:[["quinoaDry",1000],["water",2000]], yield:2700},
  potatoCarrot:   {n:"Roasted potatoes & carrots", items:[["babyPotato",5200],["carrot",1300],["butter",130],["salt",3],["msg",2]], yield:4700},
  sweetPotatoes:  {n:"Roasted sweet potatoes", items:[["sweetPotato",3500]], yield:2500},
  veggiesMix:     {n:"Roasted mixed veg", items:[["mushroom",400],["aubergine",400],["courgette",450],["redOnion",400],["pepper",700],["salt",8],["msg",1],["rapeseedOil",70],["herbs",11]], yield:1100},
  pickleJuiceDill:{n:"Pickle juice (dill brine)", items:[["riceVinegar",1000],["water",600],["sugar",180],["salt",35],["dill",20]], yield:1835},
  pickleJuiceCO:  {n:"Pickle juice (cabbage & onion)", items:[["wineVinegar",5000],["sugar",1500],["salt",250],["lemonJuice",500]], yield:7250},
  pickledCabbage: {n:"Fermented cabbage", items:[["redCabbage",1000],["pickleJuiceCO",250]], yield:850,
                   drained:{pickleJuiceCO:0.3}},              // ASSUMPTION: 30% of the brine stays on the veg
  pickledOnions:  {n:"Pickled onions", items:[["redOnion",1000],["pickleJuiceCO",250]], yield:700,
                   drained:{pickleJuiceCO:0.3}},
  pickledCucumber:{n:"Pickled cucumber", items:[["cucumber",1000],["pickleJuiceDill",100]], yield:1100},  // 100 ml juice per 1 kg cucumber
  bechamel:       {n:"Béchamel", items:[["wholeMilk",10000],["flour",450],["butter",570],["paprika",12],["salt",80],["mustard",80],["nutmeg",4],["msg",10]], yield:11206},
  macCheese:      {n:"Mac & cheese", items:[["macaroni",1700],["parmesan",60],["bechamel",1650],["parmesan",40]], yield:3300},
  sandoSalad:     {n:"Japanese sando salad", items:[["whiteCabbage",1000],["sandoDressing",300]], yield:1300},

  // ---------------- PROTEINS & MARINADES ----------------
  chickenMarinade:{n:"Chicken marinade", items:[["kimcheeSauce",2100],["water",2060],["sesameOil",330],["pomaceOil",205],["soySauce",250],["paprika",40],["salt",35],["msg",8],["sugar",25],["xanthan",10]], yield:5000},
  marinatedChicken:{n:"Brined chicken", items:[["chickenRaw",10000],["bicarb",100],["water",25000]], yield:10000,
                   drained:{bicarb:0, water:0}},              // soak water is poured away
  cookedChicken:  {n:"Smoky paprika chicken", items:[["marinatedChicken",10000],["chickenMarinade",1500]], yield:6000},
  beefMarinade:   {n:"Beef marinade", items:[["blackBeanPaste",2210],["cumin",90],["soySauce",1400],["brownSugar",1100],["paprika",120],["rapeseedOil",1700],["msg",80],["garlic",600],["water",700],["riceVinegar",100]], yield:8000},
  marinatedBeef:  {n:"Brined beef", items:[["beefRaw",10000],["bicarb",150],["water",25000]], yield:10000,
                   drained:{bicarb:0, water:0}},
  cookedBeef:     {n:"Bavette steak", items:[["marinatedBeef",10000],["beefMarinade",500]], yield:8000},
  tofuMarinade:   {n:"Tofu marinade", items:[["gochujang",250],["riceVinegar",80],["soySauce",20],["brownSugar",20]], yield:370},
  koreanTofu:     {n:"Korean tofu", items:[["tofu",1000],["tofuMarinade",50]], yield:750},

  // ---------------- SAUCES & DRESSINGS ----------------
  chimichurri:    {n:"Chimichurri", items:[["parsley",300],["coriander",150],["redOnion",150],["oregano",45],["lemonJuice",60],["wineVinegar",150],["chilliFlakes",8],["garlic",60],["pomaceOil",910],["salt",25],["water",125]], yield:1800},
  tahiniSauce:    {n:"Tahini sauce", items:[["mayo",800],["tahini",150],["sesameOil",20],["water",250],["chilliOil",30],["lemonJuice",50],["soySauce",140],["riceVinegar",100],["garlic",40],["ginger",25],["coriander",50]], yield:1500},
  misoSauce:      {n:"Miso sauce", items:[["misoPaste",925],["lemonJuice",140],["riceVinegar",925],["soySauce",695],["sugar",925],["pomaceOil",1155],["sesameOil",230]], yield:4800},
  salsaVerde:     {n:"Salsa verde", items:[["redOnion",170],["greenPepper",550],["garlic",40],["pomaceOil",320],["wineVinegar",80],["lemonJuice",160],["parsley",140],["coriander",140],["water",200],["salt",20],["pepperGround",1],["avocado",160]], yield:1800},
  montysMayo:     {n:"Monty's hot mayo", items:[["mayo",1000],["tabasco",80],["water",350],["soySauce",10]], yield:1300},
  vinaigrette:    {n:"Monty's vinaigrette", items:[["wholeMilk",1300],["riceVinegar",130],["dill",40],["salt",15],["honey",20],["pomaceOil",400],["xanthan",2]], yield:1800},
  caesar:         {n:"Caesar dressing", items:[["rapeseedOil",1300],["oliveOil",160],["eggYolk",95],["lemonJuice",95],["anchovyPaste",40],["garlic",23],["mustard",20],["worcestershire",20],["parmesan",110],["salt",10],["water",120],["pepperGround",1]], yield:1900},
  sandoDressing:  {n:"Japanese sando dressing", items:[["mayo",2000],["soySauce",1200],["riceVinegar",400],["sesameOil",120],["sesameSeeds",50]], yield:3600},
  pesto:          {n:"Pesto", items:[["basil",430],["pomaceOil",550],["cashew",150],["water",300],["parmesan",250],["garlic",85],["salt",22]], yield:1608}
};
