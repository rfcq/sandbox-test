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
      <sidebar-menu :menu="menu" @update:collapsed="onToggleCollapse" />
  </div>
  <router-view />
</template>

<script>

export default {
  data() {
      return {
        
        
        menu: [
          {
            header: 'Menu de Navegação',
            hiddenOnCollapse: true,
          
          },
          {
            href: '/',
            title: 'Página Inicial',
            icon: 'fa fa-user'
          },
          
          {
            title: 'Objetos disponíveis',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/textfield',
                title: 'Text Field'
              },
              {
                href: '/combobox',
                title: 'ComboBox'
              },
              {
                href: '/checkbox',
                title: 'CheckBox'
              },
              {
                href: '/radiobutton',
                title: 'RadioButton'
              }
            ]
          }
        ]
      }
    }
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
