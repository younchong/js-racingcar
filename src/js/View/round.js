export default function showRoundResult(result, board, viewBoard) {
  result.forEach((v, i) => {
    if (v) {
      const ROUND_DIV = document.createElement("div")
      ROUND_DIV.classList.add("spinner-container");
      const SPINNER_SPAN = document.createElement("span");
      SPINNER_SPAN.classList.add("material");
      SPINNER_SPAN.classList.add("spinner");
      ROUND_DIV.append(SPINNER_SPAN);
      board[i]++;
      viewBoard.childNodes[i].append(ROUND_DIV);

      setTimeout(() => {
        ROUND_DIV.removeChild(SPINNER_SPAN);
        ROUND_DIV.classList.remove("spinner-container")
        ROUND_DIV.classList.add("forward-icon");
        ROUND_DIV.innerText = "⬇️️";
      }, 1000);
    } 
  });
}
