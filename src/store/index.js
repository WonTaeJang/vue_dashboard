import { defineStore } from 'pinia';
import { ref, } from 'vue'

// setup stores
const store = defineStore('list', () => {
    const list = ref([]);

    function addList(param){
        list.value.push(param)
    }

    const getDataAll = computed(()=>{list.value})

    return { list, addList, getDataAll };
});

export default store