<script setup>
import { ref } from 'vue'
// Utilisation de la fonction ref pour déclarer les variables réactives
const openDynEspaceCom = ref(false)
const openCahierDesCharges = ref(false)

// Étapes décomposées pour obtenir l'URL du fichier PDF
// 1 Chemin relatif du fichier PDF
const relativePath = './Realisations/cahierDesCharges.pdf';
// 2 URL actuelle du module
const moduleUrl = import.meta.url;
// 3 Créer un nouvel objet URL
const urlObject = new URL(relativePath, moduleUrl);
// 4 Obtenir l'URL sous forme de chaîne de caractères
const pdfUrl = urlObject.href;
// version reduite ->
// const pdfUrl = new URL('./Realisations/cahierDesCharges.pdf', import.meta.url).href
</script>

<template>
    <div class="bodyRealisation">
        <h1>Réalisations</h1>
        <h2>Dynamiser un espace commentaire</h2>
        <a @click="openDynEspaceCom = true" ><img src="../assets/img/dynEspaceCom.png" alt="Ma Photo de CV 2023" class="imgBox" style="cursor: pointer;" ></a>
        <div v-if="openDynEspaceCom" class="modalDynEspaceCom">
            <h1>Dynamiser un Espace Commentaire</h1>
            <a @click="openDynEspaceCom = false"><img src="../assets/img/dynEspaceCom.png" class="" alt="Ma Photo de CV 2023" style="height: auto; width: 500px;"></a>
            <a href="https://github.com/Bareman07/Dynamiser-un-espace-commentaire.git" style="margin-bottom: 1em;">Lien vers GitHub</a>
            <div><p>Html/CSS/JavaScript</p><p>02/2024</p></div>
        </div>
        <h2>Cahier des Charges</h2>
        <a @click="openCahierDesCharges = true" ><img src="../assets/img/cahierDesCharges_page-0001.jpg" alt="Cahier des charge presentation" class="imgBox" style="cursor: pointer;" ></a>
        <div v-if="openCahierDesCharges" class="modalPhoto">
            <!-- <div><iframe src="./Realisations/cahierDesCharges.pdf" width="100%"  height="600px"></iframe></div> -->
            <div>
                <h1>Télécharger le fichier PDF</h1>
                <a :href="pdfUrl" download="cahierDesCharges.pdf"><img src="../assets/img/cahierDesCharges_page-0001.jpg" alt="Cahier des charge presentation" ></a>   
            </div>
            <div><p>Traitement de Texte</p><p>01/2024</p></div>
            <button @click="openCahierDesCharges = false" style="height: 2em; width: 3em;">Exit</button>
        </div>
    </div>
</template>

<style scoped>
    .bodyRealisation{
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        background-color: #9197A1;
        border: 0.3em solid #f59f00 ;
        border-radius: 1%;
        width: 40em;;
        text-align: center;
    }

    .bodyRealisation img{
        margin-top: 1em;
        margin-bottom: 1em;
        height: auto;
        width: 300px;
    }

    .modalDynEspaceCom {
        position: fixed;
        z-index: 999;
        top: 3em;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        background-color: #9197A1;
        border: 0.3em solid #f59f00 ;
        border-radius: 1%;
        width: 40em;;
        text-align: center;
    }

    .modalPhoto {
        position: fixed;
        z-index: 999;
        top: 3em;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        background-color: #9197A1;
        border: 0.3em solid #f59f00 ;
        border-radius: 1%;
        width: 40em;;
        text-align: center;
    }

    a :hover{
        box-shadow: 1em 1em 0.5em #C03221;
    }
</style>