const foodDrink = [
  {
    q: "Which Italian blue cheese is made from unskimmed cow's milk and named after a town near Milan?",
    options: ['Roquefort', 'Gorgonzola', 'Stilton', 'Feta'],
    answer: 1,
  },
  {
    q: 'What type of pastry is traditional French profiteroles made from?',
    options: [
      'Puff Pastry',
      'Choux Pastry',
      'Filo Pastry',
      'Shortcrust Pastry',
    ],
    answer: 1,
  },
  {
    q: 'Which spirit forms the primary base of a classic Mojito cocktail?',
    options: ['Vodka', 'White Rum', 'Gin', 'Tequila'],
    answer: 1,
  },
  {
    q: 'Which spice, harvested by hand from crocus flowers, is the most expensive by weight?',
    options: ['Saffron', 'Vanilla', 'Cardamom', 'Nutmeg'],
    answer: 0,
  },
  {
    q: 'What main ingredient is processed to make traditional Japanese tofu?',
    options: ['Rice flour', 'Soybeans', 'Wheat gluten', 'Tapioca'],
    answer: 1,
  },
  {
    q: "In French culinary terms, what does 'En Papillote' mean?",
    options: [
      'Cooked in foil or parchment paper',
      'Pan-fried in butter',
      'Deep-fried in oil',
      'Stewed slowly in wine',
    ],
    answer: 0,
  },
  {
    q: 'Which grape variety is primarily used to produce red Burgundy wines?',
    options: ['Cabernet Sauvignon', 'Pinot Noir', 'Merlot', 'Syrah'],
    answer: 1,
  },
  {
    q: "Which country is the world's largest producer of olive oil?",
    options: ['Greece', 'Italy', 'Spain', 'Portugal'],
    answer: 2,
  },
  {
    q: 'What type of grain is traditional Arborio rice used to prepare?',
    options: ['Paella', 'Risotto', 'Sushi', 'Biryani'],
    answer: 1,
  },
  {
    q: "What gives the cocktail 'Negroni' its vibrant red color and distinctive bitter note?",
    options: ['Aperol', 'Campari', 'Grenadine', 'Angostura Bitters'],
    answer: 1,
  },
  {
    q: 'Which nut is used as the base ingredient in authentic traditional marzipan?',
    options: ['Hazelnut', 'Almond', 'Pistachio', 'Walnut'],
    answer: 1,
  },
  {
    q: 'What dairy product is clarified butter known as in Indian cookery?',
    options: ['Paneer', 'Ghee', 'Lassi', 'Kefir'],
    answer: 1,
  },
  {
    q: 'Which cut of beef is used to make a traditional Beef Wellington?',
    options: ['Ribeye', 'Sirloin', 'Beef Fillet (Tenderloin)', 'Rump'],
    answer: 2,
  },
  {
    q: 'What is the primary flavor profile of the green liqueur Absinthe?',
    options: ['Anise / Licorice', 'Peppermint', 'Orange peel', 'Almond'],
    answer: 0,
  },
  {
    q: 'Which European country created the pastry known as a Croissant?',
    options: ['France', 'Austria', 'Belgium', 'Switzerland'],
    answer: 1,
  },
  {
    q: 'What essential ingredient gives beer its distinct bitterness and aroma?',
    options: ['Barley', 'Hops', 'Yeast', 'Malt'],
    answer: 1,
  },
  {
    q: 'What is the key ingredient in the Greek dish Tzatziki alongside yogurt and garlic?',
    options: ['Eggplant', 'Cucumber', 'Courgette', 'Tomato'],
    answer: 1,
  },
  {
    q: 'Which classic French mother sauce is made with milk, butter, and flour (a roux)?',
    options: ['Hollandaise', 'Béchamel', 'Velouté', 'Espagnole'],
    answer: 1,
  },
  {
    q: 'What type of alcoholic drink is traditional Japanese Sake made from?',
    options: [
      'Fermented Rice',
      'Distilled Plum',
      'Fermented Wheat',
      'Distilled Potato',
    ],
    answer: 0,
  },
  {
    q: 'Which Spanish region is world-famous for its fortified wine Sherry?',
    options: ['Catalonia', 'Andalusia (Jerez)', 'La Rioja', 'Galicia'],
    answer: 1,
  },
  {
    q: 'What green herb is the key ingredient in traditional Ligurian pesto?',
    options: ['Parsley', 'Basil', 'Oregano', 'Coriander'],
    answer: 1,
  },
  {
    q: 'Which naturally occurring fungus is used to make bread dough rise?',
    options: ['Mould', 'Yeast', 'Spore', 'Truffle'],
    answer: 1,
  },
  {
    q: 'What gives Earl Grey tea its distinct citrus aroma and flavor?',
    options: [
      'Lemongrass oil',
      'Bergamot oil',
      'Kaffir lime zest',
      'Sweet orange extract',
    ],
    answer: 1,
  },
  {
    q: "Which Italian dessert translates in English to 'Pick me up'?",
    options: ['Panna Cotta', 'Tiramisu', 'Zabaglione', 'Cannoli'],
    answer: 1,
  },
  {
    q: 'What fruit is used to make the German brandy known as Kirschwasser (Kirsch)?',
    options: ['Plum', 'Cherry', 'Pear', 'Apple'],
    answer: 1,
  },
  {
    q: 'Which bean species accounts for the majority of global high-quality coffee production?',
    options: ['Robusta', 'Arabica', 'Liberica', 'Excelsa'],
    answer: 1,
  },
  {
    q: 'What is the key ingredient of the Middle Eastern dip Hummus?',
    options: ['Chickpeas', 'Lentils', 'Fava Beans', 'Butter Beans'],
    answer: 0,
  },
  {
    q: 'Which region in France is the only place authentic Champagne can be produced?',
    options: ['Bordeaux', 'Champagne', 'Provence', 'Alsace'],
    answer: 1,
  },
  {
    q: 'What style of pasta is shaped like tiny bowties or butterflies?',
    options: ['Penne', 'Farfalle', 'Fusilli', 'Orecchiette'],
    answer: 1,
  },
  {
    q: 'What Mexican spirit is distilled specifically from the blue agave plant?',
    options: ['Mezcal', 'Tequila', 'Sotol', 'Raicilla'],
    answer: 1,
  },
  {
    q: 'Which spicy cabbage or radish dish is a national staple of South Korea?',
    options: ['Sauerkraut', 'Kimchi', 'Achar', 'Tsukemono'],
    answer: 1,
  },
  {
    q: 'Which animal milk is traditionally used to make authentic Greek Feta cheese?',
    options: [
      "Cow's milk",
      'Sheep and Goat milk',
      'Camel milk',
      'Water Buffalo milk',
    ],
    answer: 1,
  },
  {
    q: 'What citrus fruit is traditionally used in a classic Whiskey Sour cocktail?',
    options: ['Lime juice', 'Lemon juice', 'Grapefruit juice', 'Orange juice'],
    answer: 1,
  },
  {
    q: 'What type of food is a Shiitake?',
    options: ['Seaweed', 'Mushroom', 'Root vegetable', 'Fish'],
    answer: 1,
  },
  {
    q: 'Which European country is famous for chocolate brands like Lindt and Toblerone?',
    options: ['Belgium', 'Switzerland', 'Austria', 'Germany'],
    answer: 1,
  },
  {
    q: 'What kind of sausage is traditionally served in a German Currywurst?',
    options: ['Bratwurst', 'Chorizo', 'Salami', 'Merguez'],
    answer: 0,
  },
  {
    q: 'Which classic cocktail consists of Gin, Sweet Vermouth, and Campari?',
    options: ['Manhattan', 'Negroni', 'Martini', 'Old Fashioned'],
    answer: 1,
  },
  {
    q: 'What chemical compound causes hot chili peppers to feel spicy?',
    options: ['Piperine', 'Capsaicin', 'Curcumin', 'Allicin'],
    answer: 1,
  },
  {
    q: 'What type of meat is traditionally used in an authentic Hungarian Goulash?',
    options: ['Pork', 'Beef', 'Chicken', 'Lamb'],
    answer: 1,
  },
  {
    q: 'What is the base of the South American cocktail Pisco Sour?',
    options: ['Grape Brandy', 'Sugar Cane Rum', 'Agave Spirit', 'Corn Whiskey'],
    answer: 0,
  },
  {
    q: 'Which Spanish dish is made of cold, blended vegetables like tomatoes, peppers, and cucumbers?',
    options: ['Paella', 'Gazpacho', 'Fabada', 'Salmorejo'],
    answer: 1,
  },
  {
    q: 'What type of flour is used to produce traditional Italian pasta?',
    options: [
      'Self-raising flour',
      'Semolina / Durum Wheat flour',
      'Almond flour',
      'Buckwheat flour',
    ],
    answer: 1,
  },
  {
    q: 'Which botanical flavor dominates London Dry Gin?',
    options: ['Coriander', 'Juniper berries', 'Angelica root', 'Citrus peel'],
    answer: 1,
  },
  {
    q: 'What is the primary component of the French dish Ratatouille?',
    options: [
      'Beef stew',
      'Stewed summer vegetables',
      'Seafood soup',
      'Potato cake',
    ],
    answer: 1,
  },
  {
    q: 'Which coffee drink consists of espresso topped with equal parts steamed milk and milk foam?',
    options: ['Caffè Latte', 'Cappuccino', 'Flat White', 'Macchiato'],
    answer: 1,
  },
  {
    q: 'What sea creature provides authentic black squid ink used in pasta and risotto?',
    options: ['Cuttlefish / Squid', 'Octopus', 'Sea Urchin', 'Mussel'],
    answer: 0,
  },
  {
    q: 'What type of tea is oxidized completely during processing, turning the leaves dark?',
    options: ['Green Tea', 'Black Tea', 'White Tea', 'Oolong Tea'],
    answer: 1,
  },
  {
    q: "Which Scottish dish is made from sheep's offal cooked inside a sheep's stomach?",
    options: ['Neeps and Tatties', 'Haggis', 'Black Pudding', 'Cullen Skink'],
    answer: 1,
  },
  {
    q: 'What gives the Italian liqueur Amaretto its dominant flavor?',
    options: [
      'Hazelnut',
      'Almonds / Apricot kernels',
      'Coffee beans',
      'Lemon peel',
    ],
    answer: 1,
  },
  {
    q: 'Which vitamin is most abundant in citrus fruits like oranges and lemons?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin B12'],
    answer: 1,
  },
  {
    q: 'What key ingredient separates a Soufflé from a standard baked cake?',
    options: ['Whipped Egg Whites', 'Baking powder', 'Heavy Cream', 'Yeast'],
    answer: 0,
  },
  {
    q: 'Which Portuguese pastry is a egg custard tart dusted with cinnamon?',
    options: ['Pastel de Nata', 'Churro', 'Brioche', 'Cannoli'],
    answer: 0,
  },
  {
    q: 'What is the main spirit used in an authentic Old Fashioned cocktail?',
    options: ['Vodka', 'Bourbon / Rye Whiskey', 'Dark Rum', 'Scotch'],
    answer: 1,
  },
  {
    q: 'Which cheese is traditionally melted in a Swiss Fondue?',
    options: [
      'Cheddar & Brie',
      'Gruyère & Emmental',
      'Gouda & Edam',
      'Parmesan & Mozzarella',
    ],
    answer: 1,
  },
  {
    q: 'What fruit is dried to make raisins?',
    options: ['Plums', 'Grapes', 'Figs', 'Dates'],
    answer: 1,
  },
  {
    q: 'Which fermented milk drink originated in the Caucasus region?',
    options: ['Kefir', 'Kombucha', 'Lassi', 'Ayran'],
    answer: 0,
  },
  {
    q: 'What is the principal ingredient in guacamole?',
    options: ['Tomato', 'Avocado', 'Lime', 'Onion'],
    answer: 1,
  },
  {
    q: 'Which French region is famous for mustard production?',
    options: ['Bordeaux', 'Dijon', 'Lyon', 'Nice'],
    answer: 1,
  },
  {
    q: 'Which ingredient causes sourdough bread to ferment naturally?',
    options: [
      'Commercial dry yeast',
      'Wild yeast & lactic acid bacteria',
      'Chemical baking soda',
      'Vinegar',
    ],
    answer: 1,
  },
  {
    q: 'What type of fish is traditionally used in authentic British Fish and Chips?',
    options: ['Salmon', 'Cod or Haddock', 'Trout', 'Tuna'],
    answer: 1,
  },
  {
    q: 'Which liqueur is famously produced by Carthusian Monks in France?',
    options: ['Chartreuse', 'Benedictine', 'Cointreau', 'Galliano'],
    answer: 0,
  },
  {
    q: "What type of pasta translates to 'little worms' in Italian?",
    options: ['Spaghetti', 'Vermicelli', 'Tortellini', 'Orzo'],
    answer: 1,
  },
  {
    q: 'What is the primary flavor of the spice Star Anise?',
    options: ['Cinnamon', 'Licorice', 'Ginger', 'Clove'],
    answer: 1,
  },
  {
    q: 'Which grain is used to produce authentic Russian Vodka traditionally?',
    options: ['Corn or Barley', 'Wheat or Rye', 'Rice or Oats', 'Sorghum'],
    answer: 1,
  },
  {
    q: 'Which Austrian chocolate cake features a layer of apricot jam?',
    options: ['Black Forest Gateau', 'Sachertorte', 'Apple Strudel', 'Krapfen'],
    answer: 1,
  },
  {
    q: "Which style of wine is Champagne's Spanish equivalent?",
    options: ['Prosecco', 'Cava', 'Sekt', 'Moscato'],
    answer: 1,
  },
  {
    q: "What vegetable is known as an 'Aubergine' in Europe and 'Eggplant' in the US?",
    options: ['Courgette', 'Solanum melongena', 'Capsicum', 'Artichoke'],
    answer: 1,
  },
  {
    q: 'Which meat is used in a traditional Wiener Schnitzel?',
    options: ['Pork', 'Veal', 'Beef', 'Chicken'],
    answer: 1,
  },
  {
    q: 'What essential ingredient is needed to emulsify homemade Mayonnaise?',
    options: ['Egg Yolk', 'Milk', 'Butter', 'Cornstarch'],
    answer: 0,
  },
  {
    q: 'Which famous Italian salad consists of fresh mozzarella, tomatoes, and basil?',
    options: ['Caesar Salad', 'Caprese Salad', 'Greek Salad', 'Waldorf Salad'],
    answer: 1,
  },
  {
    q: 'What type of alcohol is used to make a Piña Colada?',
    options: ['Vodka', 'Rum', 'Tequila', 'Gin'],
    answer: 1,
  },
  {
    q: 'Which country is famous for producing Gouda and Edam cheese?',
    options: ['Denmark', 'The Netherlands', 'Switzerland', 'Belgium'],
    answer: 1,
  },
  {
    q: 'What fruit flavor characterizes the blue liqueur Blue Curaçao?',
    options: ['Blueberry', 'Bitter Orange peel', 'Plum', 'Blackcurrant'],
    answer: 1,
  },
  {
    q: 'What ingredient gives Black Pudding its dark color and flavor?',
    options: ['Squid ink', 'Animal blood', 'Dark chocolate', 'Charcoal'],
    answer: 1,
  },
  {
    q: 'What type of coffee is made by pouring hot water over espresso?',
    options: ['Cortado', 'Americano', 'Ristretto', 'Mocha'],
    answer: 1,
  },
  {
    q: 'Which Japanese beef is renowned globally for its intense intramuscular marbling?',
    options: ['Angus', 'Wagyu', 'Hereford', 'Charolais'],
    answer: 1,
  },
  {
    q: 'Which hot beverage is traditionally made from fermented tea leaves using a symbiotic culture (SCOBY)?',
    options: ['Matcha', 'Kombucha', 'Chai', 'Rooibos'],
    answer: 1,
  },
  {
    q: 'What fruit forms the basis of authentic Calvados French brandy?',
    options: ['Grape', 'Apple', 'Plum', 'Peach'],
    answer: 1,
  },
  {
    q: 'Which pastry is folded with butter repeatedly to create layered flaky textures?',
    options: [
      'Shortcrust pastry',
      'Puff pastry',
      'Filo pastry',
      'Choux pastry',
    ],
    answer: 1,
  },
  {
    q: 'Which country produces the famous cured ham known as Jamón Ibérico?',
    options: ['Italy', 'Spain', 'Portugal', 'France'],
    answer: 1,
  },
  {
    q: 'What herb is used to make traditional mint jelly, often served with roast lamb?',
    options: ['Spearmint', 'Rosemary', 'Thyme', 'Sage'],
    answer: 0,
  },
  {
    q: 'Which classic cocktail contains Espresso, Vodka, and Coffee Liqueur?',
    options: [
      'White Russian',
      'Espresso Martini',
      'Black Russian',
      'Irish Coffee',
    ],
    answer: 1,
  },
  {
    q: 'Which spice is derived from the inner bark of specific tropical trees?',
    options: ['Nutmeg', 'Cinnamon', 'Clove', 'Allspice'],
    answer: 1,
  },
  {
    q: 'What sea salt product from Brittany, France, is gathered by scraping evaporated salt pans?',
    options: [
      'Himalayan Pink Salt',
      'Fleur de Sel',
      'Maldon Salt',
      'Kala Namak',
    ],
    answer: 1,
  },
  {
    q: 'What style of cooking uses vacuum-sealed plastic pouches cooked in a temperature-controlled water bath?',
    options: ['Flambé', 'Sous-vide', 'Braise', 'Poach'],
    answer: 1,
  },
  {
    q: 'Which spirit is used as the base for a French Kir Royale cocktail?',
    options: [
      'Cognac',
      'Cassis (Blackcurrant liqueur) & Champagne',
      'Grand Marnier',
      'Calvados',
    ],
    answer: 1,
  },
  {
    q: 'What type of food product is Halloumi?',
    options: ['Semi-hard cheese', 'Cured meat', 'Flatbread', 'Lentil soup'],
    answer: 0,
  },
  {
    q: 'Which region in Italy is Parmigiano-Reggiano exclusively produced in?',
    options: ['Tuscany', 'Emilia-Romagna', 'Sicily', 'Lombardy'],
    answer: 1,
  },
  {
    q: "Which Mexican avocado dip translates literally to 'avocado sauce'?",
    options: ['Salsa Verde', 'Guacamole', 'Pico de Gallo', 'Mole'],
    answer: 1,
  },
  {
    q: 'What beverage is produced by fermenting honey with water?',
    options: ['Cider', 'Mead', 'Perry', 'Sherry'],
    answer: 1,
  },
  {
    q: "What food item is known as a 'Courgette' in the UK and France?",
    options: ['Eggplant', 'Zucchini', 'Bell Pepper', 'Cucumber'],
    answer: 1,
  },
  {
    q: 'Which French brandy must be distilled twice in copper pot stills in a specific region of Charente?',
    options: ['Armagnac', 'Cognac', 'Grappa', 'Metaxa'],
    answer: 1,
  },
  {
    q: 'Which herb is essential in a classical French Bouquet Garni alongside parsley and thyme?',
    options: ['Bay leaf', 'Rosemary', 'Tarragon', 'Chives'],
    answer: 0,
  },
  {
    q: 'What is the primary ingredient of the Scottish soup Cullen Skink?',
    options: ['Beef', 'Smoked Haddock', 'Lamb', 'Chicken'],
    answer: 1,
  },
  {
    q: 'What style of beer is brewed using warm-fermenting yeast at higher temperatures?',
    options: ['Lager', 'Ale', 'Pilsner', 'Bock'],
    answer: 1,
  },
  {
    q: 'Which Spanish rice dish originated around the freshwater lagoon of Valencia?',
    options: ['Risotto', 'Paella', 'Jambalaya', 'Biryani'],
    answer: 1,
  },
  {
    q: 'What type of nut is inside a Ferrero Rocher chocolate at its core?',
    options: ['Almond', 'Hazelnut', 'Pistachio', 'Cashew'],
    answer: 1,
  },
  {
    q: "Which beverage is known as the 'National Drink of Ireland' alongside Stout?",
    options: ['Irish Whiskey', 'Gin', 'Cider', 'Mead'],
    answer: 0,
  },
  {
    q: 'What food item is traditionally eaten on Shrove Tuesday (Pancake Day) in Europe?',
    options: ['Crepes / Pancakes', 'Hot Cross Buns', 'Waffles', 'Donuts'],
    answer: 0,
  },
  {
    q: 'What is the Italian word for fresh cream dessert set with gelatin?',
    options: ['Gelato', 'Panna Cotta', 'Granita', 'Semifreddo'],
    answer: 1,
  },
];
