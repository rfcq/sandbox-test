<template>
  <div>
    <input type="checkbox" value="Jack" name="Jack" v-model="checkedNames">
    <label for="Jack">Jack</label>
    <input type="checkbox" value="John" name="John" v-model="checkedNames">
    <label for="John">John</label>
    <input type="checkbox" value="Mike" name="Mike" v-model="checkedNames">
    <label for="Mike">Mike</label>
    <br>
    <span>Selected: <strong>{{ checkedNames }}</strong></span>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        checkedNames: []
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