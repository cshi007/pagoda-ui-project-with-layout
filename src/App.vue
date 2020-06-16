<template>
  <pagoda-layout
    :side-menu="sideMenu"
    :user-info="userInfo"
    :on-logout="handleLogout"
    :on-operate-item-click="handleOperateItemClick"
    @tabs-change="handleTabsChange"
  >
    <!-- 头部的logo名称插槽 -->
    <div slot="header-left">
      <img src="http://pagoda-design-template.test.pagoda.com.cn:8080/static/imgs/white_bg.png" class="logo" />
      <span class="logo-text">PagodaUi</span>
    </div>
    <router-view></router-view>
  </pagoda-layout>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sideMenu: [
        {
          icon: 'el-icon-location',
          label: '主页面',
          subMenu: [
            {
              label: '主页面',
              url: '/main'
            }
          ]
        }
      ],
      userInfo: {
        userName: '小李',
        info: [
          {
            name: '工号',
            content: '2445245245'
          },
          {
            name: '手机号码',
            content: '1345454644'
          }
        ],
        operate: [
          {
            name: '设置'
          },
          {
            name: '切换账号'
          }
        ]
      }
    }
  },
  created () {},
  methods: {
    handleLogout () {
      console.log('logout')
    },
    handleOperateItemClick (operate) {
      // 当前点击的操作项配置
      console.log(operate)
    },
    handleTabsChange ({ url, query = {}, params = {} }) {
      this.$router.push({
        path: url,
        query,
        params
      })
    }
  }
}
</script>
