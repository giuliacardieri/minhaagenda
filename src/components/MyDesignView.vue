<template>
  <div class="row">
    <div class="template__mydesign-wrapper col s12">
    <p class="mydesign-wrapper__p">On this section you may choose the appearance and behavior of the UI elements, interaction methods and content formats from this app.</p>
    <div class="row">
    <ul class="collapsible my-design__collapsible" v-collapsible>
      <li class="collapsible__li">
        <div class="li__collapsible-header collapsible-header">UI Elements</div>
        <div class="collapsible-body">
          <section class="collapsible-body__icon-wrapper">
            <i class="material-icons medium icon-wrapper__icon">event</i>
            <i class="material-icons medium icon-wrapper__icon">check_box</i>
            <i class="material-icons medium icon-wrapper__icon">access_time</i>
          </section>
          <p class="collapsible-body__p">UI elements are checkboxes, datepicker, text input, select and timepicker.</p>
          <router-link to="/mydesign/interfaceelements" class="btn waves-effect collapsible-body__btn collapsible-body__btn--choose collapsible-body__btn--pink" data-type="0">Change UI elements</router-link>
        </div>
      </li>
      <li>
        <div class="li__collapsible-header collapsible-header">Interaction Methods</div>
        <div class="collapsible-body">
          <section class="collapsible-body__icon-wrapper">
            <i class="material-icons medium icon-wrapper__icon">mic</i>
            <i class="material-icons medium icon-wrapper__icon">touch_app</i>
            <i class="material-icons medium icon-wrapper__icon">volume_up</i>
          </section>
          <p class="collapsible-body__p">Interaction methods such as swipe movement, voice recognition and voice synthesis may be activated or deactivated.</p>
          <router-link to="/mydesign/modalities" class="btn waves-effect collapsible-body__btn collapsible-body__btn--choose collapsible-body__btn--pink" data-type="1">Change interaction methods</router-link>
        </div>
      </li>
      <li>
        <div class="li__collapsible-header collapsible-header">Content display format</div>
        <div class="collapsible-body">
          <section class="collapsible-body__icon-wrapper">
            <i class="material-icons medium icon-wrapper__icon">image</i>
            <i class="material-icons medium icon-wrapper__icon">view_module</i>
            <i class="material-icons medium icon-wrapper__icon">list</i>
          </section>
          <p class="collapsible-body__p">The content display format of images and events may be changed.</p>
          <router-link to="/mydesign/displayformat" class="btn waves-effect collapsible-body__btn collapsible-body__btn--choose collapsible-body__btn--pink" data-type="2">Change content display format</router-link>
        </div>
      </li>
    </ul>
    </div>
    </div>
  </div>
</template>>

<style>
  .collapsible__li:focus, .li__collapsible-header:focus {
    outline: 0;
  }

  .collapsible-body__btn--pink {
    background-color: var(--pink-lighten-2);
  }

  .collapsible-body__btn--indigo {
    background-color: var(--indigo);
  }

  .collapsible-body__p {
    margin: 0 0 25px 0;
  }

  .collapsible-body__icon-wrapper {
    margin-bottom: 15px;
    text-align: center;
  }

  .icon-wrapper__icon {
    color: var(--grey-darken-2);
  }
</style>