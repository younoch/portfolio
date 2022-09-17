<template>
  <v-footer color="#3586ff">
    <div class="wave-container">
      <div id="wave1" class="wave"></div>
      <div id="wave2" class="wave"></div>
      <div id="wave3" class="wave"></div>
      <div id="wave4" class="wave"></div>
    </div>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="(link, idx) in links"
        :key="idx"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="pb-4 text-center white--text" cols="12">
        All right reserve Mohammad Younoch —
        {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  background: #3586ff;

  .wave {
    position: absolute;
    top: -70px;
    left: 0;
    height: 70px;
    width: 100%;
    background: url(@/assets/images/wave.png);
    background-size: 1000px 100px;
  }

  #wave1 {
    z-index: 900;
    opacity: 0.2;
    bottom: 0;
    animation: animistionWave 7s linear infinite;
  }
  #wave2 {
    z-index: 901;
    opacity: 0.2;
    bottom: 10px;
    animation: animistionWave2 6s linear infinite;
  }
  #wave3 {
    z-index: 902;
    opacity: 0.5;
    bottom: 15px;
    animation: animistionWave 5s linear infinite;
  }

  #wave4 {
    z-index: 903;
    opacity: 1;
    bottom: 20px;
    animation: animistionWave2 4s linear infinite;
  }

  @keyframes animistionWave {
    0% {
      background-position-x: 1000px;
    }
    100% {
      background-position-x: 0px;
    }
  }

  @keyframes animistionWave2 {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: 1000px;
    }
  }
}
</style>
