<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;
const { getProjectBySlug } = useProjectStore();

const project = computed(() => getProjectBySlug(slug as string));

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project Not Found",
  });
}
</script>
<template>
  <main class="container mx-auto">
    <div class="bg-gray-50 min-h-screen pt-20">
      <section class="container mx-auto p-4">
        <article class="card max-w-5xl mx-auto">
          <figure class="mb-8 -mx-6 -mt-8 overflow-hidden rounded-t-lg">
            <NuxtImg
              :src="project?.thumbnail"
              width="80%"
              height="auto"
              :alt="project?.name"
              loading="lazy"
              class="mx-auto"
            />
          </figure>
          <header class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900">
              {{ project?.name }}
            </h1>
          </header>
          <div class="flex flex-wrap gap-x-2">
            <h5 class="text-lg font-medium">Technology Used:</h5>
            <UTooltip
              v-for="(item, index) in project?.tech"
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
                class="mb-2 mr-1"
                size="lg"
                variant="outline"
              >
                <UIcon :name="item.icon" />
                {{ item.label }}
              </UBadge>
            </UTooltip>
          </div>
          <div class="grid grid-cols-3 mb-4">
            <ULink as="button" target="_blank" :to="project?.link" active-class="text-sky-400"> {{ project?.link }}</ULink>
          </div>
          <section class="text-gray-700 prose max-w-none">
            <div class="prose max-w-none">
              <h2>Project Overview</h2>
              <p v-html="project?.projectOverview"></p>
            </div>
            <div class="prose max-w-none mt-4">
              <h2>Key Features</h2>
              <template v-for="(item, idx) in project?.keyFeatures" :key="idx">
                <p class="m-0">
                  <span class="font-bold">{{ item.label }}:</span>
                  {{ item.description }}
                </p>
              </template>
            </div>
            <div class="prose max-w-none mt-4">
              <h2>My Role</h2>
              <p>{{ project?.role }}</p>
            </div>
            <div class="prose max-w-none mt-4">
              <h2>Problem Solved</h2>
              <template
                v-for="(item, idx) in project?.problemSolved"
                :key="idx"
              >
                <p class="m-0">{{ item }}</p>
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
