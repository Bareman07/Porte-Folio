<script setup>
    import { ref } from 'vue'
    const open = ref(false)
</script>

<template>
    <button style="background-color:#9197A1 ;border: 3px solid #f59f00 ;border-radius: 1%;" @click="open = true"><h1>Ouvrir Contact</h1></button>

    <div v-if="open" class="modal">
        <div class="corpContact">
            <h1 class="titreContact">Contact :</h1>        
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
            <textarea style="width: 20em; height: 4em;"  id="commentaire" placeholder="Ecrire votre Commentaire"></textarea>        
            <div class="button-container">
                <div class="button-item">
                    <input class="envoyer" type="button" value="Envoyer" onclick="ajouterCommentaire()">
                </div>
            </div>
        </div>
        <div class="buttonFermerBox">
            <button class="buttonFermer" @click="open = false">Fermer</button>
        </div>
    </div>
</template>

<style scoped>
    .modal {
        position: fixed;
        z-index: 999;
        top: 20%;
        left: 50%;
        margin-left: -150px;
        border: 3px solid #f59f00 ;
        border-radius: 1%;
        background-color:#9197A1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .titreContact{
        width: 100%;
    }

    .flex-item{
        width: 50%;
    }

    .buttonFermerBox{
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .buttonFermer {
        margin: 1em 0em 1em 0em;
    }

    button :hover{
        cursor: pointer;
    }
</style>
