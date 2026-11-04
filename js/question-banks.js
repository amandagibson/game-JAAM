import { artLiterature } from "../questions/art-literature.js";
import { cultureTradition } from "../questions/culture-tradition.js";
import { filmTv } from "../questions/film-tv.js";
import { foodDrink } from "../questions/food-drink.js";
import { generalKnowledge } from "../questions/general-knowledge.js";
import { geography } from "../questions/geography.js";
import { history } from "../questions/history.js";
import { maths } from "../questions/maths.js";
import { music } from "../questions/music.js";
import { nature } from "../questions/nature.js";
import { science } from "../questions/science.js";
import { sports } from "../questions/sports.js";
import { technology } from "../questions/technology.js";
import { videoGames } from "../questions/videogames.js";

export const questionBanks = {
  "Art & Literature": { questions: artLiterature, color: "#e74c3c" },
  "Culture & Tradition": { questions: cultureTradition, color: "#8e44ad" },
  "Film & TV": { questions: filmTv, color: "#3498db" },
  "Food & Drink": { questions: foodDrink, color: "#16a085" },
  "General Knowledge": { questions: generalKnowledge, color: "#2ecc71" },
  Geography: { questions: geography, color: "#f1c40f" },
  History: { questions: history, color: "#e67e22" },
  Maths: { questions: maths, color: "#d35400" },
  Music: { questions: music, color: "#c0392b" },
  Nature: { questions: nature, color: "#9b59b6" },
  Science: { questions: science, color: "#2980b9" },
  "Sports & Leisure": { questions: sports, color: "#27ae60" },
  Technology: { questions: technology, color: "#f39c12" },
  "Video Games": { questions: videoGames, color: "#e84393" },
};
