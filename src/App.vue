<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <!-- Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> -->
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
}
</style>

<script lang="ts">
import vue from 'vue'
import Nav from '@/components/Nav.vue'

export default vue.extend({
  components: {
    Nav
  }
})
</script>
