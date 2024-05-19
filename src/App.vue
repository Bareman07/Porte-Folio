<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerVue from './components/Header.vue'
import FooterVue from './components/Footer.vue'
</script>

<template>
  <header>
    <headerVue class="headerBox"></headerVue>
  </header>
  <div>
    <RouterView />
  </div>
  <footer>
    <FooterVue class="footerBox"></FooterVue>
  </footer>
</template>

<style scoped>
.headerBox{
  z-index: 1;
}

.footerBox{
  z-index: 1;
}
</style>