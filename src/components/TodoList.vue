<template>
  <div class="todo-list-wrapper">
    <div class="mt-2 first-wrapper">
    <b-form-input size="lg" v-model="titulo_item" placeholder="añade alguna cosa... "></b-form-input>
    <b-button @click="newItem" pill variant="primary">Añadir</b-button>
    </div>
      <div class="item-wrapper">
       
          <h6 v-if="titulo_item.length > 0" id="item_1">¿Añadir ...{{titulo_item}}?</h6>
      
      </div>
      <!-- OMITIR ---Data getting filled inside item array: -->
      <ul class="item-list-ul">
        <li 
          v-for="(i, index) in items" 
          :id="`id${index}`" 
          :key="index">{{ i }}
          <div class="item-butons">
            <b-button :id="`idDone${index}`" class="done-btn" @click="changeStyle(index)" size="sm" style="font-size: 1.1rem;" variant="outline-dark">Hecho!</b-button>
            <b-button :id="`idDelete${index}`" class="delete-btn" @click="deleteItem(i)" size="sm" style="font-size: 0.9rem;"  variant="warning">Eliminar</b-button>
          </div>
        </li>
      </ul>

  </div>
</template>

<script>
import {db} from '../main'

export default {
    name: 'TodoList',
    data () {
      return {
          titulo_item: "",
          items: [],
          itemEstaCreado: false
        }
    },
    firestore () {
      return {
        items: db.collection('items')
      }
    }, 
    methods: {
      newItem: function (){
        //locally:
        this.itemEstaCreado = true;
        this.items.push(this.titulo_item)
        //cloud database:
        db.collection('items').add({name:this.titulo_item});

        // reset item:
        this.titulo_item = "";
      },
      changeStyle: function(idNumber){
        
        const liToDecorate = document.getElementById(`id${idNumber}`)
        const doneBtnToDecorate = document.getElementById(`idDone${idNumber}`)
        const deleteBtnToDecorate = document.getElementById(`idDelete${idNumber}`)

        // Toggle function:
        if (doneBtnToDecorate.style.background !== 'black'){

          doneBtnToDecorate.style.background = 'black'
          doneBtnToDecorate.style.color = 'white'
          liToDecorate.style.textDecoration = 'line-through'
          doneBtnToDecorate.style.fontSize = '0.9rem'
          deleteBtnToDecorate.style.fontSize = '1.1rem'

        } else {
          doneBtnToDecorate.style.background = 'inherit'
          doneBtnToDecorate.style.color = 'inherit'
          liToDecorate.style.textDecoration = 'none'
          doneBtnToDecorate.style.fontSize = '1.1rem'
          deleteBtnToDecorate.style.fontSize = '0.9rem'
        }
        
      },
      deleteItem: function (i){
        let itemstoHandle = this.items;
        for (var j=itemstoHandle.length-1; j>=0; j--) {
          if (itemstoHandle[j] === i) {
              itemstoHandle.splice(j, 1);
          }
        }
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
  padding: 5%;
}
.first-wrapper{
  display: flex;
  flex-direction: row;
}
.first-wrapper button{
  margin-left: 2%;
}
}
/** General Styles: */
.item-wrapper{
    padding: 4vh 3vh 4vh 3vh;
}
.item-list-ul{
  margin-right: 4vh;
}
.item-list-ul li{
  margin-bottom: 3vh;
} 
.item-list-ul li{
  font-size: 1.4em !important;
  font-weight: 600;
  list-style: outside none none;
}
.done-btn{
  margin-right: 20px;
  font-weight: 600 !important;
}
.delete-btn{
  
  font-weight: 600 !important;
}


</style>