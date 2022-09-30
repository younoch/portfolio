<template>
  <v-container class="pt-14">
    <p class="text-h4 text-center">Experience</p>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submitExperience">
        <v-row>
          <v-col cols="4">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:10"
            >
              <v-text-field
                v-model="experience.organazationName"
                label="Organaization Name"
                :error-messages="errors"
                outlined
                dense
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col cols="3">
            <validation-provider
              v-slot="{ errors }"
              name="join"
              rules="required"
            >
              <v-text-field
                v-model="experience.date.join"
                type="date"
                :error-messages="errors"
                label="Joining Date"
                outlined
                dense
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col cols="3">
            <validation-provider
              v-slot="{ errors }"
              name="resign"
              rules="required"
            >
              <v-text-field
                v-model="experience.date.resign"
                label="Resign Date"
                type="date"
                outlined
                :error-messages="errors"
                dense
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col cols="2">
            <v-btn type="submit" :disabled="invalid">Submit</v-btn>
          </v-col>
        </v-row>
      </form>
    </validation-observer>
    <v-row>
      <v-col>Organaization Name</v-col>
      <v-col>Joining Date</v-col>
      <v-col>Resign Date</v-col>
      <v-col>Action</v-col>
    </v-row>
    <v-row v-for="(item, index) in experienceList" :key="index">
      <v-col>{{ item.organazationName }}</v-col>
      <v-col>{{ item?.date.join }}</v-col>
      <v-col>{{ item?.date.resign }}</v-col>
      <v-col>
        <v-btn @click="deleteExeperence(item._id)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- <pre>{{ experienceList }}</pre> -->
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
      experience: {
        date: {
          join: '',
          resign: '',
        },
      },
      experienceList: [],
    }
  },
  methods: {
    async getExperience() {
      const experiences = await this.$getData('experience')
      this.experienceList = experiences.data
    },
    async submitExperience() {
      const formData = new FormData()
      Object.keys(this.experience).forEach((key) =>
        formData.append(key, this.experience[key])
      )
      const respons = await this.$submitData('experience', this.experience)
      console.log(respons)
    },
    async deleteExeperence(id) {
      const cdb = await this.$deleteData(`experience/${id}`, 'Experience')

      console.log(cdb)
    },
  },
}
</script>
