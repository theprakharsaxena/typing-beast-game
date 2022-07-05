let score = 0
let time=6
let easyTime=6

// Dom element
const wordInput = document.querySelector("#word-input")  //  hold input word in the input box
const currentWord = document.querySelector("#current-word")  //  hold current word
const scoreDisplay = document.querySelector("#score")  //  hold score
const timeDisplay = document.querySelector("#time")  //  holds time
const seconds = document.querySelector("#seconds")
const startGame = document.querySelector("#game-start")
const easy = document.querySelector("#easy")
const medium = document.querySelector("#medium")
const hard = document.querySelector("#hard")
const level = document.querySelector("#level")

let isPlaying = true

easy.addEventListener("click", easygame)
medium.addEventListener("click", mediumgame)
hard.addEventListener("click", hardgame)

function easygame() {
    level.innerHTML = "Easy"
    seconds.innerHTML = "5"
    time=6
    easyTime=6
    startGame.addEventListener("click", endgame)
}

function mediumgame() {
    level.innerHTML = "Medium"
    seconds.innerHTML = "4"
    time=5
    easyTime=5
    startGame.addEventListener("click", endgame)
}

function hardgame() {
    level.innerHTML = "Hard"
    seconds.innerHTML = "3"
    time=4
    easyTime=4
    startGame.addEventListener("click", endgame)
}


// Change to End Game
function endgame(e) {
    e.preventDefault()
    red = e.target
    red.innerHTML = "End Game"
    red.className = "btn btn-danger btn-sm p-3 endload"
    let spangame = document.createElement("i")
    spangame.className = "fa fa-gamepad"
    red.appendChild(spangame)
    init()
}


function startTheGame() {
    location.reload();
}


// Array of Words
const words = [
    'goa',
    'mcleodganj',
    'srinagar',
    'andaman',
    'binsar',
    'coorg',
    'kerala',
    'kanatal',
    'kasol',
    'kutch',
    'assam',
    'rishikesh',
    'shimla',
    'manali',
    'udaipur',
    'auli',
    'mysore',
    'jaisalmer',
    'jodhpur',
    'mukteshwar',
    'dhanaulti',
    'varanasi',
    'mumbai',
    'kolkata',
    'delhi',
    'meghalaya',
    'sikkim',
    'agra',
    'cherrapunji',
    'dalhousie',
    'hampi',
    'jabalpur',
    'mathura',
    'hyderabad',
    'amritsar',
    'orissa',
    'mahabalipuram',
    'visakhapatnam',
    'ooty',
    'kodaikanal',
    'pondicherry',
    'mahabaleshwar',
    'darjeeling',
    'ziro',
    'khajiar',
    'nainital',
    'lakshadweep',
    'chopta',
    'spiti',
    'sonamarg',
    'almora',
    'orchha',
    'gwalior',
    'gokarna',
    'pahalgam',
    'landsdowne',
    'joshimath',
    'tawang',
    'manikaran',
    'shimoga',
    'madikeri',
    'ranikhet',
    'kausani',
    'agumbe',
    'munnar',
    'gangtok',
    'mussoorie',
    'tirupati',
    'aleppey',
    'bangalore',
    'jaipur',
    'chandigarh',
    'lonavala',
    'coonoor',
    'ajmer',
    'varkala',
    'poovar',
    'kanyakumari',
    'khajuraho',
    'pushkar',
    'wayanad',
    'gulmarg',
    'shirdi',
    'madurai',
    'ranchi',
    'deoghar',
    'bankura',
    'nalanda',
    'hazaribagh'
];


function init() {
    showWord(words)
    wordInput.addEventListener("input", startMatch)
    setInterval(coutDown, 1000)
    setInterval(checkStatus, 50)
    setInterval(happyEnd, 1)
}

function happyEnd() {
    startGame.addEventListener("click", startTheGame)
}

function showWord(words) {
    const randomIdx = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randomIdx]
}


function startMatch() {
    if (matchWord()) {
        isPlaying = true
        time = easyTime
        showWord(words)
        wordInput.value = ""
        score++
    }
    scoreDisplay.innerHTML = score
    if (score === -1) {
        end()
        scoreDisplay.innerHTML = 0
    }
    else {
        scoreDisplay.innerHTML = score
    }
}

function matchWord() {
    if (currentWord.innerHTML == wordInput.value) {
        return true
    }
    else {
        return false
    }
}

function coutDown() {
    if (time > 0) {
        time--
        console.log(time)
    }
    else if (time == 0)
        isPlaying = false
    timeDisplay.innerHTML = time
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        currentWord.innerHTML = "Game Over!!!"
        score = -1
    }
}

function end() {
    if (confirm("Do You Want to Play Again: Press Ok")) {
        location.reload();
    }
    else {
        alert("Bye Bye")
    }
}