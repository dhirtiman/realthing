<template>
  <img class="img" alt="Clock" src="./assets/clock.png">
  <TodoApp />
</template>

<script setup>
// import ClockApp from './components/ClockApp.vue';
import TodoApp from './components/TodoApp.vue';
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
