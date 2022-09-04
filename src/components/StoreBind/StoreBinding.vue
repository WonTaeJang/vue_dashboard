<template>
  <div>
    <button @click="getData">데이터 받아오기</button>
    <label>{{label}}</label>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import { getRandomUser } from '@/util'

const label = ref('null');
    
// async function getRandomUser() {
//   try {
//     const data = await axios.get("https://random-data-api.com/api/v2/users");
//     // console.log(data)
//     return data;
//   } catch(err) {
//     console.log("error: ", err);
//   }
// }

async function getData(){
  label.value = await getRandomUser();
}



    
</script>

<style>

</style>