<template>
    
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
            
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
.item-wrapper{
   
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