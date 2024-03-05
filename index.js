const buttonAvant = document.querySelector("#avancer");
button.addEventListener("click", (event) => {


    move("avant")

});
const buttonGauche = document.querySelector("#gauche");
button.addEventListener("click", (event) => {


    move("gauche")

});
const buttonDroite = document.querySelector("#droite");
button.addEventListener("click", (event) => {


    move("droite")

});
const buttonArriere = document.querySelector("#arriere");
button.addEventListener("click", (event) => {


    move("arriere")

});
const buttonReco_facial7 = document.querySelector("#reco_facial7");
button.addEventListener("click", (event) => {


    move("reco_facial7")

});
const buttonHaut_cam = document.querySelector("#haut_cam");
button.addEventListener("click", (event) => {


    move("haut_cam")

});
const buttonGauche_cam = document.querySelector("#gauche_cam");
button.addEventListener("click", (event) => {


    move("gauche_cam")

});
const buttonCam_initial = document.querySelector("#cam_initial");
button.addEventListener("click", (event) => {


    move("cam_initial")

});
const buttonDroite_cam = document.querySelector("#droite_cam");
button.addEventListener("click", (event) => {


    move("droite_cam")

});
const buttonBas_cam = document.querySelector("#bas_cam");
button.addEventListener("click", (event) => {


    move("bas_cam")

});
function move(direction) {
    $.ajax({
        type: 'GET',
        url: './move.php?direction=' + direction,
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
}