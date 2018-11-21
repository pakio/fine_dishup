import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Timer from '@/components/Timer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Timer',
      component: Timer
    }
  ]
})
