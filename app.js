
// let depenses
let loyer = document.getElementById('loyer');
let facture = document.getElementById('facture');
let internet = document.getElementById('internet');
let voiture = document.getElementById('voiture');
let course = document.getElementById('course');
let transport = document.getElementById('transport');
let activite = document.getElementById('activite');
let sortie = document.getElementById('sortie');
let autre = document.getElementById('autre');

//let recette
let salaire = document.getElementById('salaire');
let aide = document.getElementById('aide');
let rente = document.getElementById('rente');
let autres = document.getElementById('autres');

//let epargne
let epargne = document.getElementById('epargne');

//let result
let resultDepenses = document.getElementById('result-depenses');
let resultRecette = document.getElementById('result-recette');
let resultEpargne = document.getElementById('result-epargne');
let result = document.getElementById('result');

//let button
let buttonDepense = document.getElementById('buttonDepense');
let buttonRecette = document.getElementById('buttonRecette');
let buttonEpargne = document.getElementById('buttonEpargne');
let buttonTotal = document.getElementById('buttonTotal');


buttonDepense.addEventListener('click' , function (){
    resultDepenses.innerHTML = parseInt(loyer.value)
        + parseInt(facture.value)
        + parseInt(internet.value)
        + parseInt(voiture.value)
        + parseInt(course.value)
        + parseInt(transport.value)
        + parseInt(activite.value)
        + parseInt(sortie.value)
        + parseInt(autre.value);
})

buttonRecette.addEventListener('click' , function (){
    resultRecette.innerHTML = parseInt(salaire.value)
        + parseInt(aide.value)
        + parseInt(rente.value)
        + parseInt(autres.value);
})

buttonEpargne.addEventListener('click' , function (){
    resultEpargne.innerHTML = parseInt(epargne.value);
})

buttonTotal.addEventListener('click' , function (){
    result.innerHTML = parseInt(epargne.value)
        + parseInt(aide.value)
        + parseInt(rente.value)
        + parseInt(autres.value)

        - parseInt(loyer.value)
        - parseInt(facture.value)
        - parseInt(internet.value)
        - parseInt(voiture.value)
        - parseInt(course.value)
        - parseInt(transport.value)
        - parseInt(activite.value)
        - parseInt(sortie.value)
        - parseInt(autre.value);

})

