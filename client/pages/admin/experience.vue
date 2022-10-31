<template>
  <v-container background-color="red lighten-5" class="pt-14">
    <p class="text-h4 text-center">Experience</p>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submitExperience">
        <v-row>
          <v-col cols="4">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required"
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
          <v-col cols="3" data-app>
            <validation-provider
              v-slot="{ errors }"
              name="join"
              rules="required"
            >
              <v-menu
                v-model="joinMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="inputJoinDate"
                    :error-messages="errors"
                    label="Join Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="inputJoinDate"
                  @input="joinMenu = false"
                ></v-date-picker>
              </v-menu>
            </validation-provider>
          </v-col>
          <v-col cols="3">
            <validation-provider
              v-slot="{ errors }"
              name="resign"
              rules="required"
            >
              <v-menu
                v-model="resignMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="inputResignDate"
                    :error-messages="errors"
                    label="Resign Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="inputResignDate"
                  @input="resignMenu = false"
                ></v-date-picker>
              </v-menu>
            </validation-provider>
          </v-col>
          <!-- <v-col cols="12">
            <Editor v-model="experience.description" />
          </v-col> -->
          <v-col cols="2">
            <v-btn color="main" type="submit" :disabled="invalid">Submit</v-btn>
          </v-col>
        </v-row>
      </form>
    </validation-observer>
    <v-chip color=" blue" large>Exprerience List</v-chip>
    <template v-if="experienceList && experienceList.length">
      <v-tabs v-model="tab" background-color="deep-purple accent-4">
        <v-tab v-for="(item, index) in experienceList" :key="index">{{
          item.organazationName
        }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, idx) in experienceList" :key="idx">
          <v-card color="basil" flat>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="updateExperence(item._id)">
                <v-row no-gutters>
                  <v-col cols="5">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Name"
                      rules="required"
                    >
                      <pre>{{ `../../../server/${item.logo}` }}</pre>
                      <!-- <pre>{{ item }}</pre> -->
                      <v-avatar>
                        <!-- <v-img
                          :src="require(`../../../server/${item.logo}`) || ''"
                        ></v-img> -->
                        <v-img
                          v-if="item && item.logo"
                          :src="
                            require(`../../../server/uploads/2022-10-31T17:47:04.259Z_Screenshot from 2022-08-29 22-44-40.png`) ||
                            ''
                          "
                        ></v-img>
                      </v-avatar>
                      <v-text-field
                        v-model="item.organazationName"
                        label="Organaization Name"
                        :error-messages="errors"
                        outlined
                        dense
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                  <v-col cols="4">
                    <!-- <v-file-input
                      v-model="item.logo"
                      accept="image/*"
                      label="File input"
                      outlined
                      dense
                    ></v-file-input> -->
                    <input
                      id="logo"
                      ref="logo"
                      type="file"
                      name="logo"
                      accept="image/*"
                      @change="updateImage($event)"
                    />
                  </v-col>

                  <v-col cols="3">
                    <v-card-actions class="d-flex mt-11">
                      <v-btn
                        dark
                        color="primary"
                        type="submit"
                        :disabled="invalid"
                        style="width: 48%"
                      >
                        Update
                      </v-btn>
                      <v-btn
                        dark
                        style="width: 48%"
                        color="warning"
                        @click="deleteExeperence(item._id)"
                      >
                        <v-icon>mdi-trash-can-outline</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                  <v-col v-if="item && item.date && item.date.resign" cols="6">
                    <validation-provider
                      v-slot="{ errors }"
                      name="resign"
                      rules="required"
                    >
                      <v-menu
                        v-model="listJoinMenu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="item.date.join"
                            :error-messages="errors"
                            label="Join Date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="item.date.join"
                          @input="listJoinMenu = false"
                        ></v-date-picker>
                      </v-menu>
                    </validation-provider>
                  </v-col>
                  <v-col v-if="item && item.date && item.date.resign" cols="6">
                    <validation-provider
                      v-slot="{ errors }"
                      name="resign"
                      rules="required"
                    >
                      <v-menu
                        v-model="listResignMenu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="item.date.resign"
                            :error-messages="errors"
                            label="Resign Date"
                            name="resign_date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="item.date.resign"
                          @input="listResignMenu = false"
                        ></v-date-picker>
                      </v-menu>
                    </validation-provider>
                  </v-col>
                  <v-col class="py-0">
                    <div class="d-flex">
                      <span>Responsibility Description</span>
                      <v-btn icon @click="addDescriptionItem(item._id)">
                        <v-icon>mdi-plus-thick</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                  <template v-for="(ex, i) in item.description">
                    <v-col :key="i" class="py-0" cols="11">
                      <v-text-field
                        v-model="item.description[i]"
                        name="description"
                        outlined
                        dense
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col :key="i + 'd'" class="py-0" cols="1">
                      <v-btn>
                        <v-icon @click="deleteDesciptionItem(idx, i)"
                          >mdi-close
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </template>
                </v-row>
              </form>
            </validation-observer>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </template>
    <template v-else> No Experience Here </template>

    <!-- <pre>{{ experienceList }}</pre> -->
  </v-container>
</template>

<script>
export default {
  layout: 'admin',

  data() {
    return {
      experience: {
        date: {},
      },
      inputJoinDate: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      joinMenu: false,
      inputResignDate: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      resignMenu: false,
      experienceList: [],
      tab: '',
      listResignMenu: false,
      listJoinMenu: false,
      imageFile: '',
      previewImage: '',
    }
  },
  created() {
    this.getExperience()
  },
  methods: {
    async getExperience() {
      const experiences = await this.$getData('experience')
      this.experienceList = experiences.data
      this.experienceList.forEach((el) => {
        el.date.resign = el.date.resign.substr(0, 10)
        el.date.join = el.date.join.substr(0, 10)
      })
    },
    async submitExperience() {
      // const formData = new FormData()
      // Object.keys(this.experience).forEach((key) =>
      //   formData.append(key, this.experience[key])
      // )
      this.experience.description = []
      this.experience.logo = ''
      this.experience.date.join = this.inputJoinDate
      this.experience.date.resign = this.inputResignDate
      const respons = await this.$submitData('experience', this.experience)
      console.log(respons.data)
      if (respons) {
        this.experienceList.push(respons.data)
        this.experience = {}
      }
    },
    async deleteExeperence(id) {
      const cdb = await this.$deleteData(`experience/${id}`, 'experience')
      this.experienceList = this.experienceList.filter((el) => el._id !== id)
      console.log(this.experienceList)
    },
    addDescriptionItem(id) {
      const selectedIndex = this.experienceList.findIndex((el) => el._id === id)
      this.experienceList[selectedIndex].description.push('')
      // this.experienceList[selectedIndex].date.join.push(
      //   this.experienceList[selectedIndex].date.join.substr(0, 10)
      // )
      // this.experienceList[selectedIndex].date.resign.push(
      //   this.experienceList[selectedIndex].date.resign.substr(0, 10)
      // )
    },
    async updateExperence(id) {
      const selectedIndex = this.experienceList.findIndex((el) => el._id === id)
      this.experienceList[selectedIndex].logo = this.imageFile
      const formData = new FormData()
      for (const key in this.experienceList[selectedIndex]) {
        formData.append(key, this.experienceList[selectedIndex][key])
      }
      const response = await this.$updateData('experience/' + id, formData)
    },
    deleteDesciptionItem(experienceIdx, descriptionIdx) {
      this.experienceList[experienceIdx].description.splice(descriptionIdx, 1)
    },
    updateImage(event) {
      this.imageFile = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(this.imageFile)
      reader.onload = () => {
        this.previewImage = URL.createObjectURL(this.imageFile)
      }
    },
  },
}
</script>
