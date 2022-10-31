<template>
  <div>
    <v-expand-transition>
      <Greeting
        v-show="scrollYPosition < 50"
        class="transition-fast-in-fast-out"
      />
      <Experience
        v-show="scrollYPosition > 50"
        class="transition-fast-in-fast-out"
      />
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    scrollYPosition: 0,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.scrollYPosition = window.scrollY
    },
  },
}
</script>

<style lang="scss" scoped></style>
