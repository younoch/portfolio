<template>
  <div>
    <v-card color="section-bg pt-12">
      <v-container class="pb-0">
        <v-row class="py-0" dense align="center">
          <v-col cols="7">
            <p>Hi There!</p>
            <p><span>I'm</span></p>
            <p class="white-text montserrat text-h3">
              <span class="font-weight-bold indigo--text text--darken-4">MOHAMMAD YOUNOCH</span>
            </p>
          </v-col>
          <v-col class="pa-0" cols="5">
            <v-img
              max-height="100vh"
              :src="require('@/assets/images/image2.png')"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.section-bg {
  background: url('~/assets/images/bg.webp');
  background-size: contain;
}
</style>
