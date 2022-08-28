<template>
  <div class="content">
    <div class="flexbox">
        <div class="col" v-for="(item, idx) in lists" :key="item.id"
            @drop.prevent="onDrop($event, idx)"
            @dragenter.prevent
            @dragover.prevent
        >
            <div class="box" v-for="(numItem, idx) in item.numberList" :key="idx"
                draggable="true"
                @dragstart="startDrag($event, numItem, item.id)"
                @dragend="endDrag"
            >
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

// drag start
const dragged = ref('');

function startDrag(event){
    dragged.value = event.target;
    console.log(event)

    event.target.classList.add("dragging");
}

function endDrag(event){
    event.target.classList.remove("dragging");

}

function onDrop(event, idx){
    console.log(event, idx)

    if(event.target.classList.contains("col")){
        dragged.value.parentNode.removeChild(dragged.value);
        event.target.appendChild(dragged.value);
    }
}

</script>

<style>
.col {
  display: flex;
  height: 400px;
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

/* drag CSS */
.dragging {
  opacity: 0.5;
}
</style>