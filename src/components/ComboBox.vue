<template>
    <div id="v-model-select" class="demo">
			<label for="comboBox"><b>ComboBox: </b></label>
			<select v-model="selected" id='dropdown'>
				<option disabled value="">Escolha um item</option>
				<option>Opção 1</option>
				<option>Opção 2</option>
				<option>Opção 3</option>
			</select>
			<br><br>
			<span id="opt-selected"> Opção selecionada: {{ selected }} </span>
		</div>
</template>

<script>
  
  import {ref} from 'vue'

  export default {
    setup() {
        const selected = ref('');

      return {
        selected
      }
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
