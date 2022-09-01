<template>
  <div class="container">
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.container {
  text-align: center;
}

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
