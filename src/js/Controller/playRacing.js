import showRoundResult from "../View/round.js";
import tellWinner from "../View/winner.js";

export default function playRacing(carList, count, div) {
  const scoreBoard = new Array(carList.length).fill(0);
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const result = carList.map(car => car.race());
      showRoundResult(result, scoreBoard, div); 

      if (i === count - 1) {
        tellWinner(carList, scoreBoard)
      }
    }, 1000 * i);
  }
}
