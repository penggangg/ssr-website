<template>
  <div>
      <div class="container-fluid"  :class="{ blackNone: $route.path === '/' || $route.path === '/marketAnalysis'|| $route.path === '/dynamic'|| $route.path === '/business'}">
        <div class="row hidden-xs hidden-sm header-pc" :class="{ headerHome: $route.path === '/' || $route.path === '/marketAnalysis'|| $route.path === '/dynamic'|| $route.path === '/business'}">
          <div class="col-md-2 text-right logo"><img src="../../assets/images/logo.png" alt="" srcset=""></div>
          <div class="col-md-1 citySwicth">
            <img src="../../assets/images/icon-location.svg" alt="" srcset="">
            <router-link  :to="{ path: '/', query: { code: 3 }}" :class="{ active: $route.query.code == 3 }" tag="span">上海</router-link>
            <span>|</span>
            <router-link  :to="{ path: '/', query: { code: 2 }}"  :class="{ active: $route.query.code == 2 || !$route.query.code }"   tag="span">北京</router-link>
          </div>
          <ul class="row col-md-7 nav" >
            <router-link v-for="(item, index) in arrPath" :key="index" :class="{ active: $route.meta.activeClass === item.activeClass}" :to="{ path: `/${item.path}`, query: { code }}" tag="li" >{{item.name}}</router-link>
          </ul>
          <div class="col-md-2 text-right tel">服务热线： 400-888-8888 {{ $route.meta.activeClass }}</div>
        </div>
        <div class="visible-sm-block visible-xs-block">
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arrPath: [
        {
          path: '',
          name: '首页',
          activeClass: 'home'
        },
        {
          path: 'newHouse',
          name: '新房',
          activeClass: 'newHouse'
        },
        {
          path: 'shop',
          name: '商铺',
          activeClass: 'shop'
        },
        {
          path: 'officeBuild',
          name: '写字楼',
          activeClass: 'officeBuild'
        },
        {
          path: 'business',
          name: '商务合作',
          activeClass: 'business'
        },
        {
          path: 'marketAnalysis',
          name: '市场分析',
          activeClass: 'marketAnalysis'
        },
        {
          path: 'delegate',
          name: '房产委托',
          activeClass: 'delegate'
        },
        {
          path: 'dynamic',
          name: '企业动态',
          activeClass: 'dynamic'
        },
        {
          path: 'company',
          name: '公司介绍',
          activeClass: 'company'
        }
      ],
      isHome: true,
      city: []
    }
  },
  mounted () {
    console.log(this.code)
  },
  computed: {
    code1 () {
      return this.code
    }
  },
  async created () {
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/mixin';
.container-fluid {
  background: #303035;
  height: 50px;
  &.blackNone {
    background: #ccc;
  }
}
.header-pc{
  display: flex;
  align-items: center;
  // width: calc( 100% + 15px);
  width: 1200px;
  margin: 0 auto;
  @include line-hei(50px, 50px);
  background: #303035;
  .logo {
      display: flex;
      align-items: center;
  }
  &.headerHome {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: none;
  }
  // 城市切换
  .citySwicth{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    width: 92px;
    height: 27px;
    border: 1px solid #fff;
    border-radius: 22px;
    span {
      @include sc(12px, rgba(255,255,255,0.5));
      margin: 0 2px;
      font-weight: bold;
    }
    cursor: pointer;
    .active{
      color: #fff;
    }
  }
  // 导航
  .nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
    width: 60%;
    li{
      cursor: pointer;
      @include sc(18px, rgba(255,255,255,0.5));
      font-weight: bold;
      &.active{
        color: #fff;
      }
    }
  }
  .tel {
    @include sc(14px, rgba(255,255,255,0.5));
  }
}

</style>
