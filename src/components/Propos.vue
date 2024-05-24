<script setup>

</script>

<template>
    <div class="bodyPropos">
        <img class="photoProfil" src="../assets/img/Photo_2023.jpg" alt="Photo de profil ">
        <div>
            <h2>Bonjour je m'appelle Mickael BATEMAN et je suis devellopeur web junior</h2>
            <p> Après 8 années passées dans le SAV dans le secteur de la videosurveillance, je suis aujourd’hui à la recherche d’un 
                poste de developeur dans le secteur du WEB. Fort de cette expérience, je souhaite 
                mettre mes compétences au service d’une entreprise aux valeurs fortes. </p>
            <p> Je suis depuis toujours passionnées par les enigmes et autres jeux de logiques.</p>
        </div>
    </div>
</template>

<style scoped>
    .bodyPropos{
        display: flex;
        flex-direction:column;
        align-items: center;
        background-color: #9197A1;
        border: 0.2em solid #f59f00 ;
        border-radius: 1%;
        width: 40em;
        text-align: center;
    }

    h1{ 
        text-indent: 2em; 
        padding: 0em 4em 0em 4em;
    }

    p{ 
        text-indent: 2em; 
        padding: 0em 4em 0em 4em;
    }

    .photoProfil{
        margin-top: 2em;
        margin-bottom: 1em;
        height: 9em ;
        width: 9em ;
        border-radius: 10% ;
    }
</style>