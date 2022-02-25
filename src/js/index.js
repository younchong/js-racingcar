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
  WINNER_DIV.classList.add("car-winner");
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
