<script setup lang="ts">
const { personalProjects } = useProjectStore();
</script>

<template>
  <div class="bg-light min-h-screen">
    <div class="container mx-auto px-4 py-12 pt-28">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 text-center">
          My <span class="text-indigo-600">Projects</span>
        </h1>
      </header>
      <main class="flex-grow border-0 box-border mt-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="(project, index) in personalProjects" :key="index"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <NuxtImg
              :src="project.thumbnail"
              :alt="project.name"
              width="100%"
              height="auto"
              loading="lazy"
              class="w-full h-48 object-cover object-center"
            />
            <div class="p-5">
              <div
                class="flex items-center justify-between text-sm text-gray-500 mb-2"
              >
                <span>{{ project.endDate }}</span><span>php</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ project.name }}
              </h3>
              <p class="text-gray-700 text-sm mb-4 line-clamp-3" v-html="project.projectOverview"></p>
              <NuxtLink
                :to="`/projects/${project.slug}`"
                class="text-blue-600 hover:text-blue-800 text-sm font-medium"
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
