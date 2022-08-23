import { defineStore } from 'pinia';

// setup stores
const store = defineStore('list', {
    state: ()=>({
        list: [],
    }),
    actions: {
        addList(param){
            this.list.push(param);
        },
        popList(){
            this.list.pop();
        }
    },
    getters: {
        getDataAll: (state)=>{
            return state.list;
        }
    },
    persist: {
        key: 'pinia'
    },
});

export default store