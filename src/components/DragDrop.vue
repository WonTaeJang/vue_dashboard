<template>
  <div
    class="dropzone"
    @drag="funcDrag"
    @dragend="funcEnd"
    @dragover="funcOver"
    @dragenter="funcEnter"
    @dragleave="funcLeave"
    @drop="funcDrop"
  >
    <div id="draggable" draggable="true"
    @dragstart="funcStart"
    >
      드래그 가능
    </div>
  </div>
  <div
    class="dropzone"
    @drag="funcDrag"
    @dragend="funcEnd"
    @dragover="funcOver"
    @dragenter="funcEnter"
    @dragleave="funcLeave"
    @drop="funcDrop"
  ></div>
  <input type="checkbox" />
</template>

<script setup>
import { ref } from "vue";

const dragged = ref("");

function funcDrag() {
  // console.log(event);
}

function funcStart(event) {
  dragged.value = event.target;
  event.target.classList.add("dragging");
  //   console.log(dragged.value);
}

function funcEnd(event) {
  dragged.value = event.target;
  event.target.classList.remove("dragging");
  //   console.log(dragged.value);
}

function funcOver(event) {
  // draggle = true 한 div 안에서 움직일때 발생하는 이벤트
  event.preventDefault();

  // console.log('over')
}

function funcEnter(event) {
  console.log("enter");
  console.log(event.target);
  if (event.target.classList.contains("dropzone")) {
    console.log("contain");
    event.target.classList.add("dragover");
  }
}

function funcLeave(event) {
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
}

function funcDrop(event){
    event.preventDefault();

    if(event.target.classList.contains("dropzone")){
        console.log(dragged.value)
        console.log(dragged.value.parentNode)
        event.target.classList.remove("dragover");
        dragged.value.parentNode.removeChild(dragged.value);
        event.target.appendChild(dragged.value);
    }
}
</script>

<style scoped>
body {
  /* 사용자가 예제의 텍스트를 선택하지 못하도록 */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}

.dropzone.dragover {
  background-color: purple;
}

.dragging {
  opacity: 0.5;
}
</style>