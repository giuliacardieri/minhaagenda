<template>
  <div>
    <div class="main__app-bar-secondary">
        <p class="app-bar-secondary__p grey-text text-darken-1">Hoje</p>
    </div>
    <div class="main__cards-wrapper">
      <div class="row">
          <div v-if="db.length === 0 || isEmpty()" class="col s12 m12">
            <p>Nenhum evento hoje</p>
          </div>
          <div class="cards-wrapper col s12 m4">
            <div v-for="data in this.db" v-if="(data.completed === 0) && (data.canceled === 0)">
              <v-touch class="cards-wrapper__card card" v-on:swiperight="onSwipe(2, user[9].value, data.id)" v-on:swipeleft="onSwipe(1, user[9].value, data.id)" v-bind:id="'card-' + data.id" v-bind:class="{ card__hidden: data.completed == 1 }">
                <div class="card-image card__card-image">
                  <img :src="'./static/img/categories/' + data.category + '.jpg'" />
                  <span class="card-title">
                    {{ data.title }}
                    <i class="material-icons voice-icon" v-on:click="speechSynthesis(`evento: ${data.title}`)" v-bind:class="{ hidden: user[8].value == 1}">volume_up</i>
                  </span>
                </div>
                <div class="card__card-content card-content">
                  <p v-if="data.allday">
                    <i class="material-icons p__icon">schedule</i>
                    O dia inteiro
                    <i class="material-icons voice-icon" v-on:click="speechSynthesis(`Horário: o dia inteiro`)" v-bind:class="{ hidden: user[8].value == 1 }">volume_up</i>
                  </p>
                  <p v-if="data.time_start && data.time_end">
                    <i class="material-icons p__icon">schedule</i>
                    {{data.time_start}} - {{data.time_end}}
                    <i class="material-icons voice-icon" v-on:click="speechSynthesis(`Horário: ${data.time_start} até ${data.time_end}`)" v-bind:class="{ hidden: user[8].value == 1 }">volume_up</i>
                  </p>
                  <p>
                    <i class="material-icons p__icon">room</i>
                    {{ data.location }}
                    <i class="material-icons voice-icon" v-on:click="speechSynthesis(`Local: ${data.location}`)" v-bind:class="{ hidden: user[8].value == 1}">volume_up</i>
                  </p>
                  <p>
                    <i class="material-icons p__icon">{{ data.icon }}</i>
                    {{ data.category }}
                    <i class="material-icons voice-icon" v-on:click="speechSynthesis(`Categoria: ${data.category}`)" v-bind:class="{ hidden: user[8].value == 1}">volume_up</i>
                  </p>
                </div>
                <div class="card-action">
                  <a href="#" v-on:click="completedCard(data.id)" class="card-action__btn--completed card-action__btn--indigo-text">Marcar como finalizado</a>
                  <a href="#" v-on:click="canceledCard(data.id)" class="card-action__btn--cancel card-action__btn--indigo-text">Cancelar</a>
                </div>
              </v-touch>
            </div>
          </div>
      </div>
    </div>
    <router-link to="/add" class="btn-floating main__btn--add btn-large waves-effect waves-light pink lighten-2"><i class="material-icons">add</i></router-link>
  </div>
</template>

<script>
  import { db } from './mixins/db'
  import { userprefs } from './mixins/userprefs'
  import { modalities } from './mixins/modalities'
  require('vue-touch')
  export default {
    mixins: [ db, modalities, userprefs ],
    data() {
      return {
        'db': this.getDB(),
        'user': this.getUser(),
        'swipeLeft': 0,
        'swipeRight': 0
      }
    },
    methods: {
      completedCard: function(id) {
        this.db[id].completed = 1;
        this.setDB(this.db);
        M.toast({html: 'Evento finalizado'});
      },  
      canceledCard: function(id) {
        this.db[id].canceled = 1;
        this.setDB(this.db);
          M.toast({html: 'Evento cancelado'});
      },
      onSwipe: function(type, active, id) {
        this.activateSwipe(type, active, id);
        setTimeout(() => {
          if (type === 2)
            this.completedCard(id);
          else
            this.canceledCard(id);
        }, 1000);
      },
      isEmpty: function() {
        return this.areAllDone();
      }
    },
    mounted() {
      this.getDB();
    }
  }
</script>
<style>
  .app-bar-secondary__p {
    line-height: 32px;
    margin: 0;
    padding: 8px 16px;
  }

  .main__btn--add {
    bottom: calc(16px + 56px);
    position: fixed;
    right: 16px;
  }

  /* cards */
  .cards-wrapper__card {
    margin-top: 0;
  }

  @media (max-width: 991px) {
    .cards-wrapper__card:after {
      color: var(--red);
      content: '\e14c';
      font-family: 'Material Icons';
      font-size: 44pt;
      line-height: 250px;
      right: -75px;
      opacity: 0;
      position: absolute;
      top: 0;
    }

    .cards-wrapper__card:before {
      color: var(--green);
      content: '\e876';
      font-family: 'Material Icons';
      font-size: 44pt;
      line-height: 250px;
      left: -75px;
      opacity: 0;
      position: absolute;
    }
  }

  .card__hidden {
    display: none;
  }

  .cards-wrapper__card .card__card-content p {
    margin: 5px 0;
  }

  .card__card-image--hidden {
    display: none;
  }

</style>