<template>
  <div>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href>首页</a>&gt;
          <a href>产品中心</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="pl_header">
        <router-link
          :to="{name:'products',params:{pid:1,type:1}}"
          :class="jinhuaqiShow?'cur':''"
        >净美仕净化器</router-link>
        <router-link
          :class="jinhuaqiShow?'':'cur'"
          :to="{name:'products',params:{pid:1,type:2}}"
        >净美仕滤网</router-link>
      </div>
      <!-- 产品列表-->
      <ul class="product_list clearfloat">
        <li v-for="item in productList" :key="item.pid">
          <router-link :to="`/product/details/${item.pid}`">
            <img :src="`${publicPath}${item.pic}`" alt>
          </router-link>
          <div class="pdlist_text clearfloat">
            <h3>
              <p>{{item.model}}</p>
              <span>{{item.title2}}</span>
            </h3>
            <router-link :to="`/product/details/${item.pid}`">查看详情</router-link>
          </div>
        </li>
      </ul>
      <!-- 分页导航-->
      <page-nav :pagesCount="pagesCount" :if="productList.lenght>0"></page-nav>
    </div>
  </div>
</template>
<script>
import ps from "@/service/products";
import PageNav from "@/components/PageNav";
export default {
  data() {
    return {
      publicPath: "/",
      jinhuaqiShow: true,
      pagesCount: 0,
      productList: []
    };
  },
  components: {
    PageNav
  },
  mounted() {
    console.log(this.$route);
    const { id, type } = this.$route.params;
    this.getProductList(id, type);
    this.jinhuaqiShow = this.isJinhuaqiShow(type);
  },
  watch: {
    $route(route) {
      const { id, type } = route.params;
      this.getProductList(id, type);
      this.jinhuaqiShow = this.isJinhuaqiShow(type);
    }
  },
  methods: {
    //获取商品列表
    getProductList(pageNum, type) {
      ps.getProduct(pageNum, type).then(res => {
        if (res) {
          this.pagesCount = res.pagesCount;
          this.productList = res.productList;
        }
      });
    },
    //净化器选中
    isJinhuaqiShow(type) {
      return type == 1 ? true : false;
    }
  }
};
</script>

