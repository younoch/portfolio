<script setup lang="ts">
import ProjectCard from '~/components/home/ProjectCard.vue';
const { personalProjects } = useProjectStore()
</script>

<template>
  <main class="flex-grow border-0 box-border mt-4">
    <h1 class="text-4xl font-bold mb-8">My Projects</h1>
    
    <div class="grid md:grid-cols-2 gap-8">
      <ProjectCard 
        v-for="project in personalProjects"
        :key="project.id"
        :project="project"
        class="hover:scale-[1.02] transition-transform"
      />
    </div>
  </main>
</template>