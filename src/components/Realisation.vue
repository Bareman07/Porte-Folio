<script setup>
import { ref } from 'vue'
const openDynEspaceCom = ref(false)
const openCahierDesCharges = ref(false)
</script>

<template>
    <div class="bodyRealisation">
        <h1>Réalisations</h1>
        <h2>Dynamiser un espace commentaire</h2>
        <a @click="openDynEspaceCom = true" ><img src="../assets/img/dynEspaceCom.png" alt="Ma Photo de CV 2023" class="imgBox" style="cursor: pointer;" ></a>
        <div v-if="openDynEspaceCom" class="modalDynEspaceCom">
            <a @click="openDynEspaceCom = false"><img src="../assets/img/dynEspaceCom.png" class="" alt="Ma Photo de CV 2023" style="height: auto; width: 500px;"></a>
            <a href="https://github.com/Bareman07/Dynamiser-un-espace-commentaire.git" style="margin-bottom: 1em;">Lien vers GitHub</a>
        </div>
        <h2>Cahier des Charges</h2>
        <a @click="openCahierDesCharges = true" ><img src="../assets/img/cahierDesCharges_page-0001.jpg" alt="Cahier des charge presentation" class="imgBox" style="cursor: pointer;" ></a>
        <div v-if="openCahierDesCharges" class="modalPhoto">
            <div><iframe src="../assets/Realisations/cahierDesCharges.pdf" width="100%"  height="600px"></iframe></div>
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
    }

    a :hover{
        box-shadow: 1em 1em 0.5em #C03221;
    }
</style>