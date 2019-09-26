<template>
  <div class="todo-list-wrapper">
    <div class="mt-2 first-wrapper">
    <b-form-input size="lg" v-model="titulo_item" placeholder="añade alguna cosa... "></b-form-input>
    <b-button v-on:click="newItem" pill variant="primary">Añadir</b-button>
    </div>
  <TodoItem v-bind:titulo_item={titulo_item} />
  </div>
</template>

<script>
import TodoItem from "./TodoItem"
export default {
    name: 'TodoList',
    components: {
        TodoItem
    },
    data () {
    return {
      titulo_item: "",
      itemEstaCreado: false
      }
    },
    methods: {
      newItem: function (){
      this.itemEstaCreado = true;
    }
    }
  }
</script>

<style lang="scss">
$color-contraste: #E0BAD7;
$color-verde-secundario: #439775;
@media (max-width: 600px){
  .todo-list-wrapper{
  border: 2px solid #FFFFFF;
  border-radius: 3px;
  padding: 5%;
}
}
@media (min-width: 1100px){
.todo-list-wrapper{
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  padding: 10%;
}
.first-wrapper{
  display: flex;
  flex-direction: row;
}
.first-wrapper button{
  margin-left: 2%;
}
}
</style>