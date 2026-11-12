<p align="center">
  <img src="assets/images/SpintellectLogo.svg" alt="Spintellect" width="420" />
</p>

A browser-based trivia game with a spinning category wheel, timed rounds, and persistent high scores. Spin the wheel to land on one of 14 categories, race the 15-second clock to earn cash, and survive with 3 lives as rounds grow longer.

## Features

- **Interactive Category Wheel:** HTML5 Canvas wheel featuring 14 trivia categories with smooth spin physics and a `$200` respin option.
- **Timed Trivia Rounds:** 15 seconds per question—faster answers earn more money (`$1` per remaining second).
- **Progressive Difficulty:** Starts at 5 questions per round and adds +1 question every 3 levels.
- **3-Lives Survival:** Wrong answers or timeouts cost a life; lose all 3 lives and the run ends.
- **In-Game Lifelines & Upgrades:** Give players additional ways to spend earned cash between rounds, such as buying a 50/50 hint, extra time, or a restored life.
- **Persistent High Score:** Saves the all-time high score and record holder's name to `localStorage` and displays them on the title screen.
- **Title Screen Audio & Video:** Full-screen background video with toggleable background music.

## Categories

Art & Literature • Film & TV • Music • Technology • Culture & Tradition • Food & Drink • General Knowledge • Geography • History • Maths • Nature • Science • Sports • Video Games

## Project Structure

```text
├── index.html               # App shell and screen containers (Title, Wheel, Quiz)
├── assets/
│   ├── images/              # Spintellect logo and tab icon SVG
│   ├── sounds/              # Background music
│   └── videos/              # Title screen background video
├── js/
│   ├── state.js             # Game/round state, game constants, and localStorage helpers
│   ├── titlepage.js         # Name validation, audio controls, and title leaderboard
│   ├── category-select.js   # Canvas wheel rendering, spin animation, and respin logic
│   ├── game.js              # Question shuffling, timers, scoring, lives, and round flow
│   ├── quiz-render.js       # DOM updates for HUD, questions, timers, and result views
│   └── main.js              # Screen switching and game initialization
├── questions/               # Question banks for each of the 14 categories
└── styles/                  # Modular stylesheets (base, layout, titlepage, wheel, game)
```

## Run It

Open `index.html` in your browser (or serve the folder with a local server such as VS Code Live Server). Nothing to install.

## Formatting

We use Prettier. Install the **Prettier Code formatter** extension in VS Code and your files will be formatted for you on save — [Find it here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Future Improvements

- **Prevent Repeat Questions (`usedQuestions`):** Track already-asked questions in `gameState` so landing on the same category multiple times in a single run never serves duplicate questions.
- **Top 5 Leaderboard:** Expand the single `localStorage` high score into a multi-row leaderboard that tracks the top scores and player names across sessions.
- **Reveal Correct Answer on Miss:** Highlight the right option when a player selects an incorrect answer or runs out of time before advancing to the next question.
- **Gameplay Sound Effects:** Add audio feedback for wheel spins, correct/wrong answers, low-timer ticks, and level-ups alongside the background music toggle.
