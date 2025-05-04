<template>
  <div class="pt-28">
    <header class="max-w-5xl mx-auto text-center mb-1">
      <h1 class="title mb-4">About <span>Me</span></h1>
      <p class="max-w-2xl mx-auto text-gray-600 mb-1">
        Get to know more about my background and experience
      </p>
    </header>
    <section class="py-2 md:py-4" id="about">
      <div class="max-w-5xl mx-auto">
        <div class="mb-12 text-center">
          <img
            src="/images/image-profile.jpg"
            alt="Mohammad Younoch"
            class="rounded-lg shadow-lg w-full max-w-md mx-auto h-[450px] object-cover border border-gray-200"
          />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <div class="prose max-w-none text-gray-700 leading-relaxed">
              <h1>About Me</h1>
              <p>
                Hello! I'm a versatile IT professional with experience spanning
                system engineering, web development, and IT security. I'm
                passionate about creating robust, secure applications and
                maintaining efficient systems.
              </p>
              <h2>Professional Background</h2>
              <p>
                With over
                <span class="font-medium">4 years of experience</span> in the
                tech industry, I've had the opportunity to work across different
                domains:
              </p>
              <ul>
                <li>
                  <strong>Full Stack Web Developer</strong> at AI Dock Builder
                  (Canadian Farm)
                  <span class="text-muted">• Remote • Jan 2024 – Feb 2025</span>
                </li>

                <li>
                  <strong>Frontend Developer (Vue.js)</strong> at Gain Solutions
                  Ltd
                  <span class="text-muted"
                    >• Dhaka, Bangladesh • Feb 2023 - Dec,2023</span
                  >
                </li>
                <li>
                  Served as a <strong>Frontend Developer (Nuxt.js)</strong> at Nextive Solutions in Dhaka, Bangladesh (August 2022- Jan,2023)
                </li>
              </ul>
              <h2>Education</h2>
              <ul>
                <li>
                  <strong>Bachelors Degree in Computer Science and Technology</strong>
                  from Cox's Bazar International University, Cox's Bazar (2021)
                </li>
              </ul>
              <h2>Technical Skills</h2>
              <p>
                My diverse background has allowed me to develop expertise in
                multiple areas including:
              </p>
              <ul>
                <li>Front-end development with React and modern JavaScript</li>
                <li>Back-end development using JavaScript and Python</li>
                <li>Linux system administration and server management</li>
                <li>IT security assessment and implementation</li>
                <li>Web application architecture and optimization</li>
              </ul>
              <p>
                I'm always eager to learn new technologies and methodologies to
                enhance my skill set and deliver better solutions.
              </p>
              <h2>Graduation</h2>
              <p>
                I completed my Graduation in Computer Science and Engineering at
                Cox's Bazar International University in 2021. The video below
                shows a special moment from my graduation ceremony. This
                achievement represents a significant milestone in my academic
                journey and has been instrumental in shaping my professional
                career in the Dhaka, Bangladesh.
              </p>
            </div>
          </div>
          <div class="lg:col-span-1 space-y-8">
            <div>
              <h3 class="text-xl font-semibold mb-4 text-gray-900">Skills</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(skill, index) in getTechList"
                  class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200"
                  >{{ skill }}</span
                >
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4 text-gray-900">
                Contact Information
              </h3>
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path></svg
                  ><a
                    href="mailto:younoch295@gmail.com"
                    class="hover:text-blue-600 transition-colors"
                    >younoch295@gmail.com</a
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path></svg
                  ><a
                    href="tel:+88 01837377218"
                    class="hover:text-blue-600 transition-colors"
                    >+88 01837377218</a
                  >
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path></svg
                  ><span>Cox's Bazar, Bangladesh</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    ></path></svg
                  ><span>English, Bangla</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4 text-gray-900">
                Education
              </h3>
              <div class="space-y-3">
                <h4 class="text-lg font-medium text-gray-800">
                  My Graduation at Cox's Bazar International University
                </h4>
                <div class="video-container">
                  <div class="relative w-full pb-[56.25%]">
                    <iframe
                      class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      src="https://www.youtube.com/watch?v=pprxf-jNwQM"
                      title="Full Stack Developer | Mohammad Younoch"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

// This will set the actual browser tab title
useHead({
  title: 'About | Mohammad Younoch - Full Stack Developer',
  meta: [
    { property: 'og:title', content: 'About | Mohammad Younoch - Full Stack Developer' },
    { property: 'og:description', content: 'Get to know more about my background and experience.' },
  ]   
});

const { getTechList } = useProjectStore();
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
