import { defineStore } from 'pinia';

// setup stores
const store = defineStore('saveList', {
    state: ()=>({
        sortList: []
    }),
    actions: {
        addList(param){
            this.list.push(param);
        },
        popList(){
            this.list.pop();
        },
        save(items){
            this.boxList = [...items]
        }
    },
    getters: {
        getDataAll: (state)=>{
            return state.list;
        },
        getBoxList: (state)=>{
            return state.boxList;
        }
    },
    persist: {
        key: 'sort'
    },
});

export {store}