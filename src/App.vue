<template>
  <div id="app">
      <div class="mt-2 first-wrapper">
        <b-form-input class="nombre-lista" size="lg" v-if="listaEstaCreada === false" v-model="titulo_todo" placeholder="escribe un buen título aquí... "></b-form-input>
        <b-button size="md" v-if="listaEstaCreada === false" v-on:click="newList" class="btn-create" variant="primary">CREAR</b-button>
      </div>
      <div class="mt-2 wrapper-title">
         <h1>{{titulo_todo}}</h1>
      </div>
       <TodoList v-if="listaEstaCreada" />
       <div class="intro-wrapper" v-if="!listaEstaCreada">
          <div class="intro-subwrapper-2">
            <h2>Bievenido a tu Lista de Tareas</h2>
            <b-img thumbnail fluid :src="require('./assets/arm-break-coffee-257897.jpg')" alt="Image 2"></b-img>
          </div>
          <div class="intro-subwrapper-2">
            <p class="made-p">Made with Love by</p>
            <p> Javier Suarez Fernandez</p>
            <b-button variant="light" href="https://github.com/Onpointiscake" class="git-btn">Visita mi Github</b-button>
          </div> 
       </div>
      <footer>
         <b-button size="lg" v-if="listaEstaCreada" v-on:click="resetList" variant="danger" id="btn-delete" >Borrar Lista</b-button>
      </footer> 
  </div>
</template>

<script>
import TodoList from "./components/TodoList"
export default {
  name: 'app',
  components: {
    TodoList
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
  .intro-wrapper{
  background: #E0BAD7;
  padding: 4vh 4vh;
  border-radius: 6px;
  max-width: 510px;
}
.nombre-lista{
  max-width: 400px;
}
@media (max-width: 600px){
  .intro-subwrapper-2 h2{
    margin-bottom: 6vh !important;
}
  .intro-subwrapper-2{
    padding: 3vh 0vh;
  }
  .first-wrapper input{
  font-size: 0.9rem;
}
}
@media (min-height: 700px){
  .intro-subwrapper-2 h2{
    margin-bottom: 7vh !important;
}
  .intro-subwrapper-2{
    padding: 3vh 0vh;
  }
  .made-p{
    margin-top: 3vh;
  }
}
.intro-subwrapper-2 h2{
  margin-bottom: 20px;
}
.made-p{
  font-style: italic;
  font-size: 1.1rem;
  padding-top: 5%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  max-width: 600px;
  padding: 3vh 3vh;
  text-align: center;
  color: $color-letra-negro;
}
h1{
  text-align: center;
  font-family: $tipografia-titulo-todo;
  margin-right: 2%;
}
.btn-create{
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
.git-btn{
  font-weight: 600 !important;
}
</style>