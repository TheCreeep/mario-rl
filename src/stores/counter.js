import { defineStore } from 'pinia'

/* Do a store for file path  */
export const useFilePathStore = defineStore('filePathStore', {
  state: () => ({
    modelsPath: ''
  })
})
