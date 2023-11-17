<template>
  <div class="content">
    <div class="tabs">
      <button
        class="tabs__button"
        :class="activeTab === 'newModel' ? '--active' : ''"
        @click="activeTab = 'newModel'"
      >
        New Model
      </button>
      <button
        class="tabs__button"
        :class="activeTab === 'trainModel' ? '--active' : ''"
        @click="activeTab = 'trainModel'"
      >
        Train Model
      </button>
    </div>

    <div v-if="isNewTraining && activeTab === 'newModel'">ici ca train</div>
    <div v-else-if="!isNewTraining && activeTab === 'newModel'" class="new-model-tab">
      <h1>Create a New Model</h1>
      <div class="new-model-tab__inputs">
        <div class="new-model-tab__inputs__item" v-for="input in inputs">
          <label :for="input.id">{{ input.name }}</label>
          <input
            :type="input.type"
            :name="input.id"
            :placeholder="modelSettingsValue[input.id]"
            :step="input.step"
            min="0"
            v-model="modelSettingsValue[input.id]"
          />
        </div>
      </div>
      <div class="new-model-tab__save" @click="sendToTrain(store)">Send for Training !</div>
    </div>

    <div v-if="isExistingTraining && activeTab === 'trainModel'">ici ca train</div>
    <div v-else-if="!isExistingTraining && activeTab === 'trainModel'" class="train-model-tab">
      Coming soon...
    </div>
  </div>
</template>

<script setup>
import { useModelsStore } from '@/stores/models'
const store = useModelsStore()
</script>
<script>
export default {
  name: 'Training',
  data() {
    return {
      activeTab: 'newModel',
      isNewTraining: false,
      isExistingTraining: false,
      inputs: {
        learning_rate: {
          type: 'number',
          name: 'learning_rate',
          id: 'learningRate',
          step: '0.000001'
        },
        n_epochs: {
          type: 'number',
          name: 'n_epochs',
          id: 'nEpochs',
          step: '100'
        },
        n_steps: {
          type: 'number',
          name: 'n_steps',
          id: 'nSteps',
          step: '100'
        },
        clip_range: {
          type: 'number',
          name: 'clip_range',
          id: 'clipRange',
          step: '0.1'
        },
        batch_size: {
          type: 'number',
          name: 'batch_size',
          id: 'batchSize',
          step: '64'
        },
        seed: {
          type: 'number',
          name: 'seed',
          id: 'seed',
          step: '1'
        }
      },
      modelSettingsValue: {
        learningRate: 0.000001,
        nEpochs: 1000,
        nSteps: 1000,
        clipRange: 0.2,
        batchSize: 64,
        seed: 0
      }
    }
  },
  methods: {
    sendToTrain(store) {
      const params = {
        learningRate: this.modelSettingsValue.learningRate,
        nEpochs: this.modelSettingsValue.nEpochs,
        nSteps: this.modelSettingsValue.nSteps,
        clipRange: this.modelSettingsValue.clipRange,
        batchSize: this.modelSettingsValue.batchSize,
        seed: this.modelSettingsValue.seed
      }

      store.trainModel(params)
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  .tabs {
    display: flex;
    gap: 3em;
    padding: 0.2em;
    border-bottom: 1px solid #333;
    .tabs__button {
      appearance: none;
      border: none;
      background: transparent;
      color: #333;
      font-size: 1.5em;
      font-family: 'MarioMaker';
      cursor: pointer;

      &.--active {
        border-bottom: #333 2px solid;
      }
    }
  }

  .new-model-tab {
    font-family: 'MarioMaker';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    margin-top: 2em;

    h1 {
      font-size: 2em;
      margin-bottom: 1em;
      color: #333;
    }

    &__inputs {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: center;
      max-width: 600px;
      gap: 2em;

      &__item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8em;

        & > label {
          font-size: 16px;
        }

        input {
          appearance: none !important;
          width: 200px;
          height: 40px;
          border-radius: 1em;
          outline: 2px solid black;
          padding: 0 1em;
          font-size: 16px;
          font-family: 'MarioMaker';
          &::placeholder {
            padding-left: 0.01em;
          }
        }
      }
    }

    &__save {
      padding: 1em;
      background-color: lime;
      border-radius: 1em;
      outline: 3px solid black;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.06);
      }
    }
  }

  .train-model-tab {
    font-family: 'MarioMaker';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    margin-top: 2em;
    font-size: 3em;
    color:#333
  }
}
</style>
