<template>
  <div id="app">
    <header>
      <nav class="header__app-bar">
        <div class="nav-wrapper">
          <a href="#" class="nav-wrapper__a nav-wrapper__a--main">Minha Agenda</a>
        </div>
      </nav>                 
      <div class="header__tabs header__tabs--2 header__tabs--hidden col s12">
        <ul class="tabs">
          <li class="tab col s3"><a href="#events">Events display</a></li>
          <li class="tab col s3"><a href="#images">Images</a></li>
        </ul>
      </div>
    </header>

    <main class="app__main">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <nav class="footer__nav white">
        <div class="nav__nav-wrapper nav-wrapper">
          <ul class="nav-wrapper__ul">
            <li class="ul__li" v-on:click="activeLink = 0" v-bind:class="{ active: activeLink == 0 }">
              <router-link to="/" class="li__a">
                <i class="material-icons a__icons">home</i>
                <span class="a__span">Home</span>
              </router-link>
            </li>
            <li class="ul__li" v-on:click="activeLink = 1" v-bind:class="{ active:  activeLink == 1 }">
              <router-link to="/mydesign" class="li__a">
                <i class="material-icons a__icons">face</i>
                <span class="a__span">Meu design</span>
              </router-link>
            </li>
            <li class="ul__li" v-on:click="activeLink = 2" v-bind:class="{ active: activeLink == 2 }">
              <router-link to="/pastevents" class="li__a">
                <i class="material-icons a__icons">schedule</i>
                <span class="a__span">Eventos antigos</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
  require('materialize-css')

  export default {
    name: 'app',
    data() {
      return {
       activeLink: 0,
      }
    },  
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('materialize-css/static/css/materialize.min.css');

  :root { 
    --indigo: #3f51b5;

    --red: #f44336;

    --green: #4caf50;

    --pink-lighten-2: #f06292;

    --grey: #9e9e9e;
    --grey-lighten-2: #e0e0e0;
    --grey-darken-2: #616161;
  }

  .app__main {
    margin-bottom: 56px;
    overflow-x: hidden;
  }

  .nav-wrapper__a {
    font-size: 20px;
    margin-left: 16px;
    text-align: left;
  }

  /* tabs */
  .header__tabs--hidden {
    display: none;
  }
 
  /* footer */
  .footer {
    bottom: -1px;
    left: 0;
    position: fixed;
    width: 100vw;
  }


  .footer__nav {
    color: white;
    border-top: 1px solid var(--grey-lighten-2);
    box-shadow: 0px 0 0 0;
    line-height: 1;
  }

  .ul__li {
    width: calc(100%/3);
  }

  .nav-wrapper__ul .ul__li.active {
    background-color: white;
  }

  .nav-wrapper__ul .ul__li.active .li__a {
    color: var(--indigo);
  }

  .nav-wrapper__ul .ul__li .li__a {
    color: var(--grey-darken-2);
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: 6px;
    padding: 0px 12px;
    text-align: center;
  }

  nav ul a.li__a:hover {
    background-color: transparent;
  }

  .a__icons {
    height: 24px!important;
    line-height: 24px!important;
    text-align: center;
  }

  .a__span {
    line-height: 16px;
  }

  /* collapsible */

  .collapsible__li:focus, .li__collapsible-header:focus {
    outline: 0;
  }

  .collapsible__li.chosen .collapsible-header__span {
    display: initial;
  } 

  .collapsible-header__span {
    display: none;
  }

  .collapsible-header__icon {
    color: var(--pink-lighten-2);
  }

  .collapsible-header:focus {
    outline: 0;
  }

  .collapsible-body__p {
    margin-top: 0;
  }

  /* tabs */

  .tabs__div--hidden {
    display: none;
  }

  .tabs__ul .ul__li  .li__a:focus, .tabs__ul .ul__li .li__a:focus.active {
    background-color: white;
  }

  /* btn user prefs */
  .row.template__button-wrapper {
    margin: 0 15px;
  }

  .btn-wrapper__btn-choose .span__chosen, .btn-wrapper__btn-choose.chosen .span__choose { 
    display: none;
  }

  .btn-wrapper__btn-choose.chosen .span__chosen, .btn-wrapper__btn-choose .span__choose { 
    display: block;
  }

</style>
