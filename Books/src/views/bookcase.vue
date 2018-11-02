<template>
    <div class="bookcase">
            <div class="mowen">
          
           <div v-for="(item,index) in loadPage" :key=index>
             <sexList :hood="item"/>
          </div>
            </div>
    </div>
</template>

<script>
    import sexList from '../components/sexList'
    import {loadBookCase} from '../api/index'
    export default {
        data(){
           return{
               loadPage:[]
           }
        },
        created(){
           loadBookCase({
               url:'http://dushu.xiaomi.com/store/v0/fiction/id_list',
               parame:{
                   ids:'322020,352138,270874,405816,318621,323125',
                   owner:'0,2'
               }
           }).then(data=>{
               this.loadPage=data.data.items
              console.log(this.loadPage)
           }).catch(error=>{

           })
        },
        methods:{
           
        },
        components:{
            sexList
        }
    }
</script>

<style scoped>

</style>