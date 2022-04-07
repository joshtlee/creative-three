<template>
     <div id="menu">
    <div id="logo">
      <router-link to="/">
        <img src="/images/hope logo.png" >
        
        </router-link>
    </div>
    
      <router-link to="/">
        <p>Home</p>
      </router-link>
      <router-link to="/about">
        <p>About</p>
      </router-link>
      <router-link to="/scholarships">
        <p>Scholarships</p>
      </router-link>
       <router-link to="/application">
        <p>Application</p>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
}
</script>


<style>
#menu {
  font-family: Avenir;
  font-size: 40px;
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  background-color: aqua;
}
img{
  height: 100px;
  width: 100px;

}
#menu a{
    text-decoration: none;
}

</style>