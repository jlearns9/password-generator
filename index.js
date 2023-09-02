const characters = {
    letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    symbols: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"],
    numbers: ["0","1","2","3","4","5","6","7","8","9"]
}

let originalCharacters = characters.letters

let passOneEl = document.getElementById("passFieldOne")
let passTwoEl = document.getElementById("passFieldTwo")
let passCopyTextEl = document.getElementById("passCopyText")
let passwordLengthEl = document.getElementById("passwordLength")
let errorMessageEl = document.getElementById("errorMessage")
let checkSymbolsEl = document.getElementById("checkSymbols")
let checkNumbersEl = document.getElementById("checkNumbers")

function generatePassword() {
    passOneEl.value = ""
    passTwoEl.value = ""
    passCopyTextEl.textContent = ""
    for (let i = 0; i < passwordLengthEl.value; i++) {
        let password1 = Math.floor(Math.random() * originalCharacters.length)
        passOneEl.value += originalCharacters[password1]
    } for (let i = 0; i < passwordLengthEl.value; i++) {
        let password2 = Math.floor(Math.random() * originalCharacters.length)
        passTwoEl.value += originalCharacters[password2]
    }
    if (passwordLengthEl.value < 6 || passwordLengthEl.value > 15) {
        errorMessageEl.textContent = "Password must be longer than 6 and shorter than 15 characters."
        passOneEl.value = null
        passTwoEl.value = null
    } else {
        errorMessageEl.textContent = ""
    }
}

function passCopy(event) {
    let inputElement = event.target; 
    inputElement.select();
    document.execCommand('copy');
    passCopyTextEl.textContent = "Password has been copied...";
    setTimeout(function() {
        passCopyTextEl.textContent = "";
    }, 500);
}

checkSymbolsEl.addEventListener('change', function() {
    if (checkSymbolsEl.checked === true) {
        originalCharacters = originalCharacters.concat(characters.symbols);
    } else {
        originalCharacters = characters.letters.slice()
    }
})

checkNumbersEl.addEventListener('change', function() {
    if (checkNumbersEl.checked === true) {
        originalCharacters = originalCharacters.concat(characters.numbers);
    } else {
        originalCharacters = characters.letters.slice();  // Create a shallow copy
    }
})