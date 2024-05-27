<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import emailjs from 'emailjs-com';

// Initialisez EmailJS avec votre ID utilisateur
emailjs.init('3-qjWMi3tnVEP8CiI');

const subject = ref('');
const Name = ref('');
const emailExterne = ref('');
const messageMail = ref('');
const confirmationMessage = ref('');
const openMessageEnvoi = ref(false);

// Creation des toasts
const envoie = () => {
  toast("Envoie en cours d'envoie Patienter", {
    autoClose: 5000,
  }); // ToastOptions
};

const successSend = () => { 
    // Construire le message de confirmation
    confirmationMessage.value = `Bonjour${Name.value} ! Votre email (${emailExterne.value}) a été envoyé avec succès.`;
    // Afficher une notification toast avec le message de confirmation
     toast(confirmationMessage, {
        type: 'success',
        position: 'top-center',
        autoClose: false,
  });// ToastOptions
};

const failSend = () => { 
     // Afficher une notification toast avec le message de confirmation
     toast("Echec de l'envoie", {
        type: 'error',
        position: 'top-center',
        autoClose: false,
  });// ToastOptions
};

// Formule d'envoie 
const submitForm = () => {
    envoie();
    openMessageEnvoi.value = true;
    // Soumettre le formulaire et construire le message de confirmation
    emailjs.send('service_y8fd51m', 'template_bj92w4p', {
        Name: Name.value,
        subject: subject.value,
        emailExterne: emailExterne.value,
        messageMail: messageMail.value,
    }).then((response) => {
        console.log('Email sent successfully!', response);
        successSend();
    }, (error) => {
        console.error('Error sending email:', error);
        failSend()
    });
};

const clearForm = () => {
    // Effacer les champs du formulaire et le message de confirmation
    Name.value = '';
    emailExterne.value = '';
    subject.value = '';
    messageMail.value = '';
    confirmationMessage.value = '';
    openMessageEnvoi.value = false;
};

</script>

<template>
     <main>
        <form @submit.prevent="submitForm" class="corpContact">
            <h1>Contact</h1>
            <div class="flex-container">
                <div class="flex-item">
                    <label for="emailExterne"><h2>mail:</h2></label>
                    <input type="email" id="emailExterne" placeholder="Ecrire votre Mail" v-model="emailExterne" required >
                </div>
                <div class="flex-item">
                    <label for="Name"><h2>Nom:</h2></label>
                    <input type="text" id="Name" placeholder="Ecrire votre Nom" v-model="Name" required >
                </div>
                <div class="flex-item">
                    <label for="subject"><h2>Sujet:</h2></label>
                    <input type="text" id="subject" placeholder="Ecrire l'objet du message" v-model="subject" required >
                </div>
                <div class="flex-item">  
                    <label for="messageMail"><h2>Message:</h2></label>
                    <textarea id="messageMail" placeholder="Ecrire votre Message" v-model="messageMail" required></textarea>  
                </div>  
            </div>    
            <div class="button-container">
                <div class="button-item">
                    <input class="envoyer" type="button" value="Envoyer" @click="submitForm" style="margin: 1em 0em 1em 0em;">
                </div>
            </div>
        </form>
        <div class="modalEnvoi" v-if="openMessageEnvoi"> 
            <div class="CentreBox"><p style="margin-bottom: 5em;">Bonjour {{Name}} Envoie en cour veuillez patientier en attendant la confirmation</p></div>
            <div class="CentreBox"><button @click="clearForm">fermer</button></div>
        </div>
    </main>
</template>

<style scoped>
    main {
        margin-top: 8em;
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
