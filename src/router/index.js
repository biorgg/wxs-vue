import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import newslist from '@/components/newslist'
import shownews from '@/components/shownews'
import singlePage from '@/components/single-page'


Vue.use(Router)

export default new Router({
  mode: 'history',//为了去掉rul后面的#号
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/newslist/:lno',
      name: 'newslist',
      component: newslist
    },
    {
      path: '/news/:pno',
      name: 'shownews',
      component: shownews
    },
    {
      path: '/page/:pno',
      name: 'singlePage',
      component: singlePage
    }
  ]
})
