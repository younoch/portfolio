<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(li, idx) in menuList" :key="idx" :to="li.link">
            <v-list-item-icon>
              <v-icon>{{ li.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ li.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: undefined,
      menuList: [
        {
          icon: 'mdi-home',
          name: 'Home',
          link: '/admin',
        },
        {
          icon: 'mdi-account',
          name: 'Experience',
          link: '/admin/experience',
        },
      ],
    }
  },
}
</script>
