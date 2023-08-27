<template>
    <div>
      <h1>Calculator App</h1>
      <input v-model="inputExpression" @keyup.enter="calculateResult" placeholder="Enter expression">
      <button @click="calculateResult">Calculate</button>

      <p>Result: {{ result }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Calculator from '../scripts/Calculator.js'; // Adjust the path
  
  const inputExpression = ref('');
  const calculator = new Calculator();
  const result = ref(null);
  
  const calculateResult = () => {
    try {
      calculator.calculate(inputExpression.value);
      result.value = calculator.getResult();
    } catch (error) {
      console.error(error);
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  