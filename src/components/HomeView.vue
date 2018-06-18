<template>
  <section>
    <header>
      <nav class="header__app-bar">
        <div class="nav-wrapper">
          <router-link to="/" class="nav-wrapper__a">Minha Agenda</router-link>
        </div>
      </nav>
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
  </section>
</template>

<script>
  export default {
    data() {
      return {
        activeLink: 0
      }
    },
  }
</script>