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
      <h2 class="empty-carts" v-if="carts.length==0">购物车中没有任何商品！</h2>
      <div v-if="carts.length>0" class="cart">
        <div class="cart_con">
          <div class="cartcon_title">
            <span>
              <input type="checkbox" @click="selectAll"> 全选
            </span>
            <span>商品信息</span>
            <span>单价</span>
            <span>数量</span>
            <span>金额</span>
            <span>操作</span>
          </div>
          <ul>
            <li v-for="(item,index) in carts" :key="item.id">
              <input type="checkbox" class="cart_checkbox" v-model="item.isActive">
              <router-link :to="`/product/details/${item.pid}`" class="cart_img">
                <img :src="`${publicPath}${item.pic}`" alt>
              </router-link>
              <router-link :to="`/product/details/${item.pid}`" class="cart_title">{{item.title1}}</router-link>
              <!-- <i>¥1599</i> -->
              <i>{{item.price}}</i>
              <div>
                <span @click="numSub(index)">-</span>
                <input readonly type="text" v-model="item.num">
                <span @click="numAdd(index)">+</span>
              </div>
              <!-- <strong>¥1599.00</strong> -->
              <strong>{{item.price*item.num|currencyFilter('￥')}}</strong>
              <em @click="removeToCart(index)"></em>
            </li>
          </ul>
        </div>
        <div class="cart_header">
          <span>
            已选商品
            <em>{{selectItem}}</em>件
          </span>
          <span>
            总金额：
            <strong>{{total|currencyFilter('￥')}}</strong>
          </span>
          <button :class="total>0?'btn-checkout':'disable'" type="button">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    ...mapGetters(["total", "selectItem", "allItem"]),
    ...mapState({
      carts: state => state.cart.carts
    })
  },
  methods: {
    ...mapActions(["numAdd", "numSub", "removeToCart", "selectAll"])
  },
  filters: {
    currencyFilter(money, prev) {
      return prev + money.toFixed(2);
    }
  }
};
</script>
<style>
.empty-carts {
  text-align: center;
  margin-top: 100px;
  margin-bottom: 200px;
}
.cart_header > button.btn-checkout {
  cursor: pointer;
}
.cart_header > button.disable {
  color: #333;
  background: #eee;
  outline: none;
}
body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>


