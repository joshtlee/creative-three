<template>
<div class="app">
  <router-view />
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#menu {
  font-family: Avenir;
  font-size: 40px;
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  
}
img{
  height: 100px;
  width: 100px;
}

</style>
