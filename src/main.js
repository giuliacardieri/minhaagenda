// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueRouter from 'vue-router'
import Moment from 'moment'
import select from './components/select-input'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Moment)

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

Vue.directive('collapsible', {
  inserted: function (el) {
    var instances = M.Collapsible.init(document.querySelectorAll('.collapsible'));
  }
})

Vue.directive('tabs', {
  inserted: function (el) {
    var instances = M.Tabs.init(document.querySelectorAll('.tabs'));
  }
})

// Vue.directive('modal', {
//   inserted: function (el) {
//     var modalElem = M.Modal.init(document.querySelectorAll('.modal'));
//   }
// })

Vue.component('datepicker-mat', {
  template: '<input type="text" class="datepicker" />',
  mounted: function() {
    let instances = M.Datepicker.init(document.querySelectorAll('.datepicker'), {
      format: 'yyyy-mm-dd',
      setDefaultDate: 'today'
    });
  }
})

Vue.component('timepicker', {
  template: '<input type="text" class="timepicker">',
  mounted: function (el) {
    var timepickerInstances = M.Timepicker.init(document.querySelectorAll('.timepicker'), {
      twelveHour: false
    });
  }
})

Vue.component('select-input', select)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },  
})
