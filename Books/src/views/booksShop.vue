<template>
    <div id="shop" class=""  style="" >
          <div class="content  wrapper" style="height:375px">
          <div style="position:relative">
              <span v-if="pulling" style="font-size:12px;position:absolute;left:0;top:-40px;display:inline-block;line-height:.5rem;text-align:center;width:100%;" class="refesh">正在刷新....</span>
              <div class="search">
                <div class="input">
                        <span class="icon"></span>
                        <div class="searchBox">输入书名/作者/关键字</div>
                </div>
            </div>
       <banner :banner='bannerPic'/>
       <div class="boxList">
           <div class="listItem">
               <img src="http://image.read.duokan.com/mfsv2/download/s010/p015iBxwdkmU/5wc5uzYhLZ7iVa.png"  alt="">
               <p>限免</p>
           </div>
           <div class="listItem">
               <img src="http://image.read.duokan.com/mfsv2/download/s010/p01LWZmXGCpy/aSrSq6Llgt9PqE.png"  alt="">
               <p>女生</p>
           </div>
           <div class="listItem">
               <img src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01NVfuCskSL/W9VPXMnDunLwGT.png"  alt="">
               <p>男生</p>
           </div>
           <div class="listItem">
               <img src="http://image.read.duokan.com/mfsv2/download/s010/p01pz5NtyRI0/2ENONnvOg23NXM.png"  alt="">
               <p>分类</p>
           </div>
           <div class="listItem">
               <img src="http://image.read.duokan.com/mfsv2/download/s010/p010kK7M5VyH/8kPz9nKvRXyu1k.png"  alt="">
               <p>排行</p>
           </div>
       </div>
        <div class="splitLine"></div>
       <bookList :bookData='bookData'>
            <template slot="text">
               查看更多
            </template>
            <template slot="title">
               本周最火
            </template>
       </bookList>
        <div class="splitLine"></div>
       <div class="recommend">
        <header>
            <div class="recommendTitle"> 
              <p class="left">重磅推荐 <span class="icon">推</span></p>
              <p class='right'>男/女</p>
            </div>
        </header>
        <section class="recommendContent">
            <div class="pic">
                <img :src="hood.cover" width=100% />
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
        <div class="text">
                <div class='textBlock' v-for="(item,index) in currentBookList" :key=index :data-id=item.fiction_id>
                    <span class='number'>{{index}}</span>
                    <div class="textBlockDesc">
                        <p>
                            {{item.title}}
                        </p>
                        <span>{{item.authors}}</span>
                    </div>
                </div>
                <div class="textContro">
                    <div>换一换</div>
                    <div>查看全部</div>
                </div>
         </div>
       </div>
       <div class="splitLine"></div>
      <div class="mowen">
           <h5 class="mowenT">{{womenLove.ad_name}}</h5>
            <div v-for="(item,index) in women" :key=index>
               <sexList :hood="item"/>
            </div> 
          <div class="footer">
               <div class="footerD huan">换一换</div>
               <div class="footerD men">女生频道>>></div>
          </div>
      </div>
      <div class="splitLine"></div>
      <div class="mowen">
           <h5 class="mowenT">{{MenLove.ad_name}}</h5>
             <div  v-for="(item,index1) in boy" :key=index1>
                <sexList :hood="item"/>  
             </div>  
          <div class="footer">
               <div class="footerD huan">换一换</div>
               <div class="footerD men">男生频道>>></div>
          </div>
      </div>
      <div class="splitLine"></div>
       <!-- <bookList :bookData='mian'>
            <template slot="text">
               更多限免制作>>>
            </template>
            <template slot="title">
               限时免费
            </template>
       </bookList> -->
       <!-- <bookList :bookData='super2'>
            <template slot="text">
               更多精彩专题>>>
            </template>
            <template slot="title">
               精选专题
            </template>
       </bookList> -->
          <div class="splitLine"></div>
           <div class="mowen">
          
            <div v-for="(item,index) in loadPage" :key=index>
             <sexList :hood="item"/>
          </div> 
       </div>   
          <div class="loadMore" v-show="true" style="font-size:16px;font-size: 16px;
            height: .6rem;
            line-height: .4rem;
            text-align: center;
            width: 100%;"><img src="http://img.lanrentuku.com/img/allimg/1212/5-121204193R5-50.gif" alt="" style="width: 17px;
            margin-right: 10px;">正在加载数据....</div>

     </div>   
         </div> 
    </div>
</template>

<script>
 import banner from '../components/banner'
 import bookList from '../components/bookList'
 import {loadIndxData,loadPageDateIndex} from '../api/index'
 import sexList from '../components/sexList'
 import BScroll from 'better-scroll'
  let page=0
    export default {
       
         data(){
            return{
               shop:[],
               bannerPic:[],
               bookData:[],
               hood:[],
               boy:[],
               women:[],
               currentBookList:[],
               womenLove:[],
               MenLove:{},
               mian:[],
               super2:[],
               pulling:false,
               pullDown:false,
               loadPage:[],
               y:0
            }
         },
          components:{
            banner,
            bookList,
            sexList
        },
       created(){
            let loading={}
            setTimeout(()=>{
                     loading = this.$loading.service({
                        lock: true,
                        text: 'Loading.....',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    loadIndxData({
              url:'/hs/v3/channel/418'
            }).then(data=>{
                if(data.status==200){
                    loading.close();
                    this.shop=data.data.items
                    this.bannerPic=data.data.items[0].data.data
                    this.bookData=data.data.items[1].data.data
                    this.hood=data.data.items[2].data.data[0]
                    this.womenLove=data.data.items[3]
                    this.mian=data.data.items[5].data.data
                    this.MenLove=data.data.items[4]
                    this.boy=this.MenLove.data.data
                    this.women=this.womenLove.data.data
                    this.super2=data.data.items[6].data.data
                }
           }).catch(error=>{
               console.log(error)
           })
            },200)
           
       },
       computed:{
            // currentBookList(){
            //    return this.shop[2].data.data.filter((item,index)=>{
            //        return index > 0 && index<5
            //    })
            // }
            
       },
       mounted(){
              
                this.$nextTick(()=>{
                     console.log(document.querySelector('.wrapper'))
                    
                })
                setTimeout(()=>{
                    this.initBetterScroll()
                },3000)
              
           
       },
       methods:{
          initBetterScroll(){
              let me=this
              let clientHeight=document.body.clientHeight
             let shop=document.querySelector('.wrapper')
             
             shop.style.height=document.body.clientHeight-45+'px'
               let scroll = new BScroll('.wrapper',{
                      pullDownRefresh: {
                        threshold: 20, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                        stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
                    },
                    pullUpLoad: {
                         threshold: -30, // 在上拉到超过底部 20px 时，触发 pullingUp 事件
                         stop: 20
                    },
                    scrollY: true,
                    click: true
               })
               scroll.on('scroll',(e)=>{
                  me.y=e.y
                 
               })
               scroll.on('pullingUp',()=>{
                  
                    this.pullDown=true
                //    setTimeout(()=>{
                //      scroll.finishPullUp()
                //      scroll.refresh()
                //       this.pullDown=false
                //    },2000)
                   loadPageDateIndex({
                       url:'/rock/book/recommend',
                       parame:{
                           start:page*10,
                           count:10
                       }
                   }).then(data=>{
                      if(data.status==200){
                          page++
                          console.log(me.y)
                          setTimeout(()=>{
                              this.loadPage=this.loadPage.concat(data.data.items)
                          },2000)
                          
                         // scroll.scrollTo(0,me.y,0)
                         
                          this.pullDown=false
                      }
                        scroll.finishPullUp()
                          scroll.refresh()
                   
                      
                      
                   }).catch(error=>{

                   })
               })
               scroll.on('pullingDown',()=>{
                   this.pulling=true
                   setTimeout(()=>{
                     scroll.finishPullDown()
                      scroll.refresh()
                      this.pulling=false
                   },2000)
               })
           }
        }
    }
</script>

<style lang="stylus" scoped>
#shop
  width:100%
  position: fixed
  .search
    width:100%
    height:.45rem
    background #fff
   
    .input
        width:90%
        height:.33rem
        border: 1px solid #f5f5f5;
        border-radius: 2px;
        margin:0.11rem 0.2rem;
        position relative
        .icon
          width:.3rem;
          height:100%;
          position absolute
          left:2px
          top:1px
          display block
          background: url('http://image.read.duokan.com/mfsv2/download/fdsc3/p01dSYLeWtSR/tY73MgTfVw7UAS.png') no-repeat center;
          background-size: 0.22rem;
        .searchBox
          font-size:.16rem;
          padding-left: .3rem;
          line-height:.33rem
          color:#ccc
   .boxList
          width:100%
          box-sizing border-box
          height:.6rem
          display flex
          background #fff
          font-size:.1rem
          flex-direction row
          justify-content space-around
          margin: .14prem 0 .04rem;
          .listItem
             width:20%
             height:100%
             display flex
             flex-direction column
             justify-content center
             align-items center
             padding .1rem 0 0 0
             img   
               width:.22rem
             p
               display inline-block
               margin:.07rem
               height:.1rem
    .splitLine 
              border-bottom: 10px solid #f5f5f5;
    .recommend
            font-size 13px 
            header
              height .4rem
              .recommendTitle
                 padding .15rem .13rem .14rem .13rem
                 .left
                    float left
                    margin 0
                    .icon
                       display inline-block
                       background #53ac7d
                       padding .03rem
                 .right
                    float right
                    margin 0
            .recommendContent
               padding .1rem
               display flex
               flex-direction row
               border-bottom 1px solid #ccc
               justify-content space-between
               .pic
                  img
                    width .90rem
                    height 1.13rem
               .desc 
                    margin-left .2rem
                    color #ccc
                   .descTitle
                      margin .05rem
                      font-size 18px
                      color black
                   .descName 
                      font-size 14px
                      margin .05rem  
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
    .mowen
        .mowenT
           height .4rem
           line-height .4rem
           text-indent 12px
           border-bottom 1px solid #ccc
           font-size 16px                  
        .footer
           display flex
           flex-direction row
           justify-content space-around
           height .4rem
           line-height .4rem

           font-size 14px             
    
</style>