<template>
  <header
    class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] py-4 bg-[rgba(255,255,255,0.95)] w-full z-50 top-0 fixed border-0 border-solid border-[rgb(229,231,235)] box-border">
    <div class="px-8 max-w-[1152px] mx-auto w-full border-0 border-solid border-[rgb(229,231,235)] box-border">
      <nav class="flex justify-between items-center border-0 border-solid border-[rgb(229,231,235)] box-border">
        <nuxt-link to="/"
          class="text-[rgb(42,59,144)] font-bold text-2xl leading-8 relative no-underline border-0 border-solid border-[rgb(229,231,235)] box-border">
          Mohammad Younoch
          <span
            class="bg-[rgb(80,226,208)] rounded-full w-1.5 h-1.5 -right-3 -bottom-0.5 absolute border-0 border-solid border-[rgb(229,231,235)] box-border"></span>
        </nuxt-link>
        <ul class="flex gap-8 list-none m-0 p-0 border-0 border-solid border-[rgb(229,231,235)] box-border">
          <li class="border-0 border-solid border-[rgb(229,231,235)] box-border">
            <nuxt-link to="/"
              class="text-[rgb(42,59,144)] relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-medium py-2 no-underline border-0 border-solid border-[rgb(229,231,235)] box-border">Home</nuxt-link>
          </li>
          <li class="border-0 border-solid border-[rgb(229,231,235)] box-border">
            <nuxt-link to="/projects"
              class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-[rgb(51,57,68)] font-medium py-2 relative no-underline border-0 border-solid border-[rgb(229,231,235)] box-border">Projects</nuxt-link>
          </li>
          <li class="border-0 border-solid border-[rgb(229,231,235)] box-border">
            <nuxt-link to="/about"
              class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-[rgb(51,57,68)] font-medium py-2 relative no-underline border-0 border-solid border-[rgb(229,231,235)] box-border">About</nuxt-link>
          </li>
        </ul>
        <nuxt-link to="/about"
          class="block bg-[rgb(42,59,144)] rounded-full text-white font-medium px-6 py-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] no-underline border-0 border-solid border-[rgb(229,231,235)] box-border">Contact
          Me</nuxt-link>
        <button aria-label="Toggle menu"
          class="hidden text-[rgb(51,57,68)] cursor-pointer appearance-none bg-transparent font-sans text-base font-normal leading-[26px] m-0 p-0 border-0 border-solid border-[rgb(229,231,235)] box-border">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 block align-middle border-0 border-solid border-[rgb(229,231,235)] box-border">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"
              class="border-0 border-solid border-[rgb(229,231,235)] box-border"></path>
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">

const state = ref<any>('');


</script>

<style scoped lang="scss"></style>