<template>
  <div class="content">
    <h1 class="content__title">Paramètres</h1>
    <div class="content__inputs" @keypress.enter="saveSettings(store, settings)">
      <div class="content__inputs__item" v-for="input in inputs">
        <div class="content__inputs__item__input">
          <label :for="input.id">{{ input.name }}</label>
          <input
            :type="input.type"
            :name="input.id"
            v-model="settings[input.id]"
            :placeholder="store.settings[input.id]"
          />
        </div>
      </div>
    </div>
    <div class="content__save" @click="saveSettings(store, settings)">Sauvegarder</div>
  </div>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
const store = useSettingsStore()
</script>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      settings: {
        modelsPath: '',
        logPath: '',
        saveModelFrequency: '',
        saveLogFrequency: '',
        nbEnv: ''
      },
      inputs: {
        modelsPath: {
          type: 'text',
          name: "Chemin d'enregistrement des modèles",
          id: 'modelsPath'
        },
        logPath: {
          type: 'text',
          name: "Chemin d'enregistrement des logs",
          id: 'logPath'
        },
        saveModelFrequency: {
          type: 'number',
          name: "Fréquence d'enregistrement des modèles",
          id: 'saveModelFrequency'
        },
        saveLogFrequency: {
          type: 'number',
          name: "Fréquence d'enregistrement des logs",
          id: 'saveLogFrequency'
        },
        nbEnv: {
          type: 'number',
          name: "Nombre d'environnements",
          id: 'nbEnv'
        }
      }
    }
  },
  computed: {},
  methods: {
    saveSettings(store, settings) {
      const settingsToPush = {
        modelsPath: settings.modelsPath || store.settings.modelsPath,
        logPath: settings.logPath || store.settings.logPath,
        saveModelFrequency: settings.saveModelFrequency || store.settings.saveModelFrequency,
        saveLogFrequency: settings.saveLogFrequency || store.settings.saveLogFrequency,
        nbEnv: settings.nbEnv || store.settings.nbEnv
      }

      if(settings.modelsPath === '' && settings.logPath === '' && settings.saveModelFrequency === '' && settings.saveLogFrequency === '' && settings.nbEnv === '') return

      store.saveSettings(settingsToPush)

      this.settings = {
        modelsPath: '',
        logPath: '',
        saveModelFrequency: '',
        saveLogFrequency: '',
        nbEnv: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 2em;
  font-family: 'MarioMaker';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    font-size: 48px;
  }

  &__inputs {
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;

    &__item {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 4em;

      &__input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.4em;

        & > label {
          font-size: 16px;
        }

        input {
          appearance: none !important;
          width: 400px;
          height: 40px;
          border-radius: 1em;
          outline: 2px solid black;
          padding: 0 1em;
          font-size: 16px;
          font-family: 'MarioMaker';
        }
      }
    }
  }
  &__save {
    padding: 1em;
    background-color: lime;
    border-radius: 1em;
    outline: 3px solid black;
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.06);
    }
  }
}
</style>
