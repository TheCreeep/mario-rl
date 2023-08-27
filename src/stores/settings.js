import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settingsStore', {
  state: () => ({
    settings: {
      modelsPath: 'D:\\MarioRL\\train\\',
      logPath: 'D:\\MarioRL\\logs\\',
      saveModelFrequency: 100_000,
      saveLogFrequency: 10_000,
      nbEnv: 8
    }
  }),
  actions: {
    saveSettings(settings) {
      this.settings = settings
    }
  }
})
