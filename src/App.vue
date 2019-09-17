<template>
  <div id="app">
      <section class="hero is-warning is-fullheight">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              My First Ever To-Do App on Vue
            </h1>
            <h2 class="subtitle">
              Let´s have fun!
            </h2>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
