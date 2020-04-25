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
      question: "Where are you",
      choices: ["a", "b", "c", "Here"],
      answer: "Here",
    },
  ];

  var score = 0;
  var arrayQuestion = 0;

  $(document).on("click", "#start", function (e) {
    e.preventDefault();
    for (var i = 0; i < questionsList.length; i++) {
      $("#question").text(questionsList[i].question);
      for (var i = 0; i < questionsList[i].choices.length; i++) {
        $("#choices").append(`
        <div data-id = ${i} id="choice">${questionsList[arrayQuestion].choices[i]}</div>`);
      }
      chooser(i);
    }
  });

  function chooser(num) {
    $(document).on("click", "#choice", function () {
      var chosen = $(this).attr("data-id");
      if (questionsList[num].choices[chosen] === questionsList[num].answer) {
        score++;
        console.log(score);
      }
    });
  }

  chooser(1);

  // function renderQuestion(arr) {
  //   for (var i =0; i<arr.length;i++) {
  //     $("#question").text(arr[i].question);
  //   }
  //   $("#choices").text(arr[arrayQuestion].choices);
  // }
});
