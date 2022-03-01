import Car from "../Car.js";
import playRacing from "../Controller/playRacing.js";

export default function makePlayers(carList, count) {
  const RESULT_DIV = document.createElement("div");
  const PLAYERS_DIV = document.createElement("div");
  RESULT_DIV.classList.add("car-result");
  PLAYERS_DIV.classList.add("car-players");
  carList = carList.map(car => new Car(car));

  for (let i = 0; i < carList.length; i++) {
    const PLAYER_DIV = document.createElement("div");
    const PLAYER_NAME = document.createElement("div");
    PLAYER_NAME.classList.add("car-player-name");
    PLAYER_NAME.innerText = `${carList[i].name}`;
    PLAYER_DIV.append(PLAYER_NAME);
    PLAYERS_DIV.append(PLAYER_DIV);
  }
  
  RESULT_DIV.append(PLAYERS_DIV);
  document.body.append(RESULT_DIV);
  playRacing(carList, count, PLAYERS_DIV);
}