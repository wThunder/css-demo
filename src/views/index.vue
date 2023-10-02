<template>
  <div class="container">
    <div id="nav">
      <router-link
        v-for="(item,  index) in navData"
        :key="index"
        :to="{path: item.path}"
        class="menuButton">{{ item.name }}
      </router-link>
      <!-- <el-button @click="$router.push('/About')">About</el-button> -->
    </div>
    <div class="mainContent">
      <router-view/>
    </div>
    <live2d
      :style="live2d.style"
      :model="['bilibili-live/33', 'closet-default-v2&spring-2018-upper&spring-2018-lower&cba-hat']"
      :direction="live2d.direction"
      :size="live2d.size"
    />
  </div>
</template>

<script>
import live2d from "live2d-openfs";

export default {
  components: {live2d},
  data() {
    return {
      live2d: {
        direction: 'right',
        style: 'position: fixed; bottom: 0px; left: 0px;z-index: 9000',
        size: 250,
      },
      // 菜单的数据
      navData: [
        {
          name: '看板娘页面1',
          path: '/Live1'
        },
        {
          name: '看板娘页面2',
          path: '/Live2'
        },
      ],
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
