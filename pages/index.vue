<template>
    <div class="home">
        <header>
            <h1>Welcome to My Portfolio</h1>
            <p>Your Name</p>
        </header>
        <section class="about">
            <h2>About Me</h2>
            <p>
                Brief introduction about yourself. Mention your skills, experience, and interests.
            </p>
        </section>
        <section class="projects">
            <h2>Projects</h2>
            <ul>
                <li v-for="project in projects" :key="project.id">
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.description }}</p>
                </li>
            </ul>
        </section>
        <footer>
            <p>Contact: your.email@example.com</p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Project {
    id: number;
    name: string;
    description: string;
}

const projects = ref<Project[]>([
    { id: 1, name: 'Project One', description: 'Description of project one.' },
    { id: 2, name: 'Project Two', description: 'Description of project two.' },
    // Add more projects as needed
]);
</script>

<style scoped>
.home {
    font-family: Arial, sans-serif;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 40px;
}

.about,
.projects {
    margin-bottom: 40px;
}

footer {
    text-align: center;
    margin-top: 40px;
}
</style>