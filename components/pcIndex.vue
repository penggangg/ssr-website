<template>
  <div class="wrapper">
    <div class="banner" :style="{backgroundImage:`url(${bannerImg})`}">
      <div class="searchCont">
        <div class="search_form" style="position: relative;">
          <div class="genre clearfix">
            <ul class="clearfix">
              <li :class="{lei:isActive===1}" @click="switch_channel(1)">新房</li>
              <li :class="{lei:isActive===2}" @click="switch_channel(2)">商铺</li>
              <li v-bind:class="{lei:isActive===3}" @click="switch_channel(3)">写字楼</li>
              <span class="trans" ref="trans"></span>
            </ul>
          </div>
          <div class="searchTerm">
            <input class="search_text" type="text" @keyup.enter="search"  placeholder="请输入城区/商圈/项目" v-model="keyWords"/>
            <span class="search_btn" @click="search">
              <img src="~/assets/images/icon-search.svg" alt="">
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="choose-me">
      <div class="title">
        <span>- 选择合屋 -</span>
        <span>合屋选址 称心如意</span>
      </div>
      <div class="article">
        <div class="item">
          <img src="~/assets/images/icon-house.svg" alt="">
          <span>房源全面</span>
          <span>精品商铺写字楼全覆盖</span>
        </div>
        <div class="item">
          <img src="~/assets/images/icon-real.png" alt="">
          <span>真实可信</span>
          <span>实地核验真实房源</span>
        </div>
        <div class="item">
          <img src="~/assets/images/icon-service.png" alt="">
          <span>专业服务</span>
          <span>一站式选址专业省心</span>
        </div>
      </div>
    </div>
    <div class="house new-house">
      <div class="house-cot">
        <div class="title">
          <span>- 新房推荐 -</span>
          <router-link :to="{ path: '/newHouse', query: { code: $store.state.code.code }}" target="_blank">更多新房</router-link>
          <!-- <router-link to="/">更多新房</router-link> -->
        </div>
        <div class="content">
          <div class="item" v-for="(item,index) in houseRecs" :key="index" @click="gotoDetail('newHouseDetail',item.id)">
            <img :src="item.pic" alt="" srcset="">
            <div>
              <span :title="item.title">{{item.title}}</span>
              <span :title="`${item.price/10000}万/㎡`">{{item.price/10000}}万/㎡</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="house">
      <div class="house-cot">
        <div class="title">
          <span>- 商铺推荐 -</span>
          <router-link :to="{ path: '/shop', query: { code: $store.state.code.code }}" target="_blank">更多商铺</router-link>
          <!-- <router-link to="/">更多新房</router-link> -->
        </div>
        <div class="content content-three">
          <div class="item" v-for="(item,index) in storeRecs" :key="index" @click="gotoDetail('shopDetail',item.id)">
            <img class="content-three" :src="item.pic" alt="" srcset="">
            <div>
              <span :title="item.title">{{item.title}}</span>
              <span :title="`${item.price/10000}万`">{{item.price/10000}}万</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="house office-build">
      <div class="house-cot">
        <div class="title">
          <span>- 写字楼推荐 -</span>
          <a href="">更多写字楼</a>
          <router-link :to="{ path: '/officeBuild', query: { code: $store.state.code.code }}" target="_blank">更多写字楼</router-link>
        </div>
        <div class="content content-three">
          <div class="item" v-for="(item,index) in officesRecs" :key="index" @click="gotoDetail('officeBuildDetail',item.id)">
            <img class="content-three" :src="item.pic" alt="" srcset="">
            <div>
              <span :title="item.title">{{item.title}}</span>
              <span :title="`${item.price/10000}万`">{{item.price/10000}}万</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <footers></footers> -->
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/css/mixin';
.choose-me {
  width: 1200px;
  margin: 50px auto;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    span {
      font-size: 16px;
      color: rgb(136, 136, 136);
      &:first-child {
        font-weight: bold;
        font-size: 36px;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
  .article {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      span {
        &:nth-child(2) {
          margin: 20px 0 10px 0;
        }
      }
    }
  }
}
.house {
  background: #fff;
  padding: 50px 0;
  &.new-house {
    background: rgb(245, 245, 246);
  }
  &.office-build {
    background: rgb(245, 245, 246);
  }
  .house-cot {
    width: 1200px;
    margin: 0 auto;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
      position: relative;
      span {
        &:first-child {
          font-weight: bold;
          font-size: 36px;
          color: rgba(51, 51, 51, 1);
        }
      }
      a {
        position: absolute;
        right: 0;
        color: #3886F8;
        font-size: 18px;
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.content-three {
        .item{
          width: 350px;
        }
      }
      .item {
        box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        width: 250px;
        img {
          width: 250px;
          height: 142px;
          &.content-three {
            width: 350px;
            height: 197px;
          }
        }
        div {
          background: #fff;
          padding: 14px 10px;
          span {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 18px;
            font-weight: bold;
            &:first-child {
              width: 55%;
              text-align: left;
              color: #333;
            }
            &:last-child {
              width:40%;
              text-align: right;
              font-size: 16px;
              color: #FA5741;
            }
          }
        }
      }
    }
  }
}
.banner {
  min-width: 1220px;
  height: 700px;
  // background: url('../../../static/images/pic-banner1.png') no-repeat;
  background-repeat: no-repeat;
  background-position: center center;
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.searchCont {
    width: 772px;
    margin-top: 40px;
}

.searchCont>img {
    display: block;
    margin: 0 auto;
}

.search_form {
    width: 772px;
    border-radius: 4px;
    .genre {
      @include line-hei(55px, 55px);
      ul {
          position: relative;
          float: left;
      }
    }

}
.search_form .genre ul>span.trans {
    position: absolute;
    bottom: -4px;
    left: 8px;
    background: #fff;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
}
.search_form .genre li {
    float: left;
    margin-right: 20px;
    font-size: 14px;
    color: #c6c6c6;
    font-weight:bold;
    cursor: pointer;
    &.lei {
      font-size: 16px;
      color: #fff;
    }
}

.searchTerm {
  display: flex;
  align-items: center;
  justify-content: space-between;
    height: 55px;
    background: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.searchTerm input {
    display: inline-block;
    margin-right: -3px;
    line-height: 55px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.searchTerm input[type=text] {
    width: 695px;
    height: 55px;
    text-indent: 20px;
    font-size: 16px;
    border: 0;
}

.searchTerm span.search_btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 55px;
  border-radius: 0;
  border-bottom-right-radius: 4px;
  font-size: 16px;
  background: #3886F8;
  color: #330033;
  cursor: pointer;
}
.searchCont>p {
    padding-left: 30px;
    padding-top: 15px;
    color: #f5edd6;
    background: rgba(0, 0, 0, 0.1);
    width: 710px;
}
.searchCont>p a {
    color: #f5edd6;
    margin-left: 15px;
    font-size: 14px;
}
</style>
<script>
export default {
  name: 'Pcindex',
  data () {
    return {
      isActive: 1,
      keyWords: ''
    }
  },
  props: {
    houseRecs: Array,
    storeRecs: Array,
    officesRecs: Array,
    bannerImg: {
      required: true
    }
  },
  methods: {
    switch_channel (num) {
      this.isActive = num
      switch (num) {
        case 1:
          this.$refs.trans.style.left = '8px'
          break
        case 2:
          this.$refs.trans.style.left = '58px'
          break
        case 3:
          this.$refs.trans.style.left = '114px'
          break
        default:
          break
      }
    },
    search () {
      // let routeData = ''
      if (!this.keyWords) {
        return false
      }
      switch (this.isActive) {
        case 1:
          this.$emit('change-condition', {query: this.keyWords, type: '0', code: this.$store.state.code.code})
          // routeData = this.$router.resolve({ path: '/newHouse', query: { query: this.keyWords } })
          break
        case 2:
          this.$emit('change-condition', {query: this.keyWords, type: '1', code: this.$store.state.code.code})
          // routeData = this.$router.resolve({ path: '/shop', query: { query: this.keyWords } })
          break
        case 3:
          this.$emit('change-condition', {query: this.keyWords, type: '2', code: this.$store.state.code.code})
          // routeData = this.$router.resolve({ path: '/officeBuild', query: { query: this.keyWords } })
          break
        default:
          break
      }
      // window.open(routeData.href, '_blank')
    },
    gotoDetail (url, id) {
      // this.$router.push({ path: `/${url}/${id}` })
      let routeData = this.$router.resolve({ path: `/${url}/${id}`, query: {code: this.$store.state.code.code} })
      window.open(routeData.href, '_blank')
    }
  }
}
</script>
