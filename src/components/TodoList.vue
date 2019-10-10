<template>
  <div class="todo-list-wrapper">
    <div class="mt-2 first-wrapper">
    <b-form-input size="lg" v-model="titulo_item" placeholder="añade alguna cosa... "></b-form-input>
    <b-button @click="newItem" pill variant="primary">Añadir</b-button>
    </div>
      <div class="item-wrapper">
       <div>
          <h6 id="item_1">¿Añadir ...{{titulo_item}}?</h6>
        </div>
      </div>
      <!-- OMITIR ---Data getting filled inside item array: -->
      <ul class="item-list-ul">
        <li v-for="i in items" :key="i.id">{{ i }}
           <b-button @click="deleteItem(i)" variant="outline-dark">Hecho!</b-button>
        </li>
      </ul>

  </div>
</template>

<script>
export default {
    name: 'TodoList',
    components: {
        
    },
    data () {
    return {
      titulo_item: "",
      items: [
       
      ],
      itemEstaCreado: false
      }
    },
    methods: {
      newItem: function (){
        this.itemEstaCreado = true;
        this.items.push(this.titulo_item)
        this.titulo_item = "";
      },
      deleteItem: function (i){
        let itemstoHandle = this.items;
        for (var j=itemstoHandle.length-1; j>=0; j--) {
          if (itemstoHandle[j] === i) {
              itemstoHandle.splice(j, 1);
          }
        }
      },
      crossItem: function(i){
        let itemstoHandle = this.items[i]
        let stringtoCross = itemstoHandle
        itemstoHandle.filter(v => v!== stringtoCross)
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
#item_1{
  font-size: 1.4rem !important;
}
.item-list-ul li{
  font-size: 1.1em !important;
  font-weight: 600;
}
.crossed{
  text-decoration: line-through;
}
</style>