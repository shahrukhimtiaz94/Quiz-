const quizData = [
  {
    question: "1. What does HTML stand for?",
    options: [
      "Hyper text markup language",
      "Hyperlinks and text markup language",
      "Home tool markup language",
    ],
    answer: "Hyper text markup language",
  },
  {
    question: "2. Who is making the Web standards?",
    options: ["Mozilla", "Google", "Microsoft"],
    answer: "Google",
  },
  {
    question: "3. Choose the correct HTML element for the largest heading:",
    options: ["<heading>", "<h1>", "<h6>"],
    answer: "<h1>",
  },
  {
    question: "4. What is the correct HTML element for inserting a line break?",
    options: ["<blr>", "<break>", "<br>"],
    answer: "<br>",
  },
  {
    question: "5. What is the correct HTML for adding a background color?",
    options: [
      "<body bg='yellow'>",
      "<background>yellow</background>",
      "<body style='background-color: red'>",
    ],
    answer: "<body style='background-color: red'>",
  },
  {
    question: "6. Choose the correct HTML element to define important text",
    options: ["<strong>", "<important>", "<bold>"],
    answer: "<strong>",
  },
  {
    question: "7. Choose the correct HTML element to define emphasized text",
    options: ["<i>", "<em>", "<italic>"],
    answer: "<em>",
  },
  {
    question: "8. What is the correct HTML for creating a hyperlink?",
    options: [
      "<a>www.google.com</a>",
      "<a link='www.google.com'>",
      "<a href='www.google.com'></a>",
    ],
    answer: "<a href='www.google.com'></a>",
  },
  {
    question: "9. Which character is used to indicate an end tag?",
    options: ["/", "<", "!"],
    answer: "/",
  },
  {
    question: "10. How can you open a link in a new tab/browser window?",
    options: [
      "<a href='url' target='new'>",
      "<a href='url' target='_blank'>",
      "<a newTab='url'>",
    ],
    answer: "<a href='url' target='_blank'>",
  },
  {
    question: "11. What tag is used to define a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>"],
    answer: "<a>",
  },
  {
    question: "12. why do we use br tag?",
    options: ["Start a new paragraph", "Create a list", " for break line"],
    answer: "for break line",
  },
  {
    question: "13. How do you add an image to a webpage?",
    options: ["<img src='url'>", "<src='url'>", "<media src='url'>"],
    answer: "<img src='url'>",
  },
  {
    question: "14. Which HTML tag is used to define a table cell?",
    options: ["<table>", "<td>", "<tr>"],
    answer: "<td>",
  },
  {
    question: "15.What does the <ul> tag represent?",
    options: ["Ordered list", "Unordered list", "Universal list"],
    answer: "Unordered list",
  },
  {
    question: "16. Choose the correct HTML element for the largest heading:",
    options: ["<heading>", "<h1>", "<h6>"],
    answer: "<h1>",
  },
  {
    question: "17. Who is making the Web standards?",
    options: ["Mozilla", "Google", "Microsoft"],
    answer: "Google",
  },
  {
    question: "18. What is the correct HTML for creating a hyperlink?",
    options: [
      "<a>www.google.com</a>",
      "<a link='www.google.com'>",
      "<a href='www.google.com'></a>",
    ],
    answer: "<a href='www.google.com'></a>",
  },
  {
    question: "19. why do we use br tag?",
    options: ["Start a new paragraph", "Create a list", " for break line"],
    answer: "for break line",
  },
  {
    question: "20. Which character is used to indicate an end tag?",
    options: ["/", "<", "!"],
    answer: "/",
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  for (let i = 0; i < quizData.length; i++) {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
      button.setAttribute("class", "buttons");
    });
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}
function showResult() {
  let hideDiv = document.getElementById("hideDiv");
  let hideDiv2 = document.getElementById("hideDiv2");
  hideDiv.style.display = "none";
  hideDiv2.style.display = "none";
  let quiz = document.getElementById("quiz");
  quiz.style.display = "block";
  var plName = document.getElementById('playerName');
  
  // Calculate percentage
  let percentage = (score / quizData.length) * 100;

  // Calculate grade
  let grade = '';
  if (percentage >= 90) {
    grade = 'A';
  } else if (percentage >= 80) {
    grade = 'B';
  } else if (percentage >= 70) {
    grade = 'C';
  } else if (percentage >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  // Display the result
  quiz.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>${plName.innerText} score: ${score}/${quizData.length}</p>
      <p>Percentage: ${percentage.toFixed(2)}%</p>
      <p>Grade: ${grade}</p>
      <p id="heading3"></p>
    `;

  // Set feedback based on score
  let elm = document.getElementById("heading3");
  if (score <= 5) {
    elm.innerText = "Sorry :( You have to Learn Again";
  }
  if (score <= 10 && score > 5) {
    elm.innerText = "Not bad, but I know you can do better!";
  }
  if (score <= 15 && score > 10) {
    elm.innerText = "Well, You're Passed!";
  }
  if (score <= 20 && score > 15) {
    elm.innerText = "Great, keep it up!";
  }
  if (score <= 25 && score > 20) {
    elm.innerText = "Sounds good, you can make it even better!";
  }
  if (score <= 30 && score > 25) {
    elm.innerText = "Congrats :) , You've won the quiz!";
  }
}

showQuestion();
