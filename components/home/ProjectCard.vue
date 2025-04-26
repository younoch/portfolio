<template>
  <div
    class="flex flex-row shadow-md bg-white border border-[#f3f4f6] rounded-xl overflow-hidden h-[400px] box-border"
  >
    <!-- Image Section -->
    <div class="w-2/5 relative border-0 box-border">
      <div
        class="bg-[#f9fafb] flex justify-center items-center border-0 box-border"
      >
        <img
          :src="project.thumbnail || project.preview"
          :alt="project.name"
          class="object-contain max-w-full max-h-full h-auto block align-middle border-0 box-border"
        />
      </div>
      
      <!-- Tech Stack Tags -->
      <div
        class="gap-2 flex-wrap max-w-[90%] flex left-4 bottom-4 absolute border-0 box-border"
      >
        <span
          v-for="tech in project.tech"
          :key="tech.label"
          class="shadow-sm text-[#2a3b90] font-medium text-xs leading-4 py-1 px-3 bg-[rgba(255,255,255,0.9)] border border-[rgba(42,59,144,0.2)] rounded-full"
        >
          {{ tech.label }}
        </span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-8 w-3/5 flex flex-col border-0 box-border">
      <div class="mb-2 border-0 box-border">
        <p class="text-[#2a3b90] font-medium text-sm leading-5 mb-1">
          {{ formatDate(project.startDate) }} - {{ formatDate(project.endDate) }}
        </p>
        <h3 class="text-3xl leading-9 text-[#1a1e2e] font-bold mb-4">
          {{ project.name }}
        </h3>
      </div>

      <div
        class="max-h-[250px] text-[#767b84] overflow-y-auto mb-6 text-sm leading-6 max-w-[506.099px]"
      >
        <p class="my-0">
          {{ project.projectOverview }}
        </p>
      </div>

      <div class="mt-auto">
        <nuxt-link
          :to="`/projects/${project.slug}`"
          class="shadow-md items-center bg-[#2a3b90] rounded-full text-white inline-flex font-medium gap-2 justify-center py-3 px-8 transition-all duration-300 ease-in-out no-underline hover:bg-[#1e2a78]"
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
