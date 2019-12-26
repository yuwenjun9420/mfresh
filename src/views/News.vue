<template>
  <div>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href>首页</a>&gt;
          <a href>公司动态</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="news">
        <ul>
          <li v-for="item in newsList" :key="item.nid">
            <span>{{item.pubTime|formatTime}}</span>
            <router-link :to="`/news/list/${item.nid}`">{{item.title}}</router-link>
          </li>
          <!-- <li><span>2016-02-21</span><a href="">空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</a></li>
          <li><span>2016-02-21</span><a href="">净美仕新风净化系统 助力校园新风行动</a></li>
          <li><span>2016-02-21</span><a href="">全国新风行动全面启动 助推净美仕战略升级</a></li>
          <li><span>2016-02-21</span><a href="">智能空气净化器翻盘：净美仕能否领衔?</a></li>-->
        </ul>
      </div>
      <!-- 分页导航-->
      <page-nav :pagesCount="pagesCount"  v-if="pagesCount>0"></page-nav> 
    </div>
  </div>
</template>
<script>
import news from '@/service/news.js'
import PageNav from '@/components/PageNav'
export default {
  data() {
    return {
      pagesCount:0,
      newsList:[]
    };
  },
  components:{
    PageNav
  },
  mounted(){
    let pageNum=this.$route.params.id;
    this.getNews(pageNum);
  },
  watch: {
    $route(route){
      let pageNum=route.params.id;
      this.getNews(pageNum);
      this.curPage=pageNum;
    }
  },
  methods: {
    getNews(pageNum){
      news.getNewsList(pageNum).then(res=>{
        if(res){
          this.newsList=res.list;
          this.pagesCount=res.pagesCount;
        }
      })
    }

  }
};
</script>
<style>
.pages ul {
  display: inline-block;
  vertical-align: middle;
}
.pages ul li {
  float: left;
}
.pages a{
  cursor: pointer;
}

.pages .prev-page,.pages .next-page{
  display: inline-block;
  vertical-align: middle;
}

</style>


