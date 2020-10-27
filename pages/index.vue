<template>
  <div class="container">
    <div>
      <!-- 导航组件 -->
      <nuxt-link to="/about">about</nuxt-link>
      <h1 class="title">
        demo1
      </h1>
      <p >{{counter}}</p>
      <mt-button type="primary" @click="increment">primary</mt-button>
      <h2>服务器端渲染</h2>
      <ul>
        <li v-for="item in list" :key="item.id">{{item.title}}</li>
      </ul>
      <h2>客户端渲染</h2>   
      <ul>
        <li v-for="item in list1" :key="item.id">{{item.title}}</li>
      </ul>
      <el-button @click="getBanner">element button</el-button>

    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
import axios from "axios"
export default {
  data(){
    return {
      list1:[]
    }
  },
  // 在服务器端请求数据，渲染完毕
  async asyncData({ params }) {
    const {data} = await axios.get(`http://localhost:3001/api/getbanner`)
    console.log(data)
    // 服务器请求返回的数据，赋值给组件的 list在服务器端渲染
    return { list:data.list }
  },
  computed:{
    ...mapState(["counter"])
  },
  methods:{
    ...mapMutations(["increment"]),
    async getBanner(){
      const {data} = await axios.get(`/api/getbanner`);
      this.list1 = data.list;
    }
  },
  created(){
    console.log(this.$domain)
  },
  mounted(){
    console.log(this.$store.state.counter)
  }
}
</script>

<style lang="stylus">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p{
    color:red;
  }
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
