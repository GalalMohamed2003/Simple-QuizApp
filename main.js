const question = [
    {
        question: "( n power 2 = 4) then n equal ?",
        answers: [
            { text: "3", correct: false },
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false }

        ]
    },
    {
        question: "(n power 6 = 729) then n equal ?",
        answers: [
            { text: "3", correct: true },
            { text: "5", correct: false },
            { text: "2", correct: false },
            { text: "7", correct: false }

        ]
    },
    {
        question: "(n power 5 = 3125) then n equal ?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "5", correct: true },
            { text: "3", correct: false },


        ]
    },
    {
        question: " Natural Number is ",
        answers: [
            { text: "N = {1,2,3,4,5,6,7,8,9,10.....}", correct: true },
            { text: "N = {0,1,2,3,4,5,6,7,8,9,10.....}", correct: false }
        ]
    },
    {
        question: "if (15/x) = (-3/4)  x equal ?",
        answers: [
            { text: "-5", correct: false },
            { text: "5", correct: false },
            { text: "-20", correct: true },
            { text: "20", correct: false },


        ]
    },
    {
        question: "the Number (5/3) > ....",
        answers: [
            { text: "(10/3)", correct: false },
            { text: "(25/9)", correct: false },
            { text: "(3/5)", correct: true },
            { text: "(10/6)", correct: false },


        ]
    },
    {
        question: "هل صليت علي النبي اليوم ؟",
        answers: [
            { text: "نعم ", correct: true },
            { text: "نعم", correct: true }
        ]
    },
    {
        question: "2^(-8) equal ?",
        answers: [
            { text: "50", correct: false },
            { text: "63", correct: false },
            { text: "64", correct: true },
            { text: "60", correct: false },


        ]
    },
    {
        question: " 0^(3) equal ?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: true }
        ]
    },
    {
        question: " (1^8) / (4^8) equal ?",
        answers: [
            { text: "511", correct: false },
            { text: "513", correct: false },
            { text: "512", correct: true },
            { text: "510", correct: false },


        ]
    }
];
const questionElement = document.getElementById('question'),
    answerButton = document.getElementById('answer-buttons'),
    nextButton = document.getElementById('next-btn');


let currentQuestionIndex = 0,
    score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex],
        questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question;
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerHTML = answers.text
        button.classList.add('btn')
        answerButton.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
    })


}
function resetState() {
    nextButton.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if (isCorrect) {
        selectedBtn.classList.add('correct')
        score++;
    }
    else {
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';

}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${question.length}!`
    nextButton.innerHTML = "Play Again "
    nextButton.style.display = "block"
}



function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}



nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();