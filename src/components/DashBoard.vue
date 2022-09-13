<template>
  <div>
    <div>{{ cnt }}</div>
    <button @click="plus">+</button>

    <div>{{ city }}</div>

    <div>computed: {{ getCount }}</div>
    <button @click="getCount = -1">-</button>

    <div>
      <button @click="listStore.addList(1)">+</button>
      <button @click="listStore.popList">-</button>
      {{ listStore.getDataAll }}
    </div>

    <div>
      <h2>DashBoard</h2>

      <div>
        <label @click="clickLabel">{{ current }}</label>
      </div>
    </div>
  </div>

  <hr>

  <div>
    <div>drag & drop</div>
    <div>
      <router-link to="/drag/0">element drag & drop</router-link>
    </div>
    <div>
      <router-link to="/drag/1">component drag & drop</router-link>
    </div>
    <div>
      <router-link to="/drag/2">pinia save & loading</router-link>
    </div>
    <div>
      <router-link to="/drag/3">pinia sort save</router-link>
    </div>
  </div>

  <hr>

  <div>
    <div>
      binding
    </div>
    <div>
      <router-link to="/bind/0">data binding</router-link>
    </div>
  </div>

  <hr>
</template>

<script setup>
import {store} from "@/store/list";
import { ref, onMounted, computed } from "vue";

const cnt = ref(0);
const city = ref("");
const current = ref("sss");

const listStore = store();

function plus() {
  cnt.value++;
}

function clickLabel() {
  current.value += "L";
  //console.log(event.target.innerText);
  // console.log(event);
}

onMounted(() => {
  city.value = "서울";
});

const getCount = computed({
  get() {
    return cnt.value;
  },
  set(val) {
    cnt.value += val;
  },
});
</script>

<style>
</style>