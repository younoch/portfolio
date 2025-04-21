<template>
  <section class="bg-gray-50 py-16 border-0 border-gray-200 box-border">
    <div class="px-8 max-w-[1152px] mx-auto relative w-full border-0 border-gray-200 box-border">
      <div
        class="bg-indigo-50/5 rounded-full w-64 h-64 -mt-32 -mr-32 top-0 right-0 absolute border-0 border-gray-200 box-border">
      </div>
      <div
        class="bg-[rgba(80,226,208,0.05)] rounded-full w-80 h-80 -ml-40 -mb-40 left-0 bottom-0 absolute border-0 border-gray-200 box-border">
      </div>
      <div class="mb-8 text-center z-10 relative border-0 border-gray-200 box-border">
        <span
          class="text-[rgb(80,104,226)] inline-block text-lg font-semibold leading-7 relative mb-3 border-0 border-gray-200 box-border">My
          Expertise</span>
        <h2
          class="text-[rgb(26,30,46)] text-4xl font-bold tracking-[-0.9px] leading-[45px] mb-4 mx-0 border-0 border-gray-200 box-border">
          Tech
          <span class="text-[rgb(42,59,144)] relative z-10 border-0 border-gray-200 box-border">Toolkit</span>
        </h2>
        <p
          class="text-[rgb(118,123,132)] text-lg leading-7 mb-8 max-w-[90%] mx-auto border-0 border-gray-200 box-border">
          The technologies and tools I use to build powerful, scalable,
          and efficient applications
        </p>
      </div>
      <div class="flex justify-center mb-8">
        <div class="flex overflow-x-auto max-w-full pb-2">
          <div class="flex flex-wrap justify-center gap-2">
            <button
              class="bg-blue-900 text-white font-medium px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out whitespace-nowrap">
              All
              <span
                class="ml-1 text-blue-900 text-xs bg-white px-1.5 py-0.5 rounded-full flex items-center justify-center">
                36
              </span>
            </button>
            <button
              class="bg-transparent text-gray-500 font-medium px-6 py-2 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap">
              Frontend
              <span
                class="ml-1 text-gray-500 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full flex items-center justify-center">
                8
              </span>
            </button>
            <button
              class="bg-transparent text-gray-500 font-medium px-6 py-2 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap">
              Backend
              <span
                class="ml-1 text-gray-500 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full flex items-center justify-center">
                8
              </span>
            </button>
            <button
              class="bg-transparent text-gray-500 font-medium px-6 py-2 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap">
              Datascience
              <span
                class="ml-1 text-gray-500 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full flex items-center justify-center">
                7
              </span>
            </button>
            <button
              class="bg-transparent text-gray-500 font-medium px-6 py-2 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap">
              Devops
              <span
                class="ml-1 text-gray-500 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full flex items-center justify-center">
                14
              </span>
            </button>
            <button
              class="bg-transparent text-gray-500 font-medium px-6 py-2 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap">
              Tools
              <span
                class="ml-1 text-gray-500 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full flex items-center justify-center">
                1
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="mb-8 border border-transparent">
        <h3 class="text-gray-700 font-medium text-lg leading-7 pb-2 border-b border-gray-200 mb-3">
          Frontend
        </h3>
        <div class="grid grid-cols-[repeat(5,208px)] gap-3">
          <div
            class="transition-all duration-150 ease-in-out shadow-sm p-2 bg-white border border-gray-200 rounded-lg relative">
            <div class="flex items-center">
              <div class="text-blue-900 text-lg leading-7">
                <UIcon name="i-uil:react" />
              </div>
              <span class="font-medium text-sm leading-5 ml-2">React</span>
            </div>
            <div
              class="absolute opacity-0 transform translate-x-[-96px] w-48 mb-2 z-20 left-[103px] bottom-[44px] invisible transition-opacity duration-200 ease-in-out">
              <div class="shadow-lg text-sm leading-5 p-3 bg-white border border-gray-200 rounded-lg">
                <div class="flex items-center mb-2">
                  <div class="text-blue-900 text-lg leading-7">
                    <UIcon name="i-uil:react" />
                  </div>
                  <span class="font-semibold ml-2">React</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span class="text-gray-600 text-xs leading-4">4+ years</span>
                  <span class="text-blue-900 font-medium text-xs leading-4">Expert</span>
                </div>
                <div class="bg-gray-100 rounded-full overflow-hidden w-full h-1.5 mb-2">
                  <div class="w-[95%] bg-gradient-to-r from-blue-900 to-blue-500 rounded-full h-1.5"></div>
                </div>
                <div class="flex gap-1 mt-2 flex-wrap">
                  <span class="text-gray-700 text-xs leading-4 py-0.5 px-1.5 bg-gray-100 rounded-full">frontend</span>
                </div>
                <div
                  class="bg-white border-gray-200 border-r border-b transform rotate-45 w-2 h-2 absolute left-[96px] bottom-0">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-8 border-0 box-border">
        <h3
          class="text-gray-700 font-medium text-lg leading-7 pb-2 border-b border-gray-200 mb-3 m-0 border-0 box-border">
          Backend
        </h3>
        <div class="grid grid-cols-5 gap-3 border-0 box-border" style="grid-template-columns: repeat(5, 208px)">
          <div
            class="transition-all duration-150 ease-in-out shadow-sm py-2 px-3 bg-white border border-gray-200 rounded-lg relative box-border">
            <div class="flex items-center border-0 box-border">
              <div class="text-blue-900 text-lg leading-7 border-0 box-border">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="js" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                  class="inline-block align-middle overflow-visible box-content"
                  style="height: 18px; vertical-align: -2.25px">
                  <path fill="currentColor"
                    d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                    class="border-0 box-border"></path>
                </svg>
              </div>
              <span class="font-medium text-sm leading-5 ml-2 border-0 box-border">JavaScript</span>
            </div>
            <div
              class="transition-opacity duration-200 ease-in-out opacity-0 -translate-x-96 w-48 mb-2 z-20 left-[103px] bottom-[44px] absolute invisible border-0 box-border">
              <div class="shadow-md text-sm leading-5 p-3 bg-white border border-gray-200 rounded-lg box-border">
                <div class="flex items-center mb-2 border-0 box-border">
                  <div class="text-blue-900 text-lg leading-7 border-0 box-border">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="js" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                      class="inline-block align-middle overflow-visible box-content"
                      style="height: 18px; vertical-align: -2.25px">
                      <path fill="currentColor"
                        d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                        class="border-0 box-border"></path>
                    </svg>
                  </div>
                  <span class="font-semibold ml-2 border-0 box-border">JavaScript</span>
                </div>
                <div class="flex justify-between mb-2 border-0 box-border">
                  <span class="text-gray-600 text-xs leading-4 border-0 box-border">5+ years</span>
                  <span class="text-blue-900 font-medium text-xs leading-4 border-0 box-border">Expert</span>
                </div>
                <div class="bg-gray-100 rounded-full overflow-hidden w-full h-1.5 mb-2 border-0 box-border">
                  <div
                    class="w-[90%] bg-gradient-to-r from-blue-900 to-blue-600 rounded-full h-1.5 border-0 box-border">
                  </div>
                </div>
                <div class="flex flex-wrap gap-1 mt-2 border-0 box-border">
                  <span
                    class="text-gray-700 text-xs leading-4 py-0.5 px-1.5 bg-gray-100 rounded-full border-0 box-border">frontend</span>
                  <span
                    class="text-gray-700 text-xs leading-4 py-0.5 px-1.5 bg-gray-100 rounded-full border-0 box-border">backend</span>
                </div>
                <div class="bg-white border-r border-b border-gray-200 w-2 h-2 left-24 bottom-0 absolute box-border"
                  style="
                            transform: matrix(
                              0.707107,
                              0.707107,
                              -0.707107,
                              0.707107,
                              -4,
                              4
                            );
                          "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-none mt-16 mx-auto text-base leading-7 text-gray-700 border-0 box-border">
        <div class="my-0 border-0 box-border">
          <h1 class="text-gray-900 text-4xl font-extrabold leading-10 mb-8 mt-0 m-0 border-0 box-border">
            Technical Skills
          </h1>
          <p class="my-5 border-0 box-border">
            This section outlines the various technologies and tools I'm
            proficient in, categorized by domain. These skills have been
            developed through professional experience, personal
            projects, and continuous learning.
          </p>
          <h2 class="text-gray-900 text-2xl font-bold leading-8 my-12 border-0 box-border">
            Frontend Development
          </h2>
          <p class="mt-0 mb-5 border-0 box-border">
            My frontend skills focus on creating responsive, intuitive
            user interfaces with modern JavaScript frameworks.
          </p>
          <h2 class="text-gray-900 text-2xl font-bold leading-8 my-12 border-0 box-border">
            Backend Development
          </h2>
          <p class="mt-0 mb-5 border-0 box-border">
            On the backend, I specialize in building scalable,
            maintainable services and APIs.
          </p>
          <h2 class="text-gray-900 text-2xl font-bold leading-8 my-12 border-0 box-border">
            DevOps &amp; Infrastructure
          </h2>
          <p class="mt-0 mb-5 border-0 box-border">
            I have extensive experience setting up and maintaining
            development infrastructure and deployment pipelines.
          </p>
          <h2 class="text-gray-900 text-2xl font-bold leading-8 my-12 border-0 box-border">
            Data Science &amp; Analysis
          </h2>
          <p class="mt-0 mb-5 border-0 box-border">
            I apply computational and statistical methods to extract
            insights from complex datasets.
          </p>
          <h2 class="text-gray-900 text-2xl font-bold leading-8 my-12 border-0 box-border">
            Tools &amp; Environment
          </h2>
          <p class="mt-0 mb-5 border-0 box-border">
            I'm proficient with various development tools and
            environments that enhance productivity.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const state = ref<any>('');

onMounted(() => {
  console.log('Component mounted');
});
</script>

<style scoped lang="scss"></style>