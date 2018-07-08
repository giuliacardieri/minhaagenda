<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  require('materialize-css')

  export default {
    name: 'app', 
  }
</script>

<style>
  @import url('materialize-css/static/css/materialize.min.css');

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url('materialize-css/static/fonts/MaterialIcons-Regular.eot'); /* For IE6-8 */
    src: local('Material Icons'),
      local('MaterialIcons-Regular'),
      url('materialize-css/static/fonts/MaterialIcons-Regular.woff2') format('woff2'),
      url('materialize-css/static/fonts/MaterialIcons-Regular.woff') format('woff'),
      url('materialize-css/static/fonts/MaterialIcons-Regular.ttf') format('truetype');
  }

  :root { 
    --indigo: #3f51b5;

    --red: #f44336;

    --green: #4caf50;

    --pink-lighten-2: #f06292;

    --grey: #9e9e9e;
    --grey-lighten-2: #e0e0e0;
    --grey-darken-2: #616161;
  }

  /* helpers */

  .hidden {
    display: none;
  }

  .bold-text {
    font-weight: bold;
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
    line-height: 36px;
    position: absolute;
    right: 10px;
    top: 0;
  }

  .btn.button-wrapper__btn--indigo {
    background-color: var(--indigo);
  }

  .btn.btn-wrapper__btn-choose {
    background-color: var(--indigo);

  }

  .btn.btn-wrapper__btn-choose.chosen {
    background-color: var(--pink-lighten-2);

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
    z-index: 1;
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

  .collapsible__li.chosen .li__collapsible-header {
    font-weight: 600;
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
    margin: 0 15px 25px 15px;
  }

  .btn-wrapper__btn-choose .span__chosen, .btn-wrapper__btn-choose.chosen .span__choose { 
    display: none;
  }

  .btn-wrapper__btn-choose.chosen .span__chosen, .btn-wrapper__btn-choose .span__choose { 
    display: block;
  }

  /* list swipe actions */
  .collection__li.swipeleft {
    animation: swipeleft 1s ease-in 1;
  }

  .collection__li.swiperight {
    animation: swiperight 1s ease-in 1;
  }

  .collection__li:before {
    background-color: var(--green);
    color: white;
    content: '\e876';
    font-family: 'Material Icons';
    font-size: 30px;
    padding: 0 20px;
    position: absolute;
    height: 100%;
    left: -110vw;
    line-height: 84px;
    text-align: right;
    top: 0;
    transition: left 2s;
    width: 110vw;
    z-index: -1;
  }

  .collection__li:after {
    background-color: var(--red);
    color: white;
    content: '\e14c';
    font-family: 'Material Icons';
    font-size: 30px;
    padding: 0 20px;
    position: absolute;
    height: 100%;
    right: -110vw;
    line-height: 84px;
    text-align: left;
    transition: right 2s;
    top: 0;
    width: 110vw;
    z-index: -1;
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

  @media (max-width: 991px) {
    .cards-wrapper__card:after {
      color: var(--red);
      content: '\e14c';
      font-family: 'Material Icons';
      font-size: 50pt;
      line-height: 250px;
      right: -100px;
      opacity: 0;
      position: absolute;
      transition: opacity 2s;
      top: 0;
    }

    .cards-wrapper__card:before {
      color: var(--green);
      content: '\e876';
      font-family: 'Material Icons';
      font-size: 50pt;
      line-height: 250px;
      left: -100px;
      opacity: 0;
      position: absolute;
      transition: opacity 2s;

    }
  }

  @keyframes swipeleft {
    from { left: 0; }
    to { left: -105vw; }
  }

  @keyframes swiperight {
    from { right: 0; }
    to { right: -105vw; }
  }

</style>
