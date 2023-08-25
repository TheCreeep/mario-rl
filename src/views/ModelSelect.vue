<template>
  <div class="content">
    <div class="content__select">
      <img class="content__select__hand" @click="scrollLeft()" src="../assets/leftarrow.png" />
      <div class="content__select__models">
        <div class="content__select__models__modelpage" v-for="page in pages">
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
                <div class="bottom__details__date">Learning Rate : {{ model.lr }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="content__select__hand" @click="scrollRight()" src="../assets/rightarrow.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelSelect',
  data() {
    return {
      models: [
        {
          name: 'Modèle 1',
          id: 1,
          lr: '0.0000147',
          epoch: 5192763
        },
        {
          name: 'Modèle 2',
          id: 2,
          lr: '0.0000327',
          epoch: 9922985
        },
        {
          name: 'Modèle 3',
          id: 3,
          lr: '0.0001259',
          epoch: 4667785
        },
        {
          name: 'Modèle 4',
          id: 4,
          lr: '0.0000113',
          epoch: 9492894
        },
        {
          name: 'Modèle 5',
          id: 5,
          lr: '0.0000110',
          epoch: 7855137
        },
        {
          name: 'Modèle 6',
          id: 6,
          lr: '0.0000112',
          epoch: 3152553
        },
        {
          name: 'Modèle 7',
          id: 7,
          lr: '0.0000180',
          epoch: 7536352
        },
        {
          name: 'Modèle 8',
          id: 8,
          lr: '0.0000106',
          epoch: 3211023
        },
        {
          name: 'Modèle 9',
          id: 9,
          lr: '0.0000301',
          epoch: 3123931
        },
        {
          name: 'Modèle 10',
          id: 10,
          lr: '0.0000260',
          epoch: 7134052
        },
        {
          name: 'Modèle 11',
          id: 11,
          lr: '0.0000467',
          epoch: 1216628
        },
        {
          name: 'Modèle 12',
          id: 12,
          lr: '0.0000107',
          epoch: 3904258
        },
        {
          name: 'Modèle 13',
          id: 13,
          lr: '0.0000166',
          epoch: 5922442
        },
        {
          name: 'Modèle 14',
          id: 14,
          lr: '0.0000234',
          epoch: 2992970
        },
        {
          name: 'Modèle 15',
          id: 15,
          lr: '0.0000291',
          epoch: 7625814
        },
        {
          name: 'Modèle 16',
          id: 16,
          lr: '0.0000159',
          epoch: 2042300
        },
        {
          name: 'Modèle 17',
          id: 17,
          lr: '0.0000360',
          epoch: 6736322
        },
        {
          name: 'Modèle 18',
          id: 18,
          lr: '0.0000120',
          epoch: 7177033
        },
        {
          name: 'Modèle 19',
          id: 19,
          lr: '0.0001057',
          epoch: 7816931
        },
        {
          name: 'Modèle 20',
          id: 20,
          lr: '0.0000416',
          epoch: 4583044
        },
        {
          name: 'Modèle 21',
          id: 21,
          lr: '0.0000124',
          epoch: 3774617
        },
        {
          name: 'Modèle 22',
          id: 22,
          lr: '0.0000165',
          epoch: 8899743
        },
        {
          name: 'Modèle 23',
          id: 23,
          lr: '0.0000115',
          epoch: 1833690
        },
        {
          name: 'Modèle 24',
          id: 24,
          lr: '0.0000446',
          epoch: 3426494
        },
        {
          name: 'Modèle 25',
          id: 25,
          lr: '0.0000101',
          epoch: 3636617
        },
        {
          name: 'Modèle 26',
          id: 26,
          lr: '0.0000188',
          epoch: 3734477
        },
        {
          name: 'Modèle 27',
          id: 27,
          lr: '0.0000147',
          epoch: 9798839
        }
      ],
      modelPerPage: 10
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.models.length / this.modelPerPage)
    },
    pages() {
      let pages = []
      for (let i = 0; i < this.numberOfPages; i++) {
        pages.push(this.models.slice(i * this.modelPerPage, (i + 1) * this.modelPerPage))
      }
      return pages
    }
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

<style lang="scss">
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
