<template>
  <div class="home">
    <div class="container_header">
      <h1>Samantha Nogueira</h1>
    </div>
    <div class="container_image">
      <img src="../assets/logo.jpg">
    </div>
    <div class="container_button">
      <button class="button eng" @click="engineerPortfolio()">engenharia</button>
      <button class="button ti" @click="developerPortfolio()">programacao</button>
    </div>
  </div>
</template>

<script>
export default{
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

<style scoped>
.home {
  display: flex;
  align-content: space-around;
  flex-direction: column;
}
.container_header {
  list-style-type: none;
  color: #ff3c80;
}
.container_image {
  justify-content: center;
}
.container_image img {
  margin: 10px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.container_button {
  color: #ff3c80;
  justify-content: center;
  flex-direction: row;
  display: flex;
}
.button {
  border: none;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: "Lucida Console";
  font-size: 18px;
  margin: 4px 2px;
  font-weight: bold;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}
.eng {
    background-color: #fff; 
    color: #ffcbdb;
    border: 2px solid #ffcbdb;
}

.eng:hover {
    background-color: #ffcbdb;
    color: #ff3c80;
}
.ti {
  background-color: #fff; 
  color: #ffcbdb;
  border: 2px solid #ffcbdb;
}
.ti:hover {
  background-color: #ffcbdb;
  color: #ff3c80;
}
</style>
