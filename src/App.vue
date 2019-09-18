<template>
  <div id="app">

      <!-- Hero component de Buefy .start -->
      <section class="hero is-warning is-fullheight">

           <div class=" title">
            <h2>Da un Nombre a tu To-Do</h2>
          </div>
          <!-- Container del Centro .start-->
        <div class="hero-body">
          <div class="container">
            <TodoItem>input</TodoItem>
          </div>
        </div>
        <!-- Container del Centro .end -->

          <!--Footer .start-->
         <div class="hero-foot">
            <TodoListFooter></TodoListFooter>
          </div>
        <!-- Footer .end -->

      </section>
      <!-- Hero component de Buefy .end -->

  </div>
</template>

<script>
import TodoListFooter from "./components/TodoListFooter/TodoListFooter"
export default {
  name: 'app',
  components: {
     TodoListFooter
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
.delete-btn{
  margin-right: 75%;
  margin-left: 5%;
}
input{
  border: none;
  border-radius: 5px;
}
</style>
