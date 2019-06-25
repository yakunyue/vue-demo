import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'

Vue.use(Router)
const router = new Router({
    routes,
    mode: 'history'
})


router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    next() // 跳转

})

router.afterEach(to => {
    window.document.title = router.app.$t(`${to.name}`)
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})

export default router
