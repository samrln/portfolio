<template>
  <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/EngineerPortfolio">Engineer</router-link> |
    <router-link to="/DeveloperPortfolio">Developer</router-link>
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
  margin: 20px 0px 60px;
}

#nav {
  padding: 30px;
}
</style>
