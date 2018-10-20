import Vue from 'vue'
import Router from 'vue-router'
import Sequencer from '@/components/Sequencer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sequencer',
      component: Sequencer
    }
  ]
})
