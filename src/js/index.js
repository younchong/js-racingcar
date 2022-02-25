// ### 🎯 step1
//  입력받기
// - [x] 주어진 횟수를 input(number)으로 입력받을 수 있다.(사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다)
// - [x] n대의 자동차를 input으로 입력받을 수 있고, 자동차에 이름을 부여할 수 있다. 자동차 이름은 `쉼표(,)`를 기준으로 구분하며 이름은 5자 이하만 가능하다.
// - [x] 주어진 횟수동안에 자동차는 전진 또는 멈출 수 있다.
//  경주
// - [x] 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
// - [x] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
//  완료
// - [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
// - [x] 우승자가 여러명일 경우 `,`를 이용하여 구분한다.
// TDD를 곁들인...
import Car from "./Car.js";

function main() {
  let [carList, count] = [null, null];
  const CAR_NAME_INPUT = document.querySelector(".car-name-input");
  const CAR_NAME_BTN = document.querySelector(".car-name-button");
  

  CAR_NAME_BTN.addEventListener("click", () => {
    const inputResult = CAR_NAME_INPUT.value;
    carList = inputResult.split(",").map(v => v.trim());
    verifyCar(carList);
    CAR_NAME_INPUT.value = "";
  })

};

function verifyCar(carList, count) {
  let isOk = true;
  carList.forEach(car => {
    if (car.length > 5) {
      carList = [];
      isOk = false;
      alert("5자 이하의 이름을 입력해주세요.");
    }
  })
  
  isOk && makeCount(carList, count);
}

function makeCount(carList, count) {
  const COUNTER_DIV = document.createElement("div");
  COUNTER_DIV.classList.add("car-counter")
  const COUNTER_EX = document.createElement("div");
  COUNTER_EX.innerText = "시도할 획수를 입력해주세요.";
  const COUNTER_INPUT = document.createElement("input");
  COUNTER_INPUT.type = "number";
  const COUNTER_BTN = document.createElement("button");
  COUNTER_BTN.innerText = "확인";
  COUNTER_DIV.append(COUNTER_EX);
  COUNTER_DIV.append(COUNTER_INPUT);
  COUNTER_DIV.append(COUNTER_BTN);

  COUNTER_BTN.addEventListener("click", () => {
    count = COUNTER_INPUT.value;
    makeResult(carList, count);
  })

  document.body.append(COUNTER_DIV);
}

function makeResult(carList, count) {
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

function playRacing(carList, count, div) {
  let result = carList.map(car => car.race());
  let scoreBoard = new Array(carList.length).fill(0);
  for (let i = 0; i < count; i++) {
    
    result.forEach((v, i) => {
      if (v) {
        const ROUND_DIV = document.createElement("div")
        ROUND_DIV.classList.add("forward-icon");
        ROUND_DIV.innerText = "⬇️️";
        scoreBoard[i]++;
        div.childNodes[i].append(ROUND_DIV);
      } 
    });
    result = carList.map(car => car.race());
  }
  tellWinner(carList, scoreBoard);
}

function tellWinner(carList, scoreBoard) {
  const winnerScore = Math.max(...scoreBoard);
  const WINNER_DIV = document.createElement("div");
  const winner = [];
  scoreBoard.forEach((score, i) => {
    if (score === winnerScore) {
      winner.push(carList[i].name);
    }
  });
  WINNER_DIV.innerText = `🏆 최종 우승자: ${winner.join(", ")} 🏆`

  document.body.append(WINNER_DIV);
}
// refactoring 필수
main();
