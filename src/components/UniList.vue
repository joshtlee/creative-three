<template>
<div id="main">
   <MainMenu/>  
   <div id="outside">
       <div id="display" v-for="school in schools" :key="school.id">
           <div id="schoolName">
               <p>{{school.name}}</p>
           </div>
           <div id="pic">
               <img :src="school.image" alt="">
           </div>
           <div id= "place">
               <p>Location: {{school.location}}</p>
            </div> 
            <div id="apply">
                <button class="auto" @click = "applyTime(school.id)">Apply Now</button>
            </div>
           
       </div>
   </div>
   

</div>

</template>
<script>
export default{
    name: 'UniList',
    props: {
        schools: Array,
    },
    methods: {
        applyTime(id) {
            if(id === 1){
                window.open('https://www.byu.edu/');
            }
            else if(id === 2){
                window.open('https://www.byuh.edu/')
            }
            else if(id === 3){
                window.open('https://www.byui.edu/')
            }
            else if(id === 4){
                window.open('https://www.ensign.edu/')
            }
        }
    }


}
</script>
<style scoped>
#outside{
    display: flex;
    align-items: center;
    justify-content: center;
    
}
#display{
    margin: 30px;
    
}
#schoolName{
    font-family: Avenir;
    font-size: 30px;
    text-align: center;
}
img{
    width: 300px;
    height: 300px;
}
#place{
     font-family: Avenir;
    font-size: 20px;
    text-align: center;
}
#apply{
    justify-content: center;
    display: flex;
}
button{
    background-color:aqua; 
}


</style>
