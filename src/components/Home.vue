<script setup>
import propos from './Propos.vue'
import realisation from './Realisation.vue'
import CV from './CV/CV.vue'
import modalContact from './ModalContact.vue'
</script>

<template>
  <main>
    <div id="proposBox" class="elementBox">
      <propos></propos>
    </div>
    <div id="realisationBox" class="elementBox">
      <realisation></realisation>
    </div>
    <div id="CVBox" class="elementBox">
      <CV></CV>
    </div>
    <!-- <div id="modalContactBox" class="elementBox">
      <modalContact></modalContact>
    </div> -->
    <div class="elementBox">
      <a href="#"><img class="flecheHaut" src="../assets/img/fleche-vers-le-haut.png" alt="fleche vers le haut"></a>
    </div>
  </main>

</template>

<style scoped>

main{
  margin-top: 5em;
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
}

.elementBox{
  margin-top: 2em;
}

/* #CVBox {
  z-index: auto;
  transform: scale(0.9); 
}  */

.flecheHaut{
  margin-top: 1em;
  margin-bottom: 1em;
}

</style>