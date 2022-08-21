<template>
  <div>
    <div>{{cnt}}</div>
    <button @click="plus">+</button>

    <div>{{city}}</div>

    <div>computed: {{getCount}}</div>
    <button @click="getCount = -1">-</button>

  </div>
</template>

<script setup>
// import { useListStore } from '@/store/list'
// import { computed } from '@vue/runtime-core';
import {ref, onMounted, computed} from 'vue'

const cnt = ref(0);
const city = ref('');


function plus(){
    cnt.value++;
}

onMounted(()=>{
    city.value = '서울';
})

const getCount = computed({
    get(){return cnt.value},
    set(val){cnt.value += val}
})

</script>

<style>

</style>