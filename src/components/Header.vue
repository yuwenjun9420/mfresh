<template>
  <div class="header_box">
    <header class="header container">
      <h1 class="logo">
        <router-link :to="{name:'login'}"></router-link>
      </h1>
      <div class="h_con">
        <ul class="clearfloat">
          <li class="phone">4000-585-116</li>
          <li>
            <a class="btn-switch" :class="$i18n.locale=='cn'?'active':''" @click="switchChinese">中文</a>
          </li>
          <li>
            <em>|</em>
          </li>
          <li>
            <a class="btn-switch" :class="$i18n.locale=='en'?'active':''" @click="switchEnglish">English</a>
          </li>
          <li>
            <a href="#" class="weixin"></a>
          </li>
          <li>
            <a href="#" class="weibo"></a>
          </li>
          <li v-if="!loginState">
            <router-link :to="{name:'login'}" class="h_login">登录</router-link>
          </li>
          <li v-if="!loginState">
            <em>|</em>
          </li>
          <li v-if="!loginState">
            <router-link :to="{name:'register'}" class="h_register">注册</router-link>
          </li>
          <li v-if="loginState" class="top_user">
            <a href>admin</a>
          </li>
          <li v-if="loginState" class="top_quit">
            <a @click="logout" href>退出</a>
          </li>
        </ul>
        <div class="search clearfloat">
          <button type="button"></button>
          <input type="text">
        </div>
      </div>
    </header>
    <!--nav-->
    <nav class="navbar">
      <div class="container">
        <div class="nav">
          <ul>
            <li>
              <router-link :to="{name:'index'}">
                <span class="icon_home"></span>{{$t('message.index')}}
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'about'}">{{$t('message.aboutJMS')}}</router-link>
            </li>
            <li>
              <router-link to="/news/1">{{$t('message.news')}}</router-link>
            </li>
            <li class="nav_pd">
              <router-link to="/products/1/1">
                {{$t('message.product')}}
                <span class="icon_pd"></span>
              </router-link>

              <div class="pd_dropdown">
                <router-link to="/products/1/1">净美仕净化器</router-link>
                <router-link to="/products/1/2">净美仕滤网</router-link>
              </div>
            </li>
            <li>
              <router-link :to="{name:'contactUs'}">{{$t('message.contactUs')}}</router-link>
            </li>
          </ul>
        </div>
        <div class="s_cart">
          <!-- <a href="cart.html">
            <span class="icon_cart"></span>购物车(
            <strong id="cart_sum">0</strong>)
            <span class="icon_sj"></span>
          </a>-->
          <router-link to="/cart">
            <span class="icon_cart"></span>{{$t('message.cart')}}
            (<strong id="cart_sum">{{allItem}}</strong>)
            <span class="icon_sj"></span>
          </router-link>
          <div class="cart_dropdown">
            <!--<h3>您的购物车为空~</h3>-->
            <ul>
              <!--<li>-->
              <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
              <!--<div>-->
              <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
              <!--</div>-->
              <!--<strong>¥1599.00</strong>-->
              <!--<em></em>-->
              <!--</li>-->
              <!--<li>-->
              <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
              <!--<div>-->
              <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
              <!--</div>-->
              <!--<strong>¥1599.00</strong>-->
              <!--<em></em>-->
              <!--</li>-->
            </ul>
            <div class="cd_js clearfloat">
              <span>
                共计：
                <strong>0.00</strong>
              </span>
              <a href="#">结算</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      loginState: state => state.user.isLogin
    }),
    ...mapGetters(["allItem"])
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    switchChinese() {
      this.$i18n.locale = "cn";
    },
    switchEnglish() {
      this.$i18n.locale = "en";
    }
  }
};
</script>
<style scoped>
  .btn-switch{
    cursor: pointer;
  }
  .btn-switch.active{
    color:#f60;
  }
</style>


