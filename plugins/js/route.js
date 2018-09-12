
// $store.state.headerType.ctlInfo
export default ({ app }) => {
  console.log(app)
  app.router.afterEach((to, from) => {
    let { code } = to.query
    app.store.commit('code/changeCode',code || 2)
  })
}
