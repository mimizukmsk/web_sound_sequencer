import Vue from 'vue'
import VueKonva from 'vue-konva'
import Router from 'vue-router'
import Sequencer from '@/components/Sequencer'

Vue.use(Router)
Vue.use(VueKonva)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sequencer',
      component: Sequencer
    }
  ]
})
