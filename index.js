let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
const passwordBtn = document.getElementById("generate-btn")
const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

passwordBtn.addEventListener("click", () => {
    createFirstPass()
    createSecondPass()
})

function createFirstPass() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        randomChar = generateChar()
        password += characters[randomChar]
    }
    firstPassword.textContent = password
}

function createSecondPass() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        randomChar = generateChar()
        password += characters[randomChar]
    }
    secondPassword.textContent = password
}

function generateChar() {
    let char = Math.floor(Math.random() * characters.length)
    return char
}