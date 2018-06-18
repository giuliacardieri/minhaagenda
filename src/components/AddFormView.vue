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
              <input id="title" name="title" type="text" class="input-elem-group__input validate" v-bind:class="{ 'browser-default': user[2].value == 2}">
              <i class="speech-elem material-icons input-field__speech-icon" v-bind:class="{ 'hidden': user[5].value == 1}">mic</i>
              <label for="title" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Título</label>
            </div>
          </div>
          <div class="row datepicker-elem-group--material" v-bind:class="{ 'hidden': user[1].value == 2}">
            <div class="input-field input-elem-group col s12">
              <input id="date" name="date_1" type="text" class="input-elem-group__input datepicker-elem validate datepicker" v-datepicker>
              <label for="date" class="input-elem-group__label">Data</label>
            </div>
          </div>
          <div class="row datepicker-elem-group--browser-default" v-bind:class="{ 'hidden': user[1].value == 1}">
            <div class="input-field input-elem-group col s12">
              <input id="date" name="date" type="date" class="input-elem-group__input datepicker-elem validate" v-bind:class="{ 'browser-default': user[2].value == 2}">
              <label for="date" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Data</label>
            </div>
          </div>
          <div class="row timepicker-elem-group--material" v-bind:class="{ 'hidden': user[4].value == 2}">
            <div class="input-field input-elem-group col s6">
              <input id="time_from" name="time_start_1" type="text" class="input-elem-group__input validate timepicker" v-timepicker>
              <label for="time_from" class="input-elem-group__label">Horário de início</label>
            </div>
            <div class="input-field input-elem-group col s6">
              <input id="time_to" name="time_end_1" type="text" class="input-elem-group__input validate timepicker" v-timepicker>
              <label for="time_to" class="input-elem-group__label">Horário de término</label>
            </div>
          </div>
          <div class="timepicker-elem-group--browser-default" v-bind:class="{ 'hidden': user[4].value == 1}">
            <div class="row">
              <div class="input-field input-elem-group col s6">
                <input id="time_from" name="time_start_2" type="time" class="input-elem-group__input validate" v-bind:class="{ 'browser-default': user[2].value == 2}">
                <label for="time_from" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Horário de início</label>
              </div>
              <div class="input-field input-elem-group col s6">
                <input id="time_to" name="time_end_2" type="time" class="input-elem-group__input validate" v-bind:class="{ 'browser-default': user[2].value == 2}">
                <label for="time_to" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Horário de término</label>
              </div>
            </div>
          </div>
          <div class="row checkbox-elem--material" v-bind:class="{ 'hidden': user[0].value == 2}">
            <p class="col s6">
              <label for="all_day">
                <input type="checkbox" name="all_day" id="all_day" />
                <span>Dia todo</span>
              </label>
            </p>
          </div>
          <div class="row checkbox-elem--browser-default" v-bind:class="{ 'hidden': user[0].value == 1}">
            <div class="col s12">
              <input type="checkbox" name="all_day" id="all_day" class="checkbox-html" />
              <label for="all_day">Dia todo</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field input-elem-group col s12">
              <input id="location" name="location" type="text" class="validate input-elem-group__input" v-bind:class="{ 'browser-default': user[2].value == 2}">
              <i class="speech-elem hidden material-icons input-field__speech-icon" v-bind:class="{ 'hidden': user[5].value == 1 }">mic</i>
              <label for="location" class="input-elem-group__label" v-bind:class="{ 'browser-default': user[2].value == 2}">Local</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12" v-bind:class="{ 'hidden': user[3].value == 2}">
              <select name="category" class="select-elem--material" v-select>
                <option value="" disabled selected>Escolha sua categoria</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Exercise">Exercício</option>
                <option value="Family">Família</option>
                <option value="Home">Casa</option>
                <option value="Food">Comida</option>
                <option value="Shopping">Compras</option>
                <option value="School">Escola</option>
                <option value="Other">Outros</option>
                <option value="Personal">Pessoal</option>
                <option value="Pets">Pets</option>
                <option value="Health">Saúde</option>
                <option value="Social">Social</option>
                <option value="Work">Trabalho</option>
                <option value="Travel">Viagem</option>
              </select>
              <label class="select-elem__label">Categoria</label>
            </div>
            <div class="input-field col s12" v-bind:class="{ 'hidden': user[3].value == 1}">
              <select name="category" class="select-elem--browser-default browser-default">
                <option value="" disabled selected>Escolha sua categoria</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Exercise">Exercício</option>
                <option value="Family">Família</option>
                <option value="Home">Casa</option>
                <option value="Food">Comida</option>
                <option value="Shopping">Compras</option>
                <option value="School">Escola</option>
                <option value="Other">Outros</option>
                <option value="Personal">Pessoal</option>
                <option value="Pets">Pets</option>
                <option value="Health">Saúde</option>
                <option value="Social">Social</option>
                <option value="Work">Trabalho</option>
                <option value="Travel">Viagem</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <button class="right waves-effect waves-light btn" name="action" type="submit">Salvar</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  </section>
</template>
<script>	
	import { userprefs } from './mixins/userprefs'
  export default {
  	mixins: [ userprefs ],
    data() {
      return {
        'user': this.getUser(),
      }
    },
  	methods: {
			getInput: function() {
				console.log(this.user[2].value);
				return this.user[2];
			}
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
</style>