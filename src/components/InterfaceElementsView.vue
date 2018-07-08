<template>
	<div>      
		<div class="header__tabs col s12">
		    <ul class="tabs tabs-fixed-width tabs__ul" v-tabs>
		      <li class="tab col s3 ul__li"><a class="li__a active" href="#checkbox">Checkbox</a></li>
		      <li class="tab col s3 ul__li"><a class="li__a" href="#datepicker">Calendário</a></li>
		      <li class="tab col s3 ul__li"><a class="li__a" href="#input">Input</a></li>
		      <li class="tab col s3 ul__li"><a class="li__a" href="#select">Múltipla escolha</a></li>
		      <li class="tab col s3 ul__li"><a class="li__a" href="#timepicker">Seletor de horário</a></li>
		    </ul>
		</div>  
		<div class="row">
			<div id="checkbox" class="tabs__div col s12">
			  <div class="row">
			    <ul class="collapsible" v-collapsible>
			      <li class="collapsible__li checkbox__type1" v-on:click="showBody = 0" v-bind:class="{ chosen: user[0].value === 1,  active: showBody == 0 }">
			        <div class="li__collapsible-header collapsible-header">
			          <span class="collapsible-header__span-checkbox-1 collapsible-header__span">
			            <i class="material-icons collapsible-header__icon">done</i>
			          </span>
			          Checkbox 1
			        </div>
			        <div class="collapsible-body">
			          <p>
			            <label for="checkbox-type1">
			              <input id="checkbox-type1" type="checkbox" name="checkbox-type1">
			              <span>Checkbox</span>
			            </label>
			          </p>
			          <div class="collapsible-body__btn-wrapper right-align">
			            <button v-on:click="activate(0,1)" v-bind:class="{ chosen: user[0].value === 1 }" class="checkbox-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
			          </div>
			        </div>
			      </li>
			      <li class="collapsible__li checkbox__type2" v-on:click="showBody = 1" v-bind:class="{ chosen: user[0].value === 2, active: showBody == 1 }">
			        <div class="li__collapsible-header collapsible-header">
			          <span class="collapsible-header__span-checkbox-2 collapsible-header__span">
			            <i class="material-icons collapsible-header__icon">done</i>
			          </span>
			          Checkbox 2
			        </div>
			        <div class="collapsible-body">
			          <div>
			            <input type="checkbox" name="checkbox-type2" class="checkbox-html">
			            <label for="checkbox-type2">Checkbox</label>
			          </div>
			          <div class="collapsible-body__btn-wrapper right-align">
			            <button v-on:click="activate(0,2)" v-bind:class="{ chosen: user[0].value === 2 }" class="checkbox-2 btn btn-wrapper__btn-choose  waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
			          </div>
			        </div>
			      </li>
			    </ul>
			  </div>
			</div>
			<div id="datepicker" class="tabs__div col s12">
			  <div class="row">
			    <ul class="collapsible" v-collapsible>
			      <li class="collapsible__li datepicker__type1" v-on:click="showBody = 2" v-bind:class="{ chosen: user[1].value === 1,  active: showBody == 2 }">
			        <div class="li__collapsible-header collapsible-header">
			          <span class="collapsible-header__span-datepicker-1 collapsible-header__span">
			            <i class="material-icons collapsible-header__icon">done</i>
			          </span>
			          Calendário 1
			        </div>
			        <div class="collapsible-body">
			          <div class="input-field">
			            <datepicker-mat class="datepicker-test" name="datepicker-type1"></datepicker-mat>
			            <label for="datepicker-type1">Definir data</label>
			          </div>
			          <div class="right-align">
			            <button v-on:click="activate(1,1)" v-bind:class="{ chosen: user[1].value === 1 }" class="datepicker-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
			          </div>
			        </div>
			      </li>
			      <li class="collapsible__li datepicker__type2" v-on:click="showBody = 3" v-bind:class="{ chosen: user[1].value === 2,  active: showBody == 3 }">
			        <div class="li__collapsible-header collapsible-header">
			          <span class="collapsible-header__span-datepicker-2 collapsible-header__span">
			            <i class="material-icons collapsible-header__icon">done</i>
			          </span>
			          Calendário 2
			        </div>
			        <div class="collapsible-body">
			          <div class="input-field">
			            <input type="date" name="datepicker-type2">
			            <label for="datepicker-type2">Definir data</label>
			          </div>
			          <div class="right-align">
			            <button v-on:click="activate(1,2)" v-bind:class="{ chosen: user[1].value === 2 }" class="datepicker-2 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
			          </div>
			        </div>
			      </li>
			    </ul>
			  </div>
			</div>
			<div id="input" class="tabs__div col s12">
			  <div class="row">
			    <ul class="collapsible" v-collapsible>
			      <li class="collapsible__li input__type1" v-on:click="showBody = 4" v-bind:class="{ chosen: user[2].value === 1, active: showBody == 4 }">
			        <div class="li__collapsible-header collapsible-header">
			          <span class="collapsible-header__span-input-1 collapsible-header__span">
			            <i class="material-icons collapsible-header__icon">done</i>
			          </span>
			          Input 1
			        </div>
			        <div class="collapsible-body">
			          <div class="input-field">
			            <input type="text" name="input-type1">
			            <label for="input-type1">Texto</label>
			          </div>
			          <div class="right-align">
			            <button v-on:click="activate(2,1)" v-bind:class="{ chosen: user[2].value === 1 }" class="input-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
			          </div>
			        </div>
			      </li>
			      <li class="collapsible__li input__type2" v-on:click="showBody = 5" v-bind:class="{ chosen: user[2].value === 2, active: showBody == 5 }">
			        <div class="li__collapsible-header collapsible-header">
			          <span class="collapsible-header__span-input-2 collapsible-header__span">
			            <i class="material-icons collapsible-header__icon">done</i>
			          </span>
			          Input 2
			        </div>
			        <div class="collapsible-body">
			          <div class="input-field input-elem-group">
			            <input type="text" name="input-type2" class="input-elem-group__input input-test browser-default" placeholder="Type text here">
			            <label for="input-type2" class="input-elem-group__label input-test browser-default">Texto</label>
			          </div>
			          <div class="right-align">
			            <button v-on:click="activate(2,2)" v-bind:class="{ chosen: user[2].value === 2 }" class="input-2 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
			          </div>
			        </div>
			      </li>
			    </ul>
			  </div>
			</div>
			<div id="select" class="tabs__div col s12">
			  <div class="row">
			    <ul class="collapsible" v-collapsible>
			      <li class="collapsible__li select__type1" v-on:click="showBody = 6" v-bind:class="{ chosen: user[3].value === 1,  active: showBody == 6 }">
			        <div class="li__collapsible-header collapsible-header">
			          <span class="collapsible-header__span-select-1 collapsible-header__span">
			            <i class="material-icons collapsible-header__icon">done</i>
			          </span>
			          Múltipla escolha 1
			        </div>
			        <div class="collapsible-body">
			          <div class="input-field">    
			            <select-input isMaterial="true"></select-input>
			          </div>
			          <div class="right-align">
			            <button v-on:click="activate(3,1)" v-bind:class="{ chosen: user[3].value === 1 }" class="select-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
			          </div>
			        </div>
			      </li>
			      <li class="collapsible__li select__type2" v-on:click="showBody = 7" v-bind:class="{ chosen: user[3].value === 2,  active: showBody == 7 }">
			        <div class="li__collapsible-header collapsible-header">
			          <span class="collapsible-header__span-select-2 collapsible-header__span">
			            <i class="material-icons collapsible-header__icon">done</i>
			          </span>
			          Múltipla escolha 2
			        </div>
			        <div class="collapsible-body">
			          <div class="input-field">
			            <select-input isDefault="true"></select-input>
			          </div>
			          <div class="right-align">
			            <button v-on:click="activate(3,2)" v-bind:class="{ chosen: user[3].value === 2 }" class="select-2 btn btn-wrapper__btn-choose  waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
			          </div>
			        </div>
			      </li>
			    </ul>
			  </div>
			</div>
			<div id="timepicker" class="tabs__div col s12">
			  <div class="row">
			    <ul class="collapsible" v-collapsible>
			      <li class="collapsible__li timepicker__type1" v-on:click="showBody = 8" v-bind:class="{ chosen: user[4].value === 1,  active: showBody == 8 }">
			        <div class="li__collapsible-header collapsible-header">
			          <span class="collapsible-header__span-timepicker-1 collapsible-header__span">
			            <i class="material-icons collapsible-header__icon">done</i>
			          </span>
			          Seletor de horário 1
			        </div>
			        <div class="collapsible-body">
			          <div class="input-field">
			            <timepicker type="text" name="timepicker-type1" /></timepicker>
			            <label for="timepicker-type1">Horário</label>
			          </div>
			          <div class="right-align">
			            <button v-on:click="activate(4,1)" v-bind:class="{ chosen: user[4].value === 1 }" class="timepicker-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			           	</button>
			          </div>
			        </div>
			      </li>
			      <li class="collapsible__li timepicker__type2" v-on:click="showBody = 9" v-bind:class="{ chosen: user[4].value === 2,  active: showBody == 9 }">
			        <div class="li__collapsible-header collapsible-header">
			          <span class="collapsible-header__span-timepicker-2 collapsible-header__span">
			            <i class="material-icons collapsible-header__icon">done</i>
			          </span>
			          Seletor de horário 2
			        </div>
			        <div class="collapsible-body">
			          <div class="input-field col s6">
			            <input type="time" name="timepicker-type2">
			            <label for="timepicker-type2">Horário</label>
			          </div>
			          <div class="right-align">
			            <button v-on:click="activate(4,2)" v-bind:class="{ chosen: user[4].value === 2}" class="timepicker-2 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
			          </div>
			        </div>
			      </li>
			    </ul>
			  </div>
			</div>
		</div>
		<div class="row template__button-wrapper">
			<router-link to="/mydesign" class="btn button-wrapper__btn--back button-wrapper__btn--indigo">Voltar</router-link>
		</div>
	</div>
</template>

<script> 
	import { userprefs } from './mixins/userprefs'
  export default {
  	mixins: [ userprefs ],
    data() {
      return {
       showBody: null,
       user: this.getUser(),
      }
    },  
    methods: {
      activate: function(el, value) {
      	this.showBody = value;
        this.user[el].value = value;
        this.setNewItem(el, value);
      }
    },
  }
</script>

<style>
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

	.select-elem.browser-default {
		border: 1px solid var(--grey);
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