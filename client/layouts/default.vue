<template>
  <v-app id="inspire">
    <Navbar :links="links" />
    <v-main class="pt-0">
      <v-app class="">
        <Nuxt />
      </v-app>
    </v-main>
    <Footer :links="links" />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Home', link: '/' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Contact', link: '/contact' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
