<template>
  <div id="nav">
    <router-link to="/"></router-link>
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
