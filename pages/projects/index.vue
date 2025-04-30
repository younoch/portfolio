<script setup lang="ts">

const { personalProjects, getTechList } = useProjectStore();

useHead({
  title: 'Projects | Mohammad Younoch - Full Stack Developer',
  meta: [
    { property: 'og:title', content: 'Projects | Mohammad Younoch - Full Stack Developer' },
    { property: 'og:description', content: 'Explore my projects and skills as a full stack developer.' },
  ]
})

const selectedTech = ref<string>('');

const filterProjectsByTech = computed(() => {
  if (selectedTech.value) {
    return personalProjects.filter((project) =>
      project.technologies.some((tech) => tech.label === selectedTech.value)
    );
  }
  return personalProjects;
});
</script>

<template>
  <div class="bg-light min-h-screen">
    <div class="container max-w-5xl mx-auto py-12 pt-28">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 text-center">
          My <span class="text-sky-600">Projects</span>
        </h1>
      </header>
      <div class="flex justify-center items-center flex-wrap mb-4">
        <UButton 
          class="mx-1 transition-colors duration-300" 
          v-for="(item, idx) in getTechList" 
          :label="item" 
          :variant="selectedTech === item ? 'solid' : 'soft'" 
          color="sky" 
          :ui="{ rounded: 'rounded-full' }"
          :key="idx" 
          @click="selectedTech = item"
      />
      </div>
      <main class="flex-grow border-0 box-border mt-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <div v-for="(project, index) in filterProjectsByTech" :key="index"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              :src="project.thumbnail"
              :alt="project.name"
              width="100%"
              height="auto"
              class="w-full h-48 object-cover object-center"
            />
            <div class="p-5">
              <div
                class="flex items-center justify-between text-sm text-gray-500 mb-2"
              >
                <span>{{ project.endDate }}</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ project.name }}
              </h3>
              <p class="text-gray-700 text-sm mb-4 line-clamp-3" v-html="project.projectOverview"></p>
              <NuxtLink
                :to="`/projects/${project.slug}`"
                class="text-sky-600 hover:text-sky-800 text-sm font-medium"
              >
                Read more
              </NuxtLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
