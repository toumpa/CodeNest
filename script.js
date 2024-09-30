function example1() {
  window.open('example1.html', '_blank');
}

function example2() {
  window.open('example2.html', '_blank');
}

function example3() {
  window.open('example3.html', '_blank');
}

function final() {
  window.open('final.html', '_blank');
}

function Video() {
  window.open('https://www.youtube.com/watch?v=KYxLEDF6kjs', '_blank');
}

function logical() {
  window.open('http://photodentro.edu.gr/aggregator/lo/photodentro-lor-8521-10528', '_blank');
}

function checkName() {
  const reservedWords = ["auto", "break", "case", "char", "const", "continue", "default", "do", "double", "else", "enum", "extern", "float", "for", "goto", "if", "int", "long", "register", "return", "short", "signed", "sizeof", "static", "struct", "switch", "typedef", "union", "unsigned", "void", "volatile", "while"];
  const name = document.getElementById("variableName").value.trim();

  const isValid = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name) && !reservedWords.includes(name);

  var result = document.getElementById("result10");
  if (isValid) {
      result.innerHTML = "&#10004; Το όνομα αυτό είναι αποδεκτό! Μπράβο.";
  } else {
      result.innerHTML = "&#10060; Το όνομα αυτό δεν είναι αποδεκτό στην C.";
  }
}

function checkAnswersGeneric(quizId, correctAnswersArray, totalQuestions) {
  let correctAnswers = 0;
  let answers = [];

  correctAnswersArray.forEach((correctAnswer, index) => {
      let questionId = index + 1;
      let userAnswer = document.querySelector(`input[name="q${questionId}"]:checked`);
      
      if (userAnswer) {
          let isCorrect = userAnswer.value === correctAnswer;
          if (isCorrect) correctAnswers++;
          answers.push({
              question_id: questionId,
              user_answer: userAnswer.value,
              correct_answer: correctAnswer,
              is_correct: isCorrect
          });
      }
  });

  // Αποστολή των απαντήσεων στον server
  sendQuizResults(quizId, answers);

  // Εμφάνιση των αποτελεσμάτων
  let result = document.getElementById(`result${quizId}`);
  result.innerHTML = `Απαντήσατε σωστά σε ${correctAnswers} από τις ${totalQuestions} ερωτήσεις.`;
}


function sendQuizResults(quizId, answers) {

  fetch('/submit-quiz', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quiz_id: quizId, answers: answers }),
  })

  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
  })

  .catch((error) => {
      console.error('Error:', error);
  });
}


function checkAnswers7() {
// Λήψη απαντήσεων από τα πεδία κειμένου
const q1 = document.getElementById("q1").value.trim();
const q2 = document.getElementById("q2").value.trim();
const q3 = document.getElementById("q3").value.trim();
const q4 = document.getElementById("q4").value.trim();
const q5 = document.getElementById("q5").value.trim();

// Σωστές απαντήσεις
const correctAnswers = ["printf()", "scanf()", "%d", "%f", "&"];

// Μετρητής σωστών απαντήσεων
let score = 0;

// Έλεγχος των απαντήσεων
// if (q1 === correctAnswers[0]) score++;
// if (q2 === correctAnswers[1]) score++;
// if (q3 === correctAnswers[2]) score++;
// if (q4 === correctAnswers[3]) score++;
// if (q5 === correctAnswers[4]) score++;

// // Εμφάνιση αποτελέσματος
// const result = document.getElementById("result7");
// result.innerHTML = "Απαντήσατε σωστά σε " + score + " από τις 5 ερωτήσεις.";
// if (score === 5) {
//     result.className = "result correct";
// } else {
//     result.className = "result incorrect";
// }

const answers = [
  { question_id: 1, user_answer: q1, correct_answer: correctAnswers[0], is_correct: q1 === correctAnswers[0] },
  { question_id: 2, user_answer: q2, correct_answer: correctAnswers[1], is_correct: q2 === correctAnswers[1] },
  { question_id: 3, user_answer: q3, correct_answer: correctAnswers[2], is_correct: q3 === correctAnswers[2] },
  { question_id: 4, user_answer: q4, correct_answer: correctAnswers[3], is_correct: q4 === correctAnswers[3] },
  { question_id: 5, user_answer: q5, correct_answer: correctAnswers[4], is_correct: q5 === correctAnswers[4] }
];

// Έλεγχος των απαντήσεων
answers.forEach(answer => {
  if (answer.is_correct) score++;
});

// Εμφάνιση αποτελέσματος
const result = document.getElementById("result7");
result.innerHTML = "Απαντήσατε σωστά σε " + score + " από τις 5 ερωτήσεις.";
if (score === 5) {
  result.className = "result correct";
} else {
  result.className = "result incorrect";
}

// Αποστολή αποτελεσμάτων στον server
sendResultsToServer(7, score, 5, answers);

}

function checkAnswers8() {
  let score = 0;
  const totalQuestions = 4;

  const answers = {
    q1: 'c',
    q2: 'b',
    q3: 5,
    q4: ['c', 'd']
  };

  const userAnswers = [];

  const q1 = document.getElementsByName('q1');
  for (let i = 0; i < q1.length; i++) {
    if (q1[i].checked) {
      userAnswers.push({
        question_id: 1,
        user_answer: q1[i].value,
        correct_answer: answers.q1,
        is_correct: q1[i].value === answers.q1
      });
      if (q1[i].value === answers.q1) score++;
      break;
    }
  }

  const q2 = document.getElementsByName('q2');
  for (let i = 0; i < q2.length; i++) {
    if (q2[i].checked) {
      userAnswers.push({
        question_id: 2,
        user_answer: q2[i].value,
        correct_answer: answers.q2,
        is_correct: q2[i].value === answers.q2
      });
      if (q2[i].value === answers.q2) score++;
      break;
    }
  }

  const userInput = document.getElementById("q3-input").value;
  userAnswers.push({
    question_id: 3,
    user_answer: userInput,
    correct_answer: answers.q3,
    is_correct: parseInt(userInput) === answers.q3
  });
  if (parseInt(userInput) === answers.q3) score++;

  const q4 = document.getElementsByName('q4');
  let box = [];
  for (let i = 0; i < q4.length; i++) {
    if (q4[i].checked) {
      box.push(q4[i].value);
    }
  }
  const isCorrectQ4 = JSON.stringify(box.sort()) === JSON.stringify(answers.q4.sort());
  userAnswers.push({
    question_id: 4,
    user_answer: box,
    correct_answer: answers.q4,
    is_correct: isCorrectQ4
  });
  if (isCorrectQ4) score++;

  var result = document.getElementById("result8");
  result.innerHTML = "Απαντήσατε σωστά σε " + score + " από τις 4 ερωτήσεις.";

  // Αποστολή αποτελεσμάτων στον server
  sendResultsToServer(8, score, totalQuestions, userAnswers);
}


function sendResultsToServer(quizId, score, totalQuestions, answers) {
  
  const payload = {   //ti tha steiloyme
    quiz_id: quizId,
    score: score,
    totalQuestions: totalQuestions,
    answers: answers
  };

  fetch('/submit-quiz', {
    method: 'POST', //post methodos
    headers: {
      'Content-Type': 'application/json', //se json file
    },
    body: JSON.stringify(payload),  //payload = dedomena poy orisame pano
  })

  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })

  .catch((error) => {
    console.error('Error:', error);
  });
}


function displayResults(results, totalScore) {
  const container = document.getElementById('showResultsBtnMSG');
  container.innerHTML = '';

  let resultHtml = `<p>Εδώ μπορείς να δεις αναλυτικά την <b>επίδοση σου</b> κατά την διάρκεια όλων των μαθημάτων.</p><br><br>`

  resultHtml += `<h2>Συνολική βαθμολογία: <b class='magenta'>${totalScore}/38</b></h2><br><br>`;
  resultHtml += '<ul>';

  results.forEach(result => {
      const correctnessClass = result.is_correct ? 'green' : 'red';
      const correctnessText = result.is_correct ? 'Σωστό' : 'Λάθος';

      resultHtml += `
          <div class="table-container">
            <table>
              <tr>
                <td><b class='blue'>Κουίζ: ${result.quiz_id}</b></td>
                <td><b class='magenta'>Ερώτηση: ${result.question_id}</b></td>
                <td>Η απάντησή σας: <b>${result.user_answer}</b></td>
                <td>Σωστή απάντηση: <b>${result.correct_answer}</b></td>
                <td>Αποτέλεσμα: <b class='${correctnessClass}'>${correctnessText}</b></td>
              </tr>
            </table>   
          </div>
      `;
  });

  resultHtml += '</ul>';
  container.innerHTML = resultHtml;
}


//hide main message and show only intro
document.getElementById('Cintro').style.visibility = "visible"
document.getElementById('CvarMSG').style.visibility = "hidden"
document.getElementById('cMainMSG').style.visibility = "hidden"
document.getElementById('cOppMSG').style.visibility = "hidden"
document.getElementById('cStandardMSG').style.visibility = "hidden"
document.getElementById('cFlow1MSG').style.visibility = "hidden"
document.getElementById('cFlow2MSG').style.visibility = "hidden"
document.getElementById('cBreakMSG').style.visibility = "hidden"
document.getElementById('cArraysMSG').style.visibility = "hidden"
document.getElementById('cStringMSG').style.visibility = "hidden"
document.getElementById('cFuncMSG').style.visibility = "hidden"
document.getElementById('cPointersMSG').style.visibility = "hidden"
document.getElementById('cStructMSG').style.visibility = "hidden"
document.getElementById('cProgMSG').style.visibility = "hidden"
document.getElementById('showResultsBtnMSG').style.visibility = "hidden"


document.getElementById('cVar').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "visible"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cMain').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "visible"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cOpp').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "visible"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cStandard').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "visible"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cFlow1').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "visible"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cFlow2').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "visible"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cBreak').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "visible"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cArrays').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cArraysMSG').style.visibility = "visible"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cStrings').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "visible"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cFunc').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "visible"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cPointers').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "visible"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cStruct').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "visible"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('cProg').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "visible"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "hidden"
};

document.getElementById('showResultsBtn').onclick = function() {
  document.getElementById('Cintro').style.visibility = "hidden"
  document.getElementById('CvarMSG').style.visibility = "hidden"
  document.getElementById('cMainMSG').style.visibility = "hidden"
  document.getElementById('cOppMSG').style.visibility = "hidden"
  document.getElementById('cFlow2MSG').style.visibility = "hidden"
  document.getElementById('cStandardMSG').style.visibility = "hidden"
  document.getElementById('cFlow1MSG').style.visibility = "hidden"
  document.getElementById('cBreakMSG').style.visibility = "hidden"
  document.getElementById('cProgMSG').style.visibility = "hidden"
  document.getElementById('cArraysMSG').style.visibility = "hidden"
  document.getElementById('cStringMSG').style.visibility = "hidden"
  document.getElementById('cFuncMSG').style.visibility = "hidden"
  document.getElementById('cPointersMSG').style.visibility = "hidden"
  document.getElementById('cStructMSG').style.visibility = "hidden"
  document.getElementById('showResultsBtnMSG').style.visibility = "visible"
};

document.getElementById('showResultsBtn').addEventListener('click', function() {
  
  fetch('/user-results')

  .then(response => response.json())
  .then(data => {
      displayResults(data.results, data.totalScore);
  })
  
  .catch((error) => {
      console.error('Error:', error);
  });
});