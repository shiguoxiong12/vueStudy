<template>
    <div class="loading" v-show="show">
       <div class="load">
            <img src="http://img.lanrentuku.com/img/allimg/1212/5-121204193934-50.gif"/>
            <p>加载中,请稍后.....</p>
       </div>
           
    </div>
</template>

<script>
    export default {
        props:['show']
    }
</script>

<style lang="stylus" scoped>
.loading
    position fixed
    width 100%
    height 100%
    top:0
    text-align center
    z-index: 2000000;
    font-size 14px;
    background: #fff;
    .load  
        position absolute
        left 50%
        top 50%
        transform translateX(-50%) translateY(-50%)
        p
          margin-top 10px
</style>