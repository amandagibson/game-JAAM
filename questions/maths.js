const maths = [
  {
    q: 'What is 5 + 7?',
    options: ['10', '12', '13', '14'],
    answer: 1,
  },
  {
    q: 'What is 15 - 8?',
    options: ['5', '6', '7', '8'],
    answer: 2,
  },
  {
    q: 'What is 6 × 4?',
    options: ['20', '22', '24', '26'],
    answer: 2,
  },
  {
    q: 'What is 36 ÷ 6?',
    options: ['4', '5', '6', '7'],
    answer: 2,
  },
  {
    q: 'What is 9 × 9?',
    options: ['72', '81', '90', '99'],
    answer: 1,
  },
  {
    q: 'What is 100 - 45?',
    options: ['45', '50', '55', '65'],
    answer: 2,
  },
  {
    q: 'What is 12 + 18?',
    options: ['28', '30', '32', '35'],
    answer: 1,
  },
  {
    q: 'What is 56 ÷ 8?',
    options: ['6', '7', '8', '9'],
    answer: 1,
  },
  {
    q: 'What is 7 × 8?',
    options: ['48', '54', '56', '64'],
    answer: 2,
  },
  {
    q: 'What is 144 ÷ 12?',
    options: ['10', '11', '12', '14'],
    answer: 2,
  },
  {
    q: 'What is 25 + 37?',
    options: ['52', '62', '72', '57'],
    answer: 1,
  },
  {
    q: 'What is 90 - 36?',
    options: ['44', '54', '64', '56'],
    answer: 1,
  },
  {
    q: 'What is 11 × 11?',
    options: ['111', '121', '131', '101'],
    answer: 1,
  },
  {
    q: 'What is 81 ÷ 9?',
    options: ['7', '8', '9', '10'],
    answer: 2,
  },
  {
    q: 'What is 14 + 29?',
    options: ['41', '42', '43', '44'],
    answer: 2,
  },
  {
    q: 'What is 8²?',
    options: ['16', '32', '64', '81'],
    answer: 2,
  },
  {
    q: 'What is 3³?',
    options: ['9', '18', '27', '36'],
    answer: 2,
  },
  {
    q: 'What is the square root of 49?',
    options: ['6', '7', '8', '9'],
    answer: 1,
  },
  {
    q: 'What is the square root of 100?',
    options: ['5', '8', '10', '20'],
    answer: 2,
  },
  {
    q: 'What is 2⁵?',
    options: ['16', '24', '32', '64'],
    answer: 2,
  },
  {
    q: 'What is 1/2 + 1/2?',
    options: ['1/2', '1', '2', '3/2'],
    answer: 1,
  },
  {
    q: 'What is 1/4 of 20?',
    options: ['4', '5', '6', '10'],
    answer: 1,
  },
  {
    q: 'What is 3/4 of 40?',
    options: ['20', '25', '30', '35'],
    answer: 2,
  },
  {
    q: 'What is 1/3 + 1/3?',
    options: ['1/3', '2/3', '1', '2/6'],
    answer: 1,
  },
  {
    q: 'What is 5/6 - 2/6?',
    options: ['1/6', '2/6', '3/6', '4/6'],
    answer: 2,
  },
  {
    q: 'What is 2/3 of 18?',
    options: ['6', '9', '12', '15'],
    answer: 2,
  },
  {
    q: 'Which fraction is equivalent to 1/2?',
    options: ['2/3', '3/6', '4/6', '5/8'],
    answer: 1,
  },
  {
    q: 'What is 0.5 + 0.25?',
    options: ['0.60', '0.70', '0.75', '0.80'],
    answer: 2,
  },
  {
    q: 'What is 3.5 + 2.5?',
    options: ['5', '5.5', '6', '6.5'],
    answer: 2,
  },
  {
    q: 'What is 4.8 - 1.3?',
    options: ['3.0', '3.5', '4.0', '4.5'],
    answer: 1,
  },
  {
    q: 'What is 10% of 200?',
    options: ['10', '20', '25', '40'],
    answer: 1,
  },
  {
    q: 'What is 25% of 80?',
    options: ['10', '15', '20', '25'],
    answer: 2,
  },
  {
    q: 'What is 50% of 150?',
    options: ['50', '65', '75', '100'],
    answer: 2,
  },
  {
    q: 'What is 20% of 300?',
    options: ['30', '50', '60', '90'],
    answer: 2,
  },
  {
    q: 'A shirt costs $100 and has a 10% discount. What is the sale price?',
    options: ['$80', '$85', '$90', '$95'],
    answer: 2,
  },
  {
    q: 'Solve: x + 5 = 12',
    options: ['5', '6', '7', '8'],
    answer: 2,
  },
  {
    q: 'Solve: x - 4 = 9',
    options: ['5', '11', '13', '15'],
    answer: 2,
  },
  {
    q: 'Solve: 2x = 16',
    options: ['6', '7', '8', '9'],
    answer: 2,
  },
  {
    q: 'Solve: 3x = 21',
    options: ['5', '6', '7', '8'],
    answer: 2,
  },
  {
    q: 'Solve: x / 4 = 5',
    options: ['10', '15', '20', '25'],
    answer: 2,
  },
  {
    q: 'Solve: 2x + 3 = 11',
    options: ['3', '4', '5', '6'],
    answer: 1,
  },
  {
    q: 'Solve: 5x - 10 = 15',
    options: ['3', '4', '5', '6'],
    answer: 2,
  },
  {
    q: 'Simplify: 3a + 2a',
    options: ['5', '5a', '6a', 'a⁵'],
    answer: 1,
  },
  {
    q: 'Simplify: 7x - 3x',
    options: ['4', '4x', '10x', '21x'],
    answer: 1,
  },
  {
    q: 'If x = 3, what is 2x + 4?',
    options: ['8', '9', '10', '12'],
    answer: 2,
  },
  {
    q: 'If y = 5, what is y²?',
    options: ['10', '15', '20', '25'],
    answer: 3,
  },
  {
    q: 'What is the value of 3(4 + 2)?',
    options: ['14', '18', '20', '24'],
    answer: 1,
  },
  {
    q: 'Simplify: 2(x + 3)',
    options: ['2x + 3', '2x + 5', '2x + 6', 'x + 6'],
    answer: 2,
  },
  {
    q: 'Solve: x + 2 = 2x - 3',
    options: ['3', '4', '5', '6'],
    answer: 2,
  },
  {
    q: 'What is the perimeter of a square with side 5 cm?',
    options: ['10 cm', '15 cm', '20 cm', '25 cm'],
    answer: 2,
  },
  {
    q: 'What is the area of a square with side 6 cm?',
    options: ['12 cm²', '24 cm²', '36 cm²', '48 cm²'],
    answer: 2,
  },
  {
    q: 'What is the perimeter of a rectangle 8 cm long and 4 cm wide?',
    options: ['12 cm', '24 cm', '32 cm', '36 cm'],
    answer: 1,
  },
  {
    q: 'What is the area of a rectangle 9 cm long and 3 cm wide?',
    options: ['12 cm²', '18 cm²', '27 cm²', '36 cm²'],
    answer: 2,
  },
  {
    q: 'What is the area of a triangle with base 10 cm and height 6 cm?',
    options: ['16 cm²', '30 cm²', '60 cm²', '32 cm²'],
    answer: 1,
  },
  {
    q: 'How many degrees are in a right angle?',
    options: ['45°', '90°', '180°', '360°'],
    answer: 1,
  },
  {
    q: 'How many degrees are in a straight angle?',
    options: ['90°', '120°', '180°', '360°'],
    answer: 2,
  },
  {
    q: 'What is the sum of the interior angles of a triangle?',
    options: ['90°', '180°', '270°', '360°'],
    answer: 1,
  },
  {
    q: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'],
    answer: 1,
  },
  {
    q: 'How many sides does an octagon have?',
    options: ['6', '7', '8', '10'],
    answer: 2,
  },
  {
    q: 'What is the diameter of a circle with radius 7 cm?',
    options: ['7 cm', '14 cm', '21 cm', '49 cm'],
    answer: 1,
  },
  {
    q: 'What is the approximate value of pi (π)?',
    options: ['2.14', '3.14', '3.41', '4.13'],
    answer: 1,
  },
  {
    q: 'What is the circumference of a circle with radius 7 cm? Use π = 22/7.',
    options: ['22 cm', '44 cm', '49 cm', '154 cm'],
    answer: 1,
  },
  {
    q: 'What is the volume of a cube with side 3 cm?',
    options: ['9 cm³', '18 cm³', '27 cm³', '36 cm³'],
    answer: 2,
  },
  {
    q: 'How many faces does a cube have?',
    options: ['4', '6', '8', '12'],
    answer: 1,
  },
  {
    q: 'What is the area of a parallelogram with base 8 cm and height 5 cm?',
    options: ['13 cm²', '26 cm²', '40 cm²', '80 cm²'],
    answer: 2,
  },
  {
    q: 'What is the mean of 2, 4, and 6?',
    options: ['3', '4', '5', '6'],
    answer: 1,
  },
  {
    q: 'What is the median of 3, 7, and 9?',
    options: ['3', '7', '8', '9'],
    answer: 1,
  },
  {
    q: 'What is the mode of 2, 3, 3, 4, 5?',
    options: ['2', '3', '4', '5'],
    answer: 1,
  },
  {
    q: 'What is the range of 4, 8, 10, and 15?',
    options: ['7', '9', '11', '15'],
    answer: 2,
  },
  {
    q: 'What is the average of 10, 20, and 30?',
    options: ['15', '20', '25', '30'],
    answer: 1,
  },
  {
    q: 'A fair coin is tossed once. What is the probability of getting heads?',
    options: ['0', '1/4', '1/2', '1'],
    answer: 2,
  },
  {
    q: 'What is the probability of rolling a 6 on a fair six-sided die?',
    options: ['1/2', '1/3', '1/6', '1/12'],
    answer: 2,
  },
  {
    q: 'A bag contains 3 red balls and 2 blue balls. What is the probability of picking a red ball?',
    options: ['2/5', '3/5', '1/2', '3/2'],
    answer: 1,
  },
  {
    q: 'How many possible outcomes are there when rolling two fair six-sided dice?',
    options: ['12', '24', '30', '36'],
    answer: 3,
  },
  {
    q: 'What is the next number in the sequence: 2, 4, 6, 8, ...?',
    options: ['9', '10', '11', '12'],
    answer: 1,
  },
  {
    q: 'What is the next number in the sequence: 5, 10, 15, 20, ...?',
    options: ['22', '24', '25', '30'],
    answer: 2,
  },
  {
    q: 'What is the next number in the sequence: 1, 4, 9, 16, ...?',
    options: ['20', '24', '25', '36'],
    answer: 2,
  },
  {
    q: 'What is the next number in the sequence: 3, 6, 12, 24, ...?',
    options: ['36', '42', '48', '50'],
    answer: 2,
  },
  {
    q: 'What is the Roman numeral for 50?',
    options: ['X', 'L', 'C', 'D'],
    answer: 1,
  },
  {
    q: 'What is the smallest prime number?',
    options: ['0', '1', '2', '3'],
    answer: 2,
  },
  {
    q: 'Which of these numbers is prime?',
    options: ['9', '15', '17', '21'],
    answer: 2,
  },
  {
    q: 'What is the least common multiple (LCM) of 4 and 6?',
    options: ['8', '10', '12', '24'],
    answer: 2,
  },
  {
    q: 'What is the greatest common divisor (GCD) of 12 and 18?',
    options: ['2', '3', '6', '9'],
    answer: 2,
  },
  {
    q: 'Which of these numbers is divisible by 3?',
    options: ['14', '22', '27', '31'],
    answer: 2,
  },
  {
    q: 'What is the remainder when 17 is divided by 5?',
    options: ['1', '2', '3', '4'],
    answer: 1,
  },
  {
    q: 'What is 1 kilometer in meters?',
    options: ['10', '100', '1000', '10000'],
    answer: 2,
  },
  {
    q: 'How many centimeters are in 2 meters?',
    options: ['20', '100', '200', '2000'],
    answer: 2,
  },
  {
    q: 'How many grams are in 1 kilogram?',
    options: ['10', '100', '500', '1000'],
    answer: 3,
  },
  {
    q: 'How many minutes are in 3 hours?',
    options: ['120', '150', '180', '240'],
    answer: 2,
  },
  {
    q: 'A car travels 120 km in 2 hours. What is its average speed?',
    options: ['40 km/h', '50 km/h', '60 km/h', '80 km/h'],
    answer: 2,
  },
  {
    q: 'A book costs $12. How much do 5 books cost?',
    options: ['$50', '$55', '$60', '$65'],
    answer: 2,
  },
  {
    q: 'If 4 pens cost $8, how much does 1 pen cost?',
    options: ['$1', '$2', '$3', '$4'],
    answer: 1,
  },
  {
    q: 'A number increased by 20% becomes 120. What was the original number?',
    options: ['80', '90', '100', '110'],
    answer: 2,
  },
  {
    q: 'What is the simple interest on $1000 at 5% per year for 2 years?',
    options: ['$50', '$100', '$150', '$200'],
    answer: 1,
  },
  {
    q: 'What is the value of 2³ + 3²?',
    options: ['13', '15', '17', '19'],
    answer: 2,
  },
  {
    q: 'Evaluate: 18 ÷ 3 + 4 × 2',
    options: ['10', '14', '20', '24'],
    answer: 1,
  },
  {
    q: 'What is the absolute value of -15?',
    options: ['-15', '0', '10', '15'],
    answer: 3,
  },
  {
    q: 'What is -5 + 12?',
    options: ['-17', '-7', '7', '17'],
    answer: 2,
  },
  {
    q: 'What is -4 × 6?',
    options: ['-24', '-10', '10', '24'],
    answer: 0,
  },
  {
    q: 'What is the slope of the line y = 3x + 2?',
    options: ['2', '3', '-2', '-3'],
    answer: 1,
  },
  {
    q: 'What is the value of x² when x = -4?',
    options: ['-16', '-8', '8', '16'],
    answer: 3,
  },
  {
    q: 'Solve: 2x + 5 = 17',
    options: ['5', '6', '7', '8'],
    answer: 1,
  },
  {
    q: 'What is the hypotenuse of a right triangle with legs 3 cm and 4 cm?',
    options: ['5 cm', '6 cm', '7 cm', '8 cm'],
    answer: 0,
  },
  {
    q: 'What is the sum of the first five positive integers?',
    options: ['10', '12', '15', '20'],
    answer: 2,
  },
  {
    q: 'What is 15% of 200?',
    options: ['15', '20', '30', '40'],
    answer: 2,
  },
  {
    q: 'What is the value of 100 ÷ (5 × 4)?',
    options: ['4', '5', '10', '20'],
    answer: 1,
  },
  {
    q: 'If a = 2 and b = 3, what is ab + a?',
    options: ['6', '7', '8', '9'],
    answer: 2,
  },
];
