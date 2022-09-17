import Vue from 'vue'

const mixins = {
  methods: {
    $breakpoint(payload) {
      return this.$vuetify.breakpoint[payload]
    },
  },
}

Vue.mixin(mixins)
