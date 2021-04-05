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
            attributes: {
              id: "object-group"
            },
            child: [
              {
                href: '/textfield',
                title: 'Text Field',
                attributes: {
                  id: 'textfield'
                }
              },
              {
                href: '/combobox',
                title: 'ComboBox',
                attributes: {
                  id: 'combobox'
                }
              },
              {
                href: '/checkbox',
                title: 'CheckBox',
                attributes: {
                  id: 'checkbox'
                }
              },
              {
                href: '/radiobutton',
                title: 'RadioButton',
                attributes: {
                  id: 'radiobutton'
                }
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
