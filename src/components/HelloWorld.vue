<template>
  <div>main</div>
</template>
<script>
  import axios from 'axios';

  export default {
    name: "HelloWorld",
    data() {
      return {};
    },
    methods: {},
    mounted() {
    }
  };
</script>
<style lang="css" scoped>
  .box {
    display: inline-block;
    width: 200px;
    height: 200px;
    background-color: skyblue;
    margin-top: 20px;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all 1s ease;
  }

  .slide-fade-leave-active {
    transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(30px);
    opacity: 0;
  }
</style>
