<script setup>
const appEnvoi = Vue.createApp({
  data() {
    return {
        prenom: '',
        nom: '',
        email: '',
        message: '',
        showForm: true
    };
  },
  methods: {
    submitForm() {
        // Soumettre le formulaire (vous pouvez ajouter ici la logique pour l'envoi des données)
        // Pour cet exemple, je vais simplement afficher un message
        this.message = `Bonjour ${this.nom}${this.prenom}! Votre email (${this.email}) a été envoyé avec succès.`;
        this.showForm = false; // Cacher le formulaire après soumission
    },
    clearForm() {
        // Effacer les champs du formulaire
        this.prenom = '';
        this.nom = '';
        this.email = '';
        this.message = ''
    }
  }
});

app.mount('#appEnvoi');
</script>

<template>
    <main class="corpContact" id="appEnvoi">
        <h1>Contact</h1>        
        <div class="flex-container">
            <div class="flex-item">
                <h2>Email</h2>
                <input type="text" id="email" placeholder="Ecrire votre mail">
            </div>
            <div class="flex-item">
                <h2>Prénom</h2>
                <input type="text" id="prenom" placeholder="Ecrire votre Prénom">
            </div>
            <div class="flex-item">
                <h2>Nom</h2>
                <input type="text" id="nom" placeholder="Ecrire votre Nom">
            </div>
        </div>        
        <h2>Commentaires</h2>
        <textarea id="message" placeholder="Ecrire votre Message"></textarea>        
        <div class="button-container">
            <div class="button-item">
                <input class="envoyer" type="button" value="Envoyer" @click.prevent="submitForm">
                <button @click="clearForm">Effacer le formulaire</button>
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
