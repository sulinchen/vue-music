<template>
  <div id="app" ref='app'>
    <!-- TODO:learn:处理有些不需要被缓存的页面的方法 -->
    <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
          <!-- discDetial页面不需要被缓存 -->
    </router-view>
    <play-music ref="playMusic"></play-music>
  </div>
</template>

<script>
import MHeader from './components/header/m-header.vue'
import playMusic from './pages/playMusic'
import { Tab, TabItem } from 'vux'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab,
    TabItem,
    playMusic
  },
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    switchTabItem(index) {
      console.log('on-before-index-change', index)
      switch (index) {
        case 0:
          this.$router.push('/')
          break
        case 1:
          this.$router.push('/singers')
          break
      }
      this.$vux.loading.show()
      setTimeout(() => {
        this.$vux.loading.hide()
        this.tabIndex = index
      }, 100)
    }
  },
  mounted() {
    // debugger
    // 预加载计算playMusic组件中body的高度
    let playMusic = this.$refs.playMusic.$el.getElementsByClassName('play-music')[0]
    let body = this.$refs.playMusic.$el.getElementsByClassName('body')[0]
    let footer = this.$refs.playMusic.$el.getElementsByClassName('footer')[0]

    playMusic.style.display = 'block'
    playMusic.style.zIndex = '-100'
    let bodyTop = body.getBoundingClientRect().top
    let footerTop = footer.getBoundingClientRect().top
    //                                             20 * 2:上下的margin距离
    body.style.height = footerTop - bodyTop - 10 - 20 * 2 + 'px'
    playMusic.style.display = 'none'
    playMusic.style.zIndex = '2'
  },
  computed: {
    ...mapGetters([
      'isMiniPlayShow'
    ])
  },
  watch: {
    isMiniPlayShow() {
      // 迷你播放器存在时,body高度减少60px,防止遮挡内容
      if (this.isMiniPlayShow) {
        this.$refs.app.style.height = 'calc(100% - 60px)'
      } else {
        this.$refs.app.style.height = '100%'
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
#app
  display flex
  flex-direction column
  width 100%
  height 100%
  .main-header
    /deep/ .vux-tab
      background-color: transparent
      .vux-tab-item
        background: none
  .main-body
    flex 1
    overflow hidden
</style>
