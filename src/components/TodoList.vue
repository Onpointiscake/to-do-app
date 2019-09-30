<template>
  <div class="todo-list-wrapper">
    <div class="mt-2 first-wrapper">
    <b-form-input size="lg" v-model="titulo_item" placeholder="añade alguna cosa... "></b-form-input>
    <b-button @click="newItem" pill variant="primary">Añadir</b-button>
    </div>
      <!-- TodoItem: -->
      <div class="item-wrapper">
       <b-form-checkbox size="lg" id="checkbox-1" v-model="discount" name="checkbox-1" value="underlineItem" unchecked-value="">
          <h6 id="item_1">{{titulo_item}}</h6>
        </b-form-checkbox>
      </div>
      <!-- OMITIR ---Data getting filled inside item array: -->
      <ul>
        <li v-for="i in items" :key="i.id">{{ i }}</li>
      </ul>

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
      items: [
        "item1","item2","item3"
      ],
      itemEstaCreado: false
      }
    },
    methods: {
      newItem: function (){
      this.itemEstaCreado = true;
      this.items.push(this.titulo_item)
      this.titulo_item = "";
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