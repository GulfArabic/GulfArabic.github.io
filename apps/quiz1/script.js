const quizData =[
    {
        question: "Which of the following represents the sound found in the first letter of the English word 'Gulf'?",
        a: "ف",
        b: "ل",
        c: "ذ",
        d: "ق",
        correct: "d",
    },
    {
        question: "Which two letters represent the same souns in Gulf Arabic?",
        a: "ض & ظ",
        b: "ق & ك",
        c: "ذ & ز",
        d: "ذ & د",
        correct: "a",
    },
    {
        question: "Which of the following letters represents a sound not found in English?",
        a: "م",
        b: "ه",
        c: "ك",
        d: "ع",
        correct: "d",
    },
    {
        question: "What sound does the letter «چ» make?",
        a: "/g/, as in 'group'",
        b: "/j/, as in 'gym'",
        c: "/č/, as in 'chocolate'",
        d: "/zh/, as in the 'vision'",
        correct: "c",
    },
];

const quiz= document.getElementById('quiz')
const answerEls= document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn= document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false )
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }

    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly!</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
        
    }
})
