<template>
  <footer class="bg-white border-t border-gray-200 mt-auto">
  <div class="max-w-5xl mx-auto py-2 sm:py-4 w-full">
    <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <div class="text-center sm:text-left">
        <nuxt-link to="/" class="text-gray-900 font-bold text-xl sm:text-2xl leading-8 no-underline">Portfolio</nuxt-link>
        <p class="text-gray-500 text-sm leading-5 mt-2">
          © 2025 Mohammad Younoch. All rights reserved.
        </p>
      </div>
      <div class="flex">
        <nuxt-link to="https://github.com/younoch" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          class="transition-all duration-150 ease-in-out text-gray-500 p-2 rounded-full no-underline hover:text-gray-900">
          <span class="sr-only">GitHub</span>
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6 block align-middle">
            <path fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"></path>
          </svg>
        </nuxt-link>
        <nuxt-link to="https://www.linkedin.com/in/younoch/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          class="transition-all duration-150 ease-in-out text-gray-500 p-2 rounded-full ml-4 sm:ml-6 no-underline hover:text-gray-900">
          <span class="sr-only">LinkedIn</span>
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6 block align-middle">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
          </svg>
        </nuxt-link>
        <nuxt-link to="https://stackoverflow.com/users/14935206/younoch" target="_blank" rel="noopener noreferrer" aria-label="Stackoverflow"
          class="transition-all duration-150 ease-in-out text-gray-500 p-2 rounded-full ml-4 sm:ml-6 no-underline hover:text-gray-900">
          <span class="sr-only">Stackoverflow</span>
            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6 block align-middle">
            <path
              d="M17.5 20.5v-5h2v7h-15v-7h2v5h11zm-11.5-3h10v2h-10v-2zm1.2-3.8l.4-1.9 9.8 2.1-.4 1.9-9.8-2.1zm2.1-4.9l.9-1.7 8.5 4.5-.9 1.7-8.5-4.5zm3.3-4.5l1.4-1.4 6.4 6.4-1.4 1.4-6.4-6.4zm-5.4 12.2h10v2h-10v-2z"></path>
            </svg>
        </nuxt-link>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
      <div>
        <h3 class="text-gray-900 font-semibold mb-3 sm:mb-4 text-base">
          Navigation
        </h3>
        <ul class="list-none space-y-2 sm:space-y-0">
          <li>
            <nuxt-link to="/" class="text-gray-500 no-underline hover:text-gray-900">Home</nuxt-link>
          </li>
          <li class="sm:my-2">
            <nuxt-link to="/projects" class="text-gray-500 no-underline hover:text-gray-900">Projects</nuxt-link>
          </li>
          <li class="sm:my-2">
            <nuxt-link to="/about" class="text-gray-500 no-underline hover:text-gray-900">About</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-gray-900 font-semibold mb-3 sm:mb-4 text-base">
          Technologies
        </h3>
        <!-- <ul class="list-none space-y-2 sm:space-y-0">
          <li>
            <span class="text-gray-500">React</span>
          </li>
          <li class="sm:my-2">
            <span class="text-gray-500">Tailwind CSS</span>
          </li>
          <li class="sm:my-2">
            <span class="text-gray-500">JavaScript</span>
          </li>
          <li class="sm:my-2">
            <span class="text-gray-500">GitHub API</span>
          </li>
        </ul> -->
      </div>
      <div class="sm:col-span-2">
        <h3 class="text-gray-900 font-semibold mb-3 sm:mb-4 text-base">
          About This Site
        </h3>
        <!-- <p class="text-gray-500">
          This portfolio website is built with React and uses GitHub
          Issues as a CMS. Content is dynamically fetched from GitHub
          repository issues with specific labels.
        </p> -->
      </div>
    </div>
  </div>
</footer>
</template>

<script setup lang="ts">

const state = ref<any>('');

</script>

<style scoped lang="scss"></style>