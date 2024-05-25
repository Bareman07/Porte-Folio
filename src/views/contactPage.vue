<script setup>
import { ref } from 'vue';

const prenom = ref('');
const nom = ref('');
const email = ref('');
const confirmationMessage = ref('');
const openMessageEnvoi = ref(false);

const submitForm = () => {
    // Soumettre le formulaire et construire le message de confirmation
    confirmationMessage.value = `Bonjour ${nom.value} ${prenom.value}! Votre email (${email.value}) a été envoyé avec succès.`;
};

const clearForm = () => {
    // Effacer les champs du formulaire et le message de confirmation
    prenom.value = '';
    nom.value = '';
    email.value = '';
    confirmationMessage.value = '';
};
</script>

<template>
    <main>
        <div class="corpContact">
            <h1>Contact</h1>        
            <div class="flex-container">
                <div class="flex-item">
                    <h2>Prénom {{ prenom }}</h2>
                    <input type="text" v-model="prenom" placeholder="Ecrire votre Prénom">
                </div>
                <div class="flex-item">
                    <h2>Nom</h2>
                    <input type="text" v-model="nom" placeholder="Ecrire votre Nom">
                </div>
            </div>        
            <h2>Email</h2>
            <textarea v-model="email" placeholder="Ecrire votre Email"></textarea>        
            <div class="button-container">
                <div class="button-item">
                    <input class="envoyer" type="button" value="Envoyer" @click="submitForm; openMessageEnvoi = true" style="margin: 1em 0em 1em 0em;">
                </div>
            </div>
        </div>
        <div class="modalEnvoi" v-if="openMessageEnvoi"> 
            <div class="CentreBox"><p style="margin-bottom: 5em;">{{ confirmationMessage }}{{ nom }}</p></div>
            <div class="CentreBox"><button @click="clearForm; openMessageEnvoi = false">fermer</button></div>
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
        margin-bottom: 36em;
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

    .modalEnvoi {
        position: fixed;
        z-index: 999;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        width: 20%;
        border: 3px solid #f59f00 ;
        border-radius: 1%;
        background-color:#9197A1;
        margin-bottom: 4em;
        margin-top: 5em;
    }

    .CentreBox{
        display: flex;
        justify-content: center;
        width: 100%;
    }
</style>
