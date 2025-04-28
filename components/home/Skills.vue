<template>
  <section class="bg-gray-50 py-2 sm:py-4">
  <div class="max-w-5xl mx-auto relative w-full">
    <!-- Background circle - hidden on mobile, shown from sm breakpoint -->
    <div class="hidden sm:block bg-sky-50 rounded-full w-80 h-80 -ml-40 -mb-40 left-0 bottom-0 absolute -z-10"></div>
    
    <div class="mb-6 sm:mb-8 text-center relative z-10">
      <span class="text-sky-700 inline-block text-base sm:text-lg font-semibold leading-6 sm:leading-7 mb-2 sm:mb-3">
        My Expertise
      </span>
      <h2 class="text-gray-900 text-2xl sm:text-4xl font-bold tracking-tight leading-8 sm:leading-[45px] mb-3 sm:mb-4">
        Tech <span class="text-sky-800">Toolkit</span>
      </h2>
      <p class="text-gray-600 text-base sm:text-lg leading-6 sm:leading-7 mb-6 sm:mb-8 max-w-full sm:max-w-[90%] mx-auto">
        The technologies and tools I use to build powerful, scalable,
        and efficient applications
      </p>
    </div>
    
    <UTabs :items="cetegorizedSkills" class="mb-6 sm:mb-8">
      <template #header="{ item }">
        <div class="flex items-center">
          <div class="text-sky-900 text-base sm:text-lg leading-6 sm:leading-7">
            <UIcon :name="item.icon" />
          </div>
          <span class="font-medium text-xs sm:text-sm leading-5 ml-2">{{ item.label }} {{ item.skills.length }}</span>
        </div>
      </template>
      <template #item="{ item }">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
          <div
            v-for="(skill, index) in item.skills"
            :key="index"
            class="transition-all duration-150 ease-in-out shadow-sm p-2 bg-white border border-gray-200 rounded-lg"
          >
            <div class="flex items-center">
              <div class="text-sky-900 text-base sm:text-lg leading-6 sm:leading-7">
                <UIcon :name="skill.icon" />
              </div>
              <span class="font-medium text-xs sm:text-sm leading-5 ml-2">{{ skill.label }}</span>
            </div>
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</section>
</template>

<script setup lang="ts">

const { cetegorizedSkills } = useProjectStore();

</script>