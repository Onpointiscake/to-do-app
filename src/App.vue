<template>
  <div id="app">
      <section class="hero is-warning is-fullheight">
        <!-- Container del Centro .start-->
        <div class="hero-body">
          <div class="container">

            <PreTodo />
            <input type="text" />

          </div>
        </div>
        <!-- Container del Centro .end -->
         <div class="hero-foot">
            <p>Javier Suarez M.A.D.E. this</p>
          </div>
          
      </section>
  </div>
</template>

<script>
import PreTodo from './components/PreTodo'

export default {
  name: 'app',
  components: {
      PreTodo
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
