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

Vue.component('datepicker-mat', {
  template: '<input type="text" class="datepicker" />',
  mounted: function() {
    let instances = M.Datepicker.init(document.querySelectorAll('.datepicker'), {
      format: 'yyyy-mm-dd',
      setDefaultDate: 'today',
      i18n:  {
        cancel: 'cancelar',
        clear: 'limpar',
        done: 'ok',
        months: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
        ],
        monthsShort: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez'
        ],
        weekdays: [
          'Segunda-feira',
          'Terça-feira',
          'Quarta-feira',
          'Quinta-feira',
          'Sexta-feira',
          'Sábado',
          'Domingo'
        ],
        weekdaysShort: [
          'Seg',
          'Ter',
          'Qua',
          'Qui',
          'Sex',
          'Sáb',
          'Dom'
        ],
        weekdaysAbbrev: [
        'S',
        'T',
        'Q',
        'Q',
        'S',
        'S',
        'D'
        ]
      },
    });
  }
})

Vue.component('timepicker', {
  template: '<input type="text" class="timepicker">',
  mounted: function (el) {
    var timepickerInstances = M.Timepicker.init(document.querySelectorAll('.timepicker'), {
      twelveHour: false,
      i18n:  {
        cancel: 'cancelar',
        clear: 'limpar',
        done: 'ok'
      },
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
