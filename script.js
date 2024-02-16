const passwordDisplay = document.querySelector(".password-display");
const reloadBtn = document.querySelector(".reload-img");
const copyBtn = document.querySelector(".copy-btn");
const rangeDisplay = document.querySelector(".range-display");
const inputRange = document.querySelector(".input-range");
const characterUsed = document.querySelectorAll(".character-used");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpperCase = alphabet.toLocaleUpperCase();
const numbers = "0123456789";
const symbols = "!@#$%&*_-";

const rangeValue = 8;
inputRange.value = rangeValue;
rangeDisplay.innerHTML = rangeValue;

let currentAngle = false;

reloadBtn.addEventListener("click", () => {
    currentAngle += 360;
    reloadBtn.style.transform = `rotate(${currentAngle}deg)`;
    generatePassword(document.querySelectorAll(".selected"));
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordDisplay.innerHTML).then(() => {
        if (copyBtn.innerHTML === "Copied!") return;
        copied();
    });
});

inputRange.addEventListener("change", () => {
    rangeDisplay.innerHTML = inputRange.value;
    generatePassword(document.querySelectorAll(".selected"));
});

characterUsed.forEach((character) => {
    character.addEventListener("click", () => {
        const className = character.classList;
        className.toggle("selected");
        if (document.querySelectorAll(".selected").length === 0) className.toggle("selected");
        generatePassword(document.querySelectorAll(".selected"));
    });
});

generatePassword(document.querySelectorAll(".selected"));

function generatePassword(selectedsCharacters) {
    let password = "";
    let AllcharacterListUsed = "";

    selectedsCharacters.forEach((character) => {
        switch (character.id) {
            case "character-lowercase":
                AllcharacterListUsed += alphabet;
                break;
            case "character-uppercase": 
                AllcharacterListUsed += alphabetUpperCase;
                break;
            case "character-numbers": 
                AllcharacterListUsed += numbers;
                break;
            case "character-symbols":
                AllcharacterListUsed += symbols;
                break;
            default: 
                AllcharacterListUsed.push(alphabet, alphabetUpperCase, numbers, symbols);
        }
    });

    for (let i = 0; i < inputRange.value; i++) {
        const num = getRandom(0, AllcharacterListUsed.length);
        password += AllcharacterListUsed[num];
    }

    passwordDisplay.innerHTML = password;
}

function getRandom(min, max) {
    const numRandom = Math.floor(Math.random() * (max - min) + min);
    return numRandom;
}

function copied() {
    copyBtn.innerHTML = "Copied!";
    copyBtn.style.background = "gray";
    copyBtn.style.cursor = "default";

    setTimeout(() => {
        copyBtn.innerHTML = "copy";
        copyBtn.style.background = "var(--primary-color)";
        copyBtn.style.cursor = "pointer";
    }, 2000);
}
