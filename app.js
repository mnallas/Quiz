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

  var scoreList = [];
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
      $(document).on("click", "#btnSubmit", function () {
        scoreList.push(getIS($("#initials").val(), score));
        var myhScoreJ = JSON.stringify(scoreList);
        localStorage.setItem("scoreList", myhScoreJ);
        console.log(scoreList);
      });
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

  function clearHighScores() {
    localStorage.removeItem("scoreList");
    window.location.reload();
  }

  function displayInitials() {
    var scoreList = JSON.parse(window.localStorage.getItem("scoreList"));
    // scoreList.sort(function (a, b) {
    //   return a.score - b.score;
    // });
    for (let i = 0; i < scoreList.length; i++) {
      $("#scoreList").append(
        `<div>scoreList[${i}].init + " " + scoreList[${i}].score</div>`
      );
    }
  }

  function getIS(str, num) {
    return [
      {
        init: str,
        num,
      },
    ];
  }
});
