<template>
    <div class="bookList">
       <div class="bookTile">
           <h3><slot name="title"></slot></h3>
       </div>
      
       <div class="content">
            <div v-if="true">
            <ul class='contenta' >
               <li v-for="(item,index) in bookData" :key=index class="contentab" :data-id=item.fiction_id @click="goPage(item.fiction_id)">
                    <img v-lazy="item.cover"/>
                    <p>{{item.title}}</p>
               </li>
            </ul>
            </div>
           <div v-else-if="bookData[0].data.book_cover">
                 <ul class='contenta'>
                <li v-for="(item,index) in bookData" :key=index class="contentab" :data-id=item.fiction_id @click="goPage(item.fiction_id)">
                        <img v-lazy="item.data.book_cover"/>
                        <p>{{item.ad_name}}</p>
                </li>
           </ul>
           </div>
           <div v-else>
                 <ul class='contenta'>
               <li v-for="(item,index) in bookData" :key=index class="contentab" :data-id=item.fiction_id @click="goPage(item.fiction_id)">
                    <img v-lazy="item.ad_pic_url"/>
                    <p>{{item.ad_name}}</p>
               </li>
           </ul>
           </div>
          
       </div>
       <div class="controlBtn"> 
           <slot name="text"></slot>
       </div>
    </div>
</template>

<script>
    export default {
        props:['bookData'],
        created(){
          
        },
        methods:{
            goPage(a){
               this.$router.push({ name: 'bookDesc', params: { userId: a }})
            }
        }
    }
</script>

<style lang="stylus" scoped>
.bookList
   width:100%
   background #fff
   font-size .16rem
   .bookTile
     
      border-left:6px solid #ffab18
      h3
        height:.4rem
        line-height .4rem
        padding-left .2rem
        font-size 16px
        margin:0
   .content
      width:100%
      box-sizing border-box
      .contenta
         width:100%
         padding-left 0
         margin 0
         list-style none
         display flex
         flex-direction row
         flex-wrap wrap
         .contentab
           flex 1
           padding 0.05rem
           text-align center
           img 
              width:100%
           p
             color #8d8d8d
             width .86rem
             font-size 13px
             padding-top .1rem
             margin 0 auto
             text-align left
    .controlBtn
        height:.42rem
        text-align center
        border-top 1px solid #f0f0f0
        padding 0.1rem 0
</style>