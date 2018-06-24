<template>
  <div id="app">
    <router-view></router-view>
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

  .hidden {
    display: none;
  }

  .material-icons {
    vertical-align: middle;
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

  .material-icons.input-field__speech-icon {
    color: var(--grey-darken-2);
    bottom: 10px;
    position: absolute;
    right: 10px;
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
    width: calc(100%/2);
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

  /* cards swipe actions */
  .card.swipeleft {
    animation: swipeleft 1s ease-in 1;
  }

  .card.swiperight {
    animation: swiperight 1s ease-in 1;
  }

  .card.swiperight:before {
    opacity: 1;
  }

  .card.swipeleft:after {
    opacity: 1;
  }

  @keyframes swipeleft {
    from { left: 0; }
    to { left: -100vw; }
  }

  @keyframes swiperight {
    from { right: 0; }
    to { right: -100vw; }
  }

</style>
