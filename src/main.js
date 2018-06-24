// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(require('moment'))

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

Vue.directive('datepicker', {
  inserted: function (el) {
    var instances = M.Datepicker.init(document.querySelectorAll('.datepicker'), {
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

Vue.directive('select', {
  inserted: function (el) {
    var instances = M.FormSelect.init(document.querySelectorAll('.select-elem--material'));
  }
})

Vue.directive('timepicker', {
  inserted: function (el) {
    var instances = M.Timepicker.init(document.querySelectorAll('.timepicker'), {
      twelveHour: false,
      i18n:  {
        cancel: 'cancelar',
        clear: 'limpar',
        done: 'ok'
      },
    });
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },  
})
