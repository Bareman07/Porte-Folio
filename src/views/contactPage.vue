<script setup>
</script>

<template>
    <main>
        <div class="corpContact">
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
                    <input class="envoyer" type="button" value="Envoyer" @onclick="ajouterCommentaire()" style="margin: 1em 0 1em 0;">
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main {
        margin-top: 6em;
        display: flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items: center;
    }

    .corpContact{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        width: 30%;
        border: 3px solid #f59f00 ;
        border-radius: 1%;
        background-color:#9197A1;
        margin-bottom: 4em;
    }

    .footerBox {
        position: fixed;
        bottom: 0;
    }
</style>
