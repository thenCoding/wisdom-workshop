<template>
  <div class="login-page-wrapper">
    <div class="login-area">
      <img src="../../assets/logo.png" alt="logo" class="login-logo">
      <p class="login-info">每一位老师，都是精心雕琢知识的匠人</p>
      <input id="userAccount" type="text" placeholder="账号">
      <input id="userPassword" type="password" placeholder="密码">
      <div class="verify-wrapper">
        <input id="verifyCode" type="text" placeholder="验证码" maxlength="6" >
        <img v-bind:src="src" width="180" height="45" ng-click='yzm()' id="yzmimg">
      </div>

      <button class="btn btn-primary login-btn">登入</button>
      <div class="login_error"><span></span></div>
    </div>
  </div>
</template>
<style lang="less">

html{
  height:100%;
}
body{
  height:100%;
}
.login-page-wrapper{
  overflow: hidden;
  height:100%;
  background-color: #eeeeee;
  background-repeat: repeat;
}
.login-logo{
  max-width:100%;
}
.login-area{
  width:366px;
  margin:100px auto 56px;
}
.login-info{
  margin-top:24px;
  text-align: center;
  font-size: 14px;
  color: #222222;
  opacity: 0.3;
}
#userAccount{
  font-size: 20px;
  width:366px;
  height:50px;
  margin-top:40px;
  border:none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  text-indent:16px;
  outline:none;
}
#userPassword{
  font-size: 20px;
  width:366px;
  height:50px;
  border:none;
  margin-top: 1px;
  text-indent:16px;
  outline:none;
}
#verifyCode{
  float: left;
  font-size: 20px;
  width:180px;
  height:50px;
  border:none;
  -webkit-border-radius:8px;
  -moz-border-radius:8px;
  border-radius:8px;
  text-indent:16px;
  outline:none;
}
#yzmimg{
  float: left;
  width: 150px;
  height: 40px;
  margin-top: 5px;
  margin-left: 15px;
}
.verify-wrapper{
  margin-top: 1px;
  background-color: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
}
.login-btn{
  font-size: 20px!important;
  border-radius: 8px!important;
  outline: none!important;
  width:366px!important;
  height:50px!important;
  background-color: #4fc4ff!important;
  margin-top:16px;
  border: none!important;
  &:hover{
    background:linear-gradient(to bottom, #66daff 0, #4fc4ff 100%)!important;
  }
  &:active{
    border: none!important;
    background: #34a8ff!important;
  }
}
#keepLoginStatus{
  margin-top:16px;
}
.login-line{
  width:501px;
  height:1px;
  background-color: #222222;
  opacity: 0.3;
  margin:0 auto 0;
}

.forget-password-wrapper{
  width:500px;
  margin:0 auto;
  text-align: center;
  padding-top: 10px;
  a{
    color: #222222;
    opacity: 0.3;
  }
}
</style>

<script type="text/javascript">
  export default {
    name: 'login',
    data () {
      return {
        src: 'restapi/smartfactory/user/auth/verifycode/' + (new Date().getTime()) + '.jpg' + '?version=' + Math.random()
      }
    }
  }
</script>

