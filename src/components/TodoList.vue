<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <p>{{ time }}</p>
    
  </div>
</template>


<script setup>

import { defineProps,ref } from 'vue';

const props = defineProps({
  msg: String
});

const time = ref('');

function clock() {
    let currentTime = new Date;
    time.value = '';
    let str = '';
    str += currentTime.getHours()+ ':' + currentTime.getMinutes()+ ':' + currentTime.getSeconds();
    time.value = convert12(str); 

}

function convert12(str){
    let [hours,minutes,seconds] = str.split(':');
    let period = 'AM';

    if(hours >= 12) {
        period = 'PM';
        if(hours > 12){
            hours -= 12;
        }
    }

    if (hours == 0 ){
        hours = 12;
    }

    return `${hours}:${minutes}:${seconds} ${period}`;
}



setInterval(clock, 1000);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
