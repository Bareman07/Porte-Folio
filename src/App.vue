<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerVue from './components/Header.vue'
import FooterVue from './components/Footer.vue'
</script>

<template>
  <div class="reglagleFlex">
    <header>
      <headerVue class="headerBox"></headerVue>
    </header>
    <div class="centreBox">
      <RouterView />
    </div>
    <div class="remplissage"></div>
    <footer>
      <FooterVue class="footerBox"></FooterVue>
    </footer>
  </div>
</template>

<style scoped>
.reglagleFlex{
  display: grid;
}

.headerBox{
  z-index: 1;
}

.footerBox{
  z-index: 1;
  align-self: flex-end;
}

.centreBox{
  flex-grow: 100%;
}

.remplissage{
  height: auto;
}
</style>