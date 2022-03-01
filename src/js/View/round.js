export default function showRoundResult(result, board, viewBoard) {
  result.forEach((v, i) => {
    if (v) {
      const ROUND_DIV = document.createElement("div")
      ROUND_DIV.classList.add("forward-icon");
      ROUND_DIV.innerText = "⬇️️";
      board[i]++;
      viewBoard.childNodes[i].append(ROUND_DIV);
    } 
  });
}