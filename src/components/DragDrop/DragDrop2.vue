<template>
  <div class="content">
    <div class="flexbox">
        <div class="col" v-for="(item, ) in lists" :key="item.id">
            <div class="box" v-for="(numItem, idx) in item.numberList" :key="idx">
                <p>{{numItem.content}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import list from "@/assets/data/list.js"
import { ref } from "vue";

const lists = ref([...list]);
</script>

<style>
.col {
  display: flex;
  height: 500px;
  width: 150px;
  background-color: #fff;
  border: 1px solid lightgrey;
  margin-left: 5px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
}

.box {
  width: 130px;
  height: 50px;
  background-color: #7b71b7;
  margin-top: 10px;
  border-radius: 5px;
}
p {
  text-align: center;
  line-height: 20px;
  color: white;
}

.content {
  max-width: 650px;
  margin: 0 auto;
}
.flexbox {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
</style>