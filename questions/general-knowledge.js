const generalKnowledge = [
    {
        q: "What is the capital city of France?",
        options: ["Marseille", "Lyon", "Paris", "Nice"],
        answer: 2
    },
    {
        q: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Zinc"],
        answer: 1
    },
    {
        q: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        q: "Which planet in our solar system is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        q: "What is the freezing point of water in degrees Celsius?",
        options: ["0°C", "32°C", "-10°C", "100°C"],
        answer: 0
    },
    {
        q: "How many sides does a heptagon have?",
        options: ["6", "7", "8", "9"],
        answer: 1
    },
    {
        q: "Which currency is used in the United Kingdom?",
        options: ["Euro", "Pound Sterling", "Dollar", "Yen"],
        answer: 1
    },
    {
        q: "Which primary colors make green when mixed together?",
        options: ["Red & Blue", "Blue & Yellow", "Red & Yellow", "Green & Yellow"],
        answer: 1
    },
    {
        q: "What is the tallest living land animal in the world?",
        options: ["African Elephant", "Giraffe", "Hippopotamus", "Rhinoceros"],
        answer: 1
    },
    {
        q: "What is the square root of 144?",
        options: ["10", "11", "12", "14"],
        answer: 2
    },
    {
        q: "In which city can you find the famous Eiffel Tower?",
        options: ["London", "Berlin", "Paris", "Rome"],
        answer: 2
    },
    {
        q: "What is the main language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: 1
    },
    {
        q: "How many colors are in a standard rainbow?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        q: "Which instrument measures atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        answer: 1
    },
    {
        q: "Who is credited with inventing the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        answer: 1
    },
    {
        q: "What is the hardest substance in the human body?",
        options: ["Femur bone", "Tooth enamel", "Kneecap", "Skull"],
        answer: 1
    },
    {
        q: "How many items are in a baker's dozen?",
        options: ["12", "13", "14", "15"],
        answer: 1
    },
    {
        q: "Which ocean is the largest by surface area on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: 2
    },
    {
        q: "Which symbol represents the chemical element Gold on the periodic table?",
        options: ["Ag", "Au", "Fe", "Pb"],
        answer: 1
    },
    {
        q: "What is the national currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Baht"],
        answer: 2
    },
    {
        q: "Which organ in the human body pumps blood through the circulatory system?",
        options: ["Lungs", "Brain", "Heart", "Liver"],
        answer: 2
    },
    {
        q: "How many minutes are in a full day (24 hours)?",
        options: ["1,200", "1,440", "1,600", "1,800"],
        answer: 1
    },
    {
        q: "Which famous clock tower stands at the north end of the Houses of Parliament in London?",
        options: ["Big Ben (Elizabeth Tower)", "Spire of Dublin", "Belfry of Bruges", "Clock Tower of Graz"],
        answer: 0
    },
    {
        q: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: 2
    },
    {
        q: "What is the name of the wizarding school Harry Potter attends?",
        options: ["Beauxbatons", "Durmstrang", "Hogwarts", "Ilvermorny"],
        answer: 2
    },
    {
        q: "Which device is used to measure human body temperature?",
        options: ["Barometer", "Thermometer", "Speedometer", "Altimeter"],
        answer: 1
    },
    {
        q: "How many teeth does a healthy adult human usually have, including wisdom teeth?",
        options: ["28", "30", "32", "36"],
        answer: 2
    },
    {
        q: "Which famous ship sank after hitting an iceberg in April 1912?",
        options: ["Lusitania", "Titanic", "Britannic", "Carpathia"],
        answer: 1
    },
    {
        q: "What is the capital city of Spain?",
        options: ["Barcelona", "Seville", "Madrid", "Valencia"],
        answer: 2
    },
    {
        q: "Which geometric shape has four equal sides and four right angles?",
        options: ["Rectangle", "Rhombus", "Square", "Trapezoid"],
        answer: 2
    },
    {
        q: "What type of gas do humans breathe out as a waste product of respiration?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        answer: 1
    },
    {
        q: "In what year did the year 2000 millennium celebrations occur?",
        options: ["1999", "2000", "2001", "2002"],
        answer: 1
    },
    {
        q: "Which famous scientist developed the Theory of General Relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"],
        answer: 1
    },
    {
        q: "How many letters are in the standard English alphabet?",
        options: ["24", "25", "26", "27"],
        answer: 2
    },
    {
        q: "What is the capital city of Italy?",
        options: ["Milan", "Venice", "Rome", "Florence"],
        answer: 2
    },
    {
        q: "Which element has the atomic number 1 on the periodic table?",
        options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
        answer: 1
    },
    {
        q: "What is the chemical formula for common table salt?",
        options: ["H2O", "CO2", "NaCl", "NaHCO3"],
        answer: 2
    },
    {
        q: "How many rings are on the official Olympic flag?",
        options: ["4", "5", "6", "7"],
        answer: 1
    },
    {
        q: "Which mammal lays eggs rather than giving birth to live young?",
        options: ["Kangaroo", "Platypus", "Koala", "Wombat"],
        answer: 1
    },
    {
        q: "What is the capital city of Germany?",
        options: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
        answer: 2
    },
    {
        q: "Which country is home to the Great Pyramids of Giza?",
        options: ["Greece", "Egypt", "Mexico", "Peru"],
        answer: 1
    },
    {
        q: "What is the boiling point of water at sea level in degrees Celsius?",
        options: ["80°C", "90°C", "100°C", "120°C"],
        answer: 2
    },
    {
        q: "How many legs does a spider typically have?",
        options: ["6", "8", "10", "12"],
        answer: 1
    },
    {
        q: "Which continent is the coldest and dryest on Earth?",
        options: ["Asia", "North America", "Antarctica", "Europe"],
        answer: 2
    },
    {
        q: "What is the main ingredient in traditional bread dough?",
        options: ["Flour", "Rice", "Cornmeal", "Oats"],
        answer: 0
    },
    {
        q: "Which superhero is known as the 'Dark Knight'?",
        options: ["Superman", "Batman", "Spider-Man", "Iron Man"],
        answer: 1
    },
    {
        q: "What is the capital city of the Netherlands?",
        options: ["Rotterdam", "The Hague", "Amsterdam", "Utrecht"],
        answer: 2
    },
    {
        q: "Which primary gas makes up most of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 1
    },
    {
        q: "How many strings does a standard violin have?",
        options: ["4", "5", "6", "8"],
        answer: 0
    },
    {
        q: "What is the Roman numeral for the number 10?",
        options: ["V", "X", "L", "C"],
        answer: 1
    },
    {
        q: "Which Italian city is famous for its canals and gondolas?",
        options: ["Florence", "Rome", "Venice", "Naples"],
        answer: 2
    },
    {
        q: "Which piece in chess can move in an 'L' shape?",
        options: ["Rook", "Bishop", "Knight", "Queen"],
        answer: 2
    },
    {
        q: "What is the largest organ of the human body?",
        options: ["Liver", "Skin", "Brain", "Lungs"],
        answer: 1
    },
    {
        q: "What is the capital city of Ireland?",
        options: ["Belfast", "Cork", "Dublin", "Galway"],
        answer: 2
    },
    {
        q: "Which celestial body orbits Earth as its natural satellite?",
        options: ["The Sun", "The Moon", "Mars", "Venus"],
        answer: 1
    },
    {
        q: "How many centimeters are in one meter?",
        options: ["10", "100", "1,000", "10,000"],
        answer: 1
    },
    {
        q: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Lead", "Tin", "Iron"],
        answer: 0
    },
    {
        q: "What is the capital city of Portugal?",
        options: ["Porto", "Lisbon", "Faro", "Coimbra"],
        answer: 1
    },
    {
        q: "How many players are on the pitch for one team in a standard football (soccer) match?",
        options: ["9", "10", "11", "12"],
        answer: 2
    },
    {
        q: "Which famous Renaissance artist painted the Sistine Chapel ceiling?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        answer: 1
    },
    {
        q: "What is the capital city of Sweden?",
        options: ["Gothenburg", "Stockholm", "Malmö", "Uppsala"],
        answer: 1
    },
    {
        q: "Which fruit is known for having its seeds on the outside?",
        options: ["Raspberry", "Strawberry", "Blackberry", "Fig"],
        answer: 1
    },
    {
        q: "What is the study of living organisms called?",
        options: ["Geology", "Biology", "Physics", "Chemistry"],
        answer: 1
    },
    {
        q: "How many years are in a century?",
        options: ["10", "50", "100", "1,000"],
        answer: 2
    },
    {
        q: "What is the capital city of Switzerland?",
        options: ["Zurich", "Geneva", "Bern", "Basel"],
        answer: 2
    },
    {
        q: "Which force pulls objects toward the center of the Earth?",
        options: ["Magnetism", "Gravity", "Friction", "Inertia"],
        answer: 1
    },
    {
        q: "Which toy consists of a string tied to a spool that goes up and down?",
        options: ["Yo-yo", "Frisbee", "Kite", "Diabolo"],
        answer: 0
    },
    {
        q: "What color is a traditional stop sign in road traffic?",
        options: ["Yellow", "Red", "Blue", "Orange"],
        answer: 1
    },
    {
        q: "What is the capital city of Greece?",
        options: ["Thessaloniki", "Athens", "Patras", "Heraklion"],
        answer: 1
    },
    {
        q: "Which organ in the human body produces insulin?",
        options: ["Liver", "Kidneys", "Pancreas", "Gallbladder"],
        answer: 2
    },
    {
        q: "How many sides does an octagon have?",
        options: ["6", "7", "8", "10"],
        answer: 2
    },
    {
        q: "What is the capital city of Norway?",
        options: ["Bergen", "Oslo", "Trondheim", "Stavanger"],
        answer: 1
    },
    {
        q: "Which planet is the largest in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        answer: 1
    },
    {
        q: "What chemical element is represented by the symbol 'Fe'?",
        options: ["Iron", "Fluorine", "Francium", "Lead"],
        answer: 0
    },
    {
        q: "How many zeros are in the number one million?",
        options: ["5", "6", "7", "8"],
        answer: 1
    },
    {
        q: "What is the capital city of Austria?",
        options: ["Salzburg", "Vienna", "Innsbruck", "Graz"],
        answer: 1
    },
    {
        q: "Which bird is historically a international symbol of peace?",
        options: ["Eagle", "Dove", "Owl", "Swan"],
        answer: 1
    },
    {
        q: "What is the main source of energy for life on Earth?",
        options: ["The Moon", "The Sun", "Geothermal vents", "Ocean currents"],
        answer: 1
    },
    {
        q: "How many months in a year have 31 days?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        q: "What is the capital city of Belgium?",
        options: ["Antwerp", "Ghent", "Brussels", "Bruges"],
        answer: 2
    },
    {
        q: "Which instrument is used to see tiny objects like bacteria up close?",
        options: ["Telescope", "Microscope", "Periscope", "Binoculars"],
        answer: 1
    },
    {
        q: "What color do you get when you mix red and yellow paint?",
        options: ["Purple", "Green", "Orange", "Brown"],
        answer: 2
    },
    {
        q: "What is the capital city of Poland?",
        options: ["Kraków", "Warsaw", "Gdańsk", "Wrocław"],
        answer: 1
    },
    {
        q: "How many sides does a triangle have?",
        options: ["3", "4", "5", "6"],
        answer: 0
    },
    {
        q: "Which gas is needed by humans to survive when breathing?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
        answer: 1
    },
    {
        q: "What is the capital city of Denmark?",
        options: ["Aarhus", "Copenhagen", "Odense", "Aalborg"],
        answer: 1
    },
    {
        q: "Which natural event causes a tsunami?",
        options: ["Undersea earthquake", "Heavy rainstorm", "Volcanic ash cloud", "High tide"],
        answer: 0
    },
    {
        q: "How many grams are in one kilogram?",
        options: ["100", "500", "1,000", "10,000"],
        answer: 2
    },
    {
        q: "What is the capital city of Finland?",
        options: ["Tampere", "Turku", "Helsinki", "Espoo"],
        answer: 2
    },
    {
        q: "Which gas fills party balloons to make them float in the air?",
        options: ["Hydrogen", "Helium", "Oxygen", "Methane"],
        answer: 1
    },
    {
        q: "How many teeth does a human child typically have in their primary (baby) set?",
        options: ["16", "20", "24", "28"],
        answer: 1
    },
    {
        q: "What is the capital city of Hungary?",
        options: ["Debrecen", "Budapest", "Szeged", "Miskolc"],
        answer: 1
    },
    {
        q: "Which organ controls all functions and thoughts in the human body?",
        options: ["Heart", "Brain", "Liver", "Spine"],
        answer: 1
    },
    {
        q: "What is the capital city of the Czech Republic?",
        options: ["Brno", "Prague", "Ostrava", "Plzeň"],
        answer: 1
    },
    {
        q: "How many standard suits are in a deck of playing cards?",
        options: ["2", "3", "4", "5"],
        answer: 2
    },
    {
        q: "Which chemical element has the symbol 'C'?",
        options: ["Calcium", "Carbon", "Copper", "Chlorine"],
        answer: 1
    },
    {
        q: "What is the capital city of Scotland?",
        options: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee"],
        answer: 1
    },
    {
        q: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        answer: 1
    },
    {
        q: "Which unit is used to measure electrical voltage?",
        options: ["Watt", "Volt", "Ampere", "Ohm"],
        answer: 1
    },
    {
        q: "What is the capital city of Iceland?",
        options: ["Akureyri", "Keflavík", "Reykjavík", "Kópavogur"],
        answer: 2
    }
];