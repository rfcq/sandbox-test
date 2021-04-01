<template>
    <div id="v-model-radiobutton" class="demo">
        <input type="radio" id="one" value="Um" v-model="picked" />
        <label for="one">Opção 1</label>
        <br>
        <input type="radio" id="two" value="Dois" v-model="picked" />
        <label for="two">Opção 2</label>
        <br>
        <span><p><b>Opção selecionada: {{ picked }}</b></p></span>
    </div>
</template>

<script>

import {ref} from 'vue'

  export default {
    setup() {
        const picked = ref('');

      return {
        picked
      }
    }
  }

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>