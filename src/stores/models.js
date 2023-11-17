import { defineStore } from 'pinia'
import axios from 'axios'
import { toast } from 'vue3-toastify'

export const useModelsStore = defineStore('modelsStore', {
  state: () => ({
    modelsPath: '',
    models: [],
    modelPerPage: 10,
    loading: false,
    modelInUse: null,
    isTraining: false
  }),
  actions: {
    async getAllModels() {
      this.loading = true
      await axios.get(import.meta.env.VITE_API_BASE_URL + 'models').then((response) => {
        this.models = response.data
        this.loading = false
      })
    },
    async deleteModel(model) {
      await axios
        .delete(import.meta.env.VITE_API_BASE_URL + 'models?delete_model_id=' + model.id)
        .then((response) => {
          this.models = this.models.filter((item) => item.id !== model.id)
          if (response.data.code == 200) {
            toast.success(response.data.message, {
              position: 'bottom-right',
              autoClose: 3000
            })
          }
          if (this.modelInUse && this.modelInUse.id === model.id) {
            this.modelInUse = null
          }
        })
        .catch((error) => {
          toast.error('Erreur : Suppression du modèle impossible, veuillez réessayer. ', {
            position: 'bottom-right',
            theme: 'dark'
          })
        })
    },
    async trainModel(modelParams) {
      this.isTraining = true
      toast.success('Starting training...', {
        position: 'bottom-right',
        autoClose: 3000
      })
      try {
        const response = await axios.post(import.meta.env.VITE_API_BASE_URL + 'models', modelParams)
        console.log(response.data)
        if (response.data.code == 200) {
          toast.success(response.data.message, {
            position: 'bottom-right',
            autoClose: 3000
          })
          this.isTraining = false
        }
      } catch (error) {
        toast.error('Erreur : Entrainement du modèle impossible. Veuillez réessayer. ', {
          position: 'bottom-right',
          theme: 'dark'
        })
      }
    }
  },
  getters: {
    pages: (state) => {
      let pages = []
      let numberOfPages = Math.ceil(state.models.length / state.modelPerPage)
      for (let i = 0; i < numberOfPages; i++) {
        pages.push({
          id: i,
          page: state.models.slice(i * state.modelPerPage, (i + 1) * state.modelPerPage)
        })
      }
      return pages
    }
  }
})
