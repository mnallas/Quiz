function storeInitials() {
  var scoreList = JSON.parse(window.localStorage.getItem("scoreList")) || [];
  scoreList.sort(function (a, b) {
    return a.score - b.score;
  });
  scoreList.forEach(function (score) {
    var listItem = document.createElement("li");
    listItem.textContent = score.initials + " " + score.score;
    var showScore = document.getElementById("score");
    showScore.appendChild(listItem);
  });
}

function clearHighScores() {
  window.localStorage.removeItem("score");
  windows.location.reload();
}

//document.getElementById("reset");

//storeInitials();

// setup variable that will contain store (object)
// score and initals
// var hScore = [
//   {
//     init: "#initials",
//     scor:
//   },
// ];
// var myhScoreJ = JSON.stringify(hScore);

// localStorage.setItem("scoreList", hScore);
// push the score to the var you created
// setItem to localStorage
// Stringify
