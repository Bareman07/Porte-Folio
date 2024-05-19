<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerVue from '../components/Header.vue'
</script>

<template>
  <header>
    <headerVue class="headerBox"></headerVue>
  </header>
  <div class="NotFoundBox">
    <div class="imgBox">
      <img src="../assets/img/404NotFound.jpg" alt="404 not found">
    </div>
    <div class="retour">
      <RouterLink to="/"><h2>Retour Accueil</h2></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.NotFoundBox {
  background-color: #0A0A0A;
  background-size:cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4em;
}

.imgBox{
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: center;
}

img{
  height: auto;
  width: 30%;
  margin-top: 2em;
  margin-bottom: 1em;
}

.retour{
  display: flex;
  flex-wrap: wrap;
  height: 25em;
  width: 100%;
  justify-content: center;
}

h2{
    height: auto;
    width: auto;
    border: 3px solid #f59f00 ;
    border-radius: 1%;
    background-color:#9197A1;
    margin: 1em;
    }
</style>