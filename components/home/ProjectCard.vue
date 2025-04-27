<template>
  <div class="flex flex-col sm:flex-row shadow-md bg-white border border-gray-100 rounded-xl overflow-hidden h-auto sm:h-[400px]">
  <!-- Image Section -->
  <div class="w-full sm:w-2/5 relative bg-gray-50 min-h-[200px] sm:min-h-0">
    <div class="h-full flex justify-center items-center md:p-4">
      <img
        :src="project.thumbnail || project.preview"
        :alt="project.name"
        class="object-contain max-w-full max-h-[180px] sm:max-h-full h-auto"
      />
    </div>
    
    <!-- Tech Stack Tags -->
    <div class="gap-x-0.5 gap-y-1 md:gap-2 flex-wrap flex left-2 right-2 bottom-2 sm:left-4 sm:bottom-4 absolute justify-center sm:justify-start">
      <span
        v-for="tech in project.technologies"
        :key="tech.label"
        class="shadow-sm text-sky-400 font-medium text-xs leading-4 px-1.5 py-0.5 md:py-1 md:px-3 bg-white/90 border border-sky-200 rounded-full whitespace-nowrap"
      >
        {{ tech.label }}
      </span>
    </div>
  </div>

  <!-- Content Section -->
  <div class="p-2 sm:p-8 w-full sm:w-3/5 flex flex-col">
    <div class="mb-2">
      <p class="text-sky-700 font-medium text-sm leading-5 mb-1">
        {{ formatDate(project.startDate) }} - {{ formatDate(project.endDate) }}
      </p>
      <h3 class="text-xl sm:text-3xl leading-7 sm:leading-9 text-gray-900 font-bold mb-3 sm:mb-4">
        {{ project.name }}
      </h3>
    </div>

    <div class="text-gray-600 overflow-y-auto mb-4 sm:mb-6 text-sm leading-6 max-h-[150px] sm:max-h-[250px]">
      <p class="my-0">
        {{ project.projectOverview }}
      </p>
    </div>

    <div class="mt-4 sm:mt-auto">
      <nuxt-link
        :to="`/projects/${project.slug}`"
        class="text-sm md:text-base shadow-md items-center bg-sky-700 rounded-full text-white inline-flex font-medium gap-2 justify-center py-2 px-2 sm:py-3 sm:px-4 transition-all duration-300 ease-in-out no-underline hover:bg-sky-800 w-full sm:w-auto text-center"
      >
        View Project Details
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="transition-transform duration-150 ease-in-out w-4 h-4 ml-1 group-hover:translate-x-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </nuxt-link>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

import type { PersonalProject } from '../../stores/type';

const props = defineProps({
  project: {
    type: Object as () => PersonalProject,
    required: true,
  },
});

const formatDate = (dateString: string | null): string => {
  if (!dateString) return 'Present'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })
}
</script>
