function checkForm(f) {
    console.log(f);
    alert("Vous vous appelez : " + f.elements['nom'].value + " " + f.elements['prenom'].value);
        return true; // n’envoie pas le formulaire
}