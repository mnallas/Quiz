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
      answer: "Nallas",
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
    $("#question").text(questionsList[arrayQuestion].question);
    for (var i = 0; i < questionsList[arrayQuestion].choices.length; i++) {
      $("#choices").append(`
      <div data-id = ${i} id="choice">${questionsList[arrayQuestion].choices[i]}</div>`);
    }
  });

  $(document).on("click", "#choice", function () {
    var chosen = $(this).attr("data-id");
    console.log(questionsList[arrayQuestion].answer);
    arrayQuestion++;
  });

  // function renderQuestion(arr) {
  //   for (var i =0; i<arr.length;i++) {
  //     $("#question").text(arr[i].question);
  //   }
  //   $("#choices").text(arr[arrayQuestion].choices);
  // }
});
