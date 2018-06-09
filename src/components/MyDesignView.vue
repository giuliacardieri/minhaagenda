<template>
  <div class="row">
    <div class="template__mydesign-wrapper col s12">
    <p class="mydesign-wrapper__p">Nessa seção você pode escolher a aparência e comportamento dos elementos de interface, modalidades e formato de exibição de conteúdo desta aplicação.</p>
    <div class="row">
    <ul class="collapsible my-design__collapsible" v-collapsible>
      <li class="collapsible__li">
        <div class="li__collapsible-header collapsible-header">Elementos de interface</div>
        <div class="collapsible-body">
          <p class="collapsible-body__p">Elementos de interface são checkboxes, calendário, caixa de texto, múltipla escolha, e seletor de horário.</p>
          <router-link to="/mydesign/interfaceelements" class="btn waves-effect collapsible-body__btn collapsible-body__btn--choose collapsible-body__btn--pink" data-type="0">Mudar elementos de interface</router-link>
        </div>
      </li>
      <li>
        <div class="li__collapsible-header collapsible-header">Modalidades</div>
        <div class="collapsible-body">
          <p class="collapsible-body__p">Modalidades como o movimento swipe, o uso de reconhecimento de voz/áudio e a leitura de textos podem ser ativados ou desativados.</p>
          <router-link to="/mydesign/modalities" class="btn waves-effect collapsible-body__btn collapsible-body__btn--choose collapsible-body__btn--pink" data-type="1">Mudar modalidades</router-link>
        </div>
      </li>
      <li>
        <div class="li__collapsible-header collapsible-header">Formato de exibição de conteúdo</div>
        <div class="collapsible-body">
          <p class="collapsible-body__p">o formato de exibição de conteúdo de imagens e eventos pode ser alterado.</p>
          <router-link to="/mydesign/displayformat" class="btn waves-effect collapsible-body__btn collapsible-body__btn--choose collapsible-body__btn--pink" data-type="2">Mudar formato de exibição do conteúdo</router-link>
        </div>
      </li>
    </ul>
    </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .collapsible__li:focus, .li__collapsible-header:focus {
    outline: 0;
  }

  .collapsible-body__btn--pink {
    background-color: var(--pink-lighten-2);
  }
</style>