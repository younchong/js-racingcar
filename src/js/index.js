import verifyCar from "./Controller/CarNameVerification.js";
import makeTryCounterInput from "./View/tryCount.js";

function init() {
  let [carList, count] = [null, null];
  const CAR_NAME_INPUT = document.querySelector(".car-name-input");
  const CAR_NAME_BTN = document.querySelector(".car-name-button");
  let isClicked = false;

  CAR_NAME_BTN.addEventListener("click", () => {
    if (!isClicked && verifyCar(CAR_NAME_INPUT.value)) {
      isClicked = true;
      carList = CAR_NAME_INPUT.value.split(",").map(name => name.trim());
      makeTryCounterInput(carList, count);
    } else {
      !isClicked && alert("0글자 이상 5글자 이하의 자동차 이름을 입력해주세요.");
    }
  });
};

init();
