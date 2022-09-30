<template>
  <div>
    <b-form-group label="Nomes:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group id="checkbox-group" v-model="selected" :aria-describedby="ariaDescribedby" name="names">
          <b-form-checkbox value="jack">Jack</b-form-checkbox>
          <b-form-checkbox value="john">John</b-form-checkbox>
          <b-form-checkbox value="mike">Mike</b-form-checkbox>
        </b-form-checkbox-group>
        
    </b-form-group>
    <div>Selected: <strong>{{ names_checked }}</strong></div>
    </div>
</template>

<script>


export default {
  data() {
    return {
      names_checked: [],
      options: [
        { text: 'Jack', value: 'jack'},
        { text: 'John', value: 'john'},
        { text: 'Mike', value: 'mike'}
      ]
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