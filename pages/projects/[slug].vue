<script setup lang="ts">


const route = useRoute();
const { slug } = route.params;
const { getProjectBySlug } = useProjectStore();

const project = computed(() => getProjectBySlug(slug as string));

useHead({
  title: `${project.value?.label} | Mohammad Younoch - Full Stack Developer`,
  meta: [
    { property: 'og:title', content: `${project.value?.label} | Mohammad Younoch - Full Stack Developer` },
    { property: 'og:description', content: 'Explore my projects and skills as a full stack developer.' },
  ]
})

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project Not Found",
  });
}
</script>
<template>
  <main class="container mx-auto">
  <div class="bg-gray-50 min-h-screen pt-12 sm:pt-20">
    <section class="mx-auto">
      <article class="max-w-5xl mx-auto bg-white rounded-lg shadow-sm">
        <figure class="mb-6 -mx-4 sm:-mx-6 -mt-6 sm:-mt-8 overflow-hidden rounded-t-lg">
          <img
            :src="project?.thumbnail"
            width="100%"
            height="auto"
            :alt="project?.name"
            loading="lazy"
            class="mx-auto"
          />
        </figure>
        
        <header class="mb-6">
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">
            {{ project?.label }}
          </h1>
        </header>
        
        <div class="flex flex-wrap items-center gap-y-2 mb-4">
          <h5 class="text-base sm:text-lg font-medium mr-2">Technology Used:</h5>
          <div class="flex justify-center md:justify-start flex-wrap gap-1 md:gap-2">
            <UTooltip
              v-for="(item, index) in project?.technologies"
              arrow
              :text="item.expertise"
              :popper="{
                placement: 'top',
                offsetDistance: 5,
                arrow: true,
              }"
              :key="index"
            >
              <UBadge
                color="sky"
                :key="index"
                size="md"
                variant="outline"
                class="flex items-center p-1"
              >
                <UIcon :name="item.icon" class="w-3 h-3 md:w-4 md:h-4 hidden md:block" />
                <span class="ml-1">{{ item.label }}</span>
              </UBadge>
            </UTooltip>
          </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 mb-4 gap-2">
          <div>Team Size: {{ project?.teamSize }} Members</div>
          <div></div>
          <div class="flex items-center">
            <p>
              Preview: 
            </p>
            <ULink 
              as="button" 
              target="_blank"
              :to="project?.link" 
              active-class="text-sky-400"
              class="text-sm sm:text-base truncate text-sky-500 hover:text-sky-600 font-medium ml-2"
            >
              {{ project?.link }}
            </ULink>
          </div>
        </div>
        
        <section class="text-gray-700 prose max-w-none">
          <div class="prose max-w-none">
            <h2 class="text-xl sm:text-2xl">Project Overview</h2>
            <p v-html="project?.projectOverview"></p>
          </div>
          
          <div class="prose max-w-none mt-4">
            <h2 class="text-xl sm:text-2xl">Key Features</h2>
            <template v-for="(item, idx) in project?.keyFeatures" :key="idx">
              <p class="m-0 mb-2">
                <span class="font-bold">{{ item.label }}:</span>
                {{ item.description }}
              </p>
            </template>
          </div>
          
          <div class="prose max-w-none mt-4">
            <h2 class="text-xl sm:text-2xl">My Role</h2>
            <p>{{ project?.role }}</p>
          </div>
          
          <div class="prose max-w-none mt-4">
            <h2 class="text-xl sm:text-2xl">Problem Solved</h2>
            <template v-for="(item, idx) in project?.problemSolved" :key="idx">
              <p class="m-0 mb-2">{{ item }}</p>
            </template>
          </div>
        </section>
      </article>
    </section>
  </div>
</main>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply mb-3;
}
</style>
