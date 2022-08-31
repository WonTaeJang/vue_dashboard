<template>
    <h1>pinia에 저장하여 불러오기 및 drop시 저장하기</h1>
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

</style>