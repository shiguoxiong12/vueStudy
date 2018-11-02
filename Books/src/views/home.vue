<template>
    <div id="home">
        <Loading :show="false"/>
       <div class="Tabs">
           <div class="TabsIconLeft"></div>
           <div class="TabSelect">
               <div class="TabsBox Tabs_0 active">
                   <div class=" TabName"><router-link to="book" tag="div">书城</router-link></div>
               </div>
               <div class="TabsBox Tabs_1">
                    <div class="TabName"><router-link to="bookcase" tag="div">书架</router-link></div> 
               </div>
           </div>
           <div class="TabsIconRight"></div>
       </div>
       <div class="TabContent">
          
           <transition name="zoom"
  enter-active-class="zoomLeft"
  leave-active-class="zoomRight">
   <keep-alive>
              <router-view/>
                </keep-alive>
           </transition>
         
       </div>
    </div>
</template>

<script>
    
    export default {
        data(){
            return {
                transitionName:'slideInLeft'
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slideInLeft' : 'slideInLeft'
            }
         },
        created(){

        },
        
        
    }
</script>

<style lang="stylus" scoped>
#home
   width:100%;
   .Tabs
        width:100%
        height:.45rem
        position: fixed;
        top: 0;
        left:0;
        z-index:2000
        background-color: #efeff0
        border-bottom: 1px solid #ddd
        .TabSelect
            position absolute
            left:0
            top:0
            font-size:.14rem
            width:100%;
            padding:0 .6rem
            display flex
            flex-direction row
            justify-content space-around
            line-height:0.41rem
            box-sizing border-box
            .TabName
                .router-link-active
                    border-bottom:0.04rem solid red
                          
        .TabsIconLeft
            width: .44rem
            height:.5rem
            box-sizing :border-box
            background-image: url('http://image.read.duokan.com/mfsv2/download/s010/p01O5K5DzsAZ/2ZODzjwkRQh7l3.png')
            background-repeat: no-repeat
            background-position center
            background-size:.22rem
        .TabsIconRight
            position absolute
            width: .44rem
            height:100%
            top:0;
            right:0;
            background-image: url('http://image.read.duokan.com/mfsv2/download/fdsc3/p01j041d5DOT/boUg2EJlVetOMC.png') 
            background-repeat no-repeat
            background-position center
            background-size:.22rem
    .TabContent
        margin-top .45rem
        overflow hidden
       
</style>