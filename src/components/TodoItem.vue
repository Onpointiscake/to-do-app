<template>
    <div class="item-wrapper">
      <b-form-checkbox size="lg" id="checkbox-1" v-model="discount" name="checkbox-1" value="underlineItem" unchecked-value=""><h6 id="item_1">{{titulo_item}}</h6></b-form-checkbox>
      </div>
</template>

<script>
export default {
    name: 'TodoItem',
    components: {
        
    },
    props: {
  	  titulo_item: {
      type: String,
  	  }
    },
    data(){
        return {
            discount: false,
            price: 10,
            discountedPrice: .8
        }
    },
    computed:{
        computedPrice() { 
            return this.discount ? this.price * this.discountedPrice : document.getElementById("item_1").className += " item-crossed"
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
.item-wrapper{
    border: 1px solid #FFFFFF;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    margin: 5vh 0vh;
}
h6{
    font-family: 'Mansalva', cursive;
    font-size: 1.4rem !important;
}
.icon-fnt{
    font-size: 2rem;
}
.item-crossed{
    text-decoration: line-through !important;
}
</style>