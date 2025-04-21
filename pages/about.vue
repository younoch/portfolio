<template>
    <section class="about">
        <h1>About Me</h1>
        <p>
            Welcome to my portfolio! I am a passionate developer with a love for creating
            innovative and efficient solutions. With experience in modern web technologies,
            I strive to build applications that are both functional and visually appealing.
        </p>
        <p>
            When I'm not coding, I enjoy exploring new technologies, reading, and spending
            time outdoors. Feel free to explore my portfolio and reach out if you'd like to
            collaborate!
        </p>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'About Me',
    description: 'Learn more about me and my journey as a developer.'
});
</script>

<style scoped>
.about {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
}
</style>