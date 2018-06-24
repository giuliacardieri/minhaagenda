<template>
	<div>      
		<div class="header__tabs header__tabs col s12">
      <ul class="tabs tabs__ul" v-tabs>
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
                Mostrar eventos no formato cartão
              </div>
              <div class="collapsible-body"> 
                <div class="row">
                  <div class="col s12 m6">
                    <div class="card">
                      <div class="card-content">
                        <span class="card-title">Aula de Algoritmos</span>         
					              <div class="card__card-content card-content">
					                <p>
					                  <i class="material-icons p__icon">schedule</i>
					                    14:00 - 15:00
					                </p>
					                <p>
					                  <i class="material-icons p__icon">room</i>
					                  UFScar
					                </p>
					                <p>
					                  <i class="material-icons p__icon">school</i>
					                  School
					                </p>
					              </div>
					              <div class="card-action">
					                <a href="#" v-on:click="data.completed = 1" class="card-action__btn--completed card-action__btn--indigo-text">Marcar como finalizado</a>
					                <a href="#" class="card-action__btn--cancel card-action__btn--indigo-text">Cancelar</a>
					              </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-align">
                  <button v-on:click="activate(6,1)" v-bind:class="{ chosen: user[6].value === 1 }"  class="events-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
			            </button>
                </div>
              </div>
            </li>
            <li class="collapsible__li events__type2" v-on:click="showBody = 1" v-bind:class="{ chosen: user[6].value === 2,  active: showBody == 1 }">
              <div class="li__collapsible-header collapsible-header">
                <span class="collapsible-header__span-events-2 collapsible-header__span">
                  <i class="material-icons collapsible-header__icon">done</i>
                </span>
                Mostrar eventos no formato lista
              </div>
              <div class="collapsible-body">
                <ul class="collection">
						      <li class="collection-item avatar">
							      	<i class="material-icons p__icon circle indigo">school</i>
							      <span class="title">Aula de algoritmos</span>
							      <p>
				              14:00 - 15:00 @UFSCar
							      </p>
							      <a href="#!" class="secondary-content">
							      	<i class="material-icons">done</i>
							      	<i class="material-icons">cancel</i>
							      </a>
							    </li>
						      <li class="collection-item avatar">
							      	<i class="material-icons p__icon circle indigo">people</i>
							      <span class="title">Ir ao cinema</span>
							      <p>
				              22:00 - 23:30 @Cinema
							      </p>
							      <a href="#!" class="secondary-content">
							      	<i class="material-icons">done</i>
							      	<i class="material-icons">cancel</i>
							      </a>
							    </li>
						    </ul>
                <div class="right-align">
                  <button v-on:click="activate(6,2)" v-bind:class="{ chosen: user[6].value === 2 }"  class="events-1 btn btn-wrapper__btn-choose waves-effect">
			            	<span class="span__chosen">Escolhido</span>
			            	<span class="span__choose">Escolher</span>
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
                Mostrar cartão de evento com imagem
              </div>
              <div class="collapsible-body">
                <div class="row">
                  <div class="col s12 m6">
                    <div class="card">
                      <div class="card-image card__card-image card__card-image--test">
                        <img src="static/img/categories/casa.jpg" alt="card image example, a living room in an apartment. An open door with curtains showing a partial view of a landscape on daylight.">
                        <span class="card-title">Um cartão</span>
                      </div>
                      <div class="card-content">
                        <p>Cartão com imagem.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-align">
                  <button v-on:click="activate(7,1)" v-bind:class="{ chosen: user[7].value === 1 }"  class="images-1 btn btn-wrapper__btn-choose waves-effect">
		            	<span class="span__chosen">Escolhido</span>
		            	<span class="span__choose">Escolher</span>
		            </button>
                </div>
              </div>
            </li>
            <li class="collapsible__li image__type2" v-on:click="showBody = 3" v-bind:class="{ chosen: user[7].value == 2,  active: showBody == 3 }">
              <div class="li__collapsible-header collapsible-header">
                <span class="collapsible-header__span-images-2 collapsible-header__span">
                  <i class="material-icons collapsible-header__icon">done</i>
                </span>
                Esconder cartão de evento com imagem
              </div>
              <div class="collapsible-body">
                <div class="row">
                  <div class="col s12 m6">
                    <div class="card">
                      <div class="card-content">
                        <span class="card-title">Um cartão</span>
                        <p>Cartão sem imagem.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-align">
                  <button v-on:click="activate(7,2)" v-bind:class="{ chosen: user[7].value === 2 }"  class="events-2 btn btn-wrapper__btn-choose waves-effect">
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
       showBody: null,
       activeLink: 1,
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