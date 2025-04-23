<template>
  <div
    class="cursor-auto bg-[rgb(248,249,252)] text-[rgb(51,57,68)] leading-[26px] m-0 border-0 border-solid border-[rgb(229,231,235)] box-border"
  >
    <noscript class="border-0 border-solid border-[rgb(229,231,235)] box-border"
      >You need to enable JavaScript to run this app.</noscript
    >
    <div class="border-0 border-solid border-[rgb(229,231,235)] box-border">
      <div
        class="text-[rgb(17,24,39)] bg-white flex flex-col min-h-[559px] border-0 border-solid border-[rgb(229,231,235)] box-border"
      >
        <Header />
        <slot />
        <Footer />
      </div>
    </div>
    <div class="inline-block border-0 box-border"></div>
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/home/Header.vue";
import Footer from "~/components/home/Footer.vue";
</script>
