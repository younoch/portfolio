<template>
  <main class="flex-grow border-0 box-border mt-8">
    <UserCard />
    <FeaturedProjects />
    <Skills />
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";

import UserCard from "@/components/home/UserCard.vue";
import FeaturedProjects from "@/components/home/FeaturedProjects.vue";
import Skills from "@/components/home/Skills.vue";



interface Project {
  id: number;
  name: string;
  description: string;
}

const projects = ref<Project[]>([
  { id: 1, name: "Project One", description: "Description of project one." },
  { id: 2, name: "Project Two", description: "Description of project two." },
  // Add more projects as needed
]);
</script>
