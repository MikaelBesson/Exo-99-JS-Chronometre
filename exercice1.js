//I - Dans ce défi, vous allez transformer cette page Web en chronomètre. Premièrement, utilisez setTimeout pour appeler
//la fonction countUp une fois par seconde. Puis complétez le code de la fonction countUp qui incrémente la valeur
//de la span '#seconds' de 1 seconde à chaque fois.

// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let compteur = 0;

setTimeout(function (){
    let countUp = function() {
        if(compteur <=60){
            seconds.innerHTML = compteur;
            compteur++;
        }
    }
},1000)


// setInterval(function (){
//         if(compteur <=60){
//         let div2 = document.createElement("div");
//         result1.append(div2);
//         result1.style.backgroundColor = "#CCCCFF";
//         result1.innerHTML = "Le compteur est en marche "+compteur;
//         compteur++;
//         }
//     }, 1000);
// })





// How can you make it stop counting?
let stopCountUp = function() {
};
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

