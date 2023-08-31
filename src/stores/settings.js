import axios from 'axios'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

const settingsRoute = 'http://localhost:5000/api/settings'

export const useSettingsStore = defineStore('settingsStore', {
  state: () => ({
    settings: {
      modelsPath: '',
      logPath: '',
      saveModelFrequency: '',
      nbEnv: ''
    }
  }),
  actions: {
    async loadSettings() {
      axios
        .get(settingsRoute)
        .then((response) => {
          if (response.data.code == 200) {
            this.settings = response.data.settings
          }
        })
        .catch((error) => {
          toast.error('Erreur : Récupération des paramètres impossible, veuillez réessayer. ', {
            position: 'bottom-right',
            theme: 'dark'
          })
        })
    },
    async saveSettings(settings) {
      axios
        .post(settingsRoute, settings)
        .then((response) => {
          this.settings = settings
          if (response.data.code == 200) {
            toast.success(response.data.message, {
              position: 'bottom-right',
              autoClose: 3000
            })
          }
        })
        .catch((error) => {
          toast.error('Erreur : Sauvegarde des paramètres impossible, veuillez réessayer. ', {
            position: 'bottom-right',
            theme: 'dark'
          })
        })
    }
  }
})
