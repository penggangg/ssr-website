import Vue from 'vue'
export default ({ app }) => {
  app.router.afterEach((to, from) => {
    console.log('change')
    let { code } = to.query
    Vue.prototype.code = code || 2
  })
}
