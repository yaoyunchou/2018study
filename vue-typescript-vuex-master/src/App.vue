<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
}
</script>

<style>
@import "./common/screen.css";
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
a{
  text-decoration: none;
  color: #00dcff;
}
li {
  list-style: none;
}
input{
  outline: none;
  border-radius: 5px;
  border: solid #ADADAD 1px;
}
</style>
