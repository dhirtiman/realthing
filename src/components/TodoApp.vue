<template>
    <input v-model="task" @keyup.enter="addTask" placeholder="Enter Task">
    <button @click="addTask">Add Task</button>
    <ul>
        <li v-for=" (dos, index) in list" :key="index">
            {{ index+1 }}: {{ dos }}
            <button @click="removeTask(index)">❌</button>
        </li>
    </ul>
    <button @click="clearList">clearList</button>
</template>


<script setup>
import { ref } from 'vue';
import Todo from '../scripts/TodoList.js';
const todo = new Todo();

const list = ref(todo.getAll());
const task = ref('')


const addTask = () => {
    try {
        todo.add(task.value);
        updateList();
        task.value = '';
    } catch (error) {
        console.log(error)
    }
}
const removeTask = (index) => {
    try {
        todo.remove(index);
        updateList();
    } catch (error) {
        console.log(error);
    }
}

const clearList = () => {
    todo.clear();
    updateList();
}

function updateList ()  {
        list.value = [...todo.getAll()];

}






</script>