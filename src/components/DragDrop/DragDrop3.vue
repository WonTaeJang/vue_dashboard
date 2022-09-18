<template>
    <h1>pinia에 저장하여 불러오기 및 drop시 저장하기</h1>
    <button @click="getList">list.js 불러오기</button>
    <button @click="getStoreList">store 불러오기</button>
    <button @click="saveStoreList">store 저장하기</button>
  <div class="content">
    <div class="flexbox">
        <div class="col" v-for="(item, idx) in lists" :key="item.id" :id="item.id"
            @drop.prevent="onDrop($event, idx)"
            @dragenter.prevent
            @dragover.prevent
        >
            <div class="box" v-for="(numItem, idx) in item.numberList" :key="idx" :id="idx"
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
import { store } from '@/store/list'

const box = ref({});
const lists = ref([]);
const listStore = store();

// drag start
const dragged = ref('');

function getList(){
    lists.value = [...list];
}

function saveStoreList(){
    listStore.save([...lists.value]);
}

function getStoreList(){
    lists.value = listStore.getBoxList;
}

function startDrag(event){
    dragged.value = event.target;
    // console.log(event.target.parentNode.id);
    // console.log(event.target.innerText);

    box.value = {
        id: event.target.parentNode.id,
        box_id: event.target.id,
        boxName: event.target.innerText
    }

    console.log('start drag', box.value)

    event.target.classList.add("dragging");
}

function endDrag(event){
    event.target.classList.remove("dragging");

}

function onDrop(event, idx){
    // list에 data를 전달하지 않아서 갱신되지 않는다.
    console.log(event, idx)

    if(event.target.classList.contains("col")){
        // drop하는 container 위치
        // const ctr = event.target.parentNode.id;

        dragged.value.parentNode.removeChild(dragged.value);
        event.target.appendChild(dragged.value);

        // delete list
        let temp_list = [];
        temp_list = lists.value[box.value.id].numberList.filter(e=>{
            if(e.content == box.value.boxName)
                return false;
            else
                return true;
        })

        lists.value[box.value.id].numberList = [...temp_list];


        // insert list
        

        console.log(temp_list)

        
    }
}

</script>

<style>

</style>