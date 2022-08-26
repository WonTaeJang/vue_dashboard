<template>
<div class="content">
    <div class="flexbox">
        <div class="col">
            <div class="box"></div>
        </div>

        <div class="col">
            <div class="box"></div>
        </div>

        <div class="col">
            <div class="box"></div>
        </div>
        <div class="col">
            <div class="box"></div>
        </div>

        <div class="col">
            <div class="box"></div>
        </div>

        <div class="col">
            <div class="box"></div>
        </div>
    </div>

</div>
  
</template>

<script setup>
//import { ref } from "vue";

// const list = ref([
//   {
//     id: 1,
//     numberList: [{ content: 1 }, { content: 2 }],
//   },
//   {
//     id: 2,
//     numberList: [
//       { content: 3 },
//       { content: 4 },
//       { content: 5 },
//       { content: 6 },
//     ],
//   },
//   {
//     id: 3,
//     numberList: [{ content: 7 }, { content: 8 }, { content: 9 }],
//   },
// ]);
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
  line-height: 50px;
  color: white;
}

.content{
    max-width: 650px;
    margin:0 auto;
}
.flexbox{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}
</style>