
<template>
  <div>
    <p>{{ msg }}
    <!-- 获取vuex文件的mystore.js中的 state中的count的值 -->
    {{ $store.state.count }}
    </p>
    <p>computed计算赋值结果是：{{ mycount }}</p>
    <p>
      <!-- 
        $store.commit('add', 5) 第一个参数是方法名，第二个是参数
      -->
      <button @click="$store.commit('add', 5)"> + </button>
      <button @click="$store.commit('reduce', 5)"> - </button>
    </p>
    <div>
      <p>使用mapMutations修改状态：</p>
      <p>
        <button @click="add(10)">+</button>
        <button @click="reduce(10)">-</button>
      </p>
    </div>
  </div>
</template>

<script>
  import mystore from '@/vuex/mystore';
  // 引入mapState
  import { mapState, mapMutations, mapGetters } from 'vuex';

  export default {
    data () {
      return {
        msg: 'Hello world'
      }
    },
    computed: {
      // mapState(['count']) 此处的count必须和store.js定义的常量 mystate中的count同名，因为这是直接访问 mystate的count
      ...mapState(['count']),
      // mapGetters 辅助函数，可以将store中的getter映射到局部计算属性mycount
      ...mapGetters(['mycount'])
    },
    methods: mapMutations(['add', 'reduce']),
    /*
     引用mystore.js，store为数据仓库
     */
    store: mystore
  }
</script>

