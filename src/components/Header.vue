<script setup>
import { RouterLink, RouterView ,useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const pageTitle = computed(() => {
  return route.meta.title ;
});

</script>

<template>
    <div class="corpHeader">
        <div class="boutonHaut">
            <RouterLink to="/"><img class="photoAvatar" src="../assets/img/gobFeu.jpg" alt="Avatar Gobelin Feu"></RouterLink>
            <h2>Accueil</h2>
        </div>
        <div class="titre">
            <h1>Porte Folio:</h1>
            <h2>{{ pageTitle }}</h2>
        </div>
        <div class="onglet">
            <p><a href="#proposBox">A Propos</a></p>
            <p><a href="#realisationBox">Realisation</a></p>
            <p><a href="#CVBox">Curriculum Vitae</a></p>
            <RouterLink to="/contact"><p>Contact</p></RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .corpHeader {
        background-color:#9197A1 ;
        border-bottom:solid #EBEBEB ;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .boutonHaut{
        display:flex;
        width: 33%;
    }

    .photoAvatar{
        cursor: pointer;
        height: 4em;
        width: 4em;
        border-radius: 20%;
        margin-left: 4em;
    }

    .titre {
        width: 33%;
        text-align: center;
    }
    
    .onglet{
        width: 33%;
        display: flex;
        justify-content: flex-end;
        margin-right: 1em;
    }

    .onglet p{
        margin-left: 1em;
    }
</style>
