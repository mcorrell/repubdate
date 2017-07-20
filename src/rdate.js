var d3 = require("d3-time");

var rdate = module.exports;

rdate.roman = { M:1000, CM: 900, D:500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I:1};

rdate.months = [
  {"name": "Jour Complémentaire", "sname": "Com", "ename": "Complementary Day"},
  {"name": "Vendémiaire", "sname": "Vend", "ename": "Vintage"},
  {"name": "Brumaire", "sname": "Bru", "ename": "Mist"},
  {"name": "Frimaire", "sname": "Fri", "ename": "Frost"},
  {"name": "Nivôse", "sname": "Niv", "ename": "Snow"},
  {"name": "Pluviôse", "sname": "Plu", "ename": "Rain"},
  {"name": "Ventôse", "sname": "Vent", "ename": "Wind"},
  {"name": "Germinal", "sname": "Grm", "ename": "Seed"},
  {"name": "Floréal", "sname": "Flo", "ename": "Flower"},
  {"name": "Prairial", "sname": "Pra", "ename": "Meadow"},
  {"name": "Messidor", "sname": "Mes", "ename": "Harvest"},
  {"name": "Thermidor", "sname": "The", "ename": "Heat"},
  {"name": "Fructidor", "sname": "Fru", "ename": "Fruit"}
];

rdate.days = [
  {"name": "Primidi"},
  {"name": "Duodi"},
  {"name": "Tridi"},
  {"name": "Quartidi"},
  {"name": "Quintidi"},
  {"name": "Sextidi"},
  {"name": "Septidi"},
  {"name": "Octidi"},
  {"name": "Nonidi"},
  {"name": "Décadi"}
];

rdate.complementaryDays = [
  {"name": "La Fête de la Vertu", "ename": "Festival of Virtue"},
  {"name": "La Fête de Génie", "ename": "Festival of Talent"},
  {"name": "La Fête du Travail", "ename": "Festival of Labor"},
  {"name": "La Fête de l'Opinion", "ename": "Festival of Conviction"},
  {"name": "La Fête des Récompens", "ename": "Festival of Reward"},
  {"name": "La Fête de la Révolution", "ename": "Festival of the Revolution"},
];

rdate.dayNames = [
  rdate.complementaryDays,
  [
    {"name": "Raisin", "ename": "Grape"},
    {"name": "Safran", "ename": "Saffron"},
    {"name": "Châtaigne", "ename": "Chestnut"},
    {"name": "Colchique", "ename": "Crocus"},
    {"name": "Cheval", "ename": "Horse"},
    {"name": "Balsamine", "ename": "Impatiens"},
    {"name": "Carotte", "ename": "Carrot"},
    {"name": "Amaranthe", "ename": "Amaranth"},
    {"name": "Panais", "ename": "Parsnip"},
    {"name": "Cuve", "ename": "Vat"},
    {"name": "Pomme de terre", "ename": "Potato"},
    {"name": "Immortelle", "ename": "Strawflower"},
    {"name": "Potiron", "ename": "Winter squash"},
    {"name": "Réséda", "ename": "Mignonette"},
    {"name": "Âne", "ename": "Donkey"},
    {"name": "Belle de nuit", "ename": "Four o'clock flower"},
    {"name": "Citrouille", "ename": "Pumpkin"},
    {"name": "Sarrasin", "ename": "Buckwheat"},
    {"name": "Tournesol", "ename": "Sunflower"},
    {"name": "Pressoir", "ename": "Wine-Press"},
    {"name": "Chanvre", "ename": "Hemp"},
    {"name": "Pêche", "ename": "Peach"},
    {"name": "Navet", "ename": "Turnip"},
    {"name": "Amaryllis", "ename": "Amaryllis"},
    {"name": "Bœuf", "ename": "Ox"},
    {"name": "Aubergine", "ename": "Eggplant"},
    {"name": "Piment", "ename": "Chili pepper"},
    {"name": "Tomate", "ename": "Tomato"},
    {"name": "Orge", "ename": "Barley"},
    {"name": "Tonneau", "ename": "Barrel"}
  ],
  [
    {"name": "Pomme", "ename": "Apple"},
    {"name": "Céleri", "ename": "Celery"},
    {"name": "Poire", "ename": "Pear"},
    {"name": "Betterave", "ename": "Beet root"},
    {"name": "Oie", "ename": "Goose"},
    {"name": "Héliotrope", "ename": "Heliotrope"},
    {"name": "Figue", "ename": "Fig"},
    {"name": "Scorsonère", "ename": "Black Salsify"},
    {"name": "Alisier", "ename": "Chequer Tree"},
    {"name": "Charrue", "ename": "Plough"},
    {"name": "Salsifis", "ename": "Salsify"},
    {"name": "Mâcre", "ename": "Water chestnut"},
    {"name": "Topinambour", "ename": "Jerusalem Artichoke"},
    {"name": "Endive", "ename": "Endive"},
    {"name": "Dindon", "ename": "Turkey"},
    {"name": "Chervis", "ename": "Skirret"},
    {"name": "Cresson", "ename": "Watercress"},
    {"name": "Dentelaire", "ename": "Leadworts"},
    {"name": "Grenade", "ename": "Pomegranate"},
    {"name": "Herse", "ename": "Harrow"},
    {"name": "Bacchante", "ename": "Baccharis"},
    {"name": "Azerole", "ename": "Azarole"},
    {"name": "Garance", "ename": "Madder"},
    {"name": "Orange", "ename": "Orange"},
    {"name": "Faisan", "ename": "Pheasant"},
    {"name": "Pistache", "ename": "Pistachio"},
    {"name": "Macjonc", "ename": "Tuberous pea"},
    {"name": "Coing", "ename": "Quince"},
    {"name": "Cormier", "ename": "Service tree"},
    {"name": "Rouleau", "ename": "Roller"}
  ],
  [
    {"name": "Raiponce", "ename": "Rmpion"},
    {"name": "Turneps", "ename": "Turnip"},
    {"name": "Chicorée", "ename": "Chicory"},
    {"name": "Nèfle", "ename": "Medlar"},
    {"name": "Cochon", "ename": "Pig"},
    {"name": "Mâche", "ename": "Corn salad"},
    {"name": "Chou-fleur", "ename": "Cauliflower"},
    {"name": "Miel", "ename": "Honey"},
    {"name": "Genièvre", "ename": "Juniper"},
    {"name": "Pioche", "ename": "Pickaxe"},
    {"name": "Cire", "ename": "Wax"},
    {"name": "Raifort", "ename": "Horseradish"},
    {"name": "Cèdre", "ename": "Cedar"},
    {"name": "Sapin", "ename": "Fir"},
    {"name": "Chevreuil", "ename": "Roe deer"},
    {"name": "Ajonc", "ename": "Gorse"},
    {"name": "Cyprès", "ename": "Cypress Tree"},
    {"name": "Lierre", "ename": "Ivy"},
    {"name": "Sabine", "ename": "Savin Juniper"},
    {"name": "Hoyau", "ename": "Grub-hoe"},
    {"name": "Érable à sucre", "ename": "Sugar Maple"},
    {"name": "Bruyère", "ename": "Heather"},
    {"name": "Roseau", "ename": "Reed"},
    {"name": "Oseille", "ename": "Sorrel"},
    {"name": "Grillon", "ename": "Cricket"},
    {"name": "Pignon", "ename": "Pine Nut"},
    {"name": "Liège", "ename": "Cork"},
    {"name": "Truffle", "ename": "Truffle"},
    {"name": "Olive", "ename": "Olive"},
    {"name": "Pelle", "ename": "Shovel"}
  ],
  [
    {"name": "Tourbe", "ename": "Peat"},
    {"name": "Houille", "ename": "Coal"},
    {"name": "Bitume", "ename": "Bitumen"},
    {"name": "Soufre", "ename": "Sulphur"},
    {"name": "Chien", "ename": "Dog"},
    {"name": "Lave", "ename": "Lava"},
    {"name": "Terre végétale", "ename": "Topsoil"},
    {"name": "Fumier", "ename": "Manure"},
    {"name": "Salpêtre", "ename": "Saltpeter"},
    {"name": "Fléau", "ename": "Flail"},
    {"name": "Granit", "ename": "Granite"},
    {"name": "Argile", "ename": "Clay"},
    {"name": "Ardoise", "ename": "Slate"},
    {"name": "Grès", "ename": "Sandstone"},
    {"name": "Lapin", "ename": "Rabbit"},
    {"name": "Silex", "ename": "Flint"},
    {"name": "Marne", "ename": "Marl"},
    {"name": "Pierre à chaux", "ename": "Limestone"},
    {"name": "Marbre", "ename": "Marble"},
    {"name": "Van", "ename": "Minnowing basket"},
    {"name": "Pierre à plâtre", "ename": "Gypsum"},
    {"name": "Sel", "ename": "Salt"},
    {"name": "Fer", "ename": "Iron"},
    {"name": "Cuivre", "ename": "Copper"},
    {"name": "Chat", "ename": "Cat"},
    {"name": "Étain", "ename": "Tin"},
    {"name": "Plomb", "ename": "Lead"},
    {"name": "Zinc", "ename": "Zinc"},
    {"name": "Mercure", "ename": "Mercury"},
    {"name": "Crible", "ename": "Sieve"}
  ],
  [
    {"name": "Lauréole", "ename": "Spurge-laurel"},
    {"name": "Mousse", "ename": "Moss"},
    {"name": "Fragon", "ename": "Butcher's Broom"},
    {"name": "Perce-neige", "ename": "Snowdrop"},
    {"name": "Taureau", "ename": "Bull"},
    {"name": "Laurier-thym", "ename": "Laurustinus"},
    {"name": "Amadouvier", "ename": "Tinder polypore"},
    {"name": "Mézéréon", "ename": "Daphne mezereum"},
    {"name": "Peuplier", "ename": "Poplar"},
    {"name": "Coignée", "ename": "Axe"},
    {"name": "Ellébore", "ename": "Hellebore"},
    {"name": "Brocoli", "ename": "Broccoli"},
    {"name": "Laurier", "ename": "Bay laurel"},
    {"name": "Avelinier", "ename": "Filbert"},
    {"name": "Vache", "ename": "Cow"},
    {"name": "Buis", "ename": "Box Tree"},
    {"name": "Lichen", "ename": "Lichen"},
    {"name": "If", "ename": "Yew"},
    {"name": "Pulmonaire", "ename": "Lungwort"},
    {"name": "Serpette", "ename": "Billhook"},
    {"name": "Thlaspi", "ename": "Pennycress"},
    {"name": "Thimelé", "ename": "Rose Daphne"},
    {"name": "Chiendent", "ename": "Couch grass"},
    {"name": "Trainasse", "ename": "Common Knotgrass"},
    {"name": "Lièvre", "ename": "Hare"},
    {"name": "Guède", "ename": "Woad"},
    {"name": "Noisetier", "ename": "Hazel"},
    {"name": "Cyclamen", "ename": "Cyclamen"},
    {"name": "Chélidoine", "ename": "Celandine"},
    {"name": "Traîneau", "ename": "Sleigh"}
  ],
  [
    {"name": "Tussilage", "ename": "Coltsfoot"},
    {"name": "Cornouiller", "ename": "Dogwood"},
    {"name": "Violier", "ename": "Matthiola"},
    {"name": "Troène", "ename": "Privet"},
    {"name": "Bouc", "ename": "Billygoat"},
    {"name": "Asaret", "ename": "Wild Ginger"},
    {"name": "Alaterne", "ename": "Italian Buckthorn"},
    {"name": "Violette", "ename": "Violet"},
    {"name": "Marceau", "ename": "Goat Willow"},
    {"name": "Bêche", "ename": "Spade"},
    {"name": "Narcisse", "ename": "Narcissus"},
    {"name": "Orme", "ename": "Elm"},
    {"name": "Fumeterre", "ename": "Common fumitory"},
    {"name": "Vélar", "ename": "Hedge mustard"},
    {"name": "Chèvre", "ename": "Goat"},
    {"name": "Épinard", "ename": "Spinach"},
    {"name": "Doronic", "ename": "Doronicum"},
    {"name": "Mouron", "ename": "Pimpernel"},
    {"name": "Cerfeuil", "ename": "Chervil"},
    {"name": "Cordeau", "ename": "Twine"},
    {"name": "Mandragore", "ename": "Mandrake"},
    {"name": "Persil", "ename": "Parsley"},
    {"name": "Cochléaria", "ename": "Scurvy-grass"},
    {"name": "Pâquerette", "ename": "Daisy"},
    {"name": "Thon", "ename": "Tuna"},
    {"name": "Pissenlit", "ename": "Dandelion"},
    {"name": "Sylvie", "ename": "Wood Anemone"},
    {"name": "Capillaire", "ename": "Maidenhair fern"},
    {"name": "Frêne", "ename": "Ash tree"},
    {"name": "Plantoir", "ename": "Dibber"}
  ],
  [
    {"name": "Primevère", "ename": "Primrose"},
    {"name": "Platane", "ename": "Plane Tree"},
    {"name": "Asperge", "ename": "Asparagus"},
    {"name": "Tulipe", "ename": "Tulip"},
    {"name": "Poule", "ename": "Hen"},
    {"name": "Bette", "ename": "Chard"},
    {"name": "Bouleau", "ename": "Birch"},
    {"name": "Jonquille", "ename": "Daffodil"},
    {"name": "Aulne", "ename": "Alder"},
    {"name": "Couvoir", "ename": "Hatchery"},
    {"name": "Pervenche", "ename": "Periwinkle"},
    {"name": "Charme", "ename": "Hornbeam"},
    {"name": "Morille", "ename": "Morel"},
    {"name": "Hêtre", "ename": "Beech"},
    {"name": "Abeille", "ename": "Bee"},
    {"name": "Laitue", "ename": "Lettuce"},
    {"name": "Mélèze", "ename": "Larch"},
    {"name": "Ciguë", "ename": "Hemlock"},
    {"name": "Radis", "ename": "Radish"},
    {"name": "Ruche", "ename": "Hive"},
    {"name": "Gainier", "ename": "Judas Tree"},
    {"name": "Romaine", "ename": "Romaine"},
    {"name": "Marronnier", "ename": "Horse Chestnut"},
    {"name": "Roquette", "ename": "Arugula"},
    {"name": "Pigeon", "ename": "Pigeon"},
    {"name": "Lilas", "ename": "Lilac"},
    {"name": "Anémone", "ename": "Anemone"},
    {"name": "Pensée", "ename": "Pansy"},
    {"name": "Myrtille", "ename": "Bilberry"},
    {"name": "Greffoir", "ename": "Knife"}
  ],
  [
    {"name": "Rose", "ename": "Rose"},
    {"name": "Chêne", "ename": "Oak"},
    {"name": "Fougère", "ename": "Fern"},
    {"name": "Aubépine", "ename": "Hawthorn"},
    {"name": "Rossignol", "ename": "Nightingale"},
    {"name": "Ancolie", "ename": "Columbine"},
    {"name": "Muguet", "ename": "Lily of the valley"},
    {"name": "Champignon", "ename": "Mushroom"},
    {"name": "Hyacinthe", "ename": "Hyacinth"},
    {"name": "Râteau", "ename": "Rake"},
    {"name": "Rhubarbe", "ename": "Rhubarb"},
    {"name": "Sainfoin", "ename": "Sainfoin"},
    {"name": "Bâton d'or", "ename": "Wallflower"},
    {"name": "Chamerisier", "ename": "Fan Palm"},
    {"name": "Ver à soie", "ename": "Silkworm"},
    {"name": "Consoude", "ename": "Comfrey"},
    {"name": "Pimprenelle", "ename": "Salad burnet"},
    {"name": "Corbeille d'or", "ename": "Basket of Gold"},
    {"name": "Arroche", "ename": "Orache"},
    {"name": "Sarcloir", "ename": "Garden hoe"},
    {"name": "Statice", "ename": "Thrift"},
    {"name": "Fritillaire", "ename": "Fritillary"},
    {"name": "Bourrache", "ename": "Borage"},
    {"name": "Valériane", "ename": "Valerian"},
    {"name": "Carpe", "ename": "Carp"},
    {"name": "Fusain", "ename": "Spindle"},
    {"name": "Civette", "ename": "Chive"},
    {"name": "Buglosse", "ename": "Bugloss"},
    {"name": "Sénevé", "ename": "Wild mustard"},
    {"name": "Houlette", "ename": "Shepherd's crook"}
  ],
  [
    {"name": "Luzerne", "ename": "Alfalfa"},
    {"name": "Hémérocalle", "ename": "Daylily"},
    {"name": "Trèfle", "ename": "Clover"},
    {"name": "Angélique", "ename": "Angelica"},
    {"name": "Canard", "ename": "Duck"},
    {"name": "Mélisse", "ename": "Lemon balm"},
    {"name": "Fromental", "ename": "Oat grass"},
    {"name": "Martagon", "ename": "Martagon lily"},
    {"name": "Serpolet", "ename": "Wild Thyme"},
    {"name": "Faux", "ename": "Scythe"},
    {"name": "Fraise", "ename": "Strawberry"},
    {"name": "Bétoine", "ename": "Woundwort"},
    {"name": "Pois", "ename": "Pea"},
    {"name": "Acacia", "ename": "Acacia"},
    {"name": "Caille", "ename": "Quail"},
    {"name": "Œillet", "ename": "Carnation"},
    {"name": "Sureau", "ename": "Elderberry"},
    {"name": "Pavot", "ename": "Poppy"},
    {"name": "Tilleul", "ename": "Linden"},
    {"name": "Fourche", "ename": "Pitchfork"},
    {"name": "Barbeau", "ename": "Cornflower"},
    {"name": "Camomille", "ename": "Camomile"},
    {"name": "Chèvrefeuille", "ename": "Honeysuckle"},
    {"name": "Caille-lait", "ename": "Bedstraw"},
    {"name": "Tanche", "ename": "Tench"},
    {"name": "Jasmin", "ename": "Jasmine"},
    {"name": "Verveine", "ename": "Verbena"},
    {"name": "Thym", "ename": "Thyme"},
    {"name": "Pivoine", "ename": "Peony"},
    {"name": "Chariot", "ename": "Hand Cart"}
  ],
  [
    {"name": "Seigle", "ename": "Rye"},
    {"name": "Avoine", "ename": "Oat"},
    {"name": "Oignon", "ename": "Onion"},
    {"name": "Véronique", "ename": "Speedwell"},
    {"name": "Mulet", "ename": "Mule"},
    {"name": "Romarin", "ename": "Rosemary"},
    {"name": "Concombre", "ename": "Cucumber"},
    {"name": "Échalote", "ename": "Shallot"},
    {"name": "Absinthe", "ename": "Wormwood"},
    {"name": "Faucille", "ename": "Sickle"},
    {"name": "Coriandre", "ename": "Coriander"},
    {"name": "Artichaut", "ename": "Artichoke"},
    {"name": "Girofle", "ename": "Clove"},
    {"name": "Lavande", "ename": "Lavender"},
    {"name": "Chamois", "ename": "Chamois"},
    {"name": "Tabac", "ename": "Tobacco"},
    {"name": "Groseille", "ename": "Redcurrant"},
    {"name": "Gesse", "ename": "Hairy Vetchling"},
    {"name": "Cerise", "ename": "Cherry"},
    {"name": "Parc", "ename": "Park"},
    {"name": "Menthe", "ename": "Mint"},
    {"name": "Cumin", "ename": "Cumin"},
    {"name": "Haricot", "ename": "Bean"},
    {"name": "Orcanète", "ename": "Alkanet"},
    {"name": "Pintade", "ename": "Guinea fowl"},
    {"name": "Sauge", "ename": "Sage"},
    {"name": "Ail", "ename": "Garlic"},
    {"name": "Vesce", "ename": "Tare"},
    {"name": "Blé", "ename": "Wheat"},
    {"name": "Chalémie", "ename": "Shawm"}
  ],
  [
    {"name": "Épeautre", "ename": "Spelt"},
    {"name": "Bouillon blanc", "ename": "Mullein"},
    {"name": "Melon", "ename": "Melon"},
    {"name": "Ivraie", "ename": "Ryegrass"},
    {"name": "Bélier", "ename": "Ram"},
    {"name": "Prêle", "ename": "Horsetail"},
    {"name": "Armoise", "ename": "Mugwort"},
    {"name": "Carthame", "ename": "Safflower"},
    {"name": "Mûre", "ename": "Blackberry"},
    {"name": "Arrosoir", "ename": "Watering can"},
    {"name": "Panic", "ename": "Switchgrass"},
    {"name": "Salicorne", "ename": "Glasswort"},
    {"name": "Abricot", "ename": "Apricot"},
    {"name": "Basilic", "ename": "Basil"},
    {"name": "Brebis", "ename": "Ewe"},
    {"name": "Guimauve", "ename": "Marshmallow"},
    {"name": "Lin", "ename": "Flax"},
    {"name": "Amande", "ename": "Almond"},
    {"name": "Gentiane", "ename": "Gentian"},
    {"name": "Écluse", "ename": "Lock"},
    {"name": "Carline", "ename": "Carline thistle"},
    {"name": "Câprier", "ename": "Caper"},
    {"name": "Lentille", "ename": "Lentil"},
    {"name": "Aunée", "ename": "Inula"},
    {"name": "Loutre", "ename": "Otter"},
    {"name": "Myrte", "ename": "Myrtle"},
    {"name": "Colza", "ename": "Rapeseed"},
    {"name": "Lupin", "ename": "Lupin"},
    {"name": "Coton", "ename": "Cotton"},
    {"name": "Moulin", "ename": "Mill"}
  ],
  [
    {"name": "Prune", "ename": "Plum"},
    {"name": "Millet", "ename": "Millet"},
    {"name": "Lycoperdon", "ename": "Puffball"},
    {"name": "Escourgeon", "ename": "Six-row Barley"},
    {"name": "Saumon", "ename": "Salmon"},
    {"name": "Tubéreuse", "ename": "Tuberose"},
    {"name": "Sucrion", "ename": "Winter Barley"},
    {"name": "Apocyn", "ename": "Apocynum"},
    {"name": "Réglisse", "ename": "Liquorice"},
    {"name": "Échelle", "ename": "Ladder"},
    {"name": "Pastèque", "ename": "Watermelon"},
    {"name": "Fenouil", "ename": "Fennel"},
    {"name": "Épine vinette", "ename": "Barberry"},
    {"name": "Noix", "ename": "Walnut"},
    {"name": "Truit", "ename": "Trout"},
    {"name": "Citron", "ename": "Lemon"},
    {"name": "Cardère", "ename": "Teasel"},
    {"name": "Nerprun", "ename": "Buckthorn"},
    {"name": "Tagette", "ename": "Marigold"},
    {"name": "Hotte", "ename": "Harvesting basket"},
    {"name": "Églantier", "ename": "Wild Rose"},
    {"name": "Noisette", "ename": "Hazelnut"},
    {"name": "Houblon", "ename": "Hops"},
    {"name": "Sorgho", "ename": "Sorghum"},
    {"name": "Écrevisse", "ename": "Crayfish"},
    {"name": "Bigarade", "ename": "Bitter orange"},
    {"name": "Verge d'or", "ename": "Goldenrod"},
    {"name": "Maïs", "ename": "Maize"},
    {"name": "Marron", "ename": "Sweet Chestnut"},
    {"name": "Panier", "ename": "Pack Basket"}
  ]
];

rdate.startDate = new Date("1792-09-22");

rdate.toRoman = function(decimal){
  var place,i,s = "";
  if(decimal<0){
    decimal*=-1;
    s+="-";
  }
  for(place in rdate.roman){
    while(decimal>=rdate.roman[place]){
      s+=place;
      decimal-=rdate.roman[place];
    }
  }
  return s;
};

rdate.isLeapYear = function(year){
  if(year%4!=0){
    return false;
  }
  else if(year%100!=0){
    return true;
  }
  else if(year%400!=0){
    return false;
  }
  else{
    return true;
  }
}

rdate.getYear = function(date){
  var year = date.getFullYear();
  var ryear = year-rdate.startDate.getFullYear();

  if(date.getMonth() > 8){
    ryear++;
  }

  else if(date.getMonth()==8){
    var first = rdate.getFirstDay(ryear+1);
    if(date.getDate()>=first.getDate()){
      ryear++;
    }
  }

  if(ryear<=0){
    ryear--;
  }

  return ryear;
};

rdate.getMonth = function(date){
  var daysElapsed = d3.timeDay.count(rdate.getFirstDay(rdate.getYear(date)),date);
  var month = Math.floor(daysElapsed/30) + 1;
  return month<=12 ? month : 0;
};

rdate.getMonthName = function(date,mode){
  var monthString = "";
  switch(mode){

    case "short":
      monthString = rdate.months[rdate.getMonth(date)].sname;
    break;

    case "english":
      monthString = rdate.months[rdate.getMonth(date)].ename;
    break;

    case "standard":
    default:
      monthString = rdate.months[rdate.getMonth(date)].name;
    break;
  }
  return monthString;
}

rdate.getFirstDay = function(year){
    var firstDay = 22;
    if(year<0){
      year++;
    }
  // Use the equinox method for extant years of the calendar,
  // Romme method to extrapolate to future years.
    if(year>=1 && year<=14){
      switch(year){
        case 4:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
        case 14:
          firstDay = 23;
        break;

        case 12:
          firstDay = 24;
        break;

        default:
        break;
      }

    }
    else if(rdate.isLeapYear(year)){
      firstDay = 23;
    }
    return new Date((year+rdate.startDate.getFullYear()-1)+"-09-"+(firstDay+1));
}

rdate.getDay = function(date){
  var daysElapsed = d3.timeDay.count(rdate.getFirstDay(rdate.getYear(date)),date);
  return (daysElapsed+1)%30;
};

rdate.getDayName = function(date,mode){
  var day = rdate.getDay(date);
  return rdate.days[(day-1)%10].name;
};

rdate.getCelebrant = function(date,mode){
  var month = rdate.getMonth(date);
  var day = rdate.getDay(date);
  var celebrantString = "";
  switch(mode){

    case "english":
      celebrantString = rdate.dayNames[month][day-1].ename;
    break;

    default:
    case "standard":
      celebrantString = rdate.dayNames[month][day-1].name;
    break;

  }
  return celebrantString;
};

rdate.getString = function(date,mode){
  var dateString = "";
  switch(mode){
    case "short":
      dateString = rdate.getDay(date) + " " + rdate.getMonthName(date,"short") +
      ", " + rdate.toRoman(rdate.getYear(date));
    break;

    case "verbose":
      if(rdate.getMonth(date)==0){
        dateString = rdate.getCelebrant(date) + ", année de la République " +
        rdate.toRoman(rdate.getYear(date));
      }
      else{
        dateString = rdate.getDayName(date) + " " + rdate.getDay(date)
        + " " + rdate.getMonthName(date) + ", année de la République "+
        rdate.toRoman(rdate.getYear(date)) + ", le jour du " +
        rdate.getCelebrant(date);
      }
    break;

    case "english":
      if(rdate.getMonth(date)==0){
        dateString = rdate.getCelebrant(date,"english") + ", year of the Republic " +
        rdate.toRoman(rdate.getYear(date));
      }
      else{
        dateString = rdate.getDayName(date) + " " + rdate.getDay(date)
        + " " + rdate.getMonthName(date) + ", year of the Republic "+
        rdate.toRoman(rdate.getYear(date)) + ", the day of the " +
        rdate.getCelebrant(date,"english");
      }
    break;

    case "numeric":
      if(rdate.getMonth(date)==0){
        dateString = rdate.getDay(date) + "/13/" +
        rdate.getYear(date);
      }
      else{
        dateString = rdate.getDay(date) + "/" + rdate.getMonth(date) + "/" +
        rdate.getYear(date);
      }
    break;

    default:
    case "standard":
      dateString = rdate.getDay(date) + " " + rdate.getMonthName(date) + ", an " +
      rdate.toRoman(rdate.getYear(date));
    break;
  }

  return dateString;
};

rdate.getArray = function(date,mode){

}

Date.prototype.toRevolutionaryString = function(mode){
  return rdate.getString(this,mode);
}
