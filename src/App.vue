<template>
  <h1>Sandbox</h1>
  <div id="nav">
      <sidebar-menu :menu="menu"  @update:collapsed="onToggleCollapse"/>
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
            hiddenOnCollapse: true
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
              },
              {
                href: '/form',
                title: 'Cadastro de Usuário',
                attributes: {
                  id: 'form-register'
                }
              },
              {
                href: '/about',
                title: 'Sobre',
                attributes: {
                  id: 'about'
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
