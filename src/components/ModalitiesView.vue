<template>
	<div>
		<div class="header__tabs col s12">
	    <ul class="tabs tabs-fixed-width tabs__ul" v-tabs>
	      <li class="tab col s3 ul__li"><a class="li__a active" href="#speech">Speech</a></li>
	      <li class="tab col s3 ul__li"><a class="li__a" href="#swipe">Swipe</a></li>
	      <li class="tab col s3 ul__li"><a class="li__a" href="#voice">Voice</a></li>
	    </ul>
	  </div>
	  <div class="row">
	    <div id="speech" class="tabs__div col s12">
	      <div class="row">
	        <ul class="collapsible" v-collapsible>
	          <li class="collapsible__li speech__type1" v-on:click="showBody = 0" v-bind:class="{ chosen: user[5].value === 1,  active: showBody == 0 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-speech-1 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Block voice recognition
	            </div>
	            <div class="collapsible-body">
	              <div class="input-field">
	                <input type="text" name="speech-type1">
	                <label for="speech-type1">Type your text</label>
	              </div>
	              <div class="right-align">
	                <button v-on:click="activate(5,1)" v-bind:class="{ chosen: user[5].value === 1 }" class="speech-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Chosen</span>
			            	<span class="span__choose">Choose</span>
			            </button>
	              </div>
	            </div>
	          </li>
	          <li class="collapsible__li speech__type2" v-on:click="showBody = 1" v-bind:class="{ chosen: user[5].value === 2,  active: showBody == 1 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-speech-2 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Allow voice recognition
	            </div>
	            <div class="collapsible-body">
	              <div class="input-field input-elem-group">
	                <input id="test" type="text" name="speech-type2" class="input-elem-group__input input-test">
	                <i class="speech-elem speech-test material-icons input-field__speech-icon" v-on:click="onSpeak('test')">mic</i>
	                <label for="speech-type2" class="input-elem-group__label input-test">Click on the microphone to use voice</label>
	              </div>
	              <div class="right-align">
	                <button v-on:click="activate(5,2)" v-bind:class="{ chosen: user[5].value === 2 }"  class="speech-2 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Chosen</span>
			            	<span class="span__choose">Choose</span>
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
	          <li class="collapsible__li swipe__type1" v-on:click="showBody = 2" v-bind:class="{ chosen: user[9].value === 1,  active: showBody == 2 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-swipe-1 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Block swipe movement
	            </div>
	            <div class="collapsible-body">
	              <div class="row">
	                <div class="cards-wrapper col s12 m6">
	                  <div class="cards-wrapper__card card">
	                    <div class="card-content">
	                      <span class="card-title">A card</span>
	                      <p>This card doesn't allow swipe movement.</p>
	                    </div>
	                  </div>
	                </div>
	              </div>
	              <div class="right-align">
	                <button v-on:click="activate(9,1)" v-bind:class="{ chosen: user[9].value === 1 }"  class="swipe-1 btn btn-wrapper__btn-choose waves-effect" data-icon="swipe-1">
			            	<span class="span__chosen">Chosen</span>
			            	<span class="span__choose">Choose</span>
	                </button>
	              </div>
	            </div>
	          </li>
	          <li class="collapsible__li swipe__type2" v-on:click="showBody = 3" v-bind:class="{ chosen: user[9].value === 2,  active: showBody == 3 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-swipe-2 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Allow swipe movement
	            </div>
	            <div class="collapsible-body">
	              <div class="row">
	                <div class="cards-wrapper col s12 m6">
	                  <v-touch v-bind:swipe-options="{ direction:'horizontal' }" id="card-test" class="cards-wrapper__card card" v-on:swiperight="activateSwipe(2, 2, 'test');" v-on:swipeleft="activateSwipe(1, 2, 'test')">
	                    <div class="card-content">
	                      <span class="card-title">A card</span>
	                      <p>To <span class="bold-text">cancel</span> an event, swipe left.</p>
	                      <p>To <span class="bold-text">finalize</span> an event, swipe right.</p>
	                    </div>
	                  </v-touch>
	                </div>
	              </div>
	              <div class="right-align">
	                <button v-on:click="activate(9,2)" v-bind:class="{ chosen: user[9].value === 2 }"  class="swipe-2 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Chosen</span>
			            	<span class="span__choose">Choose</span>
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
	          <li class="collapsible__li voice__type1" v-on:click="showBody = 4" v-bind:class="{ chosen: user[8].value === 1,  active: showBody == 4 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-voice-1 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Block voice synthesis
	            </div>
	            <div class="collapsible-body">
	              <h3>A title</h3>
	              <p>This title doesn't allow voice synthesis when the icon is touched.</p>
	              <div class="right-align">
	                <button v-on:click="activate(8,1)" v-bind:class="{ chosen: user[8].value === 1 }"  class="voice-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Chosen</span>
			            	<span class="span__choose">Choose</span>
			            </button>
	              </div>
	            </div>
	          </li>
	          <li class="collapsible__li voice__type2" v-on:click="showBody = 5" v-bind:class="{ chosen: user[8].value === 2,  active: showBody == 5 }">
	            <div class="li__collapsible-header collapsible-header">
	              <span class="collapsible-header__span-voice-2 collapsible-header__span">
	                <i class="material-icons collapsible-header__icon">done</i>
	              </span>
	              Allow voice synthesis
	            </div>
	            <div class="collapsible-body">
	              <h3>
	              	A title
	              	<i class="material-icons voice-icon" v-on:click="speechSynthesis('Um título, que permite o uso de ditação de voz ao clicar no ícone.')">volume_up</i>
	              </h3>
	              <p>This title allows voice synthesis when the icon is touched.</p>
	              <div class="right-align">
	                <button v-on:click="activate(8,2)" v-bind:class="{ chosen: user[8].value === 2 }"  class="voice-2 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Chosen</span>
			            	<span class="span__choose">Choose</span>
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
	import { modalities } from './mixins/modalities'
  export default {
  	mixins: [ userprefs, modalities ],
    data() {
      return {
       showBody: null,
       user: this.getUser()
      }
    },  
    methods: {
      onSpeak: function(element) {
        var text = this.startSpeech(element);
      },
      activate: function(el, value) {
      	this.showBody = value;
        this.user[el].value = value;
        this.setNewItem(el, value);
      }
    }
  }
</script>