import makePlayers from "./players.js";

export default function makeTryCounterInput(carList, count) {
  const COUNTER_DIV = document.createElement("div");
  COUNTER_DIV.classList.add("car-counter")
  const COUNTER_EX = document.createElement("div");
  COUNTER_EX.innerText = "시도할 획수를 입력해주세요.";
  const COUNTER_INPUT = document.createElement("input");
  COUNTER_INPUT.type = "number";
  COUNTER_INPUT.min = 1;
  COUNTER_INPUT.max = 20;
  const COUNTER_BTN = document.createElement("button");
  COUNTER_BTN.innerText = "확인";
  COUNTER_DIV.append(COUNTER_EX);
  COUNTER_DIV.append(COUNTER_INPUT);
  COUNTER_DIV.append(COUNTER_BTN);
  let isClicked = false;
  
  COUNTER_BTN.addEventListener("click", () => {
    if (!isClicked) {
      isClicked = true;
      count = COUNTER_INPUT.value;
      makePlayers(carList, count);
    }
  })

  document.body.append(COUNTER_DIV);
}