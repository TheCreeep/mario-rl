<template>
  <div class="content">
    <div class="content__select" v-if="!store.loading">
      <img class="content__select__hand" @click="scrollLeft(store)" src="../assets/leftarrow.png" />
      <div class="content__select__models">
        <div class="content__select__models__modelpage" v-for="page in store.pages" :key="page.id">
          <div
            class="content__select__models__modelpage__model"
            :class="
              (selectedModel === model ? '--selected' : '',
              modelPreview === model ? '--preview' : '')
            "
            v-for="model in page.page"
            :key="model.id"
            @click="previewModel(model)"
          >
            <div class="delete" @click.stop="deleteModel(store, model)">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </div>
            <div class="top">
              {{ model.name }}
            </div>
            <div class="bottom">
              <img class="bottom__bricks" src="../assets/blueBrickLine.png" alt="" />
              <div class="bottom__details">
                <div class="bottom__details__name">
                  Epoch : {{ (model.epoch / 1_000_000).toFixed(2) + 'M' }}
                </div>
                <div class="bottom__details__date">
                  Date : {{ dayjs(model.date).format('DD/MM/YY hh:mm:ss') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="content__select__hand"
        @click="scrollRight(store)"
        src="../assets/rightarrow.png"
      />
    </div>
    <div class="content__loading" v-else>
      <img src="@/assets/loading.gif" alt="loading" />
      <h1 class="content__loading__title">Chargement des modèles...</h1>
    </div>
    <div class="content__pagination" v-if="!store.loading">
      <div
        class="content__pagination__number --extra"
        :class="currentPage === 0 ? '--selected' : ''"
        @click="goToPage(store, 0 - currentPage)"
      >
        {{ 1 }}
      </div>
      <div
        class="content__pagination__number"
        :class="page === currentPage ? '--selected' : ''"
        v-for="page in store.pages
          /* Isolate first and last */
          .slice(1, -1)
          .map((page) => page.id)
          .slice(
            currentPage <= 4
              ? 0
              : currentPage >= store.pages.length - 5
              ? currentPage - (7 - (store.pages.length - currentPage))
              : currentPage - 3,
            currentPage <= 4
              ? currentPage + (5 - currentPage)
              : currentPage >= store.pages.length - 5
              ? store.pages.length - 1
              : currentPage + 2
          )"
        :key="page"
        @click="goToPage(store, page - currentPage)"
      >
        {{ page + 1 }}
      </div>
      <div
        class="content__pagination__number --extra"
        :class="currentPage === store.pages.length - 1 ? '--selected' : ''"
        @click="goToPage(store, store.pages.length - 1 - currentPage)"
      >
        {{ store.pages.length }}
      </div>
    </div>
    <div class="content__selected-model" v-if="modelPreview">
      <div class="content__selected-model__details">
        <div class="content__selected-model__details__name">Nom : {{ modelPreview?.name }}</div>
        <div class="content__selected-model__details__lr">
          Learning Rate : {{ modelPreview?.lr }}
        </div>
        <div class="content__selected-model__details__epoch">
          Nombre d'Epoch : {{ modelPreview?.epoch }}
        </div>
        <div class="content__selected-model__details__date">
          Date d'enregistrement : {{ dayjs(modelPreview?.date).format('DD/MM/YY hh:mm:ss') }}
        </div>
      </div>
      <div class="content__selected-model__used" v-if="modelPreview === selectedModel">
        Modèle selectionné
      </div>
      <div class="content__selected-model__buttons" v-else>
        <div class="content__selected-model__buttons__use" @click="useModel(store, modelPreview)">
          Utiliser ce modèle
        </div>
        <div
          class="content__selected-model__buttons__use"
          @click="useModelAndPreview(store, modelPreview)"
        >
          Utiliser et visualiser ce modèle
        </div>
      </div>
    </div>
    <div class="content__nomodel" v-else-if="!store.loading">
      Cliquez sur un modèle pour voir les détails
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import { useModelsStore } from '@/stores/models'

const store = useModelsStore()
store.getAllModels()
</script>

<script>
export default {
  name: 'ModelSelect',
  data() {
    return {
      currentPage: 0,
      modelPreview: null,
      selectedModel: null
    }
  },
  methods: {
    goToPage(store, pagenb) {
      if (pagenb < 0) {
        this.scrollLeft(store, -pagenb)
      } else {
        this.scrollRight(store, pagenb)
      }
    },
    scrollLeft(store, page = 1) {
      if (this.currentPage !== 0) {
        this.currentPage -= page
        document.querySelector('.content__select__models').scrollBy({
          left: -2000 * page,
          behavior: 'smooth'
        })
      }
    },
    scrollRight(store, page = 1) {
      if (this.currentPage !== store.pages.length - 1) {
        this.currentPage += page
        document.querySelector('.content__select__models').scrollBy({
          left: 2000 * page,
          behavior: 'smooth'
        })
      }
    },
    previewModel(model) {
      this.modelPreview = model
    },
    useModel(store, model) {
      this.selectedModel = model
      store.modelInUse = model
    },
    useModelAndPreview(store, model) {
      this.selectedModel = model
      store.modelInUse = model

      this.$router.push('/dataview')
    },
    deleteModel(store, model) {
      if (model === this.modelPreview) this.modelPreview = null
      store.deleteModel(model)
    }
  }
}
</script>

<style lang="scss" scoped>
$modelPerPage: 10;
$rows: 2;

.content {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__nomodel {
    margin-top: 3em;
    font-family: 'MarioMaker';
    font-size: 32px;
  }

  &__selected-model {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4em;
    margin-top: 2em;

    &__details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.5em;
      font-family: 'MarioMaker';
      outline: white 4px solid;
      font-size: 20px;
      color: white;
      background: #806800;
      padding: 1em;
      border-radius: 1em;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1em;

      &__use {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        font-family: 'MarioMaker';
        font-size: 20px;
        color: white;
        background: #806800;
        padding: 1em;
        border-radius: 1em;
        outline: white 4px solid;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          outline: grey 4px solid;
          transform: scale(1.05);
        }
      }
    }
    &__used {
      font-family: 'MarioMaker';
      font-size: 32px;
      color: black;
      user-select: none;
    }
  }

  &__loading {
    margin-top: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;

    &__title {
      font-family: 'MarioMaker';
      font-size: 32px;
    }
  }

  &__pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    margin-top: 1em;

    &__number {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'MarioMaker';
      outline: 2px solid black;
      text-align: center;
      width: 25px;
      height: 25px;
      padding: 0.2em;
      border-radius: 1em;
      cursor: pointer;
      user-select: none;
      transition:
        all 0.3s ease-in-out,
        outline 0.3s ease-in-out 500ms,
        color 0.3s ease-in-out 500ms,
        background-color 0.3s ease-in-out 500ms;

      &.--extra {
        width: 35px;
        height: 35px;
        font-size: 20px;
      }

      &.--selected {
        color: white;
        outline: 2px solid white;
        background-color: #806800;
      }

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 6px 0 #00000055;
      }
    }
  }

  &__select {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4em;

    &__hand {
      cursor: pointer;
      width: 100px;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.08);
      }
    }

    &__models {
      display: flex;
      max-width: calc(
        230px * ($modelPerPage / $rows) + (3em * (($modelPerPage / $rows) - 1)) +
          (3px * 2 * ($modelPerPage / $rows))
      );
      align-items: flex-start;
      justify-content: flex-start;
      gap: calc(3em * ($modelPerPage));
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        display: none;
      }

      &__modelpage {
        display: flex;
        scroll-snap-align: center;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        gap: 3em;
        height: 530px;
        min-width: calc(
          230px * ($modelPerPage / $rows) + (3em * (($modelPerPage / $rows) - 1)) +
            (3px * 2 * ($modelPerPage / $rows))
        );

        &__model {
          display: flex;
          flex-direction: column;
          width: 230px;
          max-height: 230px;
          border: 3px solid black;
          user-select: none;
          cursor: pointer;
          position: relative;

          .delete {
            position: absolute;
            bottom: 3px;
            right: 3px;
            background: #e02020;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            transition: all 0.3s ease-in-out;
            svg {
              fill: white;
              transition: all 0.3s ease-in-out;
            }

            &:hover {
              bottom: 0.5px;
              right: 0.5px;
              width: 50px;
              height: 50px;

              svg {
                width: calc(14px * 1.2);
                height: calc(16px * 1.2);
              }
            }
          }

          &.--preview {
            border: 3px solid #ddd;
            outline: 3px solid #ddd;
          }

          &.--selected {
            border: 3px solid red;
            outline: 3px solid red;
          }

          .top {
            display: flex;
            background-image: url('@/assets/mariolevel.png');
            background-size: cover;
            background-position: center;

            padding: 1.5em 0.5em;
            font-family: 'MarioMaker';
            color: white;
            font-size: 20px;
            height: 160px;
          }

          .bottom {
            background: black;
            max-height: 70px;

            &__details {
              display: flex;
              flex-direction: column;
              padding: 1em;
              font-family: 'MarioMaker';
              color: white;
              font-size: 10px;
              gap: 0.5em;
            }
          }
        }
      }
    }
  }
}
</style>
