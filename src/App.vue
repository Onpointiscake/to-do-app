<template>
  <div id="app">
      <div class="mt-2 first-wrapper">
        <b-form-input size="lg" v-if="listaEstaCreada === false" v-model="titulo_todo" placeholder="pon un nombre a tu lista... "></b-form-input>
        <b-button size="lg" v-if="listaEstaCreada === false" v-on:click="newList" class="btn-create">Crear</b-button>
      </div>
      <div class="mt-2 wrapper-title">
         <h1>{{titulo_todo}}</h1>
      </div>
       <TodoList v-if="listaEstaCreada" />
      <footer>
         <b-button size="lg" v-if="listaEstaCreada" v-on:click="resetList" variant="danger" id="btn-delete" >Borrar</b-button>
      </footer> 
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
      titulo_todo: "",
      listaEstaCreada: false
    }
  },
  methods: {
    newList: function (){
      this.listaEstaCreada = true;
    },
    resetList: function(){
      this.listaEstaCreada = false;
      this.titulo_todo = "";
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
  max-width: 600px;
  padding: 5vh 3vh;
  text-align: center;
  color: $color-letra-negro;
}
h1{
  text-align: center;
  font-family: $tipografia-titulo-todo;
  margin-right: 2%;
}
.btn-create{
  background: #2A4747 !important;
  padding: 0px 20px !important;
}
textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {   
    border-color: #439775;
    box-shadow: 0 1px 1px #439775 inset, 0 0 8px #439775;
    outline: 0 none;
    text-align: center;
}
.wrapper-title{
  margin-bottom: 3vh;
}
#btn-delete{
  text-align: center;
  margin: 5vh 0vh;
}
</style>