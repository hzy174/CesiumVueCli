import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    currentMenu: null,
    isCollapse: false,
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ]
  },
  //调用方法
  mutations: {
    //选择标签 选择面包屑
    selectMenu(state, val) {
      if (val.name === 'home') {
        state.currentMenu = null
      } else {
        state.currentMenu = val
        //如果等于-1说明tabsList不存在那么插入，否则什么都不做
        let result = state.tabsList.findIndex(item => item.name === val.name)
        result === -1 ? state.tabsList.push(val) : ''

      }
      // val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
    },
    //关闭标签
    closeTab(state, val) {
      let result = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(result, 1)
    },
  },
  actions: {}
})
export default store
