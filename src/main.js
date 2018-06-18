// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

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

Vue.directive('datepicker', {
  inserted: function (el) {
    var instances = M.Datepicker.init(document.querySelectorAll('.datepicker'));
  }
})

Vue.directive('select', {
  inserted: function (el) {
    var instances = M.FormSelect.init(document.querySelectorAll('.select-elem--material'));
  }
})

Vue.directive('timepicker', {
  inserted: function (el) {
    var instances = M.Timepicker.init(document.querySelectorAll('.timepicker'));
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },  
})
