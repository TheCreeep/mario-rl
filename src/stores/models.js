import { defineStore } from 'pinia'
import axios from 'axios'

export const useModelsStore = defineStore('modelsStore', {
  state: () => ({
    modelsPath: '',
    models: [],
    modelPerPage: 10,
  }),
  actions: {
    async getAllModels() {
      await axios.get(import.meta.env.VITE_API_BASE_URL + 'models').then(response => {
        this.models = response.data
      }) 
    }
  },
  getters: {
    pages: (state) => {
      let pages = []
      let numberOfPages = Math.ceil(state.models.length / state.modelPerPage)
      for (let i = 0; i < numberOfPages; i++) {
        pages.push({ "id": i, "page": state.models.slice(i * state.modelPerPage, (i + 1) * state.modelPerPage) })
      }
      return pages
    }
  }
})
