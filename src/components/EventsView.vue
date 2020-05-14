<template>
  <div>
    <div id="modalOptions" class="modal">
      <div class="modal-content">
        <p>Do you really want to {{ action.name }} the event "{{ event.name }}"?</p>
      </div>
      <div class="modal-footer">
        <a href="#!"  class="modal-close waves-effect waves-green btn-flat">No</a>
        <a href="#!" v-on:click="actionCard(action.id, event.id)" class="modal-close waves-effect waves-green btn-flat">Yes</a>
      </div>
    </div>
    <div class="main__app-bar-secondary">
        <p class="app-bar-secondary__p grey-text text-darken-1">Today</p>
    </div>
    <div  class="main__content-wrapper">
      <div class="row">
          <div v-if="db.length === 0 || isEmpty()" class="content-wrapper__empty-wrapper col s12 m12">
            <i class="material-icons medium empty-wrapper__icon">event_note</i>
            <p class="empty-wrapper__p">No events today</p>
          </div>
          <template v-else>
            <div v-if="user[6].value === 1" class="cards-wrapper col s12 m4">
              <div v-for="data in db" :data="data" :key="data.id" v-if="(data.completed === 0) && (data.canceled === 0)">
                <v-touch v-bind:swipe-options="{ direction:'horizontal' }" class="cards-wrapper__card card" v-on:swiperight="onSwipe('swiperight', user[9].value, { id: data.id, name: data.title })" v-on:swipeleft="onSwipe('swipeleft', user[9].value, { id: data.id, name: data.title })" v-bind:id="'card-' + data.id" v-bind:class="{ card__hidden: data.completed == 1 }">
                  <div v-if="user[7].value === 1" class="card-image card__card-image">
                    <img :src="'./static/img/categories/' + data.category + '.jpg'" />
                    <span class="card-title">
                      {{ data.title }}
                      <i v-if="data.allday" class="material-icons voice-icon" v-on:click="speechSynthesis(`
                      evento: ${ data.title },
                      horário: o dia inteiro,
                      local: ${ data.location },
                      categoria: ${ data.category }
                      `)" v-bind:class="{ hidden: user[8].value == 1}">volume_up</i>
                      <i v-if="!data.allday" class="material-icons voice-icon" v-on:click="speechSynthesis(`
                      evento: ${ data.title },
                      horário: ${data.time_start} até ${data.time_end},
                      local: ${ data.location },
                      categoria: ${ data.category }
                      `)" v-bind:class="{ hidden: user[8].value == 1}">volume_up</i>
                    </span>
                  </div>
                  <div class="card__card-content card-content">
                    <span v-if="user[7].value === 2" class="card-title">
                       {{ data.title }}
                      <i v-if="data.allday" class="material-icons voice-icon" v-on:click="speechSynthesis(`
                      evento: ${ data.title },
                      horário: o dia inteiro,
                      local: ${ data.location },
                      categoria: ${ data.category }
                      `)" v-bind:class="{ hidden: user[8].value == 1}">volume_up</i>
                      <i v-if="!data.allday" class="material-icons voice-icon" v-on:click="speechSynthesis(`
                      evento: ${ data.title },
                      horário: ${data.time_start} até ${data.time_end},
                      local: ${ data.location },
                      categoria: ${ data.category }
                      `)" v-bind:class="{ hidden: user[8].value == 1}">volume_up</i>
                    </span>
                    <p v-if="data.allday">
                      <i class="material-icons p__icon">schedule</i>
                      The entire day
                    </p>
                    <p v-if="data.time_start && data.time_end && !data.allday">
                      <i class="material-icons p__icon">schedule</i>
                      {{ data.time_start }} - {{ data.time_end }}
                    </p>
                    <p>
                      <i class="material-icons p__icon">room</i>
                      {{ data.location }}
                    </p>
                    <p>
                      <i class="material-icons p__icon">{{ data.icon }}</i>
                      {{ data.category }}
                    </p>
                  </div>
                  <div class="card-action">
                    <a href="#" data-target="modalOptions" v-on:click="updateModal({id: data.id, name: data.title }, 1)" class="card-action__btn--completed card-action__btn--indigo-text modal-trigger">Finalize</a>
                    <a href="#" data-target="modalOptions" v-on:click="updateModal({id: data.id, name: data.title }, 0)" class="card-action__btn--cancel card-action__btn--indigo-text modal-trigger">Cancel</a>
                  </div>
                </v-touch>
              </div>
            </div>    
            <div v-else="user[6].value === 2" class="collection-wrapper">
              <ul class="collection-wrappper__collection collection">
                <v-touch v-for="data in db" :data="data" :key="data.id" v-if="(data.completed === 0) && (data.canceled === 0)" class="collection__li collection-item avatar" v-bind:id="'card-' + data.id" v-bind:swipe-options="{ direction: 'horizontal', threshold: 1 }" v-on:swiperight="onSwipe('swiperight', user[9].value, { id: data.id, name: data.title })" v-on:swipeleft="onSwipe('swipeleft', user[9].value, { id: data.id, name: data.title })">
                  <i class="material-icons p__icon circle indigo">{{ data.icon }}</i>
                  <p class="collection__p">
                    <span class="title">
                      {{ data.title }}
                      <i v-if="data.allday === false" class="material-icons voice-icon" v-on:click="speechSynthesis(`
                        evento: ${ data.title },
                        horário: ${ data.time_start } até ${ data.time_end },
                        local: ${ data.location },
                        categoria: ${ data.category }`)" v-bind:class="{ hidden: user[8].value == 1}">volume_up</i>
                      <i v-if="data.allday" class="material-icons voice-icon" v-on:click="speechSynthesis(`
                        evento: ${ data.title },
                        horário: o dia inteiro,
                        local: ${ data.location },
                        categoria: ${ data.category }`)" v-bind:class="{ hidden: user[8].value == 1}">volume_up</i> 
                    </span>
                  </p>
                  <p class="collection__p">
                    <span v-if="data.time_start && data.time_end && !data.allday">
                      {{ data.time_start }} - {{ data.time_end }}
                    </span>
                    <span v-if="data.allday">
                    The entire day
                    </span>
                  </p>
                  <p class="collection__p">
                    @{{data.location}}
                  </p>
                  <a href="#!" class="collection__secondary-content secondary-content">
                    <i v-on:click="updateModal({ id: data.id, name: data.title }, 1)" class="secondary-content__icon material-icons">done</i>
                    <i v-on:click="updateModal({ id: data.id, name: data.title }, 0)" class="secondary-content__icon material-icons">cancel</i>
                  </a>
                </v-touch>
              </ul>
            </div>
          </template>
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
        'swipeRight': 0,
        'activeLink': 0,
        'action': {
          id: null,
          name: null
        },
        'event': {
          id: null,
          name: null
        },
        modalElem: null
      }
    },
    methods: {
      updateModal: function(elem, type) {
        let modal = M.Modal.getInstance(document.querySelectorAll('#modalOptions')[0]);

        this.action.id = type;
        this.event.id = elem.id;
        this.event.name = elem.name;

        if (type === 'swipeleft' || type === 0)
         this.action.name = 'cancel';
        else
         this.action.name = 'finalize';

        modal.open();
      },
      actionCard: function(type, id) {
        let sorted_db = this.sortDB(this.db, 'id');

        if (type === 'swipeleft') {
          sorted_db[id].canceled = 1;
          M.toast({html: 'Canceled event'})
        } else {
          sorted_db[id].completed = 1;
          M.toast({html: 'Finalized event'})
        }
        
        sorted_db = this.sortDB(sorted_db, 'time_start');
        this.setDB(sorted_db);
      },
      onSwipe: function(type, active, elem) {
        if (active === 2) {            
          setTimeout(() => {
            this.updateModal(elem, type);
          }, 1000);
          this.activateSwipe(type, elem.id);
        }
      },
      isEmpty: function() {
        return this.areAllDone();
      }
    },
    mounted() {
       this.modalElem = M.Modal.init(document.querySelectorAll('.modal'));
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

  .content-wrapper__empty-wrapper {
    text-align: center;
  }

  .empty-wrapper__icon {
    color: var(--grey);
    padding-top: 25px;
  }

  .empty-wrapper__p {
    color: var(--grey);
    font-size: 16px;
    margin: 0;
  }

  /* cards */
  .cards-wrapper__card {
    margin-top: 0;
  }

  .secondary-content__icon {
    font-size: 28px;
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

  .card .card__card-image img {
    filter: blur(0.5px) brightness(0.75);
  }

  .collection .collection-item.avatar {
    min-height: initial;
  }

  /* collection */
  .collection__p {
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 80%;
  }

</style>