<template>
	<div>
		<div class="header__tabs col s12">
	    <ul class="tabs tabs__ul" v-tabs>
	      <li class="tab col s3 ul__li"><a class="li__a active" href="#speech">Speech</a></li>
	      <li class="tab col s3 ul__li"><a class="li__a" href="#swipe">Swipe</a></li>
	      <li class="tab col s3 ul__li"><a class="li__a" href="#voice">Voice</a></li>
	    </ul>
	  </div>
	  <div class="row">
	    <div id="speech" class="tabs__div col s12">
	      <div class="row">
	        <ul class="collapsible" v-collapsible>
	          <li class="collapsible__li speech__type1" v-on:click="showBody = 0" v-bind:class="{ chosen: activeElement == 0,  active: showBody == 0 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-speech-1 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Bloquear reconhecimento de voz
	            </div>
	            <div class="collapsible-body">
	              <div class="input-field">
	                <input type="text" name="speech-type1">
	                <i class="speech-elem speech-test hidden material-icons input-field__speech-icon">mic</i>
	                <label for="speech-type1">Texto</label>
	              </div>
	              <div class="right-align">
	                <button v-on:click="activate(0), setNewItem(5,1)" v-bind:class="{ chosen: activeElement == 0 }" class="speech-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
	              </div>
	            </div>
	          </li>
	          <li class="collapsible__li speech__type2" v-on:click="showBody = 1" v-bind:class="{ chosen: activeElement == 1,  active: showBody == 1 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-speech-2 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Permitir reconhecimento de voz
	            </div>
	            <div class="collapsible-body">
	              <div class="input-field input-elem-group">
	                <input type="text" name="speech-type2" class="input-elem-group__input input-test">
	                <i class="speech-elem speech-test material-icons input-field__speech-icon">mic</i>
	                <label for="speech-type2" class="input-elem-group__label input-test">Texto</label>
	              </div>
	              <div class="right-align">
	                <button v-on:click="activate(1), setNewItem(5,2)" v-bind:class="{ chosen: activeElement == 1 }"  class="speech-2 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
	              </div>
	            </div>
	          </li>
	        </ul>
	      </div>
	    </div>
	    <div id="swipe" class="tabs__div col s12">
	      <div class="row">
	        <ul class="collapsible" v-collapsible>
	          <li class="collapsible__li swipe__type1" v-on:click="showBody = 0" v-bind:class="{ chosen: activeElement == 0,  active: showBody == 0 }">
	            <div class="li__collapsible-header  collapsible-header">
	              <span class="collapsible-header__span-swipe-1 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Bloquear movimento swipe
	            </div>
	            <div class="collapsible-body">
	              <div class="row">
	                <div class="col s12 m6">
	                  <div class="card">
	                    <div class="card-content">
	                      <span class="card-title">Um cartão</span>
	                      <p>Esse cartão não permite o movimento swipe.</p>
	                    </div>
	                  </div>
	                </div>
	              </div>
	              <div class="right-align">
	                <button v-on:click="activate(0), setNewItem(9,1)" v-bind:class="{ chosen: activeElement == 0 }"  class="swipe-1 btn btn-wrapper__btn-choose waves-effect" data-icon="swipe-1">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
	                </button>
	              </div>
	            </div>
	          </li>
	          <li class="collapsible__li speech__type2" v-on:click="showBody = 1" v-bind:class="{ chosen: activeElement == 1,  active: showBody == 1 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-swipe-2 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Permitir movimento swipe
	            </div>
	            <div class="collapsible-body">
	              <div class="row">
	                <div class="col s12 m6">
	                  <div class="card swipe-elem swipe-test">
	                    <div class="card-content">
	                      <span class="card-title">Um cartão</span>
	                      <p>Esse cartão permite o movimento swipe.</p>
	                    </div>
	                  </div>
	                </div>
	              </div>
	              <div class="right-align">
	                <button v-on:click="activate(1), setNewItem(9,2)" v-bind:class="{ chosen: activeElement == 1 }"  class="swipe-2 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
	              </div>
	            </div>
	          </li>
	        </ul>
	      </div>
	    </div>
	    <div id="voice" class="tabs__div col s12">
	      <div class="row">
	        <ul class="collapsible" v-collapsible>
	          <li class="collapsible__li voice__type1" v-on:click="showBody = 0" v-bind:class="{ chosen: activeElement == 0,  active: showBody == 0 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-voice-1 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Bloquar o uso de ditação de voz
	            </div>
	            <div class="collapsible-body">
	              block
	              <div class="right-align">
	                <button dv-on:click="activate(0), setNewItem(8,1)" v-bind:class="{ chosen: activeElement == 0 }"  class="voice-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
	              </div>
	            </div>
	          </li>
	          <li class="collapsible__li speech__type2" v-on:click="showBody = 1" v-bind:class="{ chosen: activeElement == 1,  active: showBody == 1 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-voice-2 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Permitir o uso de ditação de voz
	            </div>
	            <div class="collapsible-body">
	              allow
	              <div class="right-align">
	                <button v-on:click="activate(1), setNewItem(8,2)" v-bind:class="{ chosen: activeElement == 1 }"  class="voice-2 btn btn-wrapper__btn-choose waves-effect">
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
			<router-link to="/mydesign" class="btn button-wrapper__btn--back button-wrapper__btn--pink">Back</router-link>
		</div>
	</div>
</template>

<script>
	import { userprefs } from './mixins/userprefs'
  export default {
  	mixins: [ userprefs ],
    data() {
      return {
       activeElement: 0,
       showBody: 0,
       activeLink: 1,
      }
    },  
    methods: {
      activate: function(el) {
        this.activeElement = el;
      }
    }
  }
</script>