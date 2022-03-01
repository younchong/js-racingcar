import verifyCar from "./Controller/CarNameVerification.js";
import makeTryCounterInput from "./View/tryCount.js";

function init() {
  let [carList, count] = [null, null];
  const CAR_NAME_INPUT = document.querySelector(".car-name-input");
  const CAR_NAME_BTN = document.querySelector(".car-name-button");
  
  CAR_NAME_BTN.addEventListener("click", () => {
    if (verifyCar(CAR_NAME_INPUT.value)) {
      carList = CAR_NAME_INPUT.value.split(",").map(name => name.trim());
      makeTryCounterInput(carList, count);
    } else {
      alert("0글자 이상 5글자 이하의 자동차 이름을 입력해주세요.");
    }
  });
};

init();

// ### 🎯🎯 step2
// - [ ] 자동차 경주 게임의 턴이 진행 될 때마다 1초의 텀(progressive 재생)을 두고 진행한다.
//     - [ ] 애니메이션 구현을 위해 `setInterval`, `setTimeout`, `requestAnimationFrame` 을 활용한다.
// - [ ] 정상적으로 게임의 턴이 다 동작된 후에는 결과를 보여주고
// - [ ] 2초 후에 축하의 alert 메세지를 띄운다.
// - [ ] 위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.
