<script setup>
// Tableau pour stocker les commentaires
let commentaires = [];

//Fonction ajout de commentaire
function ajouterCommentaire() {
    // Récupérer les valeurs des champs du formulaire
    var prenom = document.getElementById("prénom").value;
    var nom = document.getElementById("nom").value;
    var commentaire = document.getElementById("commentaire").value;

    // Vérifier si tous les champs sont remplis
    if (prenom === "" || nom === "" || commentaire === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
        return;
    }

    // Créer un nouvel élément de commentaire
    var nouveauCommentaire = document.createElement("div");
    nouveauCommentaire.innerHTML = `
        <h2>${prenom} ${nom}</h2>
        <p>${commentaire}</p>
    `;

    // Ajouter le nouvel élément à la liste de commentaires
    var commentaireListe = document.getElementById("commentaireListe");
    commentaireListe.appendChild(nouveauCommentaire);

    // Réinitialiser les champs du formulaire
    document.getElementById("prénom").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("commentaire").value = "";
}
</script>

<template>
    <main class="corpContact">
        <div id="commentaireListe">
        <!-- Les commentaires existants seront affichés ici -->
        </div>
        <h1>Contact</h1>        
        <div class="flex-container">
            <div class="flex-item">
                <h2>Prénom</h2>
                <input type="text" id="prénom" placeholder="Ecrire votre Prénom">
            </div>
            <div class="flex-item">
                <h2>Nom</h2>
                <input type="text" id="nom" placeholder="Ecrire votre Nom">
            </div>
        </div>        
        <h2>Commentaire</h2>
        <textarea id="commentaire" placeholder="Ecrire votre Commentaire"></textarea>        
        <div class="button-container">
            <div class="button-item">
                <input class="envoyer" type="button" value="Envoyer" @onclick="ajouterCommentaire()">
            </div>
        </div>
    </main>
</template>

<style scoped>
    .corpContact{
    height: 600px;
    width: 600px;
    border: 3px solid #f59f00 ;
    border-radius: 1%;
    background-color:#9197A1;
    }
</style>
