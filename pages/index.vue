<template>
  <div class="container-fluid">
    <div id="pcIndex" class="row hidden-xs hidden-sm header-pc">
      <Pcindex
        :houseRecs= houseRecs
        :storeRecs= storeRecs
        :officesRecs= officesRecs
        :bannerImg= "bannerImg"
        @change-condition="changeCondition"
      ></Pcindex>
    </div>
    <!-- <div id="appIndex" class="visible-sm-block visible-xs-block">
      <Appindex
        :houseRecs= houseRecs
        :storeRecs= storeRecs
        :officesRecs= officesRecs
        :bannerImg= "bannerImg"
        @change-condition="changeCondition"
      ></Appindex>
    </div> -->
  </div>
</template>

<script>
// import Appindex from './appIndex'
import Pcindex from '~/components/pcIndex'
import {houseRec, storeRec, officesRec, indexbanner} from '~/plugins/js/api'
export default {
  name: 'Index',
  async asyncData({
    params,
    route,
    error,
    store,
    env
  }) {
    let { result } = await indexbanner({
      city_id: store.state.code.code,
      pid: 1
    })
    let [houseRecs, storeRecs, officesRecs] = await Promise.all([houseRec({ city_id: store.state.code.code, limit: 4 }), storeRec({ city_id: store.state.code.code }), officesRec({ city_id: store.state.code.code })])
    return {
      bannerImg: result[0].pic,
      houseRecs: houseRecs.result,
      storeRecs: storeRecs.result,
      officesRecs: officesRecs.result
    }
  },
  methods: {
    changeCondition (query) {
      if (query.type === '0') { // 新房
        this.$router.push({name: 'newHouseList', query: { code: this.$store.state.code.code }, params: {query: query.query}})
      } else if (query.type === '1') { // 商铺
        this.$router.push({name: 'shopList', query: { code: this.$store.state.code.code }, params: {query: query.query}})
      } else if (query.type === '2') { // 写字楼
        this.$router.push({name: 'officeBuildList', query: { code: this.$store.state.code.code }, params: {query: query.query}})
      }
    }
  },
  components: {
    // Appindex,
    Pcindex
  }
}
</script>

<style>
.container-fluid {
  padding: 0;
  margin: 0;
}
</style>
