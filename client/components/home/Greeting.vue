<template>
  <v-card color="section-bg pt-12">
    <v-container class="pb-0">
      <v-row class="py-0" dense>
        <v-col cols="7">
          <p class="white--text mb-0">Hi There!</p>
          <p class="white--text"><span>I'm</span></p>
          <v-hover v-slot="{ hover }">
            <p
              transition="fade-transition"
              class="white--text montserrat pointer text-h3 transition-fast-in-fast-out"
            >
              <span v-if="hover" class="font-weight-bold">
                MEVN Stack developer
              </span>
              <span v-else class="font-weight-bold"> MOHAMMAD YOUNOCH </span>
            </p>
          </v-hover>
        </v-col>
        <v-col class="pa-0" cols="5">
          <v-img max-height="100vh" src="/images/image2.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped>
.section-bg {
  background: url('/images/bg.webp');
  background-size: contain;
}
</style>
