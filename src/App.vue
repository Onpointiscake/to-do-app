<template>
  <div id="app">
      <section class="hero is-warning is-fullheight">
        <!-- Container del Centro .start-->
        <div class="hero-body">
          <div class="container">
            <PreTodo />
            <Todo />
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
import Todo from "./components/Todo"
export default {
  name: 'app',
  components: {
      PreTodo,
      Todo
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
input{
  border: none;
  border-radius: 5px;
}
</style>
