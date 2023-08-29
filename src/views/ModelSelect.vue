<template>
  <div class="content">
    <div class="content__select">
      <img class="content__select__hand" @click="scrollLeft()" src="../assets/leftarrow.png" />
      <div class="content__select__models">
        <div class="content__select__models__modelpage" v-for="page in store.pages">
          <div
            class="content__select__models__modelpage__model"
            v-for="model in page"
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
                <div class="bottom__details__date">Date : {{ dayjs(model.date).format("DD/MM/YY hh:mm:ss") }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="content__select__hand" @click="scrollRight()" src="../assets/rightarrow.png" />
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';
import { useModelsStore } from '@/stores/models'
const store = useModelsStore()
store.getAllModels()
</script>

<script>
export default {
  name: 'ModelSelect',
  data() {
    return {
    }
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    scrollLeft() {
      document.querySelector('.content__select__models').scrollBy({
        left: -1000,
        behavior: 'smooth'
      })
    },
    scrollRight() {
      document.querySelector('.content__select__models').scrollBy({
        left: 1000,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$modelPerPage: 10;
$rows: 2;

.content {
  margin-top: 2em;

  &__select {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4em;

    &__hand {
      cursor: pointer;
      width: 100px;
      transition:all 0.3s ease-in-out;
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
