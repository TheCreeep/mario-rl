<template>
  <main>
      <iframe src="http://127.0.0.1:5000/render_mario" scrolling="no" width="256" height="240"></iframe>
  </main>
</template>

<script>

export default {
  name: 'DataView',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}

</script>

<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  iframe {
    transform: scale(2) translate(0, 100px);
    border: 10px solid transparent;
    border-image-source: url('../assets/redBrick.png');
    border-image-slice: 100;
  }
}
</style>