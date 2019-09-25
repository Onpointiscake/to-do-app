<template>
  <div id="app">
      <div class="mt-2 first-wrapper">
        <b-form-input v-model="text" placeholder="pon un nombre a tu lista... "></b-form-input>
        <b-button  class="btn-create">Crear</b-button>
      </div>
      <div class="mt-2">
        <h1>{{ text }}</h1>
      </div>
      <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList"
import TodoItem from "./components/TodoItem"
export default {
  name: 'app',
  components: {
    TodoList, TodoItem
  },
  data () {
    return {
      text: ""
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

$tipografia-titulo-todo: 'Mansalva', cursive;
$color-letra-negro: #2A4747;
$color-fondo-verde: #48BF84;
$color-verde-secundario: #439775;
$color-contraste: #E0BAD7;

body{
  background: $color-fondo-verde !important;
}
.first-wrapper{
  display: flex;
  flex-direction: row;
}
.first-wrapper button{
  margin-left: 2%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  max-width: 400px;
  padding-top: 5vh;
  color: $color-letra-negro;
}
h1{
  text-align: center;
  font-family: $tipografia-titulo-todo;
  margin-right: 2%;
}
.btn-create{
  background: #2A4747 !important;
}
textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {   
    border-color: #439775;
    box-shadow: 0 1px 1px #439775 inset, 0 0 8px #439775;
    outline: 0 none;
    text-align: center;
}
</style>