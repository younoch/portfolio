<template>
  <v-app id="inspire">
    <Navbar :links="links" />
    <v-main class="">
      <v-container class="">
        <Nuxt />
      </v-container>
    </v-main>
    <Footer :links="links" />
  </v-app>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  components: { Footer },
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
