<template>
    <div>
         <section class="recommendContent">
            <div class="pic">
                <img v-lazy="hood.cover" width=100% />
            </div>
            <div class="desc">
               <div class="descTitle">{{hood.title}}</div>
               <div class="descName">{{hood.authors}}</div>
               <div class="descText">{{hood.rec_words}}</div>
               <div class="biao">
                   <ul class="content">
                       <li v-for="(item,index) in hood.tags" :key=index class="biaoName" :data-id=item.fiction_id>{{item}}</li>
                   </ul>
               </div>
            </div>
            <div class='clear'></div>
            
        </section>
    </div>
</template>

<script>
    export default {
        props:['hood']
    }
</script>

<style lang="stylus" scoped>
  .recommendContent
               padding .1rem
               display flex
               flex-direction row
               border-bottom 1px solid #ccc
               justify-content space-between
               .pic
                  img
                    width .90rem
                    height 100%
               .desc 
                    width 80%
                    margin-left .2rem
                    color #ccc
                   .descTitle
                      margin .05rem
                      font-size 18px
                      color black
                   .descName 
                      font-size 14px
                      margin .05rem  
                   .descText
                      font-size 13px
                    .biao
                      .content  
                          height .2rem
                          list-style none
                         .biaoName
                            height .2rem
                            color #53ac7d
                            line-height .2rem
                            font-size 10px
                            border 1px solid #53ac7d
                            margin-left .1rem
                            margin-top .02rem
                            width:28%
                            float left
            .text
               .textBlock
                   height .5rem
                   line-height .5rem
                    border-bottom 1px solid #ccc
                   .number
                     color orange
                     display inline-block
                     width 7%
                     line-height .5rem
                     text-align center
                     text-align center
                   .textBlockDesc
                      width 90%
                      height 100%
                      line-height .5rem
                      display inline-flex
                      margin-left .1rem
                      float right
                      font-size 16px
                      span
                         display inline-block
                         font-size 12px
                         color #ccc
                         margin-left .2rem
                 .textContro
                     height .4rem
                     line-height .4rem
                     display flex
                     flex-direction row
                     justify-content space-around 
</style>