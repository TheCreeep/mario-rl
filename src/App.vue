<template>
  <div class="page">
    <div class="page__header">
      <img src="@/assets/Logo.png" alt="Logo" class="page__header__logo" />
      <nav class="page__header__nav">
        <RouterLink class="page__header__nav__link" to="/modelselect">Model Select </RouterLink>
        <RouterLink class="page__header__nav__link" to="/dataview">Data Viewer </RouterLink>
        <RouterLink class="page__header__nav__link" to="/training">Training </RouterLink>
        <RouterLink class="page__header__nav__link" to="/settings">Settings </RouterLink>
      </nav>
    </div>

    <RouterView v-if="$route.path !== '/'" />
    <div class="page__content" v-else></div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'
import 'vue3-toastify/dist/index.css';

const settingsStore = useSettingsStore()
settingsStore.loadSettings()
</script>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected: 'modelselect'
    }
  },
  methods: {}
}
</script>

<style lang="scss">
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

.router-link-active {
  color: #fff !important;
  text-shadow: 0 0 10px #000;
}

.page {
  background: #facd00;
  min-height: calc(100vh - 2rem);
  padding: 1rem;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;

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
        font-family: 'MarioMaker';
        font-size: 2.25rem;
        text-decoration: none;
        position: relative;
        transition: transform 0.2s ease-in-out;
        backface-visibility: hidden;

        &:hover {
          transform: scale(1.02);
          backface-visibility: hidden;
        }
      }
    }
  }
}
</style>
