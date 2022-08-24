<template>
  <div>
    <div>{{cnt}}</div>
    <button @click="plus">+</button>

    <div>{{city}}</div>

    <div>computed: {{getCount}}</div>
    <button @click="getCount = -1">-</button>

    <div>
      <button @click="listStore.addList(1)">+</button>
      <button @click="listStore.popList">-</button>
      {{listStore.getDataAll}}
    </div>
    
    <div>
      <h2>DashBoard</h2>

      <div>
        <label @click="clickLabel">{{current}}</label>
      </div>

    </div>

  </div>
</template>

<script setup>
import useListStore from '@/store/index'
import {ref, onMounted, computed} from 'vue'

const cnt = ref(0);
const city = ref('');
const current = ref('sss');

const listStore = useListStore();


function plus(){
    cnt.value++;
}

function clickLabel(){
  current.value += 'L';
    //console.log(event.target.innerText);
    // console.log(event);
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