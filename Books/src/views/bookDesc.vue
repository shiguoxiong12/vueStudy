<template>
    <div class="bookDesc">
         <div class="head">
              <div class="back" @click="goBack"></div>
              <div class="home"></div>
         </div>
         <section class="block">
             <div class="pic">
                 <div class="pic_1">
                     <img :src="current.item.cover" alt="" width="100%">
                 </div>
                 <div class="pic_2">
                       <h5 class="bookName">{{current.item.title}}</h5>
                       <p class="bookAuthor m">{{current.item.authors}}</p>
                       <p class="reader m">{{current.item.score_count}}个评价</p>
                       <p class="price m">价格: {{current.item.price}}书币/千字</p>
                       <p class="count m">字数: {{current.item.word_count}}字</p>
                 </div>
             </div>
             <div class="btn">
                 <div class="start btn1">开始阅读</div>
                  <div class="upload btn1">下载</div>
             </div>
            
             <div class="desc">
                  {{current.item.content}}
                 
             </div>
              <div class="newOne">{{current.item.latest}}</div>
          </section>
          <div class="splitLine"></div>
          <div class="card">
              <h3>类别标签</h3>
              <div class="card_type">
                    <span v-for="(item,index) in current.item.tags" :key=index>{{item}}</span>
                    
              </div>
          </div>
           <div class="splitLine"></div>
          <!--其他图书-->

          <section class="other">
                <div>作者其它图书</div>
               
                    <ul class="booksItem">
                        <li v-for="(item,index) in current.author_books" :key=index>
                            <img :src="item.cover"/>
                            <p>
                                {{item.title}}
                            </p>
                        </li>
                    </ul>
                
          </section>
           <div class="splitLine"></div>
           <section class="other">
                <h4>图书信息</h4>
                <br/>
                <p>版权：阅文集团旗下起点中文网</p>
          </section>

    </div>
</template>

<script>
 import {loadDesc} from '../api/index'
    export default {
        data(){
            return{
                current:{}
            }
        },
         created(){
             let userId=this.$route.params.userId
             loadDesc({
                 url:'http://dushu.xiaomi.com/hs/v0/android/fiction/book/'+userId
             }).then(data=>{
                 this.current=data.data
             }).catch(error=>{

             })         
             
         },
         mounted(){

         },
         methods:{
            goBack(){
                this.$router.go(-1)
            }
         }
    }
</script>

<style lang="stylus" scoped>
.bookDesc
   width 100%
   font-size 16px
   padding 0 .04rem
   
   height .44rem
   background-color #efeff0
   .head
        height 100%
        display flex
        flex-direction row
        justify-content space-between
        .back 
            width 10%
            background url('http://dushu.xiaomi.com/x0D0GrWs.png') no-repeat center 
            background-size:.15rem 
            padding .04rem
        .home 
            width 10%
            background url('http://image.read.duokan.com/mfsv2/download/fdsc3/p01eZH42sBV7/QTS90E2ZVritaa.png') no-repeat center 
            background-size:.2rem
            padding .04rem
    .block
        width 100%
        .pic
            padding .3rem
            height 1.95rem
            overflow hidden
            .pic_1
               float left
               width 30%
            .pic_2
               float left 
               width: 60%
               font-size 13px
               margin-left .3rem
               .bookName
                  
                  margin-bottom .2rem
                  font-size 18px
               .bookAuthor
                   color pink 
                   margin-top .05rem;
                .bookAuthor
                   margin-top .05rem;
                .bookDesc
                   margin-top .05rem;
                .reader
                   margin-top .05rem;
                .price
                   margin-top .05rem;
                .count
                   margin-top .05rem;
        .btn 
             font-size 16px
             overflow hidden
             display flex
             flex-direction row
             justify-content space-between
             padding 0 .05rem
             .btn1
                flex 1
                padding .1rem
                margin .05rem
                border:1px solid #ccc
                border-radius .04rem 
                text-align center
                &.start 
                  background #f35d02
                  text-align center
                  color #fff
    .splitLine
          border-bottom: 10px solid #f5f5f5;
        .desc
            padding .05rem .1rem
            margin-top .2rem
            font-size 14px
            color #585858
            -webkit-line-clamp: 5;
            text-overflow: ellipsis;
            overflow: hidden;
        .newOne
              height .4rem
              line-height .4rem
              color #585858
              text-align center
              border-top 1px solid #ccc
    .card
        padding .1rem
        .card_type
          margin .05rem
          padding 0 .1rem
          span 
             display inline-block
             width 1rem
             text-align center
             border-radius:4px
             margin-left .04rem
             margin-top .05rem
             border 1px solid #ccc
             padding .04rem
             &:nth-child(1)
                   background:#fbebe8
             &:nth-child(2)
                   background:#fbebe8
             &:nth-child(3)
                   background:#e8f9db
    .other 
       padding .1rem
       color #585858
       font-size 13px
       .booksItem
          padding-left 0
          list-style none 
          overflow hidden
          li
            width 33%
            margin-top .03rem
            height 100%
            float left
            img  
              width 100%

</style>
