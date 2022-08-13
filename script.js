const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Which country gifted the Statue of Libery to the US?',
        choice1: 'France',
        choice2: 'Italy',
        choice3: 'Spain',
        choice4: 'Germany',
        answer: 1,
    },
    {
        question: 'Which sport does Cristiano Ronaldo play?',
        choice1: 'Soccer/Football',
        choice2: 'Tennis',
        choice3: 'Basketball',
        choice4: 'Hockey',
        answer: 1,
    },
    {
        question: 'How many points are a touchdown worth?',
        choice1: '14',
        choice2: '2',
        choice3: '6',
        choice4: '9',
        answer: 3,
    },
    {
        question: 'Which planet is closest to Earth?',
        choice1: 'Mars',
        choice2: 'Jupiter',
        choice3: 'Saturn',
        choice4: 'Venus',
        answer: 4,
    }
]

const score_points = 100
const max_questions = 4

startGame = () => {
    questionCounter= 0
    score= 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > max_questions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${max_questions}`
    progressBarFull.style.width = `${(questionCounter/max_questions) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

}
