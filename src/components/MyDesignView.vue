<template>
  <div class="row">
    <div class="template__mydesign-wrapper col s12">
    <p class="mydesign-wrapper__p">Nessa seção você pode escolher a aparência e comportamento dos elementos de interface, modalidades e formato de exibição de conteúdo desta aplicação.</p>
    <div class="row">
    <ul class="collapsible my-design__collapsible" v-collapsible>
      <li class="collapsible__li">
        <div class="li__collapsible-header collapsible-header">Elementos de interface</div>
        <div class="collapsible-body">
          <section class="collapsible-body__icon-wrapper">
            <i class="material-icons medium icon-wrapper__icon">event</i>
            <i class="material-icons medium icon-wrapper__icon">check_box</i>
            <i class="material-icons medium icon-wrapper__icon">access_time</i>
          </section>
          <p class="collapsible-body__p">Elementos de interface são checkboxes, calendário, caixa de texto, múltipla escolha, e seletor de horário.</p>
          <router-link to="/mydesign/interfaceelements" class="btn waves-effect collapsible-body__btn collapsible-body__btn--choose collapsible-body__btn--pink" data-type="0">Mudar elementos de interface</router-link>
        </div>
      </li>
      <li>
        <div class="li__collapsible-header collapsible-header">Modalidades</div>
        <div class="collapsible-body">
          <section class="collapsible-body__icon-wrapper">
            <i class="material-icons medium icon-wrapper__icon">mic</i>
            <i class="material-icons medium icon-wrapper__icon">touch_app</i>
            <i class="material-icons medium icon-wrapper__icon">volume_up</i>
          </section>
          <p class="collapsible-body__p">Modalidades como o movimento swipe, o uso de reconhecimento de voz/áudio e a leitura de textos podem ser ativados ou desativados.</p>
          <router-link to="/mydesign/modalities" class="btn waves-effect collapsible-body__btn collapsible-body__btn--choose collapsible-body__btn--pink" data-type="1">Mudar modalidades</router-link>
        </div>
      </li>
      <li>
        <div class="li__collapsible-header collapsible-header">Formato de exibição de conteúdo</div>
        <div class="collapsible-body">
          <section class="collapsible-body__icon-wrapper">
            <i class="material-icons medium icon-wrapper__icon">image</i>
            <i class="material-icons medium icon-wrapper__icon">view_module</i>
            <i class="material-icons medium icon-wrapper__icon">list</i>
          </section>
          <p class="collapsible-body__p">O formato de exibição de conteúdo de imagens e eventos pode ser alterado.</p>
          <router-link to="/mydesign/displayformat" class="btn waves-effect collapsible-body__btn collapsible-body__btn--choose collapsible-body__btn--pink" data-type="2">Mudar formato de exibição</router-link>
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