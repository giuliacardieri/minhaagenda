<template>
	<section>
	  <header>
      <nav class="header__app-bar">
        <div class="nav-wrapper">
          <router-link to="/" class="nav-wrapper__a"><i class="waves-effect material-icons a__icon">arrow_back</i>Adicionar evento</router-link>
        </div>
      </nav>
    </header>
    <main>
      <div class="row">
        <form class="main__form col s12">
          <div class="row">
            <div class="input-field input-elem-group col s12">
              <input id="title" name="title" type="text" class="input-elem-group__input validate" v-bind:class="{ 'browser-default': user[2].value == 2}" v-model="data.title">
              <i class="speech-elem material-icons input-field__speech-icon" v-if="user[5].value === 2" v-on:click="onSpeak('title')" >mic</i>
              <label for="title" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Título</label>
            </div>
          </div>
          <div class="row datepicker-elem-group--material" v-if="user[1].value === 1">
            <div class="input-field input-elem-group col s12">
              <input id="date" name="date" type="text" class="input-elem-group__input datepicker-elem validate datepicker" v-datepicker v-model="data.date">
              <label for="date" class="input-elem-group__label">Data</label>
            </div>
          </div>
          <div class="row datepicker-elem-group--browser-default" v-if="user[1].value === 2">
            <div class="input-field input-elem-group col s12">
              <input id="date" name="date" type="date" class="input-elem-group__input datepicker-elem validate" v-bind:class="{ 'browser-default': user[2].value == 2}" v-model="data.date">
              <label for="date" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Data</label>
            </div>
          </div>
          <div class="row timepicker-elem-group--material" v-if="user[4].value === 1">
            <div class="input-field input-elem-group col s6">
              <input id="time_from" name="time_start" type="text" class="input-elem-group__input timepicker" v-timepicker v-model="data.time_start">
              <label for="time_from" class="input-elem-group__label">Horário de início</label>
            </div>
            <div class="input-field input-elem-group col s6">
              <input id="time_to" name="time_end" type="text" class="input-elem-group__input timepicker" v-timepicker v-model="data.time_end">
              <label for="time_to" class="input-elem-group__label">Horário de término</label>
            </div>
          </div>
          <div class="timepicker-elem-group--browser-default" v-if="user[4].value === 2">
            <div class="row">
              <div class="input-field input-elem-group col s6">
                <input id="time_from" name="time_start" type="time" class="input-elem-group__input" v-bind:class="{ 'browser-default': user[2].value == 2}" v-model="data.time_start">
                <label for="time_from" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Horário de início</label>
              </div>
              <div class="input-field input-elem-group col s6">
                <input id="time_to" name="time_end" type="time" class="input-elem-group__input" v-bind:class="{ 'browser-default': user[2].value == 2}" v-model="data.time_end">
                <label for="time_to" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Horário de término</label>
              </div>
            </div>
          </div>
          <div class="row checkbox-elem--material" v-if="user[0].value === 1">
            <p class="col s6">
              <label for="allday">
                <input type="checkbox" name="allday" id="allday" v-model="data.allday" />
                <span>Dia todo</span>
              </label>
            </p>
          </div>
          <div class="row checkbox-elem--browser-default" v-if="user[0].value === 2">
            <div class="col s12">
              <input type="checkbox" name="allday" id="allday" class="checkbox-html" v-model="data.allday" />
              <label for="allday">Dia todo</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field input-elem-group col s12">
              <input id="location" name="location" type="text" class="validate input-elem-group__input" v-bind:class="{ 'browser-default': user[2].value == 2}" v-model="data.location" required>
              <i class="speech-elem material-icons input-field__speech-icon" v-on:click="onSpeak('location')" v-if="user[5].value === 2">mic</i>
              <label for="location" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Local</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <select id="category" name="category" class="select-elem--material" v-if="user[3].value === 1" v-select v-model="data.category">
                <option value="" disabled selected>Escolha sua categoria</option>
                <option value="Exercício">Exercício</option>
                <option value="Família">Família</option>
                <option value="Casa">Casa</option>
                <option value="Comida">Comida</option>
                <option value="Compras">Compras</option>
                <option value="Estudo">Estudo</option>
                <option value="Outros">Outros</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Pets">Pets</option>
                <option value="Saúde">Saúde</option>
                <option value="Social">Social</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Viagem">Viagem</option>
              </select>
              <label v-if="user[3].value === 1" for="category" class="select-elem__label">Categoria</label>
              <select id="category" name="category" class="select-elem--browser-default browser-default" v-if="user[3].value === 2" v-model="data.category">
                <option value="" disabled selected>Escolha sua categoria</option>
                <option value="Exercício">Exercício</option>
                <option value="Família">Família</option>
                <option value="Casa">Casa</option>
                <option value="Comida">Comida</option>
                <option value="Compras">Compras</option>
                <option value="Estudo">Estudo</option>
                <option value="Outros">Outros</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Pets">Pets</option>
                <option value="Saúde">Saúde</option>
                <option value="Social">Social</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Viagem">Viagem</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <button to="/" class="right waves-effect waves-light btn" v-on:click.prevent="submit()" v-bind:class="{ disabled: isValid() == 0 }" type="submit">Salvar</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  </section>
</template>
<script>	
	import { userprefs } from './mixins/userprefs'
  import { modalities } from './mixins/modalities'
  import { db } from './mixins/db'

  export default {
  	mixins: [ userprefs, modalities, db ],
    data() {
      return {
        'user': this.getUser(),
        'timestart': {
          'hours': '',
          'minutes': ''
        },
        'timeend': {
          'hours': '',
          'minutes': ''
        },
        'data': {
          'title': '',
          'date': '',
          'time_start': '',
          'time_end': '',
          'location': '',
          'category': '',
          'allday': 0,
        }
      }
    },
  	methods: {
			getInput: function() {
				return this.user[2];
			},
      onSpeak: function(element) {
        var text = this.startSpeech(element);
      },
      isValid: function() {
        return ((this.data.title !== '') && (this.data.date !== '') && (this.data.time_start !== '' || this.data.allday) && (this.data.time_end != '' || this.data.allday) && (this.data.location != '') && (this.data.category != ''));
      },
      submit: function() {  
        if (this.isValid()) {
          this.addData(this.user, this.data);
          this.$router.push('/');
          M.toast({html: 'Evento adicionado com sucesso'});
        }
      },
      isTimeValid: function(type, hours, minutes) {
        if (type === 0 && (this.data.time_end !== ''))
          return this.checkTime(hours, this.timeend.hours, minutes, this.timeend.minutes);
        else if (this.data.time_start !== '')
          return this.checkTime(this.timestart.hours, hours, this.timestart.minutes, minutes);
        return true;
      },
      addValidClasses: function(el) {
        el.classList.add('valid');
        el.classList.remove('invalid');
      },
      removeValidClasses: function(el) {
        el.classList.remove('valid');
        el.classList.add('invalid');
      },
      addTimeInstanceValues: function(type, el) {
        if (!type) {
          this.timestart.hours = el.hours;
          this.timestart.minutes = el.minutes;
        } else {
          this.timeend.hours = el.hours;
          this.timeend.minutes = el.minutes;
        }
      },
      addTimeInputValues: function(type, el) {
        if (!type) { 
          this.timestart.hours = el[0];
          this.timestart.minutes = el[1];
        } else {
          this.timeend.hours = el[0];
          this.timeend.minutes = el[1];
        }
      },
      checkTime: function(hourMin, hourMax, minuteMin, minuteMax) {
        if (hourMax < hourMin)
          return false;
        else if (hourMax === hourMin && minuteMax < minuteMin)
          return false;
        return true;
      },
      toggleTimepicker: function(action) {
        if (!action)
          document.getElementById('time_from').disabled = true;
        else
          document.getElementById('time_from').disabled = false;
      }
  	},
    mounted() {   

      document.getElementById('location').onchange = () => {
        this.data.location = document.getElementById('location').value;
      };

      document.getElementById('title').onchange = () => {
        this.data.title = document.getElementById('title').value;
      };

      document.getElementById('time_from').onchange = (e) => {
        if (e.target.classList.contains('timepicker'))
          this.addTimeInstanceValues(0, M.Timepicker.getInstance(e.target));
        else
          this.addTimeInputValues(0, e.target.value.split(':'));

        if (this.isTimeValid(0, this.timestart.hours, this.timestart.minutes)) {
          this.data.time_start = e.target.value;
          this.addValidClasses(e.target);
        } else {
          this.data.time_start = '';
          this.removeValidClasses(e.target);
        }
      };

      document.getElementById('time_to').onchange = (e) => {
        if (e.target.classList.contains('timepicker')) 
          this.addTimeInstanceValues(1, M.Timepicker.getInstance(e.target));
        else
          this.addTimeInputValues(1, e.target.value.split(':'));

        if (this.isTimeValid(1, this.timeend.hours, this.timeend.minutes)) {
          this.data.time_end = e.target.value;
          this.addValidClasses(e.target);
        } else {
          this.data.time_end = '';
          this.removeValidClasses(e.target);
        }
      };

      document.getElementById('date').onchange = () => {
        this.data.date = e.target.value;
      };

      document.getElementById('category').onchange = () => {
        this.data.category = e.target.value;
      };

      document.getElementById('allday').onchange = (e) => {
        this.data.allday = e.target.checked;
        if (e.target.checked)
          this.toggleTimepicker(0);
        else
          this.toggleTimepicker(1);
      };
    }
  }  
</script>
<style scoped>
	.a__icon {
		display: inline-block;
		padding-right: 25px;
	}

	.main__form {
		margin-top: 25px;
	}

	/* design preferences */
	.input-elem-group__input.browser-default {
		border: 1px solid var(--grey);
		border-radius: 2.5px;
		font-size: 16px;
		padding: 8px;
		width: 100%;
	}

	.input-elem-group__input.browser-default:focus {
		outline: 0;
	}

  .input-elem-group__input.browser-default.valid {
    border: 1px solid var(--green);
  }

  .input-elem-group__input.browser-default.invalid {
    border: 1px solid var(--red);
  }

	.input-field > .input-elem-group__label.browser-default,
	.input-field > .select-elem__label.browser-default {
		color: var(--grey);
		height: 3rem;
		font-size: 1rem;
		top: -34px;
	}

	.input-field > .input-elem-group__label:not(.label-icon).browser-default.active,
	.input-field > .select-elem__label:not(.label-icon).browser-default.active {
		transform: translateY(12px) scale(1);
		transform-origin: 0 0;
	}

  .checkbox-html:not(:checked), .checkbox-html:checked {
    margin-top: 3px;
    opacity: 1;
    pointer-events: auto;
  }

  .checkbox-html + label {
    font-size: 1rem;
    line-height: 1.5rem;
    padding-left: 20px;
  }

  .checkbox-html + label:before, .checkbox-html:not(.filled-in) + label:after {
    border: 0;
    height: inherit;
    width: inherit;
  }
</style>