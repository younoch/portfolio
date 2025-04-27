<template>
  <section
    class="py-16 md:py-16 flex items-center bg-[#f8f9fc] min-h-[559px] overflow-hidden relative border-0 box-border">
    <div class="max-w-5xl mx-auto w-full border-0 box-border">
      <div class="flex flex-row items-center justify-between relative z-10 border-0 box-border">
        <div class="w-full md:w-[60%] mt-0 order-1 md:order-1 mb-0 flex-1 max-w-[576px] border-0 box-border">
          <p
            class="text-lg leading-7 text-sky-700 inline-block font-semibold relative break-words whitespace-normal m-0 border-0 box-border">
            Full-Stack Developer | AI Solutions Architect | Performance Optimization Specialist
          </p>
          <h1
            class="text-4xl md:text-[48px] md:leading-[48px] text-[#1a1e2e] font-bold tracking-[-1.2px] my-1 md:mt-1 md:mb-3 border-0 box-border">
            Building
            <span class="text-sky-700 relative z-10 border-0 box-border">impactful</span>
            digital solutions
          </h1>
          <div class="text-base leading-6 text-[#767b84] mb-8 max-w-[90%] border-0 box-border">

              <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                <span class="font-semibold text-gray-900">Full-Stack Developer</span> specializing in
                <span class="bg-sky-50 text-sky-700 font-medium">AI-powered
                  applications</span>
                and <span
                  class="bg-purple-50 text-blue-700 font-medium">high-performance
                  web systems</span>.
                I transform complex requirements into scalable solutions with:
              </p>

              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><span class="font-medium">30% faster load times</span> for enterprise applications</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><span class="font-medium">25% higher data accuracy</span> in AI document processing</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Mentored teams achieving <span class="font-medium">15% productivity gains</span></span>
                </li>
              </ul>

              <p class="text-gray-600 italic border-l-4 border-sky-500 pl-4 py-1">
                "Passionate about bridging cutting-edge technology with measurable business impact through clean
                architecture and collaborative development."
              </p>
          </div>
          <div class="flex flex-row gap-4 mt-6 mb-8 border-0 box-border">
            <nuxt-link to="/projects"
              class="shadow-md hover:shadow-lg items-center bg-sky-700 rounded-full text-white flex font-medium gap-2 justify-center transition-all duration-300 ease-in-out text-center py-3 px-8 no-underline border-0 box-border">
              <UIcon name="i-uil:eye" />
              View My Work
            </nuxt-link>
            <nuxt-link to="/about"
              class="items-center border-2 border-sky-700 rounded-full text-sky-700 flex font-medium gap-2 justify-center transition-all duration-300 ease-in-out text-center py-3 px-8 no-underline box-border">
              <UIcon name="i-mingcute:send-plane-fill" />
              Contact Me
            </nuxt-link>
          </div>
          <div class="flex gap-4 mt-8 border-0 box-border">
            <nuxt-link to="https://github.com/younoch"
              class="shadow-sm items-center bg-white rounded-full text-[#333944] flex h-9 justify-center transition-all duration-300 ease-in-out w-9 p-2 no-underline border-0 box-border">
              <UIcon name="i-mdi:github" class="text-3xl" />
            </nuxt-link>
            <nuxt-link to="https://www.linkedin.com/in/younoch/"
              class="shadow-sm items-center bg-white rounded-full text-[#333944] flex h-9 justify-center transition-all duration-300 ease-in-out w-9 p-2 no-underline border-0 box-border">
              <UIcon name="i-mdi:linkedin" class="text-3xl" />
            </nuxt-link>
            <!-- <nuxt-link to="https://stackoverflow.com/users/14935206/younoch"
              class="shadow-sm items-center bg-white rounded-full text-[#333944] flex h-9 justify-center transition-all duration-300 ease-in-out w-9 p-2 no-underline border-0 box-border">
              <UIcon name="i-mdi:x" class="text-3xl" />
            </nuxt-link> -->
          </div>
        </div>
        <div
          class="w-full md:w-[40%] mt-0 order-2 md:order-2 flex-1 flex items-center justify-center border-0 box-border">
          <div
            class="mr-0 ml-auto rounded-lg transition-all duration-300 ease-in-out shadow-xl h-[360px] overflow-hidden relative w-full max-w-[320px] border-0 box-border">
            <img src="/images/image-profile.jpg" alt="Mohammad Younoch"
              class="h-[360px] object-cover w-full shadow-md rounded-lg max-w-full block align-middle border-0 box-border" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss"></style>