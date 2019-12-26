<template>
  <div>
    <div class="login_box">
      <div class="container">
        <div class="login">
          <h2>{{$t('message.userLogin')}}</h2>
          <dl class="clearfloat">
            <dt>
              <span
                v-if="promps.unameIsTips"
                class="tips"
                id="uname_prompt_text"
              >{{promps.unameTips}}</span>{{$t('message.username')}}：
            </dt>
            <dd>
              <input
                v-model="user.name"
                @blur="unameCheck"
                type="text"
                id="uname"
                :placeholder="$t('message.username')"
              >
              <em class="icon_user"></em>
              <i v-if="promps.unameIsTips" class="icon_error" id="uname_prompt_icon"></i>
            </dd>
          </dl>
          <dl>
            <dt>
              <span v-if="promps.upwdIsTips" class="tips" id="pwd_prompt_text">{{promps.upwdTips}}</span>{{$t('message.password')}}：
            </dt>
            <dd>
              <input v-model="user.pwd" @blur="upwdCheck" type="password" id="pwd" :placeholder="$t('message.password')">
              <em class="icon_pwd"></em>
              <i v-if="promps.upwdIsTips" class="icon_error" id="pwd_prompt_icon"></i>
            </dd>
          </dl>
          <p>
            <input type="checkbox">
            <span>自动登录</span>
          </p>
          <button @click="login" type="button" id="login">{{$t('message.login')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import axios from 'axios'
export default {
  data() {
    return {
      user: {
        name: "",
        pwd: ""
      },
      promps: {
        unameIsTips: false,
        unameTips: "用户名不能为空",
        upwdIsTips: false,
        upwdTips: "请输入密码"
      }
    };
  },
  methods: {
    //用户名校验
    unameCheck() {
      if (!this.user.name) {
        this.promps.unameIsTips = true;
        this.promps.unameTips = "用户名不能为空";
        return false;
      } else {
        this.promps.unameIsTips = false;
        return true;
      }
    },
    //密码校验
    upwdCheck() {
      if (!this.user.pwd) {
        this.promps.upwdIsTips = true;
        return false;
      } else if (this.user.pwd.length < 6) {
        this.promps.upwdIsTips = true;
        this.promps.upwdTips = "密码的长度不得少于6位";
        return false;
      } else {
        this.promps.upwdIsTips = false;
        this.promps.upwdTips = "请输入密码";
        return true;
      }
    },
    //登陆
    login() {
      if (this.unameCheck() && this.upwdCheck()) {
        this.$store
          .dispatch("login", this.user)
          .then(code => {
            if (code == "1") {
              this.$router.push({ name: "index" });
            } else {
              this.promps.unameIsTips = true;
              this.promps.unameTips = "用户名或密码不正确";
            }
          })
          .catch(err => {
            this.$message({
              showClose: true,
              message: err,
              type: "warning"
            });
          });
      } else {
        console.log("fail");
      }
    }
  }
};
</script>

