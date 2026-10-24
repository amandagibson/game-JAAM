const sports = [
  {
    q: "How long is a standard outdoor marathon?",
    options: ["10 miles", "26.2 miles", "13.1 miles", "50 kilometers"],
    answer: 1
  },
  {
    q: "Which country won the FIFA Men's World Cup in 2018?",
    options: ["Croatia", "Germany", "France", "Brazil"],
    answer: 2
  },
  {
    q: "How many players are on the pitch for one team in a standard association football match?",
    options: ["10", "11", "12", "9"],
    answer: 1
  },
  {
    q: "Which grand slam tennis tournament is played on traditional grass courts?",
    options: ["Roland Garros", "US Open", "Australian Open", "Wimbledon"],
    answer: 3
  },
  {
    q: "How many minutes long is a standard professional football (soccer) match, excluding extra time?",
    options: ["80 minutes", "90 minutes", "100 minutes", "60 minutes"],
    answer: 1
  },
  {
    q: "Which team has won the most UEFA Champions League titles?",
    options: ["AC Milan", "Bayern Munich", "Real Madrid", "Liverpool"],
    answer: 2
  },
  {
    q: "In cycling, what color jersey is worn by the general classification leader in the Tour de France?",
    options: ["Yellow", "Pink", "Red", "Green"],
    answer: 0
  },
  {
    q: "How many points is a try worth in Rugby Union?",
    options: ["3", "4", "5", "6"],
    answer: 2
  },
  {
    q: "Which city hosted the Summer Olympic Games in 2024?",
    options: ["Tokyo", "London", "Paris", "Rome"],
    answer: 2
  },
  {
    q: "Who holds the record for the most Formula 1 World Drivers' Championships alongside Michael Schumacher?",
    options: ["Max Verstappen", "Lewis Hamilton", "Ayrton Senna", "Sebastian Vettel"],
    answer: 1
  },
  {
    q: "What is the highest possible break in a single frame of standard snooker without fouls?",
    options: ["147", "150", "180", "140"],
    answer: 0
  },
  {
    q: "In golf, what term describes a score of two under par on a single hole?",
    options: ["Birdie", "Eagle", "Albatross", "Bogey"],
    answer: 1
  },
  {
    q: "Which European country originated the sport of Handball?",
    options: ["Denmark", "Germany", "Spain", "France"],
    answer: 1
  },
  {
    q: "How many players are on the court for one team in a handball match?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    q: "What color jersey is worn by the overall leader in the Giro d'Italia?",
    options: ["Yellow", "Red", "Gold", "Pink"],
    answer: 3
  },
  {
    q: "How many red balls are initially on the table at the start of a snooker match?",
    options: ["10", "12", "15", "20"],
    answer: 2
  },
  {
    q: "Which country has won the most Men's IIHF Ice Hockey World Championship titles?",
    options: ["Canada", "Russia/Soviet Union", "Sweden", "Finland"],
    answer: 1
  },
  {
    q: "How many field players (excluding the goalkeeper) are on the ice per team during regular ice hockey play?",
    options: ["4", "5", "6", "7"],
    answer: 1
  },
  {
    q: "Which nation won the UEFA Euro 2020 tournament (played in 2021)?",
    options: ["England", "Spain", "Italy", "Portugal"],
    answer: 2
  },
  {
    q: "In Athletics, how many hurdles must a runner clear in a 400m hurdles race?",
    options: ["8", "10", "12", "15"],
    answer: 1
  },
  {
    q: "What distance is covered in one lap of a standard Olympic outdoor running track?",
    options: ["200 meters", "400 meters", "800 meters", "500 meters"],
    answer: 1
  },
  {
    q: "Which country won the inaugural FIFA Women's World Cup in 1991?",
    options: ["Norway", "Germany", "United States", "China"],
    answer: 2
  },
  {
    q: "Who won the FIFA Men's World Cup in 2022?",
    options: ["France", "Argentina", "Brazil", "Croatia"],
    answer: 1
  },
  {
    q: "Which Formula 1 team is famous for its iconic 'Racing Red' (Rosso Corsa) livery?",
    options: ["McLaren", "Ferrari", "Mercedes", "Red Bull"],
    answer: 1
  },
  {
    q: "In Darts, what is the highest score possible with a three-dart throw?",
    options: ["150", "160", "180", "200"],
    answer: 2
  },
  {
    q: "How long is each period in a professional ice hockey match?",
    options: ["15 minutes", "20 minutes", "25 minutes", "30 minutes"],
    answer: 1
  },
  {
    q: "In tennis, what is the score called when both players reach 40-40?",
    options: ["Deuce", "Advantage", "Love", "Tiebreak"],
    answer: 0
  },
  {
    q: "Which city hosted the Winter Olympic Games in 2022?",
    options: ["Vancouver", "Sochi", "Pyeongchang", "Beijing"],
    answer: 3
  },
  {
    q: "In Rugby Union, how many players are in a starting lineup for one team?",
    options: ["11", "13", "15", "18"],
    answer: 2
  },
  {
    q: "What is the stroke used to start a point in table tennis?",
    options: ["Smash", "Serve", "Drive", "Push"],
    answer: 1
  },
  {
    q: "Which country has won the Six Nations Championship most frequently since 2000?",
    options: ["England", "France", "Wales", "Ireland"],
    answer: 0
  },
  {
    q: "In cricket, how many runs are awarded when a batsman hits the ball past the boundary on the bounce?",
    options: ["2", "4", "6", "8"],
    answer: 1
  },
  {
    q: "Which country is famous for dominating international field hockey with eight Olympic gold medals?",
    options: ["Netherlands", "Australia", "India", "Germany"],
    answer: 2
  },
  {
    q: "What is the maximum weight of a standard golf ball?",
    options: ["45.93 grams", "50.00 grams", "38.50 grams", "52.10 grams"],
    answer: 0
  },
  {
    q: "How many points is a bullseye worth in standard electronic or bristle target darts?",
    options: ["25", "50", "75", "100"],
    answer: 1
  },
  {
    q: "In rowing, how many oars does each rower hold in a 'sweep' boat?",
    options: ["1", "2", "3", "4"],
    answer: 0
  },
  {
    q: "Which nation won the UEFA Women's Euro 2022?",
    options: ["Germany", "England", "Sweden", "Spain"],
    answer: 1
  },
  {
    q: "In basketball, how many points is a shot taken from behind the arc worth?",
    options: ["2", "3", "4", "1"],
    answer: 1
  },
  {
    q: "Which track and field event features disciplines such as shot put, high jump, and javelin in a 10-event contest?",
    options: ["Pentathlon", "Heptathlon", "Decathlon", "Triathlon"],
    answer: 2
  },
  {
    q: "How many players are on the court per team in a beach volleyball match?",
    options: ["2", "4", "6", "3"],
    answer: 0
  },
  {
    q: "Which European country has won the most Alpine Skiing World Cup overall titles?",
    options: ["Switzerland", "Austria", "Norway", "France"],
    answer: 1
  },
  {
    q: "In Badminton, what is the maximum score a player can reach to win a standard game?",
    options: ["15", "21", "25", "30"],
    answer: 1
  },
  {
    q: "Which country hosts the famous classic cycle race known as 'Paris-Roubaix'?",
    options: ["Belgium", "France", "Netherlands", "Italy"],
    answer: 1
  },
  {
    q: "What equipment is used to hit the shuttlecock in badminton?",
    options: ["Paddle", "Racket", "Club", "Stick"],
    answer: 1
  },
  {
    q: "In American Football (NFL), how many points is a touchdown worth?",
    options: ["3", "6", "7", "2"],
    answer: 1
  },
  {
    q: "Which country won the FIFA Men's World Cup in 2010?",
    options: ["Netherlands", "Germany", "Spain", "Brazil"],
    answer: 2
  },
  {
    q: "How many total players are on the court during an indoor volleyball game (both teams combined)?",
    options: ["10", "12", "14", "16"],
    answer: 1
  },
  {
    q: "Who is the all-time top goalscorer in UEFA Champions League history?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"],
    answer: 1
  },
  {
    q: "In baseball, how many outs does a team get per inning during their batting turn?",
    options: ["2", "3", "4", "6"],
    answer: 1
  },
  {
    q: "Which tennis Grand Slam is known as the 'French Open'?",
    options: ["Roland Garros", "Wimbledon", "Flushing Meadows", "Melbourne Park"],
    answer: 0
  },
  {
    q: "In Water Polo, how many players per team (including goalkeeper) are in the water at one time?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    q: "How many dimples does a standard golf ball typically have on average?",
    options: ["100-200", "300-500", "600-800", "over 1000"],
    answer: 1
  },
  {
    q: "Which discipline combines cross-country skiing and rifle shooting?",
    options: ["Nordic Combined", "Biathlon", "Alpine Combined", "Ski Orienteering"],
    answer: 1
  },
  {
    q: "In Formula 1, what flag is waved to signal the end of a session or race?",
    options: ["Yellow flag", "Red flag", "Chequered flag", "Green flag"],
    answer: 2
  },
  {
    q: "Which nation won the Rugby World Cup in 2023?",
    options: ["New Zealand", "South Africa", "England", "France"],
    answer: 1
  },
  {
    q: "What is the highest achievable score in a single game of ten-pin bowling?",
    options: ["200", "250", "300", "400"],
    answer: 2
  },
  {
    q: "How long is a standard Olympic swimming pool?",
    options: ["25 meters", "50 meters", "100 meters", "75 meters"],
    answer: 1
  },
  {
    q: "Which country dominates the sport of Floorball with the most Men's World Championship titles?",
    options: ["Finland", "Sweden", "Switzerland", "Czech Republic"],
    answer: 1
  },
  {
    q: "In fencing, which weapon target area includes the entire body from head to toe?",
    options: ["Foil", "Épée", "Sabre", "Rapier"],
    answer: 1
  },
  {
    q: "How many chukkas are usually played in a standard match of Polo?",
    options: ["4 to 6", "8 to 10", "2 to 3", "12"],
    answer: 0
  },
  {
    q: "In Formula 1, how many points are awarded to the race winner?",
    options: ["20", "25", "30", "15"],
    answer: 1
  },
  {
    q: "Which country won the European Championship (Euro 2024)?",
    options: ["England", "France", "Spain", "Germany"],
    answer: 2
  },
  {
    q: "What is the diameter of a basketball hoop in inches?",
    options: ["16 inches", "18 inches", "20 inches", "22 inches"],
    answer: 1
  },
  {
    q: "In Athletics, what is the weight of the men's senior shot put ball?",
    options: ["5 kg", "6 kg", "7.26 kg", "8 kg"],
    answer: 2
  },
  {
    q: "Which iconic cycling grand tour takes place in Spain?",
    options: ["Giro d'Italia", "Vuelta a España", "Tour de Romandie", "Criterium du Dauphine"],
    answer: 1
  },
  {
    q: "In Boxing, how long does a standard professional round last?",
    options: ["2 minutes", "3 minutes", "4 minutes", "5 minutes"],
    answer: 1
  },
  {
    q: "In Equestrian eventing, which three disciplines are contested?",
    options: ["Dressage, Cross-Country, Jumping", "Jumping, Trot, Vaulting", "Polo, Dressage, Sprint", "Cross-Country, Polo, Vaulting"],
    answer: 0
  },
  {
    q: "Which nation won the Men's FIBA Basketball World Cup in 2023?",
    options: ["United States", "Serbia", "Germany", "Spain"],
    answer: 2
  },
  {
    q: "How many red cards equal an automatic ejection for a player in association football?",
    options: ["1", "2", "3", "None"],
    answer: 0
  },
  {
    q: "In Snooker, what is the point value of the yellow ball?",
    options: ["2", "3", "4", "5"],
    answer: 0
  },
  {
    q: "In Rugby League, how many players are on the field per team?",
    options: ["11", "13", "15", "12"],
    answer: 1
  },
  {
    q: "Which city hosted the Olympic Games three times (1908, 1948, 2012)?",
    options: ["Paris", "Athens", "London", "Los Angeles"],
    answer: 2
  },
  {
    q: "What stroke in swimming requires swimmers to move both arms symmetrically forward underwater while kicking their legs simultaneously (dolphin kick)?",
    options: ["Breaststroke", "Backstroke", "Butterfly", "Freestyle"],
    answer: 2
  },
  {
    q: "In Cricket, how many balls are bowled in one standard 'over'?",
    options: ["4", "6", "8", "10"],
    answer: 1
  },
  {
    q: "How many players are on an active roster on court during an NBA basketball game per team?",
    options: ["5", "6", "7", "11"],
    answer: 0
  },
  {
    q: "What color card is shown by a referee in football to temporarily send a player to a sin-bin in grassroots trials?",
    options: ["Green", "Blue", "Yellow", "Orange"],
    answer: 1
  },
  {
    q: "Which swimmer holds the record for the most total Olympic Gold Medals (23)?",
    options: ["Ian Thorpe", "Michael Phelps", "Ryan Lochte", "Caeleb Dressel"],
    answer: 1
  },
  {
    q: "What is the maximum number of touches a volleyball team is allowed before returning the ball over the net?",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    q: "Which martial art originated in Japan and translates to 'the gentle way'?",
    options: ["Karate", "Taekwondo", "Judo", "Kung Fu"],
    answer: 2
  },
  {
    q: "In Golf, what is a score of one under par on a single hole called?",
    options: ["Bogey", "Birdie", "Eagle", "Par"],
    answer: 1
  },
  {
    q: "Which country has won the most FIFA Women's World Cup titles?",
    options: ["Germany", "United States", "Norway", "Japan"],
    answer: 1
  },
  {
    q: "How many fences are jumped in total during the famous Grand National horse race at Aintree?",
    options: ["20", "30", "40", "15"],
    answer: 1
  },
  {
    q: "In speed skating, what distance is considered a short-track sprint standard?",
    options: ["500m", "1500m", "3000m", "5000m"],
    answer: 0
  },
  {
    q: "In Curling, what is the target area called where stones must land to score?",
    options: ["The Circle", "The House", "The Ring", "The Button"],
    answer: 1
  },
  {
    q: "In Snooker, what is the point value of the black ball?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    q: "What distance is an Olympic sprint hurdles race for women?",
    options: ["100m", "110m", "200m", "400m"],
    answer: 0
  },
  {
    q: "Which country won the inaugural UEFA Nations League in 2019?",
    options: ["Netherlands", "Portugal", "France", "Spain"],
    answer: 1
  },
  {
    q: "In Squash, how many points do you need to win a standard set?",
    options: ["9", "11", "15", "21"],
    answer: 1
  },
  {
    q: "What color cap does the starting goalkeeper usually wear in Water Polo?",
    options: ["Red", "White", "Blue", "Yellow"],
    answer: 0
  },
  {
    q: "How many players are on a field hockey team during play?",
    options: ["9", "10", "11", "12"],
    answer: 2
  },
  {
    q: "Which mountain range hosts famous alpine events like the Hahnenkamm race in Kitzbühel?",
    options: ["Pyrenees", "Alps", "Dolomites", "Carpathians"],
    answer: 1
  },
  {
    q: "In gymnastics, how many events make up the Men's Artistic Gymnastics competition?",
    options: ["4", "5", "6", "8"],
    answer: 2
  },
  {
    q: "Which country hosts the Famous '24 Hours of Le Mans' endurance race?",
    options: ["Germany", "Italy", "France", "United Kingdom"],
    answer: 2
  },
  {
    q: "In Table Tennis, how many serves does each player get before rotating?",
    options: ["2", "5", "1", "3"],
    answer: 0
  },
  {
    q: "What is the weight of an official men's Olympic Javelin?",
    options: ["600 grams", "700 grams", "800 grams", "1000 grams"],
    answer: 2
  },
  {
    q: "In Judo, what score immediately ends the match with a win?",
    options: ["Waza-ari", "Ippon", "Yuko", "Koka"],
    answer: 1
  },
  {
    q: "In Formula 1, which tire compound is denoted by a red stripe?",
    options: ["Hard", "Medium", "Soft", "Intermediate"],
    answer: 2
  },
  {
    q: "How many players are on the field in a Australian Rules Football team?",
    options: ["11", "15", "18", "22"],
    answer: 2
  },
  {
    q: "Which country won the FIFA Men's World Cup in 2006?",
    options: ["France", "Italy", "Germany", "Brazil"],
    answer: 1
  },
  {
    q: "In archery, what is the maximum score possible with a single arrow hitting the inner gold ring?",
    options: ["8", "9", "10", "12"],
    answer: 2
  }
];