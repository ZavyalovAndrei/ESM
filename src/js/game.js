class Game {
  start() {
    console.log('game started');
  }
}

const gameDefault = new Game();
export default gameDefault;

import defaultCharacter from "./domain.js";

export class GameSavingData {
}
 
export function readGameSaving() {
}
  
export function writeGameSaving() {
}