<template>
  <v-container class="pt-14">
    <p class="text-h4 text-center">Experience</p>
    <v-row>
      <v-col cols="4">
        <v-text-field
          v-model="experience.organazationName"
          label="Organaization Name"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="experience.joiningDate"
          label="Joining Date"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="experience.resignDate"
          label="Resign Date"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>Organaization Name</v-col>
      <v-col>Joining Date</v-col>
      <v-col>Resign Date</v-col>
    </v-row>
    <v-row v-for="(item, index) in experienceList" :key="index">
      <v-col>{{ item.organazationName }}</v-col>
      <v-col>{{ item.joiningDate }}</v-col>
      <v-col>{{ item.resignDate }}</v-col>
    </v-row>

    <pre>{{ experienceList }}</pre>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  fetch() {
    this.getExperience()
  },

  data() {
    return {
      experience: {},
      experienceList: [],
    }
  },
  methods: {
    async getExperience() {
      const experiences = await this.$getData('experience')
      this.experienceList = experiences.data
    },
  },
}
</script>
