const music = [
  {
    q: 'Which band released the 1969 album Abbey Road?',
    options: ['The Rolling Stones', 'The Kinks', 'The Who', 'The Beatles'],
    answer: 3,
  },
  {
    q: 'Who is known as the "Queen of Soul"?',
    options: [
      'Tina Turner',
      'Whitney Houston',
      'Aretha Franklin',
      'Diana Ross',
    ],
    answer: 2,
  },
  {
    q: 'How many keys does a standard modern piano have?',
    options: ['100', '92', '88', '76'],
    answer: 2,
  },
  {
    q: 'Which band was fronted by Freddie Mercury?',
    options: ['Led Zeppelin', 'Genesis', 'Queen', 'Deep Purple'],
    answer: 2,
  },
  {
    q: 'Which Swedish group won Eurovision in 1974 with the song "Waterloo"?',
    options: ['ABBA', 'Roxette', 'Ace of Base', 'Europe'],
    answer: 0,
  },
  {
    q: 'Who released the 1982 album Thriller?',
    options: ['Michael Jackson', 'Prince', 'Stevie Wonder', 'Lionel Richie'],
    answer: 0,
  },
  {
    q: 'Which composer wrote The Four Seasons?',
    options: [
      'Joseph Haydn',
      'Johann Sebastian Bach',
      'Antonio Vivaldi',
      'George Frideric Handel',
    ],
    answer: 2,
  },
  {
    q: 'Which composer wrote the Ninth Symphony, which features "Ode to Joy"?',
    options: [
      'Wolfgang Amadeus Mozart',
      'Franz Schubert',
      'Johannes Brahms',
      'Ludwig van Beethoven',
    ],
    answer: 3,
  },
  {
    q: 'How many strings does a standard violin have?',
    options: ['Three', 'Four', 'Six', 'Five'],
    answer: 1,
  },
  {
    q: "Which rapper's real name is Marshall Mathers?",
    options: ['Eminem', 'Snoop Dogg', 'Dr. Dre', '50 Cent'],
    answer: 0,
  },
  {
    q: 'Which singer released the 2011 album 21?',
    options: ['Duffy', 'Amy Winehouse', 'Adele', 'Florence Welch'],
    answer: 2,
  },
  {
    q: 'Which Taylor Swift album is named after the year she was born?',
    options: ['Reputation', '1989', 'Fearless', 'Lover'],
    answer: 1,
  },
  {
    q: 'Which band is Bono the lead singer of?',
    options: ['U2', 'The Cure', 'Simple Minds', 'INXS'],
    answer: 0,
  },
  {
    q: 'Which US city is widely regarded as the birthplace of jazz?',
    options: ['New Orleans', 'Chicago', 'Memphis', 'New York City'],
    answer: 0,
  },
  {
    q: 'Which singer-songwriter won the Nobel Prize in Literature in 2016?',
    options: ['Leonard Cohen', 'Bob Dylan', 'Neil Young', 'Paul Simon'],
    answer: 1,
  },
  {
    q: 'Which band released the 1973 album The Dark Side of the Moon?',
    options: ['Genesis', 'Pink Floyd', 'King Crimson', 'Yes'],
    answer: 1,
  },
  {
    q: 'Which artist released the 1989 song "Like a Prayer"?',
    options: ['Madonna', 'Cyndi Lauper', 'Cher', 'Janet Jackson'],
    answer: 0,
  },
  {
    q: 'Which Beyoncé album, released in 2016, is titled after a citrus fruit drink?',
    options: ['Renaissance', 'Lemonade', 'Dangerously in Love', '4'],
    answer: 1,
  },
  {
    q: 'Which band features Mick Jagger and Keith Richards?',
    options: [
      'Small Faces',
      'The Animals',
      'The Yardbirds',
      'The Rolling Stones',
    ],
    answer: 3,
  },
  {
    q: 'Which composer wrote the opera The Magic Flute?',
    options: [
      'Wolfgang Amadeus Mozart',
      'Gioachino Rossini',
      'Giuseppe Verdi',
      'Richard Wagner',
    ],
    answer: 0,
  },
  {
    q: 'In musical notation, what does "forte" mean?',
    options: ['Soft', 'Loud', 'Slow', 'Fast'],
    answer: 1,
  },
  {
    q: 'In musical notation, what does "allegro" mean?',
    options: [
      'Gradually softer',
      'Smooth and connected',
      'Fast and lively',
      'Slow and solemn',
    ],
    answer: 2,
  },
  {
    q: "Which Beatle was the band's drummer?",
    options: [
      'George Harrison',
      'John Lennon',
      'Paul McCartney',
      'Ringo Starr',
    ],
    answer: 3,
  },
  {
    q: 'Which singer is nicknamed "The Boss"?',
    options: ['Bob Seger', 'Bruce Springsteen', 'Billy Joel', 'Tom Petty'],
    answer: 1,
  },
  {
    q: 'Who is known as the "Godfather of Soul"?',
    options: ['James Brown', 'Ray Charles', 'Marvin Gaye', 'Otis Redding'],
    answer: 0,
  },
  {
    q: 'Which Queen guitarist holds a PhD in astrophysics?',
    options: ['John Deacon', 'Brian May', 'Jimmy Page', 'Roger Taylor'],
    answer: 1,
  },
  {
    q: 'Which band released the 1980 album Back in Black?',
    options: ['Kiss', 'AC/DC', 'Van Halen', 'Aerosmith'],
    answer: 1,
  },
  {
    q: 'Who was the lead singer of Led Zeppelin?',
    options: ['Ian Gillan', 'Robert Plant', 'Steven Tyler', 'Roger Daltrey'],
    answer: 1,
  },
  {
    q: 'Who was the lead singer of Nirvana?',
    options: ['Layne Staley', 'Chris Cornell', 'Eddie Vedder', 'Kurt Cobain'],
    answer: 3,
  },
  {
    q: 'Which 1991 Nirvana album features the baby on the cover?',
    options: ['Bleach', 'Nevermind', 'Incesticide', 'In Utero'],
    answer: 1,
  },
  {
    q: 'Which country was Bob Marley born in?',
    options: ['Trinidad and Tobago', 'Barbados', 'Jamaica', 'Cuba'],
    answer: 2,
  },
  {
    q: 'Which genre of music originated in the Bronx, New York, in the 1970s?',
    options: ['Hip hop', 'House', 'Punk', 'Disco'],
    answer: 0,
  },
  {
    q: 'Which South Korean group released the 2020 hit "Dynamite"?',
    options: ['EXO', 'TWICE', 'BTS', 'BLACKPINK'],
    answer: 2,
  },
  {
    q: 'Which Spice Girl was nicknamed "Posh Spice"?',
    options: ['Emma Bunton', 'Mel B', 'Victoria Beckham', 'Geri Halliwell'],
    answer: 2,
  },
  {
    q: 'Which Swedish DJ and producer is known for the song "Wake Me Up"?',
    options: ['Avicii', 'Swedish House Mafia', 'Alesso', 'Zedd'],
    answer: 0,
  },
  {
    q: 'Which Swedish songwriter and producer has written hits for Britney Spears, Katy Perry and Taylor Swift?',
    options: ['Benny Andersson', 'Max Martin', 'Robyn', 'Andreas Carlsson'],
    answer: 1,
  },
  {
    q: 'Which Swedish group released the 1993 hit "The Sign"?',
    options: ['Roxette', 'Army of Lovers', 'Ace of Base', 'The Cardigans'],
    answer: 2,
  },
  {
    q: 'Which Swedish singer won Eurovision in 2012 with "Euphoria"?',
    options: ['Robyn', 'Tove Lo', 'Zara Larsson', 'Loreen'],
    answer: 3,
  },
  {
    q: 'Which Swedish singer won Eurovision in 2015 with the song "Heroes"?',
    options: ['Darin', 'Eric Saade', 'Måns Zelmerlöw', 'Benjamin Ingrosso'],
    answer: 2,
  },
  {
    q: 'Which Norwegian band released the 1985 hit "Take On Me"?',
    options: ['Alphaville', 'Aqua', 'a-ha', 'Roxette'],
    answer: 2,
  },
  {
    q: 'In which country is the Glastonbury Festival held?',
    options: ['England', 'Wales', 'Ireland', 'Scotland'],
    answer: 0,
  },
  {
    q: 'In which US state is the Coachella festival held?',
    options: ['California', 'Arizona', 'Texas', 'Nevada'],
    answer: 0,
  },
  {
    q: 'Which instrument is Yo-Yo Ma famous for playing?',
    options: ['Violin', 'Double bass', 'Viola', 'Cello'],
    answer: 3,
  },
  {
    q: 'Which is the largest and lowest-pitched instrument of the standard orchestral string section?',
    options: ['Harp', 'Double bass', 'Cello', 'Viola'],
    answer: 1,
  },
  {
    q: 'Which instrument was Jimi Hendrix famous for playing?',
    options: ['Piano', 'Electric guitar', 'Bass guitar', 'Saxophone'],
    answer: 1,
  },
  {
    q: 'Which composer wrote the ballet The Nutcracker?',
    options: [
      'Igor Stravinsky',
      'Sergei Rachmaninoff',
      'Pyotr Ilyich Tchaikovsky',
      'Sergei Prokofiev',
    ],
    answer: 2,
  },
  {
    q: 'Which French composer wrote Boléro?',
    options: ['Georges Bizet', 'Maurice Ravel', 'Claude Debussy', 'Erik Satie'],
    answer: 1,
  },
  {
    q: 'Which Italian composer wrote the opera La Traviata?',
    options: [
      'Giuseppe Verdi',
      'Giacomo Puccini',
      'Vincenzo Bellini',
      'Gioachino Rossini',
    ],
    answer: 0,
  },
  {
    q: 'Which Puccini opera features the character Mimì?',
    options: ['Madama Butterfly', 'La bohème', 'Turandot', 'Tosca'],
    answer: 1,
  },
  {
    q: 'Which composer wrote the Brandenburg Concertos?',
    options: [
      'Joseph Haydn',
      'Georg Philipp Telemann',
      'Antonio Vivaldi',
      'Johann Sebastian Bach',
    ],
    answer: 3,
  },
  {
    q: 'How many symphonies did Beethoven complete?',
    options: ['Five', 'Twelve', 'Seven', 'Nine'],
    answer: 3,
  },
  {
    q: "What is the name of Beyoncé's stage alter ego?",
    options: ['Ziggy Stardust', 'Sasha Fierce', 'Roxie Hart', 'Slim Shady'],
    answer: 1,
  },
  {
    q: 'Which artist released the 2011 album Born This Way?',
    options: ['Pink', 'Katy Perry', 'Lady Gaga', 'Rihanna'],
    answer: 2,
  },
  {
    q: "Which rapper's 2017 album DAMN. won the Pulitzer Prize for Music?",
    options: ['Kanye West', 'Jay-Z', 'J. Cole', 'Kendrick Lamar'],
    answer: 3,
  },
  {
    q: 'Which artist released the 1984 album Purple Rain?',
    options: ['Michael Jackson', 'George Michael', 'Prince', 'David Bowie'],
    answer: 2,
  },
  {
    q: 'Which singer is known as the "King of Rock and Roll"?',
    options: [
      'Elvis Presley',
      'Jerry Lee Lewis',
      'Chuck Berry',
      'Little Richard',
    ],
    answer: 0,
  },
  {
    q: "What is the name of Elvis Presley's home in Memphis, Tennessee?",
    options: ['Monticello', 'Graceland', 'Biltmore', 'Neverland'],
    answer: 1,
  },
  {
    q: 'Which band released the 1976 album Hotel California?',
    options: ['Fleetwood Mac', 'Steely Dan', 'The Doobie Brothers', 'Eagles'],
    answer: 3,
  },
  {
    q: 'Which band released the 1997 album OK Computer?',
    options: ['Radiohead', 'Muse', 'Blur', 'Pulp'],
    answer: 0,
  },
  {
    q: 'Which band is fronted by Chris Martin?',
    options: ['Keane', 'Travis', 'Coldplay', 'Snow Patrol'],
    answer: 2,
  },
  {
    q: 'Which band is fronted by Brandon Flowers?',
    options: ['Arctic Monkeys', 'The Strokes', 'Kings of Leon', 'The Killers'],
    answer: 3,
  },
  {
    q: 'Which band recorded the 1995 song "Wonderwall"?',
    options: ['Blur', 'Supergrass', 'Oasis', 'The Verve'],
    answer: 2,
  },
  {
    q: 'Which Britpop band released the 1994 album Parklife?',
    options: ['Blur', 'Pulp', 'Elastica', 'Suede'],
    answer: 0,
  },
  {
    q: 'Which band released the 1977 album Rumours?',
    options: ['Fleetwood Mac', 'The Eagles', 'Heart', 'ABBA'],
    answer: 0,
  },
  {
    q: 'Which Caribbean country is Rihanna from?',
    options: ['Bahamas', 'Trinidad and Tobago', 'Jamaica', 'Barbados'],
    answer: 3,
  },
  {
    q: 'Which Canadian rapper released the 2018 album Scorpion?',
    options: ['Drake', 'Post Malone', 'Justin Bieber', 'The Weeknd'],
    answer: 0,
  },
  {
    q: 'Which Colombian singer released the song "Hips Don\'t Lie"?',
    options: ['Karol G', 'Jennifer Lopez', 'Selena Gomez', 'Shakira'],
    answer: 3,
  },
  {
    q: 'Which Puerto Rican singer performed "Despacito" with Daddy Yankee?',
    options: ['Luis Fonsi', 'Marc Anthony', 'Enrique Iglesias', 'Ricky Martin'],
    answer: 0,
  },
  {
    q: 'Which Puerto Rican artist released the 2022 album Un Verano Sin Ti?',
    options: ['J Balvin', 'Maluma', 'Bad Bunny', 'Ozuna'],
    answer: 2,
  },
  {
    q: 'Which singer released the 2017 hit "Shape of You"?',
    options: ['Sam Smith', 'Ed Sheeran', 'James Arthur', 'Shawn Mendes'],
    answer: 1,
  },
  {
    q: 'Which artist released the 2019 song "Blinding Lights"?',
    options: ['Bruno Mars', 'Dua Lipa', 'Post Malone', 'The Weeknd'],
    answer: 3,
  },
  {
    q: 'Which singer released the 2019 hit "Bad Guy"?',
    options: ['Halsey', 'Billie Eilish', 'Ariana Grande', 'Lorde'],
    answer: 1,
  },
  {
    q: 'Which singer released the 2021 debut single "drivers license"?',
    options: [
      'Olivia Rodrigo',
      'Gracie Abrams',
      'Conan Gray',
      'Sabrina Carpenter',
    ],
    answer: 0,
  },
  {
    q: 'Whose Eras Tour became the highest-grossing concert tour of all time?',
    options: ['Taylor Swift', 'Elton John', 'Beyoncé', 'Ed Sheeran'],
    answer: 0,
  },
  {
    q: 'Which rapper is married to Beyoncé?',
    options: ['Drake', 'Nas', 'Jay-Z', 'Kanye West'],
    answer: 2,
  },
  {
    q: 'Which California city is the hometown of the hip hop group N.W.A?',
    options: ['Oakland', 'San Diego', 'Sacramento', 'Compton'],
    answer: 3,
  },
  {
    q: 'Which rapper released the 1994 debut album Illmatic?',
    options: ['Ice Cube', 'Method Man', 'Nas', 'Notorious B.I.G.'],
    answer: 2,
  },
  {
    q: 'Which heavy metal band released the 1986 album Master of Puppets?',
    options: ['Anthrax', 'Megadeth', 'Slayer', 'Metallica'],
    answer: 3,
  },
  {
    q: 'Who was the original lead singer of Black Sabbath?',
    options: [
      'Bruce Dickinson',
      'Rob Halford',
      'Ozzy Osbourne',
      'Ronnie James Dio',
    ],
    answer: 2,
  },
  {
    q: 'Which band released the 1986 hit "Livin\' on a Prayer"?',
    options: ['Bon Jovi', 'Def Leppard', 'Poison', 'Mötley Crüe'],
    answer: 0,
  },
  {
    q: 'Which band released the 1987 album Appetite for Destruction?',
    options: ['Skid Row', 'Whitesnake', "Guns N' Roses", 'Mötley Crüe'],
    answer: 2,
  },
  {
    q: 'Which English city is the hometown of The Beatles?',
    options: ['Birmingham', 'London', 'Manchester', 'Liverpool'],
    answer: 3,
  },
  {
    q: 'Which US city is the home of Motown Records?',
    options: ['Chicago', 'Philadelphia', 'Detroit', 'Memphis'],
    answer: 2,
  },
  {
    q: 'Which US city is known as the home of country music and the Grand Ole Opry?',
    options: ['Atlanta', 'Nashville', 'Austin', 'Dallas'],
    answer: 1,
  },
  {
    q: 'Which singer was nicknamed "The Man in Black"?',
    options: ['Waylon Jennings', 'Roy Orbison', 'Willie Nelson', 'Johnny Cash'],
    answer: 3,
  },
  {
    q: 'Which country singer wrote and recorded "Jolene"?',
    options: ['Dolly Parton', 'Reba McEntire', 'Loretta Lynn', 'Tammy Wynette'],
    answer: 0,
  },
  {
    q: 'Which Andrew Lloyd Webber musical features the song "Memory"?',
    options: ['Starlight Express', 'Cats', 'Sunset Boulevard', 'Evita'],
    answer: 1,
  },
  {
    q: 'Which hit musical by Lin-Manuel Miranda tells the story of Alexander Hamilton?',
    options: ['Hamilton', 'Les Misérables', 'In the Heights', 'Hadestown'],
    answer: 0,
  },
  {
    q: 'Which musical features the characters Elphaba and Glinda?',
    options: ['Mamma Mia!', 'Frozen', 'Matilda', 'Wicked'],
    answer: 3,
  },
  {
    q: 'Which Andrew Lloyd Webber musical is set beneath the Paris Opera House?',
    options: [
      'Aspects of Love',
      'Les Misérables',
      'Chicago',
      'The Phantom of the Opera',
    ],
    answer: 3,
  },
  {
    q: 'In 1982, which audio format was first sold commercially?',
    options: ['MiniDisc', 'Cassette tape', 'Vinyl LP', 'Compact disc'],
    answer: 3,
  },
  {
    q: 'What does BPM stand for in music?',
    options: [
      'Bars per measure',
      'Beats per minute',
      'Bass and pitch modulation',
      'Beats per melody',
    ],
    answer: 1,
  },
  {
    q: 'How many lines does a standard musical staff have?',
    options: ['Six', 'Seven', 'Five', 'Four'],
    answer: 2,
  },
  {
    q: 'How many letter names are used for notes in Western music (A to G)?',
    options: ['Seven', 'Twelve', 'Five', 'Eight'],
    answer: 0,
  },
  {
    q: 'Which clef is typically used for higher-pitched notes?',
    options: ['Alto clef', 'Treble clef', 'Bass clef', 'Tenor clef'],
    answer: 1,
  },
  {
    q: 'Which instrument family does the flute belong to?',
    options: ['Percussion', 'Brass', 'Strings', 'Woodwind'],
    answer: 3,
  },
  {
    q: 'What is the term for singing without instrumental accompaniment?',
    options: ['Falsetto', 'Staccato', 'Legato', 'A cappella'],
    answer: 3,
  },
  {
    q: 'Which musical term means to gradually get louder?',
    options: ['Diminuendo', 'Ritardando', 'Crescendo', 'Fermata'],
    answer: 2,
  },
  {
    q: 'Which streaming service launched in October 2008?',
    options: ['Deezer', 'Spotify', 'Tidal', 'Apple Music'],
    answer: 1,
  },
  {
    q: 'Which singer-songwriter released the 1971 album Blue?',
    options: ['Carole King', 'Joan Baez', 'Carly Simon', 'Joni Mitchell'],
    answer: 3,
  },
];
