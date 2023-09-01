<template>
  <div class="home">
    <div class="container_header">
      <h1>Samantha Nogueira</h1>
    </div>
    <div class="container_image">
      <img src="../assets/logo.jpg">
    </div>
    <div class="container_text">
      <p>Olá 👋, essa é a primeira versão do meu portfolio !</p>
    </div>
    <div class="container_button">
      <button class="button eng" @click="engineerPortfolio()">engenharia</button>
      <button class="button ti" @click="developerPortfolio()">programacao</button>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'homePage',

  methods: {
    engineerPortfolio() {
      this.$router.push({ path: 'EngineerPortfolio' })
    },
    developerPortfolio() {
      this.$router.push({ path: 'DeveloperPortfolio' })
    }
  },
}
</script>

<style src="../styles/home.css" scoped></style>

