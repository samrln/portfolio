<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/EngineerPortfolio">Engineer</router-link> |
    <router-link to="/DeveloperPortfolio">Develope</router-link>
  </div>
  <router-view />
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
