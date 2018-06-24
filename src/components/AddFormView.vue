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
              <i class="speech-elem material-icons input-field__speech-icon" v-on:click="onSpeak('title')" v-bind:class="{ 'hidden': user[5].value == 1}">mic</i>
              <label for="title" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Título</label>
            </div>
          </div>
          <div class="row datepicker-elem-group--material" v-bind:class="{ 'hidden': user[1].value == 2}">
            <div class="input-field input-elem-group col s12">
              <input id="date1" name="date_1" type="text" class="input-elem-group__input datepicker-elem validate datepicker" v-datepicker v-model="data.date1">
              <label for="date1" class="input-elem-group__label">Data</label>
            </div>
          </div>
          <div class="row datepicker-elem-group--browser-default" v-bind:class="{ 'hidden': user[1].value == 1}">
            <div class="input-field input-elem-group col s12">
              <input id="date2" name="date" type="date" class="input-elem-group__input datepicker-elem validate" v-bind:class="{ 'browser-default': user[2].value == 2}" v-model="data.date2">
              <label for="date2" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Data</label>
            </div>
          </div>
          <div class="row timepicker-elem-group--material" v-bind:class="{ 'hidden': user[4].value == 2}">
            <div class="input-field input-elem-group col s6">
              <input id="time_from1" name="time_start_1" type="text" class="input-elem-group__input validate timepicker" v-timepicker v-model="data.time_start1">
              <label for="time_from1" class="input-elem-group__label">Horário de início</label>
            </div>
            <div class="input-field input-elem-group col s6">
              <input id="time_to1" name="time_end_1" type="text" class="input-elem-group__input validate timepicker" v-timepicker v-model="data.time_end1">
              <label for="time_to1" class="input-elem-group__label">Horário de término</label>
            </div>
          </div>
          <div class="timepicker-elem-group--browser-default" v-bind:class="{ 'hidden': user[4].value == 1}">
            <div class="row">
              <div class="input-field input-elem-group col s6">
                <input id="time_from2" name="time_start_2" type="time" class="input-elem-group__input validate" v-bind:class="{ 'browser-default': user[2].value == 2}" v-model="data.time_start2">
                <label for="time_from2" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Horário de início</label>
              </div>
              <div class="input-field input-elem-group col s6">
                <input id="time_to2" name="time_end_2" type="time" class="input-elem-group__input validate" v-bind:class="{ 'browser-default': user[2].value == 2}" v-model="data.time_end2">
                <label for="time_to2" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Horário de término</label>
              </div>
            </div>
          </div>
          <div class="row checkbox-elem--material" v-bind:class="{ 'hidden': user[0].value == 2}">
            <p class="col s6">
              <label for="allday1">
                <input type="checkbox" name="allday1" id="allday1" v-model="data.allday1" />
                <span>Dia todo</span>
              </label>
            </p>
          </div>
          <div class="row checkbox-elem--browser-default" v-bind:class="{ 'hidden': user[0].value == 1}">
            <div class="col s12">
              <input type="checkbox" name="allday2" id="allday2" class="checkbox-html" v-model="data.allday2" />
              <label for="allday2">Dia todo</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field input-elem-group col s12">
              <input id="location" name="location" type="text" class="validate input-elem-group__input" v-bind:class="{ 'browser-default': user[2].value == 2}" v-model="data.location" required>
              <i class="speech-elem material-icons input-field__speech-icon" v-on:click="onSpeak('location')" v-bind:class="{ 'hidden': user[5].value == 1 }">mic</i>
              <label for="location" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Local</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12" v-bind:class="{ 'hidden': user[3].value == 2}">
              <select id="category1" name="category" class="select-elem--material" v-select v-model="data.category1">
                <option value="" disabled selected>Escolha sua categoria</option>
                <option value="Exercício">Exercício</option>
                <option value="Família">Família</option>
                <option value="Casa">Casa</option>
                <option value="Comida">Comida</option>
                <option value="Compras">Compras</option>
                <option value="Escola">Escola</option>
                <option value="Outros">Outros</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Pets">Pets</option>
                <option value="Saúde">Saúde</option>
                <option value="Social">Social</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Viagem">Viagem</option>
              </select>
              <label for="category1" class="select-elem__label">Categoria</label>
            </div>
            <div class="input-field col s12" v-bind:class="{ 'hidden': user[3].value == 1}">
              <select name="category" class="select-elem--browser-default browser-default" v-model="data.category2">
                <option value="" disabled selected>Escolha sua categoria</option>
                <option value="Exercício">Exercício</option>
                <option value="Família">Família</option>
                <option value="Casa">Casa</option>
                <option value="Comida">Comida</option>
                <option value="Compras">Compras</option>
                <option value="Escola">Escola</option>
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
        'data': {
          'title': '',
          'date1': '',
          'date2': '',
          'time_start1': '',
          'time_start2': '',
          'time_end1': '',
          'time_end2': '',
          'location': '',
          'category1': '',
          'category2': '',
          'allday1': 0,
          'allday2': 0,
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
        return ((this.data.title != '') && ((this.data.date1 != '' || this.data.allday1 != 0) || (this.data.date2 != '' || this.data.allday2 != 0)) && (this.data.time_from1 != '' || this.data.time_from2 != '') && (this.data.time_to1 != '' || this.data.time_to2 != '') && (this.data.location != '') && (this.data.category1 != '' || this.data.category2 != ''));
      },
      submit: function() {  
        if (this.isValid()) {
          this.addData(this.user, this.data);
          this.$router.push('/');
          M.toast({html: 'Evento adicionado com sucesso'});
        }
      },
      toggleTimepicker: function(action) {
        if (!action) {
          document.getElementById('time_from' + this.user[4].value).disabled = true;
          document.getElementById('time_to' + this.user[4].value).disabled = true;
        }
        else {
          document.getElementById('time_from' + this.user[4].value).disabled = false;
          document.getElementById('time_to' + this.user[4].value).disabled = false;
        }
      }
  	},
    mounted() {
      document.getElementById('time_from1').onchange = () => {
        this.data.time_start1 = document.getElementById('time_from1').value;
      };

      document.getElementById('time_to1').onchange = () => {
        this.data.time_end1 = document.getElementById('time_to1').value;
      };

      document.getElementById('date1').onchange = () => {
        this.data.date1 = document.getElementById('date1').value;
      };

      document.getElementsByClassName('select-elem--material')[0].onchange = () => {
        this.data.category1 = document.getElementsByClassName('select-elem--material')[0].value;
        console.log(document.getElementsByClassName('select-elem--material')[0].value);
      };

      document.getElementById('allday1').onchange = (e) => {
        this.data.allday1 = document.getElementById('allday1').checked;
        if (e.target.checked)
          this.toggleTimepicker(0);
        else
          this.toggleTimepicker(1);

      };

      document.getElementById('allday2').onchange = (e) => {
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