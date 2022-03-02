export default function tellWinner(carList, scoreBoard) {
  const winnerScore = Math.max(...scoreBoard);
  const WINNER_DIV = document.createElement("div");
  WINNER_DIV.classList.add("car-winner");
  const winner = [];
  scoreBoard.forEach((score, i) => {
    if (score === winnerScore) {
      winner.push(carList[i].name);
    }
  });
  
  setTimeout(() => {
    WINNER_DIV.innerText = `🏆 최종 우승자: ${winner.join(", ")} 🏆`
    setTimeout(() => {
      alert(`🎉 ${winner.join(", ")}님 축하합니다🎉`);
    }, 2000);
  }, 1000)

  document.body.append(WINNER_DIV);
}
