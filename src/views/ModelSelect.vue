<template>
  <div class="content">
    <div class="content__select" v-if="!store.loading">
      <img class="content__select__hand" @click="scrollLeft(store)" src="../assets/leftarrow.png" />
      <div class="content__select__models">
        <div class="content__select__models__modelpage" v-for="page in store.pages" :key="page.id">
          <div
            class="content__select__models__modelpage__model"
            v-for="model in page.page"
            :key="model.id"
          >
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
      currentPage: 0
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
        color 0.3s ease-in-out 500ms;

      &.--extra {
        width: 35px;
        height: 35px;
        font-size: 20px;
      }

      &.--selected {
        color: white;
        outline: 2px solid white;
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
        align-items: flex-start;
        justify-content: flex-start;
        gap: 3em;
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

          .top {
            display: flex;
            background-image: url('../assets/mariolevel.png');
            background-size: cover;
            background-position: center;

            padding: 0.7em;
            font-family: 'MarioMaker';
            color: white;
            font-size: 32px;
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
