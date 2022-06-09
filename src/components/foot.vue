<template>
    <div>
        {{countChecked}} / {{ countAll }}  <button @click="deleteChecked">删除所有完成</button>
    </div>
</template>
<script>
import pubsub from 'pubsub-js';
export default{
    name:'todo-foot',
    data () {
        return {
            countChecked: null,
            countAll: null
        }
    },
    mounted(){
        // this.$bus.$on("getSendCount", (c,all)=>{
        //     console.log('getSendCount',c)
        //     this.countChecked = c
        //     this.countAll = all
        // })
        this.pubId = pubsub.subscribe('itemCount', (name,data)=>{
            this.countChecked = data[0]
            this.countAll = data[1]
        })
            this.$bus.$emit("sendCount")
    },
      beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  },
    methods: {
        deleteChecked(){
            this.$bus.$emit("deleteChecked")
        }
    },
}
</script>