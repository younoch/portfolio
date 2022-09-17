<template>
  <v-app-bar
    app
    :color="scrollYPosition ? 'main' : 'transparent'"
    :elevation="scrollYPosition ? 5 : 0"
    dark
  >
    <!-- <v-avatar v-if="$breakpoint('smAndDown')" size="32"> </v-avatar> -->
    <v-chip
      color="transparent"
      label
      draggable
      large
      class="pr-8 text-uppercase"
      ><v-icon class="mr-4"> mdi-account-card </v-icon> younoch.com</v-chip
    >

    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab v-for="(link, idx) in links" :key="idx" :to="link.link">
        {{ link.name }}
      </v-tab>
    </v-tabs>
    <v-avatar
      class="hidden-sm-and-down"
      color="grey darken-1 shrink"
      size="32"
    ></v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      scrollYPosition: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollYPosition = window.scrollY > 96
    },
  },
}
</script>

<style></style>
