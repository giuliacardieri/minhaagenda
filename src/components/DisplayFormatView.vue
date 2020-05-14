<template>
	<div>      
		<div class="header__tabs header__tabs col s12">
      <ul class="tabs tabs-fixed-width tabs__ul" v-tabs>
        <li class="tab col s3 ul__li"><a class="li__a active"  href="#events">Events display</a></li>
        <li class="tab col s3 ul__li"><a class="li__a" href="#images">Images</a></li>
      </ul>
    </div>    
	  <div class="row">
      <div id="events" class="tabs__div col s12">
        <div class="row">
          <ul class="collapsible" v-collapsible>
            <li class="collapsible__li events__type1" v-on:click="showBody = 0" v-bind:class="{ chosen: user[6].value === 1,  active: showBody == 0 }">
              <div class="li__collapsible-header collapsible-header">
                <span class="collapsible-header__span-events-1 collapsible-header__span">
                  <i class="material-icons collapsible-header__icon">done</i>
                </span>
                Display events in card format
              </div>
              <div class="collapsible-body"> 
                <div class="row">
                  <div class="col s12 m6">
                    <div class="card">
                      <div class="card-content">
                        <span class="card-title">Algorithms Class</span>         
				                <p>
				                  <i class="material-icons p__icon">schedule</i>
				                    2:00 - 3:00 PM
				                </p>
				                <p>
				                  <i class="material-icons p__icon">room</i>
				                  University
				                </p>
				                <p>
				                  <i class="material-icons p__icon">school</i>
				                  School
				                </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-align">
                  <button v-on:click="activate(6,1)" v-bind:class="{ chosen: user[6].value === 1 }"  class="events-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Chosen</span>
			            	<span class="span__choose">Choose</span>
			            </button>
                </div>
              </div>
            </li>
            <li class="collapsible__li events__type2" v-on:click="showBody = 1" v-bind:class="{ chosen: user[6].value === 2,  active: showBody == 1 }">
              <div class="li__collapsible-header collapsible-header">
                <span class="collapsible-header__span-events-2 collapsible-header__span">
                  <i class="material-icons collapsible-header__icon">done</i>
                </span>
                Display events in list format
              </div>
              <div class="collapsible-body">
                <ul class="collection">
						      <li class="collection-item avatar">
							      	<i class="material-icons p__icon circle indigo">school</i>
							      <span class="title">Algorithms Class</span>
							      <p>2:00 - 3:00 PM</p>
                    <p>@University</p>
							    </li>
						      <li class="collection-item avatar">
							      	<i class="material-icons p__icon circle indigo">people</i>
							      <span class="title">Go to the movies</span>
							      <p>10:00 - 11:30 PM</p>
                    <p>@Movie theater</p>
							    </li>
						    </ul>
                <div class="right-align">
                  <button v-on:click="activate(6,2)" v-bind:class="{ chosen: user[6].value === 2 }"  class="events-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Chosen</span>
			            	<span class="span__choose">Choose</span>
			            </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="images" class="tabs__div col s12">
        <div class="row">
          <ul class="collapsible" v-collapsible>
            <li class="collapsible__li images__type1" v-on:click="showBody = 2" v-bind:class="{ chosen: user[7].value === 1,  active: showBody == 2 }">
              <div class="li__collapsible-header collapsible-header">
                <span class="collapsible-header__span-images-1 collapsible-header__span">
                  <i class="material-icons collapsible-header__icon">done</i>
                </span>
                Display event card with image
              </div>
              <div class="collapsible-body">
                <div class="row">
                  <div class="col s12 m6">
                    <div class="card">
                      <div class="card-image card__card-image card__card-image--test">
                        <img src="static/img/categories/Casa.jpg" alt="card image example, a living room in an apartment. An open door with curtains showing a partial view of a landscape on daylight.">
                        <span class="card-title">A card</span>
                      </div>
                      <div class="card-content">
                        <p>Card with image.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-align">
                  <button v-on:click="activate(7,1)" v-bind:class="{ chosen: user[7].value === 1 }"  class="images-1 btn btn-wrapper__btn-choose waves-effect">
		            	<span class="span__chosen">Chosen</span>
		            	<span class="span__choose">Choose</span>
		            </button>
                </div>
              </div>
            </li>
            <li class="collapsible__li image__type2" v-on:click="showBody = 3" v-bind:class="{ chosen: user[7].value == 2,  active: showBody == 3 }">
              <div class="li__collapsible-header collapsible-header">
                <span class="collapsible-header__span-images-2 collapsible-header__span">
                  <i class="material-icons collapsible-header__icon">done</i>
                </span>
                Display event card without image
              </div>
              <div class="collapsible-body">
                <div class="row">
                  <div class="col s12 m6">
                    <div class="card">
                      <div class="card-content">
                        <span class="card-title">A card</span>
                        <p>Card without image.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-align">
                  <button v-on:click="activate(7,2)" v-bind:class="{ chosen: user[7].value === 2 }"  class="events-2 btn btn-wrapper__btn-choose waves-effect">
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
			<router-link to="/mydesign" class="btn button-wrapper__btn--back button-wrapper__btn--indigo">Back</router-link>
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
       user: this.getUser()
      }
    },  
    methods: {
      activate: function(el, value) {
        this.showBody = value;
        this.user[el].value = value;
        this.setNewItem(el, value);
      }
    }
  }
</script>