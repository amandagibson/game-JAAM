const history = [
    {
        q: "In which year did World War II end?",
        options: ["1918", "1939", "1945", "1950"],
        answer: 2
    },
    {
        q: "Who was the first Emperor of Rome?",
        options: ["Julius Caesar", "Augustus", "Nero", "Marcus Aurelius"],
        answer: 1
    },
    {
        q: "Which ancient civilization built the pyramids of Giza?",
        options: ["Romans", "Greeks", "Egyptians", "Mayans"],
        answer: 2
    },
    {
        q: "In which year did the French Revolution begin?",
        options: ["1776", "1789", "1804", "1815"],
        answer: 1
    },
    {
        q: "Who painted the Mona Lisa and designed early flying machines?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        answer: 1
    },
    {
        q: "Which wall was pulled down in November 1989, symbolizing the end of the Cold War?",
        options: ["Hadrian's Wall", "Berlin Wall", "Great Wall of China", "Western Wall"],
        answer: 1
    },
    {
        q: "Who was the Queen of England during the Elizabethan Era in the 16th century?",
        options: ["Queen Elizabeth I", "Queen Victoria", "Queen Elizabeth II", "Queen Mary I"],
        answer: 0
    },
    {
        q: "In which year did Christopher Columbus first reach the Americas?",
        options: ["1488", "1492", "1504", "1520"],
        answer: 1
    },
    {
        q: "Which conflict was fought between the House of Lancaster and the House of York?",
        options: ["The Hundred Years' War", "The Wars of the Roses", "The Thirty Years' War", "The English Civil War"],
        answer: 1
    },
    {
        q: "Who was the famous French military leader exiled to the island of Saint Helena?",
        options: ["Louis XIV", "Napoleon Bonaparte", "Charles de Gaulle", "Robespierre"],
        answer: 1
    },
    {
        q: "In which city was the Titanic constructed before its tragic maiden voyage?",
        options: ["Belfast", "Liverpool", "Southampton", "Glasgow"],
        answer: 0
    },
    {
        q: "Which famous document was signed at Runnymede in 1215, limiting the king's power?",
        options: ["Declaration of Arbroath", "Magna Carta", "Bill of Rights", "Treaty of Versailles"],
        answer: 1
    },
    {
        q: "Which ancient Greek scholar ran naked through the streets shouting 'Eureka!'?",
        options: ["Socrates", "Aristotle", "Archimedes", "Pythagoras"],
        answer: 2
    },
    {
        q: "What year did World War I break out in Europe?",
        options: ["1912", "1914", "1918", "1939"],
        answer: 1
    },
    {
        q: "Which empire was ruled by Suleiman the Magnificent in the 16th century?",
        options: ["Byzantine Empire", "Ottoman Empire", "Holy Roman Empire", "Russian Empire"],
        answer: 1
    },
    {
        q: "Who was assassinated in Sarajevo in June 1914, triggering World War I?",
        options: ["Archduke Franz Ferdinand", "Tsar Nicholas II", "Kaiser Wilhelm II", "King George V"],
        answer: 0
    },
    {
        q: "Which European country experienced the Renaissance first in the 14th century?",
        options: ["France", "England", "Italy", "Spain"],
        answer: 2
    },
    {
        q: "Who defeated the Anglo-Saxon King Harold II at the Battle of Hastings in 1066?",
        options: ["William the Conqueror", "Charlemagne", "Richard the Lionheart", "Alfred the Great"],
        answer: 0
    },
    {
        q: "Which deadly pandemic swept through Europe in the mid-14th century, wiping out a huge portion of the population?",
        options: ["Spanish Flu", "The Black Death", "Cholera", "Smallpox"],
        answer: 1
    },
    {
        q: "In which year did the Great Fire of London destroy vast parts of the city?",
        options: ["1588", "1666", "1707", "1812"],
        answer: 1
    },
    {
        q: "Who was the British Prime Minister during most of World War II?",
        options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Harold Macmillan"],
        answer: 1
    },
    {
        q: "Which ancient civilization built the ruined city of Machu Picchu high in the Andes?",
        options: ["Aztecs", "Mayans", "Incas", "Olmecs"],
        answer: 2
    },
    {
        q: "What treaty brought World War I to an official end in 1919?",
        options: ["Treaty of Westphalia", "Treaty of Versailles", "Treaty of Utrecht", "Treaty of Rome"],
        answer: 1
    },
    {
        q: "Who led the Protestant Reformation in Germany in 1517 by publishing his 95 Theses?",
        options: ["John Calvin", "Martin Luther", "Huldrych Zwingli", "Desiderius Erasmus"],
        answer: 1
    },
    {
        q: "Which King of England had six wives and broke away from the Roman Catholic Church?",
        options: ["Henry V", "Henry VI", "Henry VII", "Henry VIII"],
        answer: 3
    },
    {
        q: "Which mountain erupted in 79 AD, burying the Roman city of Pompeii under ash?",
        options: ["Mount Etna", "Mount Vesuvius", "Stromboli", "Krakatoa"],
        answer: 1
    },
    {
        q: "What ancient trade network connected China with Europe and the Mediterranean?",
        options: ["Amber Road", "Incense Route", "The Silk Road", "Spice Route"],
        answer: 2
    },
    {
        q: "In which country was Joan of Arc born?",
        options: ["England", "France", "Spain", "Belgium"],
        answer: 1
    },
    {
        q: "Who was the first human to travel into space in 1961?",
        options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
        answer: 1
    },
    {
        q: "Which Viking ruler became the first Christian King of Norway in the 10th century?",
        options: ["Ragnar Lothbrok", "Olaf Tryggvason", "Harald Hardrada", "Erik the Red"],
        answer: 1
    },
    {
        q: "In which year did the Russian Revolution overthrow the Tsar and establish Bolshevik rule?",
        options: ["1905", "1917", "1923", "1939"],
        answer: 1
    },
    {
        q: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
        answer: 1
    },
    {
        q: "Which naval battle in 1805 saw Admiral Nelson defeat the combined French and Spanish fleets?",
        options: ["Battle of Waterloo", "Battle of Trafalgar", "Battle of Jutland", "Battle of Midway"],
        answer: 1
    },
    {
        q: "Who was crowned Emperor of the Romans on Christmas Day in the year 800?",
        options: ["Otto I", "Charlemagne", "Justinian I", "Charles V"],
        answer: 1
    },
    {
        q: "Which ancient city was famous for its Hanging Gardens, one of the Seven Wonders of the Ancient World?",
        options: ["Babylon", "Alexandria", "Carthage", "Athens"],
        answer: 0
    },
    {
        q: "What year did the Berlin Wall go up, dividing the East and West sides of the city?",
        options: ["1948", "1955", "1961", "1973"],
        answer: 2
    },
    {
        q: "Which Carthaginian general famously crossed the Alps with war elephants during the Second Punic War?",
        options: ["Hamilcar Barca", "Hannibal", "Scipio Africanus", "Mago"],
        answer: 1
    },
    {
        q: "Who was Queen of Great Britain during the height of the British Empire from 1837 to 1901?",
        options: ["Queen Anne", "Queen Elizabeth I", "Queen Victoria", "Queen Mary II"],
        answer: 2
    },
    {
        q: "Which island nation was invaded during Operation Overlord (D-Day) on June 6, 1944?",
        options: ["Italy", "France", "Germany", "Greece"],
        answer: 1
    },
    {
        q: "Which Dutch painter cut off part of his own ear in 1888?",
        options: ["Rembrandt", "Johannes Vermeer", "Vincent van Gogh", "Piet Mondrian"],
        answer: 2
    },
    {
        q: "Which alliance of merchants and guild towns dominated maritime trade along the coast of Northern Europe in the Middle Ages?",
        options: ["Hanseatic League", "Lombard League", "Delian League", "Etruscan League"],
        answer: 0
    },
    {
        q: "What year did the Soviet Union officially dissolve?",
        options: ["1989", "1991", "1993", "1995"],
        answer: 1
    },
    {
        q: "Who was assassinated on the Ides of March (March 15) in 44 BC?",
        options: ["Julius Caesar", "Mark Antony", "Cicero", "Caligula"],
        answer: 0
    },
    {
        q: "Which Swedish king turned Sweden into a major European superpower during the Thirty Years' War?",
        options: ["Gustavus Adolphus (Gustav II Adolf)", "Charles XII", "Gustav Vasa", "Erik XIV"],
        answer: 0
    },
    {
        q: "In which country did the Industrial Revolution begin in the 18th century?",
        options: ["Germany", "France", "Great Britain", "United States"],
        answer: 2
    },
    {
        q: "Which conflict lasted from 1337 to 1453 between the kingdoms of England and France?",
        options: ["The Thirty Years' War", "The Hundred Years' War", "The Seven Years' War", "The Napoleonic Wars"],
        answer: 1
    },
    {
        q: "Who was the last Tsar of All Russia before the 1917 revolution?",
        options: ["Alexander III", "Nicholas II", "Peter the Great", "Alexander II"],
        answer: 1
    },
    {
        q: "Which famous siege took place in 1683 when the Ottoman Empire attempted to conquer a major Austrian capital?",
        options: ["Siege of Vienna", "Siege of Budapest", "Siege of Prague", "Siege of Constantinople"],
        answer: 0
    },
    {
        q: "In which year did the United States declare its independence from Great Britain?",
        options: ["1770", "1776", "1783", "1789"],
        answer: 1
    },
    {
        q: "Who invented the movable type printing press in Europe around 1440?",
        options: ["Johannes Gutenberg", "William Caxton", "Galileo Galilei", "Isaac Newton"],
        answer: 0
    },
    {
        q: "Which Spanish conquistador led the expedition that caused the fall of the Aztec Empire?",
        options: ["Francisco Pizarro", "Hernán Cortés", "Vasco Núñez de Balboa", "Hernando de Soto"],
        answer: 1
    },
    {
        q: "Which European country was ruled by General Francisco Franco from 1939 to 1975?",
        options: ["Portugal", "Spain", "Italy", "Greece"],
        answer: 1
    },
    {
        q: "What battle in 1815 marked the final defeat of Napoleon Bonaparte?",
        options: ["Battle of Austerlitz", "Battle of Waterloo", "Battle of Leipzig", "Battle of Borodino"],
        answer: 1
    },
    {
        q: "Which Polish astronomer proposed that Earth and other planets revolve around the Sun?",
        options: ["Tycho Brahe", "Nicolaus Copernicus", "Johannes Kepler", "Galileo Galilei"],
        answer: 1
    },
    {
        q: "In what year did the Chernobyl nuclear disaster occur in Ukraine?",
        options: ["1979", "1986", "1991", "1995"],
        answer: 1
    },
    {
        q: "Who was the Soviet leader during the Cuban Missile Crisis in 1962?",
        options: ["Joseph Stalin", "Nikita Khrushchev", "Leonid Brezhnev", "Mikhail Gorbachev"],
        answer: 1
    },
    {
        q: "Which English scientist published the laws of motion and universal gravitation in 1687?",
        options: ["Robert Hooke", "Isaac Newton", "Francis Bacon", "Michael Faraday"],
        answer: 1
    },
    {
        q: "Which ancient Greek city-state was famous for its militaristic society and battle at Thermopylae?",
        options: ["Athens", "Sparta", "Corinth", "Thebes"],
        answer: 1
    },
    {
        q: "In what year did the Spanish Armada fail in its attempt to invade England?",
        options: ["1492", "1588", "1605", "1620"],
        answer: 1
    },
    {
        q: "Who was the famous chancellor known as the 'Iron Chancellor' who unified Germany in 1871?",
        options: ["Otto von Bismarck", "Kaiser Wilhelm II", "Klemens von Metternich", "Helmuth von Moltke"],
        answer: 0
    },
    {
        q: "Which empire captured Constantinople in 1453, ending the Byzantine Empire?",
        options: ["Mongol Empire", "Ottoman Empire", "Persian Empire", "Arab Caliphate"],
        answer: 1
    },
    {
        q: "Who was the Scottish monarch who also became King James I of England in 1603?",
        options: ["James IV", "James V", "James VI", "James VII"],
        answer: 2
    },
    {
        q: "Which revolution in 1911 ended thousands of years of imperial rule in China?",
        options: ["Taiping Rebellion", "Xinhai Revolution", "Boxer Rebellion", "Cultural Revolution"],
        answer: 1
    },
    {
        q: "What year saw the famous Gunpowder Plot attempt to blow up the English Parliament?",
        options: ["1588", "1605", "1642", "1688"],
        answer: 1
    },
    {
        q: "Which ancient Roman structure was built in Britain under the orders of Emperor Hadrian?",
        options: ["Hadrian's Wall", "Antonine Wall", "Offa's Dyke", "Aurelian Wall"],
        answer: 0
    },
    {
        q: "Who was the legendary leader of the Mongols who founded the Mongol Empire in 1206?",
        options: ["Kublai Khan", "Genghis Khan", "Batu Khan", "Tamerlane"],
        answer: 1
    },
    {
        q: "Which Portuguese explorer became the first European to reach India by sea in 1498?",
        options: ["Vasco da Gama", "Ferdinand Magellan", "Bartolomeu Dias", "Pedro Álvares Cabral"],
        answer: 0
    },
    {
        q: "Which war was fought between North and South in the United States from 1861 to 1865?",
        options: ["American Revolutionary War", "American Civil War", "War of 1812", "Mexican-American War"],
        answer: 1
    },
    {
        q: "Who was the famous Florentine author who wrote 'The Prince' in 1513?",
        options: ["Niccolò Machiavelli", "Dante Alighieri", "Giovanni Boccaccio", "Petrarch"],
        answer: 0
    },
    {
        q: "What wall built across the Isthmus of Corinth connected mainland Greece to the Peloponnese in antiquity?",
        options: ["Hexamilion Wall", "Servian Wall", "Theodosian Walls", "Trajan's Wall"],
        answer: 0
    },
    {
        q: "Which naval battle in 1571 saw a Catholic alliance defeat the Ottoman fleet near Greece?",
        options: ["Battle of Lepanto", "Battle of Actium", "Battle of Salamis", "Battle of Navarino"],
        answer: 0
    },
    {
        q: "In which year did the Irish Free State gain independence from the United Kingdom?",
        options: ["1916", "1922", "1937", "1949"],
        answer: 1
    },
    {
        q: "Who was the long-serving Prime Minister of the UK known as the 'Iron Lady'?",
        options: ["Theresa May", "Margaret Thatcher", "Shirley Williams", "Barbara Castle"],
        answer: 1
    },
    {
        q: "Which international organization was founded in 1945 following World War II to promote global peace?",
        options: ["League of Nations", "United Nations", "NATO", "European Union"],
        answer: 1
    },
    {
        q: "Which English king was executed in 1649 following the English Civil War?",
        options: ["Charles I", "Charles II", "James II", "Richard III"],
        answer: 0
    },
    {
        q: "What year did the European Economic Community (EEC) form with the signing of the Treaty of Rome?",
        options: ["1951", "1957", "1967", "1973"],
        answer: 1
    },
    {
        q: "Which famous Italian astronomer was tried by the Inquisition in 1633 for championing heliocentrism?",
        options: ["Giordano Bruno", "Galileo Galilei", "Evangelista Torricelli", "Giovanni Cassini"],
        answer: 1
    },
    {
        q: "In what year did the Spanish Civil War end, marking the start of Franco's dictatorship?",
        options: ["1931", "1936", "1939", "1945"],
        answer: 2
    },
    {
        q: "Which nurse became famous for her pioneering sanitary work during the Crimean War?",
        options: ["Mary Seacole", "Florence Nightingale", "Clara Barton", "Edith Cavell"],
        answer: 1
    },
    {
        q: "Who was the ruler of Egypt when it was annexed by the Roman Empire after her death in 30 BC?",
        options: ["Nefertiti", "Cleopatra VII", "Hatshepsut", "Arsinoe IV"],
        answer: 1
    },
    {
        q: "In which century did the Black Death first hit Europe?",
        options: ["12th century", "13th century", "14th century", "15th century"],
        answer: 2
    },
    {
        q: "Which French king was known as the 'Sun King' and built the Palace of Versailles?",
        options: ["Louis XIV", "Louis XV", "Louis XVI", "Francis I"],
        answer: 0
    },
    {
        q: "What island did Napoleon escape from in 1815 before his 'Hundred Days' return to power?",
        options: ["Saint Helena", "Elba", "Corsica", "Malta"],
        answer: 1
    },
    {
        q: "Which battle in 732 AD saw Charles Martel halt the Umayyad advance into Western Europe?",
        options: ["Battle of Tours (Poitiers)", "Battle of Roncesvalles", "Battle of Chalons", "Battle of Tolbiac"],
        answer: 0
    },
    {
        q: "What year did the Apollo 11 moon landing take place?",
        options: ["1965", "1969", "1972", "1975"],
        answer: 1
    },
    {
        q: "Which archduke's marriage to Marie Antoinette bound Austria and France in alliance in 1770?",
        options: ["Louis XVI", "Louis XV", "Charles X", "Louis XVIII"],
        answer: 0
    },
    {
        q: "Which treaty in 1648 ended the Thirty Years' War in Europe?",
        options: ["Peace of Westphalia", "Treaty of Utrecht", "Treaty of Ghent", "Peace of Augsburg"],
        answer: 0
    },
    {
        q: "Who was the legendary leader who united the Frankish tribes and became the first King of the Franks in the late 5th century?",
        options: ["Clovis I", "Charlemagne", "Pepin the Short", "Charles Martel"],
        answer: 0
    },
    {
        q: "In what year did the Wright brothers achieve the first powered heavier-than-air flight?",
        options: ["1899", "1903", "1908", "1912"],
        answer: 1
    },
    {
        q: "Which country was divided into four occupation zones following World War II?",
        options: ["Austria", "Germany", "Poland", "Hungary"],
        answer: 1
    },
    {
        q: "Who was the British monarch during the American Revolutionary War?",
        options: ["George I", "George II", "George III", "George IV"],
        answer: 2
    },
    {
        q: "Which ancient battle in 490 BC saw the Athenians defeat the invading Persian forces?",
        options: ["Battle of Marathon", "Battle of Thermopylae", "Battle of Salamis", "Battle of Plataea"],
        answer: 0
    },
    {
        q: "In which year did the Suez Crisis erupt over control of the Suez Canal?",
        options: ["1948", "1956", "1967", "1973"],
        answer: 1
    },
    {
        q: "Which famous medieval tapestry depicts the events leading up to the Norman conquest of England?",
        options: ["Bayeux Tapestry", "Apocalypse Tapestry", "Unicorn Tapestries", "Valois Tapestries"],
        answer: 0
    },
    {
        q: "Who was the first female Prime Minister of a European country (Sri Lanka globally, but in Europe)?",
        options: ["Margaret Thatcher", "Gro Harlem Brundtland", "Vigdís Finnbogadóttir", "Milka Planinc"],
        answer: 0
    },
    {
        q: "In which year did the Ottoman Empire officially collapse?",
        options: ["1918", "1922", "1926", "1930"],
        answer: 1
    },
    {
        q: "Which emperor made Christianity the official state religion of the Roman Empire in 380 AD?",
        options: ["Constantine the Great", "Theodosius I", "Trajan", "Diocletian"],
        answer: 1
    },
    {
        q: "Who was the famous general who led the Redshirts during the Italian Unification (Risorgimento)?",
        options: ["Giuseppe Garibaldi", "Count Cavour", "Giuseppe Mazzini", "Victor Emmanuel II"],
        answer: 0
    },
    {
        q: "What year did the construction of the Colosseum in Rome finish during the reign of Titus?",
        options: ["60 AD", "70 AD", "80 AD", "90 AD"],
        answer: 2
    },
    {
        q: "Which European nation was the first to abolish slavery throughout its territory in 1794 (temporarily reinstated later)?",
        options: ["Great Britain", "France", "Denmark", "The Netherlands"],
        answer: 1
    }
];