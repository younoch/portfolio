<template>
  <v-app class="" id="inspire">
    <v-main class="">
      <v-container class="">
        <v-row>
          <template v-for="n in 4">
            <v-col :key="n" class="mt-2" cols="12">
              <strong class="younoch">Category {{ n }}</strong>
              <v-btn color="secondary">Hedlsdf</v-btn>
            </v-col>

            <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>

<style lang="scss" scoped>

</style>
