let p_miruna = 0
let p_dominique = 0
let p_camille = 0
let p_baptiste = 0
let p_raphaël = 0
let p_alain = 0
let p_antoinette = 0
let p_jean = 0
bouton.addEventListener("click", function () {
    let prenom = document.getElementById("nom");
    let nom = prenom.value;
    let point = document.getElementById("nombre");
    let points = point.value;
    if (nom === "Miruna"){
        p_miruna += Number(points)
    }if (nom === "Dominique"){
        p_dominique += Number(points)
    }if (nom === "Camille"){
        p_camille += Number(points)
    }if (nom === "Baptiste"){
        p_baptiste+= Number(points)
    }if (nom === "Raphaël"){
        p_raphaël += Number(points)
    }if (nom === "Alain"){
        p_alain += Number(points)
    }if (nom === "Antoinette"){
        p_antoinette += Number(points)
    }if (nom === "Jean"){
        p_jean += Number(points)
    }
    let contenu_titre ="Antoinette: " + p_antoinette + " points, Alain: " + p_alain + " points, Raphaël " + p_raphaël + " points, Dominique: " + p_dominique + " points, Miruna: " + p_miruna + " points, Jean: " + p_jean + " points, Baptiste: " + p_baptiste + " points et Camille: " + p_camille + " points."
    let nouvelleDiv = document.createElement("div")
    let nouveauTitre = document.createElement("h3")
    nouveauTitre.textContent = contenu_titre
    nouvelleDiv.appendChild(nouveauTitre)
    let body = document.querySelector("body")
    body.appendChild(nouvelleDiv)
});