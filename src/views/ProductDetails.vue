<template>
  <div>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href>首页</a>&gt;
          <a href>产品中心</a>&gt;
          <a href>净美仕净化器</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="pd_info clearfloat">
        <div class="pdinfo_img">
          <img :src="`${publicPath}${productsInfo.pic}`" alt>
        </div>
        <div class="pdinfo_text">
          <h2>{{productsInfo.title1}}</h2>
          <ul>
            <li>型号：{{productsInfo.model}}</li>
            <li>功能：{{productsInfo.func}}</li>
            <li>噪音：{{productsInfo.noise}}</li>
            <li>风量：{{productsInfo.wind}}</li>
            <li>适用对象：{{productsInfo.applyTo}}</li>
            <li>适用面积：{{productsInfo.size}}</li>
            <li>空气净化能效等级：{{productsInfo.level}}</li>
          </ul>
          <p>
            价格：
            <span>¥</span>
            <strong id="price">{{productsInfo.price}}</strong>
          </p>
          <a class="add-cart" @click="addToCart(productsInfo)">
            <span class="icon_cart"></span>加入购物车
          </a>
        </div>
      </div>
      <div class="details_box">
        <h2 class="title">产品详情</h2>
        <div class="pd_details" v-html="productsInfo.detail">
          {{productsInfo.detail}}
          <!-- <p>家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。</p>
          <img src="@/assets/images/product-imgs/m8088a/01.jpg" alt=""/>
          <img src="@/assets/images/product-imgs/m8088a/02.jpg" alt=""/>
          <img src="@/assets/images/product-imgs/m8088a/03.jpg" alt=""/>
          <img src="@/assets/images/product-imgs/m8088a/04.jpg" alt=""/>
          <img src="@/assets/images/product-imgs/m8088a/05.jpg" alt=""/>
          <img src="@/assets/images/product-imgs/m8088a/06.jpg" alt=""/>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import products from "@/service/products";
// import {mapActions} from 'vuex'
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      productsInfo: {}
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.getProductDetails(id);
  },
  methods: {
    getProductDetails(pid) {
      products.getProductDetails(pid).then(res => {
        if (res) {
          this.productsInfo = res;
          console.log(res);
        }
      });
    },
    addToCart(productsInfo) {
      this.$store.dispatch("addToCart", productsInfo);
    }
  }
};
</script>
<style scoped>
.add-cart {
  cursor: pointer;
}
</style>



