$(document).ready(function () {
  var questionsList = [
    {
      question: "Who are you?",
      choices: ["a", "b", "c", "Myhkas"],
      answer: "Myhkas",
    },
    {
      question: "What are you?",
      choices: ["a", "b", "c", "Nallas"],
      answer: "c",
    },
    {
      question: "When are you?",
      choices: ["a", "b", "c", "Now"],
      answer: "Now",
    },
    {
      question: "Why are you?",
      choices: ["a", "b", "c", "Because"],
      answer: "Because",
    },
    {
      question: "Where are you?",
      choices: ["a", "b", "c", "Here"],
      answer: "Here",
    },
  ];

  var score = 0;
  var arrayQuestion = 0;
  var timeSet = 60;

  $(document).on("click", "#start", function () {
    setTime();
    $("#start").text("");

    renderQuestion(arrayQuestion);
    chooser(arrayQuestion);
  });

  function chooser(num) {
    $(document).on("click", "#choice", function () {
      var chosen = $(this).attr("data-id");

      if (questionsList[num].choices[chosen] === questionsList[num].answer) {
        score++;
        showAlert("Correct!");
        $("#container").empty();
        num++;
        renderQuestion(num);
      } else {
        showAlert("Wrong!");
        $("#container").empty();
        num++;
        renderQuestion(num);
      }
    });
  }

  $(document).on("click", "#reset", function () {
    clearHighScores();
  });

  function renderQuestion(num) {
    if (num === questionsList.length) {
      $("#container").append(`
      <div>All done! Your score is ${score}</div>
      <form>
      <input
        id="initials"
        placeholder="Please enter your initials"
        type="text"
      />
      <input id="btnSubmit" type="submit" value="Submit" />
    </form>`);
      $("#timer").remove();
    } else {
      $("#container").append(
        `<div id="question">${questionsList[num].question}</div>`
      );
      for (var i = 0; i < questionsList[i].choices.length; i++) {
        $("#container").append(`
    
              <div data-id = ${i} id="choice">${questionsList[num].choices[i]}</div>`);
      }
    }
  }

  function showAlert(str) {
    $("#alert").show();
    $("#alert").text(str);
    window.setTimeout(function () {
      $("#alert").hide();
    }, 3000);
  }

  function setTime() {
    var timerInterval = setInterval(function () {
      timeSet--;
      $("#timer").text("Time left: " + timeSet);

      if (timeSet === 0) {
        clearInterval(timerInterval);
        $("#timer").remove();
        $("#container").empty();
        $("#container").append(`
        <div>All done! Your score is ${score}</div>
        <form>
        <input
          id="initials"
          placeholder="Please enter your initials"
          type="text"
        />
        <input id="btnSubmit" type="submit" value="Submit" />
      </form>`);
      }
    }, 1000);
  }

  $(document).on("click", "#btnSubmit", function (e) {
    e.preventDefault();
    var scoreList = [];
    var hScore = [
      {
        init: $("#initials").val(),
        scor: score,
      },
    ];
    var myhScoreJ = JSON.stringify(hScore);
    window.localStorage.setItem("scoreList", myhScoreJ);
    scoreList.push(hScore);
    console.log(scoreList);
  });

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
    localStorage.removeItem("scoreList");
    window.location.reload();
  }
});
