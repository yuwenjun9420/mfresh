<template>
  <div class="index">
    <div class="block">
      <el-carousel :interval="5000" trigger="click">
        <el-carousel-item v-for="item in slider" :key="item.sid">
          <img :src="item.imgSrc" alt>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--main-->
    <div class="main container">
      <div class="ind_con1">
        <h2 class="title">
          <router-link to="/products/1/1" class="more">more</router-link>净美仕产品
        </h2>
        <ul class="clearfloat">
          <li v-for="item in productList" :key="item.pid">
            <router-link :to="`/product/details/${item.pid}`" class="link">
              <img :src="item.pic" alt>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="ind_con2 clearfloat">
        <div class="ind_about">
          <h2 class="title">
            <router-link to="/about" class="more">more</router-link>关于净美仕
          </h2>
          <p>
            北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。
            <router-link to="/about">查看更多</router-link>
          </p>
        </div>
        <div class="ind_news">
          <h2 class="title">
            <router-link to="/news/1" class="more">more</router-link>公司动态
          </h2>
          <ul>
            <li v-for="item in newsList" :key="item.nid">
              <span>{{item.pubTime|formatTime}}</span>
              <router-link :to="`/news/list/${item.nid}`">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sliders from "@/service/sliders";
import ps from "@/service/products";
import news from "@/service/news.js";
export default {
  data() {
    return {
      slider: [],
      productList: [],
      newsList: []
    };
  },
  mounted() {
    this.slider = this.init();
    this.getProductList(1, 1);
    this.getNews(1);
  },
  methods: {
    //初始化轮播图
    init() {
      sliders.getSliders().then(res => {
        const { code, data } = res.data;
        if (code) {
          this.slider = data;
        }
      });
    },
    //获取商品列表
    getProductList(pageNum, type) {
      ps.getProduct(pageNum, type).then(res => {
        if (res) {
          this.pagesCount = res.pagesCount;
          this.productList = res.productList;
        }
      });
    },
    //获取新闻列表
    getNews(pageNum) {
      news.getNewsList(pageNum).then(res => {
        if (res) {
          this.newsList = res.list;
          if (this.newsList.length > 4) {
            this.newsList.splice(4, 1);
          }
        }
      });
    }
  }
};
</script>

<style>
.index .el-carousel__container {
  height: 500px;
}
</style>


