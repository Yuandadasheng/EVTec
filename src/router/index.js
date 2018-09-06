import Vue from 'vue'
import router from 'vue-router'
import firstPage from '@/components/firstPage'
import twoPage from '@/components/twoPage'

Vue.use(router)

export default  new router({
  // mode: 'history', 
  base: '',
  routes: [
    {
      path: '/',
      redirect:'/firstPage'
    },
    {
    	path: '/firstPage',
    	name: 'firstPage',
      component: firstPage
    },
    {
    	path: '/twoPage',
    	name: 'twoPage',
      component: twoPage
    }
  ]
})
