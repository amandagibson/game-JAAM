const filmTv = [
  {
    q: 'Who directed the 1975 thriller Jaws?',
    options: [
      'George Lucas',
      'Steven Spielberg',
      'Francis Ford Coppola',
      'Ridley Scott',
    ],
    answer: 1,
  },
  {
    q: 'Which film won Best Picture at the Oscars held in 1994?',
    options: ['Forrest Gump', 'Pulp Fiction', "Schindler's List", 'The Piano'],
    answer: 2,
  },
  {
    q: 'In The Matrix, which color pill does Neo choose to take?',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    answer: 0,
  },
  {
    q: 'Which actor played Walter White in Breaking Bad?',
    options: ['Aaron Paul', 'Bob Odenkirk', 'Jon Hamm', 'Bryan Cranston'],
    answer: 3,
  },
  {
    q: 'Which TV series is set in the fictional town of Hawkins, Indiana?',
    options: ['The OA', 'Stranger Things', 'Dark', 'Riverdale'],
    answer: 1,
  },
  {
    q: 'Who directed Pulp Fiction?',
    options: [
      'Martin Scorsese',
      'David Fincher',
      'Quentin Tarantino',
      'The Coen Brothers',
    ],
    answer: 2,
  },
  {
    q: 'What is the name of the coffee shop in Friends?',
    options: ['Central Perk', "Java Joe's", 'The Daily Grind', 'Cafe Nervosa'],
    answer: 0,
  },
  {
    q: 'Which actor played Jack Dawson in Titanic?',
    options: ['Brad Pitt', 'Matt Damon', 'Leonardo DiCaprio', 'Johnny Depp'],
    answer: 2,
  },
  {
    q: 'What is the family motto of House Stark in Game of Thrones?',
    options: [
      'Hear Me Roar',
      'Winter Is Coming',
      'Ours Is the Fury',
      'Fire and Blood',
    ],
    answer: 1,
  },
  {
    q: 'Which film features the famous line "I\'ll be back"?',
    options: ['RoboCop', 'Predator', 'Commando', 'The Terminator'],
    answer: 3,
  },
  {
    q: 'Who created the animated series The Simpsons?',
    options: ['Seth MacFarlane', 'Matt Groening', 'Trey Parker', 'Mike Judge'],
    answer: 1,
  },
  {
    q: 'Which animation studio produced the original Toy Story?',
    options: ['DreamWorks', 'Illumination', 'Pixar', 'Studio Ghibli'],
    answer: 2,
  },
  {
    q: 'Who played Vito Corleone in The Godfather?',
    options: ['Marlon Brando', 'Al Pacino', 'Robert De Niro', 'James Caan'],
    answer: 0,
  },
  {
    q: 'What is the name of the paper company in the US version of The Office?',
    options: ['Prestige Paper', 'Sabre', 'Staples Co.', 'Dunder Mifflin'],
    answer: 3,
  },
  {
    q: 'Who directed Inception?',
    options: [
      'Denis Villeneuve',
      'Christopher Nolan',
      'Ridley Scott',
      'James Cameron',
    ],
    answer: 1,
  },
  {
    q: 'What is the name of the fictional African nation in Black Panther?',
    options: ['Zamunda', 'Genovia', 'Wakanda', 'Latveria'],
    answer: 2,
  },
  {
    q: 'Which actress played Katniss Everdeen in The Hunger Games films?',
    options: [
      'Jennifer Lawrence',
      'Emma Stone',
      'Shailene Woodley',
      'Kristen Stewart',
    ],
    answer: 0,
  },
  {
    q: 'Which TV series follows advertising executive Don Draper?',
    options: [
      'The Newsroom',
      'Halt and Catch Fire',
      'Boardwalk Empire',
      'Mad Men',
    ],
    answer: 3,
  },
  {
    q: 'Which silent-era film won the very first Academy Award for Best Picture?',
    options: ['Sunrise', 'Wings', 'Metropolis', 'The Jazz Singer'],
    answer: 1,
  },
  {
    q: 'Which actor played the Joker in The Dark Knight (2008)?',
    options: [
      'Jared Leto',
      'Joaquin Phoenix',
      'Heath Ledger',
      'Jack Nicholson',
    ],
    answer: 2,
  },
  {
    q: 'Which animated film features the song "Let It Go"?',
    options: ['Frozen', 'Tangled', 'Moana', 'Brave'],
    answer: 0,
  },
  {
    q: "In Star Wars, who reveals himself to be Luke Skywalker's father?",
    options: ['Obi-Wan Kenobi', 'Darth Vader', 'Emperor Palpatine', 'Han Solo'],
    answer: 1,
  },
  {
    q: 'What is the name of the commercial towing vessel in Alien (1979)?',
    options: ['Sulaco', 'Nebuchadnezzar', 'Nostromo', 'Prometheus'],
    answer: 2,
  },
  {
    q: 'Which HBO series follows the Roy family and their media empire Waystar Royco?',
    options: ['Billions', 'Veep', 'Industry', 'Succession'],
    answer: 3,
  },
  {
    q: 'Who directed the 2019 film Parasite?',
    options: [
      'Park Chan-wook',
      'Bong Joon-ho',
      'Lee Chang-dong',
      'Hirokazu Kore-eda',
    ],
    answer: 1,
  },
  {
    q: 'Which actor played the title character in Forrest Gump?',
    options: ['Tom Cruise', 'Kevin Costner', 'Tom Hanks', 'Robin Williams'],
    answer: 2,
  },
  {
    q: "What is the name of Jerry's neighbor in Seinfeld?",
    options: ['Kramer', 'Newman', 'George', 'Elaine'],
    answer: 0,
  },
  {
    q: 'Which film franchise is primarily set at Hogwarts School of Witchcraft and Wizardry?',
    options: [
      'The Chronicles of Narnia',
      'His Dark Materials',
      'Percy Jackson',
      'Harry Potter',
    ],
    answer: 3,
  },
  {
    q: 'Which sitcom features the physicist Sheldon Cooper?',
    options: [
      "Young Sheldon's Lab",
      'The Big Bang Theory',
      'Community',
      'Scrubs',
    ],
    answer: 1,
  },
  {
    q: 'Who directed the 1960 horror classic Psycho?',
    options: [
      'Orson Welles',
      'Billy Wilder',
      'Alfred Hitchcock',
      'Stanley Kubrick',
    ],
    answer: 2,
  },
  {
    q: 'Which actor plays Tony Stark in the Marvel Cinematic Universe?',
    options: [
      'Robert Downey Jr.',
      'Chris Evans',
      'Mark Ruffalo',
      'Chris Hemsworth',
    ],
    answer: 0,
  },
  {
    q: 'Who directed The Lord of the Rings film trilogy?',
    options: ['Sam Raimi', 'Zack Snyder', 'George Miller', 'Peter Jackson'],
    answer: 3,
  },
  {
    q: 'Which TV series follows the Dutton family on a Montana cattle ranch?',
    options: ['Longmire', 'Yellowstone', 'Justified', 'Deadwood'],
    answer: 1,
  },
  {
    q: 'Which actress plays Eleven in Stranger Things?',
    options: ['Sadie Sink', 'Maya Hawke', 'Millie Bobby Brown', 'Natalia Dyer'],
    answer: 2,
  },
  {
    q: 'Which film franchise features the character Captain Jack Sparrow?',
    options: [
      'Pirates of the Caribbean',
      'Master and Commander',
      'Peter Pan',
      'Treasure Planet',
    ],
    answer: 0,
  },
  {
    q: 'Which Stanley Kubrick film features Jack Nicholson shouting "Here\'s Johnny!"?',
    options: [
      'Full Metal Jacket',
      'Barry Lyndon',
      'A Clockwork Orange',
      'The Shining',
    ],
    answer: 3,
  },
  {
    q: 'Who directed The Shawshank Redemption?',
    options: ['Frank Darabont', 'Rob Reiner', 'Robert Zemeckis', 'Ron Howard'],
    answer: 0,
  },
  {
    q: 'Which actor won the Best Actor Oscar for the 2015 film The Revenant?',
    options: [
      'Eddie Redmayne',
      'Matthew McConaughey',
      'Leonardo DiCaprio',
      'Bradley Cooper',
    ],
    answer: 2,
  },
  {
    q: 'Which TV series is set in the fictional town of Stars Hollow?',
    options: ['Gilmore Girls', "Dawson's Creek", 'One Tree Hill', 'Everwood'],
    answer: 0,
  },
  {
    q: 'Which film won Best Picture at the Oscars held in 2023?',
    options: [
      'The Fabelmans',
      'Everything Everywhere All at Once',
      'Top Gun: Maverick',
      'Tár',
    ],
    answer: 1,
  },
  {
    q: "Who played J. Robert Oppenheimer in Christopher Nolan's Oppenheimer?",
    options: [
      'Matt Damon',
      'Robert Downey Jr.',
      'Cillian Murphy',
      'Rami Malek',
    ],
    answer: 2,
  },
  {
    q: 'Who directed the 2023 film Barbie?',
    options: ['Greta Gerwig', 'Sofia Coppola', 'Nora Ephron', 'Jane Campion'],
    answer: 0,
  },
  {
    q: 'What is the first game the players take part in during Squid Game?',
    options: ['Tug of War', 'Marbles', 'Honeycomb', 'Red Light, Green Light'],
    answer: 3,
  },
  {
    q: 'Which British monarch is the central figure of the early seasons of The Crown?',
    options: [
      'Queen Victoria',
      'Queen Elizabeth II',
      'King George VI',
      'Queen Mary',
    ],
    answer: 1,
  },
  {
    q: 'What is the real name of the character nicknamed "Baby Yoda" in The Mandalorian?',
    options: ['Yaddle', 'Din', 'Grogu', 'Ahsoka'],
    answer: 2,
  },
  {
    q: 'Who directed Titanic (1997)?',
    options: [
      'James Cameron',
      'Steven Spielberg',
      'Ridley Scott',
      'Michael Bay',
    ],
    answer: 0,
  },
  {
    q: 'In which city is the HBO series The Wire set?',
    options: ['Detroit', 'Philadelphia', 'Chicago', 'Baltimore'],
    answer: 3,
  },
  {
    q: 'In which US state is The Sopranos primarily set?',
    options: ['New York', 'New Jersey', 'Connecticut', 'Pennsylvania'],
    answer: 1,
  },
  {
    q: 'Which actor played Tony Soprano?',
    options: [
      'Steve Buscemi',
      'Michael Imperioli',
      'James Gandolfini',
      'Vincent Pastore',
    ],
    answer: 2,
  },
  {
    q: 'Who created and starred in the comedy series Fleabag?',
    options: [
      'Phoebe Waller-Bridge',
      'Michaela Coel',
      'Sharon Horgan',
      'Jessica Hynes',
    ],
    answer: 0,
  },
  {
    q: 'Which British sci-fi series features a time machine shaped like a blue police box?',
    options: ['Red Dwarf', "Blake's 7", 'Torchwood', 'Doctor Who'],
    answer: 3,
  },
  {
    q: 'Which actor played Sherlock Holmes in the BBC series Sherlock?',
    options: [
      'Jude Law',
      'Benedict Cumberbatch',
      'Martin Freeman',
      'Tom Hiddleston',
    ],
    answer: 1,
  },
  {
    q: 'Which film features the artificial intelligence HAL 9000?',
    options: ['Blade Runner', 'Solaris', '2001: A Space Odyssey', 'Moon'],
    answer: 2,
  },
  {
    q: 'Who directed 2001: A Space Odyssey?',
    options: [
      'Stanley Kubrick',
      'Steven Spielberg',
      'Ridley Scott',
      'George Lucas',
    ],
    answer: 0,
  },
  {
    q: 'Which Studio Ghibli film won the Academy Award for Best Animated Feature in 2003?',
    options: [
      'Princess Mononoke',
      "Howl's Moving Castle",
      'My Neighbor Totoro',
      'Spirited Away',
    ],
    answer: 3,
  },
  {
    q: 'Who directed Spirited Away?',
    options: [
      'Isao Takahata',
      'Hayao Miyazaki',
      'Makoto Shinkai',
      'Satoshi Kon',
    ],
    answer: 1,
  },
  {
    q: 'What make of car is converted into a time machine in Back to the Future?',
    options: [
      'Ford Mustang',
      'Chevrolet Camaro',
      'DeLorean DMC-12',
      'Pontiac Firebird',
    ],
    answer: 2,
  },
  {
    q: 'At what speed in miles per hour must the time machine travel in Back to the Future?',
    options: ['88 mph', '55 mph', '100 mph', '120 mph'],
    answer: 0,
  },
  {
    q: 'In which year was the original Star Wars film released?',
    options: ['1973', '1975', '1980', '1977'],
    answer: 3,
  },
  {
    q: 'Who played Dr. Hannibal Lecter in The Silence of the Lambs?',
    options: ['Ralph Fiennes', 'Anthony Hopkins', 'Gary Oldman', 'Brian Cox'],
    answer: 1,
  },
  {
    q: 'Which actress played Rose DeWitt Bukater in Titanic?',
    options: [
      'Gwyneth Paltrow',
      'Cate Blanchett',
      'Kate Winslet',
      'Claire Danes',
    ],
    answer: 2,
  },
  {
    q: 'Which actor plays Wolverine in the main X-Men film series?',
    options: [
      'Hugh Jackman',
      'Patrick Stewart',
      'Ryan Reynolds',
      'Ian McKellen',
    ],
    answer: 0,
  },
  {
    q: 'In which US city is the bar in the sitcom Cheers located?',
    options: ['Chicago', 'New York', 'Philadelphia', 'Boston'],
    answer: 3,
  },
  {
    q: 'Which actor provided the voice of the older Ted narrating How I Met Your Mother?',
    options: ['Neil Patrick Harris', 'Bob Saget', 'Josh Radnor', 'Jason Segel'],
    answer: 1,
  },
  {
    q: 'In which fictional Indiana town is Parks and Recreation set?',
    options: ['Springfield', 'Scranton', 'Pawnee', 'Stars Hollow'],
    answer: 2,
  },
  {
    q: 'Who is the captain of the 99th Precinct in Brooklyn Nine-Nine?',
    options: ['Raymond Holt', 'Jake Peralta', 'Terry Jeffords', 'Amy Santiago'],
    answer: 0,
  },
  {
    q: 'Which actor played regional manager Michael Scott in the US version of The Office?',
    options: ['Rainn Wilson', 'John Krasinski', 'Ed Helms', 'Steve Carell'],
    answer: 3,
  },
  {
    q: "Which actor plays Joel in HBO's The Last of Us?",
    options: [
      'Oscar Isaac',
      'Pedro Pascal',
      'Jon Bernthal',
      'Timothy Olyphant',
    ],
    answer: 1,
  },
  {
    q: 'What type of business does Carmy Berzatto take over in The Bear?',
    options: [
      'A bakery',
      'A food truck',
      'A sandwich shop and restaurant',
      'A coffee roastery',
    ],
    answer: 2,
  },
  {
    q: 'Which sport does the title character coach in Ted Lasso?',
    options: [
      'Association football (soccer)',
      'American football',
      'Rugby',
      'Baseball',
    ],
    answer: 0,
  },
  {
    q: 'What is the real name of the lawyer known as Saul Goodman in Better Call Saul?',
    options: [
      'Mike Ehrmantraut',
      'Howard Hamlin',
      'Chuck McGill',
      'Jimmy McGill',
    ],
    answer: 3,
  },
  {
    q: 'Which 2019 HBO miniseries dramatized the 1986 nuclear disaster in Ukraine?',
    options: [
      'Band of Brothers',
      'Chernobyl',
      'The Pacific',
      'Mare of Easttown',
    ],
    answer: 1,
  },
  {
    q: 'Which character is the leader of the crew in the Fast & Furious franchise?',
    options: [
      "Brian O'Conner",
      'Luke Hobbs',
      'Dominic Toretto',
      'Roman Pearce',
    ],
    answer: 2,
  },
  {
    q: 'Who directed the 2017 horror film Get Out?',
    options: ['Jordan Peele', 'Ari Aster', 'James Wan', 'Mike Flanagan'],
    answer: 0,
  },
  {
    q: "Which director made the 2006 fantasy film Pan's Labyrinth?",
    options: [
      'Alfonso Cuarón',
      'Pedro Almodóvar',
      'Alejandro González Iñárritu',
      'Guillermo del Toro',
    ],
    answer: 3,
  },
  {
    q: 'Which actor played Maximus in Gladiator (2000)?',
    options: ['Mel Gibson', 'Russell Crowe', 'Joaquin Phoenix', 'Brad Pitt'],
    answer: 1,
  },
  {
    q: 'Who directed Gladiator (2000)?',
    options: ['Ridley Scott', 'Tony Scott', 'Oliver Stone', 'Ron Howard'],
    answer: 0,
  },
  {
    q: 'Which actor played Michael Corleone in The Godfather?',
    options: ['Robert De Niro', 'Dustin Hoffman', 'Al Pacino', 'Robert Duvall'],
    answer: 2,
  },
  {
    q: 'In which country is the film Amélie set?',
    options: ['Belgium', 'Italy', 'Switzerland', 'France'],
    answer: 3,
  },
  {
    q: 'What is the name of the top prize at the Cannes Film Festival?',
    options: ['Golden Lion', "Palme d'Or", 'Golden Bear', 'Silver Reel'],
    answer: 1,
  },
  {
    q: 'What is the name of the top prize at the Venice Film Festival?',
    options: ["Palme d'Or", 'Golden Bear', 'Golden Lion', 'Golden Globe'],
    answer: 2,
  },
  {
    q: 'What is the name of the top prize at the Berlin International Film Festival?',
    options: ['Golden Bear', 'Golden Lion', "Palme d'Or", 'Crystal Globe'],
    answer: 0,
  },
  {
    q: 'Which award is the primary honor for American prime-time television?',
    options: ['Tony', 'Grammy', 'BAFTA', 'Emmy'],
    answer: 3,
  },
  {
    q: 'Who is the only actor to have won three Academy Awards for Best Actor?',
    options: [
      'Jack Nicholson',
      'Daniel Day-Lewis',
      'Marlon Brando',
      'Tom Hanks',
    ],
    answer: 1,
  },
  {
    q: 'Which film won 11 Academy Awards in 2004, sweeping every category it was nominated in?',
    options: [
      'Chicago',
      'Gangs of New York',
      'The Lord of the Rings: The Return of the King',
      'Master and Commander',
    ],
    answer: 2,
  },
  {
    q: 'Which Pixar film follows a rat who dreams of becoming a chef in Paris?',
    options: ['Ratatouille', 'Cars', 'Up', 'Coco'],
    answer: 0,
  },
  {
    q: 'Which Pixar film is set largely inside the mind of an 11-year-old girl named Riley?',
    options: ['Soul', 'Luca', 'Turning Red', 'Inside Out'],
    answer: 3,
  },
  {
    q: 'Which Disney film features a lion cub named Simba?',
    options: ['The Jungle Book', 'The Lion King', 'Tarzan', 'Bambi'],
    answer: 1,
  },
  {
    q: 'Which actor voices Donkey in Shrek?',
    options: ['Jim Carrey', 'Mike Myers', 'Eddie Murphy', 'Chris Rock'],
    answer: 2,
  },
  {
    q: 'Which actor voices Buzz Lightyear in the original Toy Story?',
    options: ['Tim Allen', 'Tom Hanks', 'Billy Crystal', 'Don Rickles'],
    answer: 0,
  },
  {
    q: 'Which animated series features Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick?',
    options: [
      'Beavis and Butt-Head',
      'King of the Hill',
      'Family Guy',
      'South Park',
    ],
    answer: 3,
  },
  {
    q: 'Which animated sitcom features the Griffin family of Quahog, Rhode Island?',
    options: [
      'American Dad!',
      'Family Guy',
      'The Cleveland Show',
      "Bob's Burgers",
    ],
    answer: 1,
  },
  {
    q: 'Which long-running British soap opera is set in Albert Square?',
    options: ['Coronation Street', 'Emmerdale', 'EastEnders', 'Hollyoaks'],
    answer: 2,
  },
  {
    q: 'Which period drama follows the Crawley family and their servants?',
    options: ['Downton Abbey', 'Upstairs, Downstairs', 'Poldark', 'Bridgerton'],
    answer: 0,
  },
  {
    q: 'What type of business does Basil Fawlty run in Fawlty Towers?',
    options: ['A restaurant', 'A pub', 'A bed and breakfast', 'A hotel'],
    answer: 3,
  },
  {
    q: 'Which actor plays Indiana Jones in the original film series?',
    options: ['Kurt Russell', 'Harrison Ford', 'Sean Connery', 'Tom Selleck'],
    answer: 1,
  },
  {
    q: 'The Empire Strikes Back is which numbered episode of the Star Wars saga?',
    options: ['Episode IV', 'Episode VI', 'Episode V', 'Episode III'],
    answer: 2,
  },
  {
    q: 'Which 1983 crime film features the line "Say hello to my little friend!"?',
    options: ['Scarface', 'Goodfellas', 'Casino', 'Heat'],
    answer: 0,
  },
  {
    q: 'Which actor played the title role in the 2019 film Joker?',
    options: [
      'Joaquin Phoenix',
      'Heath Ledger',
      'Jared Leto',
      'Jack Nicholson',
    ],
    answer: 0,
  },
  {
    q: 'Which film actually won Best Picture at the 2017 Oscars after La La Land was mistakenly announced?',
    options: ['Moonlight', 'Arrival', 'La La Land', 'Manchester by the Sea'],
    answer: 0,
  },
];
