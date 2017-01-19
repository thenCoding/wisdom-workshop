<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/login/login.vue'

export default {
  name: 'app',
  components: {
    login
  }
}

</script>

<style lang="less">
  * {
    padding:0;
    margin:0;
    font-family:'微软雅黑';
  }
  ul,li {
    list-style: none;
  }
  #app{
    height:100%;
  }

  .index-wrapper {
    overflow: hidden;
  }

  .index-nav {
    height: 70px;
    background-color: #46c1f9;
    > img {
      float: left;
      height:70px;
    }
    ul {
      position: absolute;
      top: -10px;;
      right: 60px;
      overflow: hidden;

      li {
        position: relative;
        float: left;
        min-width: 70px;
        line-height: 2.5;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
        &:hover:after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #fff;
        }
        > a {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          display: inline-block;
          margin-top: 30px;
        }
      }
    }
    .index-nav-exit {
      a {
        color: #EF5350;
      }
      margin-left: 20px;
    }
  }

  .current-main-nav:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #fff;
  }

</style>
