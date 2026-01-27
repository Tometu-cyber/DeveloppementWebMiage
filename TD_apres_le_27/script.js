const btn = document.getElementById("btn");
console.log(btn);

const result = document.getElementById("result");
console.log(result);

btn.addEventListener("click", () => {
  result.textContent = "JavaScript côté client 🚀";
});

// Exercice 1 - Changement de couleur au clic
const divExo1 = document.getElementById("divexo1");
divExo1.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    divExo1.style.backgroundColor = "#" + randomColor;
});

// Exercice 2 - Suivi de la souris
const posX = document.getElementById("posX");
const posY = document.getElementById("posY");
const tracker = document.getElementById("tracker");
const boxMouse = document.getElementById("boxMouse");

boxMouse.addEventListener("mousemove", (event) => {
    // MAJ position affichage
    posX.textContent = event.clientX;
    posY.textContent = event.clientY;

    // MAJ position tracker
    tracker.style.left = `${event.clientX}px`;
    tracker.style.top = `${event.clientY}px`;
});

// Exercice 3 - Réaction au scroll
const mainHeader = document.getElementById("mainHeader");
const scrollMessage = document.getElementById("scrollMessage");

window.addEventListener("scroll", () => {
    // Changer la couleur du header en fonction du niveau de scroll
    const scrollY = window.scrollY;
    const randomColor = Math.floor(Math.min(scrollY, 16777215)).toString(16);
    mainHeader.style.backgroundColor = "#" + randomColor;

    // Afficher le niveau de scroll
    scrollMessage.textContent = `Niveau de scroll : ${scrollY}px`;
});

// Exercice 4 - Formulaire et submit
const userForm = document.getElementById("userForm");
const userInput = document.getElementById("userInput");
const formMessage = document.getElementById("formMessage");
const formResult = document.getElementById("formResult");

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputValue = userInput.value.trim();

    if (inputValue === "") {
        formMessage.textContent = "Le champ ne peut pas être vide.";
        formResult.textContent = "";
    } else {
        formMessage.textContent = "";
        formResult.textContent = `Vous avez saisi : ${inputValue}`;
    }
});

// Exercice 5 - Calculatrice
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calc-btn");

let currentInput = "";
let previousInput = "";
let operator = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (!isNaN(value)) { // Si c'est un chiffre
            currentInput += value;
            display.textContent = currentInput;
        } else if (value === "C") { // Réinitialiser
            currentInput = "";
            previousInput = "";
            operator = null;
            display.textContent = "0";
        } else if (value === "=") { // Calculer le résultat
            if (previousInput && currentInput && operator) {
                const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                display.textContent = result;
                currentInput = result;
                previousInput = "";
                operator = null;
            }
        } else { // Gérer les opérateurs
            if (currentInput) {
                previousInput = currentInput;
                currentInput = "";
                operator = value;
            }
        }
    });
});

function calculate(num1, num2, op) {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Erreur";
        default:
            return 0;
    }
}