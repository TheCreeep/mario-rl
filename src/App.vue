<template>
  <div class="page">
    <div class="page__header">
      <img
        src="@/assets/Logo.png"
        alt="Logo"
        class="page__header__logo"
        @click="$router.push('/')"
      />
      <nav class="page__header__nav">
        <RouterLink class="page__header__nav__link" to="/modelselect">Model Select </RouterLink>
        <RouterLink class="page__header__nav__link" to="/dataview">Data Viewer </RouterLink>
        <RouterLink class="page__header__nav__link" to="/training">Training </RouterLink>
        <RouterLink class="page__header__nav__link" to="/settings">Settings </RouterLink>
      </nav>
    </div>

    <RouterView v-if="$route.path !== '/'" />
    <div class="page__content" v-else>
      <div class="page__content__left" :class="marioAnimate ? '--animate' : ''">
        <img src="@/assets/mariojump.png" alt="" />
      </div>
      <div class="page__content__right" :class="textAnimate ? '--animate' : ''">
        <h1 class="page__content__right__title">Mario RL</h1>
        <div class="page__content__right__text">
          <p>
            Mario RL est un projet de fin d'étude réalisé par
            <a href="https://github.com/thecreeep/" target="_blank">TheCreeep</a>
          </p>
          <p>
            Le but de Mario RL est de pouvoir générer et entrainer des modèles d'IA pour le jeu
            Super Mario Bros. En utilisant l'algorithme de
            <a href="https://fr.wikipedia.org/wiki/Q-learning" target="_blank">Q-Learning</a>
          </p>
        </div>
      </div>
      <img src="@/assets/mariopipe.png" alt="" class="page__content__pipe" />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'
import 'vue3-toastify/dist/index.css'

const settingsStore = useSettingsStore()
settingsStore.loadSettings()
</script>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected: 'modelselect',
      marioAnimate: false,
      textAnimate: false
    }
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      setTimeout(() => {
        this.marioAnimate = true
      }, 300)

      setTimeout(() => {
        this.textAnimate = true
      }, 1000)
    }
  }
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
  min-height: calc(100vh - 1rem);
  padding: 1rem 1rem 0 1rem;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    margin-top: 2em;

    &__pipe{
      position:fixed;
      right: 17%;
      bottom: -25%;
      width:600px;
      z-index: 0;
    }

    &__left {
      position: fixed;
      left: 0;
      top: 10%;
      transform: translate(-100%, 50%);
      opacity: 0;
      transition: all 1s ease-in-out;

      img {
        height: 80vh;
      }

      &.--animate {
        opacity: 1;
        transform: translate(20%, 0);
      }
    }

    &__right {
      position: fixed;
      right: 0;
      top: 10%;
      transform: translate(-70%, 200%);
      opacity: 0;
      transition: all 0.8s ease;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 500px;
      gap: 1em;

      &__title {
        font-family: 'MarioMaker';
        font-weight: 500;
        font-size: 64px;
      }

      &__text {
        font-family: 'MarioMaker';
        font-weight: 500;
        font-size: 24px;
        margin-top: 2em;
        line-height: 1.5em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        a {
          text-decoration: underline;
          transition: all 0.2s ease-in-out;
          color: black;

          &:visited {
            color: black;
          }
        }
      }

      &.--animate {
        opacity: 1;
        right: 0;
        top: 30%;
        transform: translate(-70%, -30%);
      }
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;

    &__logo {
      width: 15%;
      cursor: pointer;
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
