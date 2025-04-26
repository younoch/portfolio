<template>
  <section class="bg-gray-50 py-16 border-0 border-gray-200 box-border">
    <div class="max-w-5xl mx-auto relative w-full border-0 border-gray-200 box-border">
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
      
      <UTabs :items="cetegorizedSkills" :state="state" class="mb-8">
        <template #header="{ item }">
          <div class="flex items-center">
            <div class="text-sky-900 text-lg leading-7">
              <UIcon :name="item.icon" />
            </div>
            <span class="font-medium text-sm leading-5 ml-2">{{ item.label }}</span>
          </div>
        </template>
        <template #item="{ item }">
          <div class="grid grid-cols-[repeat(5,208px)] gap-3">
            <div
              v-for="(skill, index) in item.skills"
              :key="index"
              class="transition-all duration-150 ease-in-out shadow-sm p-2 bg-white border border-gray-200 rounded-lg relative"
            >
              <div class="flex items-center">
                <div class="text-sky-900 text-lg leading-7">
                  <UIcon :name="skill.icon" />
                </div>
                <span class="font-medium text-sm leading-5 ml-2">{{ skill.label }}</span>
              </div>
            </div>
          </div>
        </template>

      </UTabs>
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

const { cetegorizedSkills } = useProjectStore();

</script>