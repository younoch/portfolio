<template>
<section class="py-2 md:py-4 flex items-center bg-[#f8f9fc] min-h-[auto] md:min-h-[559px] overflow-hidden relative">
  <div class=" max-w-5xl mx-auto w-full">
    <div class="flex flex-col md:flex-row items-center justify-between relative z-10 gap-3 md:gap-0">
      <!-- Text Content (order changes on mobile) -->
      <div class="w-full md:w-[58%] order-2 md:order-1 flex-1 max-w-full md:max-w-[576px]">
        <p class="text-base md:text-lg leading-6 md:leading-7 text-sky-700 font-semibold mb-2">
          Full-Stack Developer | AI Solutions Architect | Performance Optimization Specialist
        </p>
        
        <h1 class="text-2xl md:text-4xl text-[#1a1e2e] font-bold tracking-tight my-1 md:my-3">
          Building <span class="text-sky-700">impactful</span> digital solutions
        </h1>

        <div class="text-sm md:text-base leading-5 md:leading-6 text-[#767b84] mb-2 md:mb-4">
          <p class="text-base md:text-lg text-gray-700 mb-3 md:mb-4 leading-relaxed">
            <span class="font-semibold text-gray-900">Full-Stack Developer</span> specializing in
            <span class="bg-sky-50 text-sky-700 font-medium">AI-powered applications</span>
            and <span class="bg-purple-50 text-sky-700 font-medium">high-performance web systems.</span>
            I transform complex requirements into scalable solutions with:
          </p>

          <ul class="space-y-2 mb-4 md:mb-6">
            <li class="flex items-start">
              <svg class="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm md:text-base"><span class="font-medium">30% faster load times</span> for enterprise applications</span>
            </li>
            <li class="flex items-start">
              <svg class="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm md:text-base"><span class="font-medium">25% higher data accuracy</span> in AI document processing</span>
            </li>
            <li class="flex items-start">
              <svg class="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm md:text-base">Mentored teams achieving <span class="font-medium">15% productivity gains</span></span>
            </li>
          </ul>

          <p class="text-sm md:text-base text-gray-600 italic border-l-2 md:border-l-4 border-sky-500 pl-3 md:pl-4 py-1">
            "Passionate about bridging cutting-edge technology with measurable business impact through clean
            architecture and collaborative development."
          </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6 mb-1 md:mb-8">
          <nuxt-link to="/projects"
            class="shadow-md hover:shadow-lg bg-sky-700 rounded-full text-white font-medium flex items-center justify-center gap-2 transition-all py-1 md:py-3 px-6 md:px-8 text-sm md:text-base">
            <UIcon name="i-uil:eye" class="text-lg" />
            View My Work
          </nuxt-link>
          <nuxt-link to="/about"
            class="border-2 border-sky-700 rounded-full text-sky-700 font-medium flex items-center justify-center gap-2 transition-all py-1 md:py-3 px-6 md:px-8 text-sm md:text-base">
            <UIcon name="i-mingcute:send-plane-fill" class="text-lg" />
            Contact Me
          </nuxt-link>
        </div>

        <!-- Social Icons -->
        <div class="hidden md:flex gap-3 md:gap-4 mt-3 md:mt-5">
          <nuxt-link to="https://github.com/younoch"
            class="shadow-sm bg-white rounded-full text-[#333944] flex items-center justify-center">
            <UIcon name="i-mdi:github" class="text-2xl md:text-3xl" />
          </nuxt-link>
          <nuxt-link to="https://www.linkedin.com/in/younoch/"
            class="shadow-sm bg-white rounded-full text-[#333944] flex items-center justify-center">
            <UIcon name="i-mdi:linkedin" class="text-2xl md:text-3xl" />
          </nuxt-link>
          <nuxt-link target="_blank" to="/Mohammad-Younoch-web-developer.pdf"
            class="shadow-sm bg-white rounded-full text-[#333944] flex items-center justify-center">
            <UIcon name="i-mdi:document" class="text-2xl md:text-3xl" />
          </nuxt-link>
        </div>
      </div>

      <!-- Image (order changes on mobile) -->
      <div class="w-full md:w-[40%] order-1 md:order-2 flex items-center justify-center">
        <div class="mx-auto md:mr-0 md:ml-auto rounded-lg shadow-lg md:shadow-xl h-[280px] md:h-[360px] w-full max-w-[280px] md:max-w-[320px] overflow-hidden">
          <img src="/images/image-profile.jpg" alt="Mohammad Younoch"
            class="h-full w-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss"></style>