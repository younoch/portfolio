<template>
  <main class="flex-grow border-0 box-border mt-16">
    <UserCard />
    <FeaturedProjects />
    <Skills />
  </main>
</template>
<script setup lang="ts">

useHead({
  title: 'Home | Mohammad Younoch - Full Stack Developer',
  meta: [
    { property: 'og:title', content: 'Home | Mohammad Younoch - Full Stack Developer' },
    { property: 'og:description', content: 'Explore my projects and skills as a full stack developer.' },
  ]
});

import UserCard from "@/components/home/UserCard.vue";
import FeaturedProjects from "@/components/home/FeaturedProjects.vue";
import Skills from "@/components/home/Skills.vue";

</script>