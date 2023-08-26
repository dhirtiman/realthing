<template>
  <img class="img" alt="Clock" src="./assets/clock.png">
  <TodoList msg="Vue Clock"/>
  <CalculatorApp/>

</template>

<script setup>
import TodoList from './components/TodoList.vue';
import CalculatorApp from './components/CalculatorApp.vue';
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

.img{
  width: 10%;
  height: 10%;
}

</style>
