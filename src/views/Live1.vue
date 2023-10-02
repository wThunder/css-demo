<template>
  <div>
    <el-button type="primary" round @click="apiDemo()">调用接口1</el-button>
  </div>
</template>

<script>
import {list} from "@/api/live";

export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    /**
     * 测试接口
     */
    apiDemo: function () {
      const data = {
        id: '123',
        userName: '12312'
      }
      list(data).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
