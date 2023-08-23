<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page">
    <div class="page__header">
      <img src="@/assets/Logo.png" alt="Logo" class="page__header__logo">
      <nav class="page__header__nav">
        <RouterLink class="page__header__nav__link" :class="selected == 'modelselect' ? '--selected' : ''"
          @click.native="selectPage('modelselect')" to="/modelselect">Model
          Select
        </RouterLink>
        <RouterLink class="page__header__nav__link" :class="selected == 'dataview' ? '--selected' : ''"
          @click.native="selectPage('dataview')" to="/dataview">Data Viewer
        </RouterLink>
        <RouterLink class="page__header__nav__link" :class="selected == 'training' ? '--selected' : ''"
          @click.native="selectPage('training')" to="/training">Training
        </RouterLink>
      </nav>
    </div>
    
    <div class="page__content">
      <RouterView />
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected: "",
    }
  },
  methods: {
    selectPage(page) {
      this.selected = page;
    }
  }
}

</script>

<style lang="scss">
/* Create font face */
@font-face {
  font-family: 'MarioMaker';
  src: url('@/assets/fonts/super-mario-maker-extended.ttf');
}

*,
html,
body {
  border: 0;
  margin: 0;
  padding: 0;
}

.page {
  background: #FACD00;
  min-height: calc(100vh - 2rem);
  padding: 1rem;

  &__header {
    display: flex;

    &__logo {
      width: 15%;
    }

    &__nav {
      display: flex;
      justify-content: center;
      gap: 9rem;
      align-items: center;
      width: 100%;

      &__link {
        color: #222;
        text-align: center;
        font-family: "MarioMaker";
        font-size: 2.25rem;
        text-decoration: none;
        position: relative;
        transition: transform 0.2s ease-in-out;
        backface-visibility: hidden;


        &.--selected {
          color: #FFF;
          /* Text Shadow Black / Grey */
          text-shadow:  0 0 10px #000;
        }

        &:hover {
          transform: scale(1.02);
          backface-visibility: hidden;
        }

      }
    }

  }
}
</style>
