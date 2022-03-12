<template>
<div id="main">
   <MainMenu/>  
   <h1>Schools We Sponsor</h1>
   <hr>
   <UniList :schools="university"/>

</div>

</template>
<script>
import MainMenu from '../components/MainMenu.vue'
import UniList from '../components/UniList.vue'
export default {
    
    name: 'ScholarshipView',
    components: {
        MainMenu,
        UniList
    },
    computed: {
        university() {
            return this.$root.$data.university;
        }
    }
   

}
</script>
<style scoped>
h1{
    text-align: center;
    font-family: Avenir;
}
</style>
