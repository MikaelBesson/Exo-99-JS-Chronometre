//I - Dans ce défi, vous allez transformer cette page Web en chronomètre. Premièrement, utilisez setTimeout pour appeler
//la fonction countUp une fois par seconde. Puis complétez le code de la fonction countUp qui incrémente la valeur
//de la span '#seconds' de 1 seconde à chaque fois.

// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let compteur = 0;
let stopButton = document.getElementById("stop-button");


let countUp = function () {
    seconds.innerHTML = compteur;
    compteur++;
    setTimeout(countUp, 1000);
}
countUp();


// How can you make it stop counting?
let stopCountUp = function() {
    clearInterval(countUp());
};

stopButton.addEventListener("click", stopCountUp);






