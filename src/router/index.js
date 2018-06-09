import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import MyDesignView from '@/components/MyDesignView'
import InterfaceElements from '@/components/InterfaceElements'
import Modalities from '@/components/Modalities'
import DisplayFormat from '@/components/DisplayFormat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/mydesign',
      name: 'Mydesign',
      component: MyDesignView
    },
    {
      path: '/mydesign/interfaceelements',
      name: 'InterfaceElements',
      component: InterfaceElements
    },
    {
      path: '/mydesign/modalities',
      name: 'Modalities',
      component: Modalities
    },
    {
      path: '/mydesign/displayformat',
      name: 'DisplayFormat',
      component: DisplayFormat
    }
  ]
})
