
<template>
  <div>
    <p>{{ msg }}
    <!-- 获取vuex文件的mystore.js中的 state中的count的值 -->
    {{ $store.state.count }}
    </p>
    <p>computed计算赋值结果是：{{ count }}</p>
    <p>
      <button @click="$store.commit('add')"> + </button>
      <button @click="$store.commit('reduce')"> - </button>
    </p>
  </div>
</template>

<script>
  import mystore from '@/vuex/mystore';
  // 引入mapState
  import { mapState } from 'vuex';

  export default {
    data () {
      return {
        msg: 'Hello world'
      }
    },
    /*
     * 数组中的count 必须和 mystore.js定义的常量 mystate 中的 count同名，
     因为这是直接访问mystate的count
    */
    computed: mapState(['count']),
    /*
     引用mystore.js，store为数据仓库
     */
    store: mystore
  }
</script>

