<template>
  
  <div id="nav">
      <router-link to="/">Home</router-link> 
      <br>
      <router-link to="/textfield">TextField</router-link>
      <br>
      <router-link to="/combobox">ComboBox</router-link>
      <br>
      <router-link to="/checkbox">CheckBox</router-link>
      <br>
      <router-link to="/radiobutton">Radio Button</router-link>
  </div>
  <router-view />
</template>

<script>


export default {
  
}  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
