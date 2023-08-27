import { defineStore } from 'pinia'

export const useModelStore = defineStore('modelStore', {
  state: () => ({
    modelsPath: ''
  })

})
