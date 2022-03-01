import showRoundResult from "../View/round.js";
import tellWinner from "../View/winner.js";

export default function playRacing(carList, count, div) {
  let scoreBoard = new Array(carList.length).fill(0);
  for (let i = 0; i < count; i++) {
    let result = carList.map(car => car.race());
    showRoundResult(result, scoreBoard, div);
  }

  tellWinner(carList, scoreBoard)
}
