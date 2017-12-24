import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 增加一个常量对象 state
const mystate = {
  count: 0
};
// mutations 保存所有的方法，该方法可以改变state数据
const mymutations = {
  // 增加
  add(state, num) {
    const count = state.count += num;
    return count;
  },
  // 减少
  reduce(state, num) {
    const count = state.count -= num;
    return count;
  }
};

// 增加一个getters对象
const mygetters = {
  mycount: function(state) {
    const count = state.count += 20;
    return count;
  }
};
// 增加一个 actions
const myactions = {
  addAction(context) {
    console.log(context);
    context.commit('add', 5); // 调用mymutations 中的 add方法，并传参数5
  },
  reduceAction(context) {
    context.commit('reduce', 5); // 调用mymutations中的reduce方法，并传参数5
  }
};
// 封装代码，让外部可见
export default new Vuex.Store({
  state: mystate,  // state的固定写法 保存数据的状态值
  mutations: mymutations, // mutations的固定写法 改变数据的所有方法
  getters: mygetters,
  actions: myactions
});