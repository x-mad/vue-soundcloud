import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import TrackList from '@/components/TrackList'
import Track from '@/components/Track'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'


Vue.use(VueRx, Rx)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/tracklist/:query',
      name: 'tracklist',
      component: TrackList,
      props: true
    },
    {
      path: '/track/:track',
      name: 'track',
      component: Track
    }
  ]
})
