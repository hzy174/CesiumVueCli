<template>
  <div id="app">
    <el-container>
      <el-aside width="67px" style="height: 100vh;">
        <left_nav></left_nav>
      </el-aside>
      <el-container>
        <el-header class="eHeader">
          <top_nav></top_nav>
        </el-header>
        <el-main style="height: 86vh">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
        <!--        <el-footer style="border:1px solid green;">Footer</el-footer>-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import left_nav from './components/left-nav'
  import top_nav from './components/top-nav'

  export default {
    name: 'App',
    components: {
      left_nav,
      top_nav
    },
  }
</script>

<style>
  * {
    margin: 0px;
  }

  .eHeader {
    margin: 0px;
    padding: 0px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-enter-active {
    transition: opacity .1s;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity .8s;
  }

  .el-main {
    padding: 0px;
  }
</style>
