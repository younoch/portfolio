<template>
  <section class="py-2 md:py-4 bg-[#f8f9fc] relative">
    <div
      class="bg-[rgba(80,226,208,0.05)] rounded-full w-64 h-64 md:w-96 md:h-96 -ml-32 md:-ml-48 -mb-32 md:-mb-48 left-0 bottom-0 absolute"
    ></div>

    <div class="w-full max-w-5xl mx-auto relative z-10">
      <!-- Header section -->
      <div class="text-center mb-6 md:mb-10">
        <span
          class="text-sky-700 text-base md:text-lg font-semibold mb-2 md:mb-4 block"
          >My Work</span
        >
        <h2
          class="text-[#1a1e2e] text-2xl md:text-4xl font-bold tracking-tight md:tracking-[-0.9px] leading-[1.3] md:leading-[45px] mb-3 md:mb-4"
        >
          Featured <span class="text-sky-700">Projects</span>
        </h2>
        <p
          class="text-[#767b84] text-sm md:text-lg leading-5 md:leading-7 max-w-full md:max-w-[90%] mx-auto"
        >
          Explore the creative solutions and innovative projects I've been
          working on
        </p>
      </div>
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="featuredProjects"
        :ui="{
          item: 'basis-full',
          arrows: {
            wrapper: 'absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 bg-sky-700',
            left: 'bg-sky-700 text-white rounded-full p-8',
            right: 'bg-sky-700 text-white rounded-full p-2',
          },
          indicators: {
            wrapper: 'relative bottom-0 mt-4',
            active: 'bg-sky-700 h-4 w-4',
            inactive: 'bg-sky-200',
          },
        }"
        class="rounded-lg overflow-hidden"
        arrows
        indicators
      >
        <ProjectCard :project="item" draggable="false" />
      </UCarousel>

      <!-- View all button -->
      <div class="text-center mt-8 md:mt-12">
        <nuxt-link
          to="/projects"
          class="inline-flex items-center border-2 border-sky-700 rounded-full text-sky-700 font-medium gap-2 justify-center py-2 md:py-3 px-6 md:px-8 transition-all text-sm md:text-base"
        >
          View All Projects
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="w-4 h-4 md:w-5 md:h-5 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";

const { personalProjects } = useProjectStore();
const carouselRef = ref()

const featuredProjects = computed(() => {
  return personalProjects.filter((project) => project.featured);
});

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 4000)
})
</script>

<style lang="scss" scoped></style>
