<template>
  <section class="py-16 bg-[#f8f9fc] relative border-0 box-border">
    <div
      class="bg-[rgba(80,226,208,0.05)] rounded-full w-96 h-96 -ml-48 -mb-48 left-0 bottom-0 absolute border-0 box-border">
    </div>
    <div class="max-w-5xl mx-auto z-10 relative w-full border-0 box-border">
      <div class="text-center mb-10 border-0 box-border">
        <span class="text-sky-700 inline-block text-lg font-semibold leading-7 relative mb-4 border-0 box-border">My
          Work</span>
        <h2 class="text-[#1a1e2e] text-4xl font-bold tracking-[-0.9px] leading-[45px] mb-4 border-0 box-border">
          Featured
          <span class="text-sky-700 relative z-10 border-0 box-border">Projects</span>
        </h2>
        <p class="text-[#767b84] text-lg leading-7 mb-8 max-w-[90%] text-center mx-auto border-0 box-border">
          Explore the creative solutions and innovative projects I've been
          working on
        </p>
      </div>
      <ClientOnly>
        <swiper-container ref="containerRef"
         >
          <swiper-slide class="swiper-slide mb-16" v-for="(slide, idx) in personalProjects" :key="idx">
            <ProjectCard :project="slide" />
          </swiper-slide>
        </swiper-container>
        <div class="flex justify-between">
          <UButton label="Prev" color="sky" variant="solid" @click="swiper.prev()" />
          <UButton label="Next" color="sky" variant="solid" @click="swiper.next()" />
        </div>
      </ClientOnly>
      <div class="text-center mt-12 border-0 box-border">
        <nuxt-link to="/projects"
          class="items-center border-2 border-sky-700 rounded-full text-sky-700 inline-flex font-medium gap-2 justify-center py-3 px-8 transition-all duration-300 ease-in-out no-underline box-border">
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
import ProjectCard from "./ProjectCard.vue";

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  effect: "creative",
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
  pagination: {
    el: ".swiper-pagination",
    
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}" style="width: 12px; height: 12px"></span>`;
    },
   bulletActiveClass: "swiper-pagination-bullet-active",

  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

const { personalProjects } = useProjectStore();
</script>

<style lang="scss">
.swiper-pagination-bullet-active {
  height: 50px !important;
  background-color: red !important;
}

</style>
