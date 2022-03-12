<template>
  <div class="about">
    <MainMenu/>
    <h1>About Us</h1>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
      anim id est laborum.Non curabitur gravida arcu ac. Lobortis feugiat vivamus at augue eget. 
      Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Adipiscing bibendum 
      est ultricies integer quis auctor elit sed vulputate. Erat pellentesque adipiscing commodo elit at 
      imperdiet dui accumsan. Faucibus a pellentesque sit amet porttitor. Turpis cursus in hac habitasse 
      platea dictumst quisque. Dui ut ornare lectus sit amet. Sit amet volutpat consequat mauris nunc congue 
      nisi vitae suscipit. Aliquam sem et tortor consequat id porta nibh venenatis cras. Turpis egestas pretium 
      aenean pharetra magna ac placerat vestibulum. Odio ut sem nulla pharetra. Nec dui nunc mattis enim ut tellus 
      elementum sagittis vitae. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Amet nulla facilisi 
      morbi tempus iaculis. Iaculis nunc sed augue lacus viverra. Dictum varius duis at consectetur lorem. Dolor
       morbi non arcu risus quis varius. Ut tortor pretium viverra suspendisse. Lectus quam id leo in vitae turpis
        massa sed elementum.</p>
        <div id="pics">
          <img src="https://monitor.icef.com/wp-content/uploads/2018/09/african-student-perspectives-study-abroad.png" alt="">
          <img src="https://www.lonestar.edu/departments/webservices/mexicanAmericanStudiesimage.jpg" alt="">
          <img src="https://media.istockphoto.com/photos/african-male-graduate-handshaking-with-dean-picture-id475846573?k=20&m=475846573&s=612x612&w=0&h=d2XL6aTxfnHMUcZNmnkgeFBnz1d9vP6J7hfXxiP5088=" alt="">
        </div>
        <p id="quote">“The mind, once stretched by a new idea, never returns to its original dimensions.”</p>
  </div>
</template>

<script>
import MainMenu from '../components/MainMenu.vue'

export default{
  name:'AboutView',
  components: {
    MainMenu
  },
}
</script>
<style scoped>
h1{
  text-align: center;
}
p{
  text-align: center;
  font-family: Avenir;
  margin: 70px;
}
#pics{
  display: flex;
  align-items: center;
}
img{
  height: 480px;
  width: 480px;
}
#quote{
  text-align: center;
  font-family: Avenir;
  margin: 70px;
  font-size: 30px;
}
</style>

