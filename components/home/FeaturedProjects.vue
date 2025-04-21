<template>
  <section class="py-16 bg-[#f8f9fc] relative border-0 box-border">
    <div
      class="bg-[rgba(42,59,144,0.05)] rounded-full w-72 h-72 -mt-20 -mr-20 top-0 right-0 absolute border-0 box-border">
    </div>
    <div
      class="bg-[rgba(80,226,208,0.05)] rounded-full w-96 h-96 -ml-48 -mb-48 left-0 bottom-0 absolute border-0 box-border">
    </div>
    <div class="px-8 max-w-[1152px] mx-auto z-10 relative w-full border-0 box-border">
      <div class="text-center mb-10 border-0 box-border">
        <span class="text-[#5068e2] inline-block text-lg font-semibold leading-7 relative mb-4 border-0 box-border">My
          Work</span>
        <h2 class="text-[#1a1e2e] text-4xl font-bold tracking-[-0.9px] leading-[45px] mb-4 border-0 box-border">
          Featured
          <span class="text-[#2a3b90] relative z-10 border-0 box-border">Projects</span>
        </h2>
        <p class="text-[#767b84] text-lg leading-7 mb-8 max-w-[90%] text-center mx-auto border-0 box-border">
          Explore the creative solutions and innovative projects I've
          been working on
        </p>
      </div>
      <ClientOnly>
        <swiper-container ref="containerRef">
          <swiper-slide
            v-for="(slide, idx) in personalProjects" :key="idx">
          <ProjectCard 
            :project="slide" 
          />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <button @click="swiper.prev()">
        Prev
      </button>
      <button @click="swiper.next()">
        Next
      </button>
      <div class="text-center mt-12 border-0 box-border">
        <nuxt-link to="/projects"
          class="items-center border-2 border-[#2a3b90] rounded-full text-[#2a3b90] inline-flex font-medium gap-2 justify-center py-3 px-8 transition-all duration-300 ease-in-out no-underline box-border">
          View All Projects
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            class="transition-transform duration-150 ease-in-out w-5 h-5 ml-1 block align-middle border-0 box-border">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"
              class="border-0 box-border"></path>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})

const { personalProjects } = useProjectStore();

onMounted(() => {
  console.log('Component mounted');
});
</script>

<style scoped lang="scss"></style>