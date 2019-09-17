<template>
    <div>
    <h2 v-if="mensaje_af === ''">{{mensaje_be}}</h2>
    <h2 v-if="mensaje_af !== ''">{{mensaje_af + " To-Do Lista"}}</h2>
    <input v-model="mensaje_af" type="text" /><b-button type="is-dark">CREATE</b-button>
    </div>
</template>

<script>
export default {
    name: "PreTodo",
    data: {
        mensaje_be: "Da Nombre a tu To-Do",
        mensaje_af: "",
    }
}
</script>

<style lang="stylus" scoped>

</style>