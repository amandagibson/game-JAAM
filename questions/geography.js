const geography = [
  {
    q: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: 2,
  },
  {
    q: "Which river is the longest in Europe?",
    options: ["Danube", "Volga", "Rhine", "Elbe"],
    answer: 1,
  },
  {
    q: "What is the smallest independent country in the world by land area?",
    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    answer: 2,
  },
  {
    q: "Mount Kilimanjaro is the highest peak on which continent?",
    options: ["Asia", "South America", "Africa", "North America"],
    answer: 2,
  },
  {
    q: "Which ocean is the second largest in the world by surface area?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
      "Southern Ocean",
    ],
    answer: 1,
  },
  {
    q: "Which mountain range naturally separates Europe from Asia?",
    options: [
      "The Alps",
      "The Pyrenees",
      "The Ural Mountains",
      "The Carpathians",
    ],
    answer: 2,
  },
  {
    q: "What is the capital city of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: 2,
  },
  {
    q: "Which European country is known as the 'Land of Fire and Ice'?",
    options: ["Norway", "Iceland", "Finland", "Greenland"],
    answer: 1,
  },
  {
    q: "In which country can you find the ancient city of Petra?",
    options: ["Egypt", "Jordan", "Lebanon", "Syria"],
    answer: 1,
  },
  {
    q: "What is the capital city of Switzerland?",
    options: ["Zurich", "Geneva", "Bern", "Basel"],
    answer: 2,
  },
  {
    q: "Which sea lies between Europe and Africa?",
    options: ["Black Sea", "Red Sea", "Mediterranean Sea", "Caspian Sea"],
    answer: 2,
  },
  {
    q: "What is the largest island in the world that is not a continent?",
    options: ["Madagascar", "Greenland", "Borneo", "New Guinea"],
    answer: 1,
  },
  {
    q: "Which river flows through the city of Paris?",
    options: ["Loire", "Seine", "Rhône", "Garonne"],
    answer: 1,
  },
  {
    q: "Which African country has the largest population?",
    options: ["Egypt", "Ethiopia", "Nigeria", "South Africa"],
    answer: 2,
  },
  {
    q: "What is the capital city of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    answer: 2,
  },
  {
    q: "Lake Baikal, the deepest freshwater lake in the world, is located in which country?",
    options: ["Canada", "Russia", "United States", "Mongolia"],
    answer: 1,
  },
  {
    q: "Which strait separates Europe from Africa at its narrowest point?",
    options: [
      "Strait of Hormuz",
      "Strait of Gibraltar",
      "Bosphorus Strait",
      "Bering Strait",
    ],
    answer: 1,
  },
  {
    q: "What is the capital city of Portugal?",
    options: ["Porto", "Lisbon", "Faro", "Coimbra"],
    answer: 1,
  },
  {
    q: "Which mountain range spans across France, Switzerland, Italy, and Austria?",
    options: ["The Pyrenees", "The Alps", "The Apennines", "The Tatras"],
    answer: 1,
  },
  {
    q: "Which country has the longest coastline in the world?",
    options: ["Russia", "Australia", "Canada", "Norway"],
    answer: 2,
  },
  {
    q: "What is the capital city of New Zealand?",
    options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    answer: 1,
  },
  {
    q: "The Atacama Desert, one of the driest places on Earth, is primarily located in which country?",
    options: ["Peru", "Chile", "Argentina", "Bolivia"],
    answer: 1,
  },
  {
    q: "Which river passes through ten European countries, including Vienna and Budapest?",
    options: ["Rhine", "Danube", "Dnieper", "Main"],
    answer: 1,
  },
  {
    q: "What is the capital city of Poland?",
    options: ["Kraków", "Gdańsk", "Warsaw", "Wrocław"],
    answer: 2,
  },
  {
    q: "Which country is shaped like a boot in Southern Europe?",
    options: ["Greece", "Spain", "Italy", "Croatia"],
    answer: 2,
  },
  {
    q: "In which country is the world's highest uninterrupted waterfall, Angel Falls, located?",
    options: ["Brazil", "Colombia", "Venezuela", "Guyana"],
    answer: 2,
  },
  {
    q: "What is the capital city of Turkey?",
    options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    answer: 1,
  },
  {
    q: "Which desert is the largest hot desert in the world?",
    options: [
      "Gobi Desert",
      "Kalahari Desert",
      "Sahara Desert",
      "Arabian Desert",
    ],
    answer: 2,
  },
  {
    q: "Which island group includes Majorca, Minorca, and Ibiza?",
    options: ["Canary Islands", "Balearic Islands", "Azores", "Cyclades"],
    answer: 1,
  },
  {
    q: "What is the capital city of Norway?",
    options: ["Bergen", "Oslo", "Trondheim", "Stavanger"],
    answer: 1,
  },
  {
    q: "Which river flows through London?",
    options: ["Severn", "Thames", "Mersey", "Trent"],
    answer: 1,
  },
  {
    q: "What is the highest mountain peak in Europe (excluding Caucasus ambiguity Elbrus debate)?",
    options: ["Mont Blanc", "Matterhorn", "Grossglockner", "Mount Etna"],
    answer: 0,
  },
  {
    q: "Which country borders both Germany and Spain?",
    options: ["Belgium", "Italy", "France", "Switzerland"],
    answer: 2,
  },
  {
    q: "What is the capital city of Scotland?",
    options: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee"],
    answer: 1,
  },
  {
    q: "In which ocean is the island nation of the Maldives located?",
    options: [
      "Pacific Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
      "Southern Ocean",
    ],
    answer: 1,
  },
  {
    q: "Which country has the most natural lakes in the world?",
    options: ["Finland", "Canada", "Russia", "Sweden"],
    answer: 1,
  },
  {
    q: "What is the capital city of Ireland?",
    options: ["Belfast", "Cork", "Dublin", "Galway"],
    answer: 2,
  },
  {
    q: "Which sea is located between Great Britain and Scandinavia?",
    options: ["Baltic Sea", "North Sea", "Norwegian Sea", "Irish Sea"],
    answer: 1,
  },
  {
    q: "What is the capital city of Argentina?",
    options: ["Mendoza", "Córdoba", "Buenos Aires", "Rosario"],
    answer: 2,
  },
  {
    q: "Which active volcano destroyed the ancient Roman city of Pompeii in 79 AD?",
    options: ["Mount Etna", "Stromboli", "Mount Vesuvius", "Santorini"],
    answer: 2,
  },
  {
    q: "What is the largest country by land area in South America?",
    options: ["Argentina", "Peru", "Brazil", "Colombia"],
    answer: 2,
  },
  {
    q: "What is the capital city of Sweden?",
    options: ["Gothenburg", "Stockholm", "Malmö", "Uppsala"],
    answer: 1,
  },
  {
    q: "Which European capital city sits on the River Tiber?",
    options: ["Florence", "Rome", "Venice", "Naples"],
    answer: 1,
  },
  {
    q: "What is the name of the deep sea trench that contains the deepest point on Earth?",
    options: [
      "Java Trench",
      "Puerto Rico Trench",
      "Mariana Trench",
      "Tonga Trench",
    ],
    answer: 2,
  },
  {
    q: "Which European country is divided into 26 cantons?",
    options: ["Austria", "Belgium", "Switzerland", "Netherlands"],
    answer: 2,
  },
  {
    q: "What is the capital city of Egypt?",
    options: ["Alexandria", "Luxor", "Cairo", "Giza"],
    answer: 2,
  },
  {
    q: "Which mountain is the highest in the British Isles?",
    options: ["Snowdon", "Scafell Pike", "Ben Nevis", "Slieve Donard"],
    answer: 2,
  },
  {
    q: "What is the official language of Brazil?",
    options: ["Spanish", "Portuguese", "French", "Italian"],
    answer: 1,
  },
  {
    q: "Which body of water separates the island of Madagascar from mainland Africa?",
    options: [
      "Red Sea",
      "Mozambique Channel",
      "Gulf of Aden",
      "Zanzibar Strait",
    ],
    answer: 1,
  },
  {
    q: "What is the capital city of Greece?",
    options: ["Thessaloniki", "Patras", "Athens", "Heraklion"],
    answer: 2,
  },
  {
    q: "Which country contains the mouth of the Amazon River?",
    options: ["Peru", "Colombia", "Brazil", "Ecuador"],
    answer: 2,
  },
  {
    q: "Which peninsula consists of Spain and Portugal?",
    options: [
      "Balkan Peninsula",
      "Scandinavian Peninsula",
      "Iberian Peninsula",
      "Italian Peninsula",
    ],
    answer: 2,
  },
  {
    q: "What is the capital city of Finland?",
    options: ["Tampere", "Turku", "Helsinki", "Espoo"],
    answer: 2,
  },
  {
    q: "In which country is Mount Fuji located?",
    options: ["China", "South Korea", "Japan", "Taiwan"],
    answer: 2,
  },
  {
    q: "Which European river flows through Rotterdam before emptying into the North Sea?",
    options: ["Elbe", "Rhine", "Meuse", "Scheldt"],
    answer: 1,
  },
  {
    q: "What is the capital city of Belgium?",
    options: ["Antwerp", "Ghent", "Brussels", "Bruges"],
    answer: 2,
  },
  {
    q: "Which canal connects the Mediterranean Sea directly to the Red Sea?",
    options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Corinth Canal"],
    answer: 1,
  },
  {
    q: "What is the capital city of Austria?",
    options: ["Salzburg", "Innsbruck", "Vienna", "Graz"],
    answer: 2,
  },
  {
    q: "Which country occupies the southern half of the Scandinavian Peninsula alongside Norway?",
    options: ["Denmark", "Finland", "Sweden", "Estonia"],
    answer: 2,
  },
  {
    q: "Which island in the Mediterranean is famous for Mount Etna?",
    options: ["Sardinia", "Corsica", "Sicily", "Crete"],
    answer: 2,
  },
  {
    q: "What is the capital city of Denmark?",
    options: ["Aarhus", "Odense", "Copenhagen", "Aalborg"],
    answer: 2,
  },
  {
    q: "Which river is the longest in the United Kingdom?",
    options: ["River Thames", "River Severn", "River Trent", "River Shannon"],
    answer: 1,
  },
  {
    q: "What is the capital city of South Africa's executive branch of government?",
    options: ["Johannesburg", "Cape Town", "Pretoria", "Durban"],
    answer: 2,
  },
  {
    q: "In which ocean is the island of Madagascar located?",
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Southern Ocean",
    ],
    answer: 2,
  },
  {
    q: "What is the capital city of Hungary?",
    options: ["Debrecen", "Szeged", "Budapest", "Miskolc"],
    answer: 2,
  },
  {
    q: "Which group of islands includes Tenerife, Gran Canaria, and Lanzarote?",
    options: ["Balearic Islands", "Canary Islands", "Madeira", "Azores"],
    answer: 1,
  },
  {
    q: "Which country shares the longest international land border with the United States?",
    options: ["Mexico", "Canada", "Cuba", "Russia"],
    answer: 1,
  },
  {
    q: "What is the capital city of the Netherlands?",
    options: ["Rotterdam", "The Hague", "Amsterdam", "Utrecht"],
    answer: 2,
  },
  {
    q: "Which European sea is virtually landlocked and bordered by Sweden, Finland, and Poland?",
    options: ["North Sea", "Norwegian Sea", "Baltic Sea", "Black Sea"],
    answer: 2,
  },
  {
    q: "What is the capital city of India?",
    options: ["Mumbai", "Kolkata", "New Delhi", "Bengaluru"],
    answer: 2,
  },
  {
    q: "Which mountain range forms the natural border between France and Spain?",
    options: [
      "The Alps",
      "The Pyrenees",
      "The Massif Central",
      "The Cantabrian Mountains",
    ],
    answer: 1,
  },
  {
    q: "What is the capital city of Croatia?",
    options: ["Split", "Dubrovnik", "Zagreb", "Rijeka"],
    answer: 2,
  },
  {
    q: "Which African lake is the chief reservoir of the Nile and the largest lake in Africa?",
    options: ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Chad"],
    answer: 2,
  },
  {
    q: "What is the capital city of the Czech Republic?",
    options: ["Brno", "Ostrava", "Prague", "Plzeň"],
    answer: 2,
  },
  {
    q: "Which bay between western France and northern Spain is known for its rough seas?",
    options: [
      "Bay of Bengal",
      "Bay of Biscay",
      "Gulf of Bothnia",
      "Gulf of Lyon",
    ],
    answer: 1,
  },
  {
    q: "What is the capital city of Morocco?",
    options: ["Casablanca", "Marrakesh", "Rabat", "Fes"],
    answer: 2,
  },
  {
    q: "In which country would you find the Black Forest mountain region?",
    options: ["Austria", "Switzerland", "Germany", "France"],
    answer: 2,
  },
  {
    q: "What is the capital city of Thailand?",
    options: ["Chiang Mai", "Phuket", "Bangkok", "Pattaya"],
    answer: 2,
  },
  {
    q: "Which body of water separates Ireland from Great Britain?",
    options: ["North Sea", "English Channel", "Irish Sea", "Celtic Sea"],
    answer: 2,
  },
  {
    q: "What is the capital city of Romania?",
    options: ["Cluj-Napoca", "Timișoara", "Bucharest", "Iași"],
    answer: 2,
  },
  {
    q: "Which country is completely surrounded by South Africa?",
    options: ["Eswatini", "Lesotho", "Botswana", "Namibia"],
    answer: 1,
  },
  {
    q: "What is the capital city of Kenya?",
    options: ["Mombasa", "Kisumu", "Nairobi", "Nakuru"],
    answer: 2,
  },
  {
    q: "Which island nation off the coast of East Africa has Port Louis as its capital?",
    options: ["Seychelles", "Comoros", "Mauritius", "Madagascar"],
    answer: 2,
  },
  {
    q: "What is the capital city of Vietnam?",
    options: ["Ho Chi Minh City", "Da Nang", "Hanoi", "Haiphong"],
    answer: 2,
  },
  {
    q: "Which sea lies directly north of Poland and east of Sweden?",
    options: ["North Sea", "White Sea", "Baltic Sea", "Barents Sea"],
    answer: 2,
  },
  {
    q: "What is the capital city of Iceland?",
    options: ["Akureyri", "Keflavík", "Reykjavík", "Kópavogur"],
    answer: 2,
  },
  {
    q: "In which mountain range is the Matterhorn located?",
    options: ["The Pyrenees", "The Dolomites", "The Alps", "The Carpathians"],
    answer: 2,
  },
  {
    q: "What is the capital city of Peru?",
    options: ["Cusco", "Arequipa", "Lima", "Trujillo"],
    answer: 2,
  },
  {
    q: "Which river is the longest in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    answer: 1,
  },
  {
    q: "What is the capital city of Ukraine?",
    options: ["Kharkiv", "Odesa", "Kyiv", "Lviv"],
    answer: 2,
  },
  {
    q: "Which group of Mediterranean islands includes Mallorca, Menorca, Ibiza, and Formentera?",
    options: [
      "Canary Islands",
      "Cyclades",
      "Balearic Islands",
      "Ionian Islands",
    ],
    answer: 2,
  },
  {
    q: "What is the capital city of South Korea?",
    options: ["Busan", "Incheon", "Seoul", "Daegu"],
    answer: 2,
  },
  {
    q: "Which narrow stretch of water separates the south coast of England from the Isle of Wight?",
    options: [
      "English Channel",
      "The Solent",
      "Menai Strait",
      "Thames Estuary",
    ],
    answer: 1,
  },
  {
    q: "What is the capital city of China?",
    options: ["Shanghai", "Guangzhou", "Beijing", "Shenzhen"],
    answer: 2,
  },
  {
    q: "Which microstate is entirely surrounded by the city of Rome?",
    options: ["San Marino", "Monaco", "Vatican City", "Andorra"],
    answer: 2,
  },
  {
    q: "What is the capital city of Mexico?",
    options: ["Guadalajara", "Monterrey", "Mexico City", "Puebla"],
    answer: 2,
  },
  {
    q: "Which European river passes through Frankfurt, Germany?",
    options: ["Rhine", "Main", "Danube", "Elbe"],
    answer: 1,
  },
  {
    q: "What is the capital city of Colombia?",
    options: ["Medellín", "Cali", "Bogotá", "Cartagena"],
    answer: 2,
  },
  {
    q: "Which country is known as the 'Home of the Fjords' in Northern Europe?",
    options: ["Sweden", "Finland", "Norway", "Denmark"],
    answer: 2,
  },
  {
    q: "What is the capital city of Slovakia?",
    options: ["Kosice", "Prešov", "Bratislava", "Nitra"],
    answer: 2,
  },
];
