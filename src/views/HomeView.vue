<template>
  <div class="home">
    <MainMenu/>
    <img id="grad" src="/images/gradTime.png" alt="">
    <div id="text">Education is the passport to the future, 
      for tomorrow belongs to those who prepare for it today</div>
      <footer>
    <a href="https://github.com/joshtlee/creative-three">Github</a>
  </footer>
  </div>
  
</template>

<script>
import MainMenu from '../components/MainMenu.vue'


export default {
  name: 'HomeView',
  components: { MainMenu },
 
}
</script>
<style>

#grad{
  width: 100%;
  height: 100%;
}
#text{
  position: absolute;
  top: 200px;
  left: 75px;
  text-align: center;
  font-family: Avenir;
  color:white;
  font-size: 30px;
}
footer{
  background-color:aqua; 
  height: 40px;
  text-align: center;
  bottom: 5px;
}
a{
  text-align: center;
  text-decoration: none;
}

</style>
