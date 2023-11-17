<template>
  <div class="content">
    <div class="content__gameplay" v-if="store.modelInUse != null">
      <h1>Actuellement en train de jouer avec le model suivant : {{ store.modelInUse.name }}</h1>
      <h2>{{ 'Epochs : ' + store.modelInUse.epoch }}</h2>
      <h2>{{ 'Learning rate : ' + store.modelInUse.lr }}</h2>
      <!-- <h2>{{ 'Batch size : ' + store.modelInUse.batch_size }}</h2> -->
      <!-- <h2>{{ 'Clip range : ' + store.modelInUse.clip_range }}</h2> -->
      <!-- <h2>{{ 'Steps : ' + store.modelInUse.steps }}</h2> -->
      <!-- <h2>{{ 'Seed : ' + store.modelInUse.seed }}</h2> -->

      <img
        :src="'http://127.0.0.1:5000/render_feed?model=' + store.modelInUse.name"
        width="768"
        height="240"
        alt=""
      />
    </div>
    <div class="content__nomodel" v-else>
      <div class="content__nomodel__title">Aucun modèle sélectionné</div>
      <div class="content__nomodel__subtitle">
        Veuillez sélectionnez un modèle <a @click="$router.push('/modelselect')">en cliquant ici</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModelsStore } from '@/stores/models'
const store = useModelsStore()
</script>
<script>
export default {
  name: 'DataView',
  components: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3em;

  &__gameplay {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'MarioMaker';

    img {
      transform: scale(1.5) translate(0, 100px);
      border: 10px solid transparent;
      /* border-image-source: url('../assets/redBrick.png');
    border-image-slice: 100; */
    }
  }

  &__nomodel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'MarioMaker';
    font-size: 48px;
    color: black;
    text-align: center;
    margin-top: 2em;

    &__title {
      font-size: 48px;
    }

    &__subtitle {
      font-size: 24px;
      margin-top: 1em;

      a {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
