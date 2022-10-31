<template>
  <v-app id="inspire">
    <keep-alive max="10">
    <Navbar :links="links" />
    </keep-alive>
    <v-main class="pt-0">
      <v-app class="">
        <Nuxt />
      </v-app>
    </v-main>
    <keep-alive max="10">
    <Footer :links="links" />
    </keep-alive>
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
