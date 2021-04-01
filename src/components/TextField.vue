<template>
    <div id="v-model-basic" class="demo">
      <input v-model="message" placeholder="Digite algo..." />
      <p>Mensagem: {{ message }}</p>
    </div>
</template>

<script>

import {ref} from 'vue'

  export default {
    setup() {
        const message = ref('');

      return {
        message
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