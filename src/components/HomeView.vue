<template>
  <div>
    <div class="main__app-bar-secondary">
        <p class="app-bar-secondary__p grey-text text-darken-1">Hoje</p>
    </div>
    <div class="main__cards-wrapper">
      <div class="row">
          <div v-for="data in this.db" v-if="data.completed == 0" class="col s12 m4">
            <div class="cards-wrapper__card card" v-bind:class="{ card__hidden: data.completed == 1 }">
              <div class="card-image card__card-image">
                <img :src="'./static/img/categories/' + data.category + '.jpg'" />
                <span class="card-title">{{ data.title }}</span>
              </div>
              <div class="card__card-content card-content">
                <p>
                  <i class="material-icons p__icon">schedule</i>
                    {{data.time_start}} - {{data.time_end}}
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
                <a href="#" v-on:click="data.completed = 1" class="card-action__btn--completed card-action__btn--indigo-text">Marcar como finalizado</a>
                <a href="#" class="card-action__btn--cancel card-action__btn--indigo-text">Cancelar</a>
              </div>
            </div>
          </div>
      </div>
    </div>
    <a href="#" class="btn-floating main__btn--add btn-large waves-effect waves-light pink lighten-2"><i class="material-icons">add</i></a>
  </div>
</template>

<script>
  import data from '../data'
  export default {
    data() {
      return {
        'db': data.db,
      }
    },
    methods: {
      completedCard: function() {
        console.log('completou!');
      }
    }
  }
</script>
<style scoped>
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