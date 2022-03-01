import makeTryCounterInput from "../View/tryCount.js";

export default function verifyCar(input) {
  const carList = input.split(",").map(v => v.trim());

  carList.forEach(car => {
    if (car.length <= 0 || 5 < car.length) {
      return false;
    }
  });

  return true;
}
