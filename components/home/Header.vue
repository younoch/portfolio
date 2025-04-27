<template>
  <header
    class="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] py-4 bg-[rgba(255,255,255,0.95)] w-full z-50 top-0 fixed border-0 border-solid border-[rgb(229,231,235)] box-border"
  >
    <div
      class="max-w-5xl mx-auto w-full border-0 border-solid border-[rgb(229,231,235)] box-border"
    >
      <nav
        class="px-1 flex justify-between items-center border-0 border-solid border-[rgb(229,231,235)] box-border"
      >
        <nuxt-link
          to="/"
          class="text-sky-800 font-bold text-lg md:text-2xl leading-8 relative no-underline border-0 border-solid border-[rgb(229,231,235)] box-border"
        >
          MD. Younoch
          <span
            class="bg-[rgb(80,226,208)] rounded-full w-1.5 h-1.5 -right-3 -bottom-0.5 absolute border-0 border-solid border-[rgb(229,231,235)] box-border"
          ></span>
        </nuxt-link>
        <ul
          class="hidden md:flex gap-8 list-none m-0 p-0 border-0 border-solid border-[rgb(229,231,235)] box-border"
        >
          <li
            v-for="(item, index) in routesHeader"
            class="border-0 border-solid border-[rgb(229,231,235)] box-border"
            :key="index"
          >
            <nuxt-link
              :to="item.path"
              class="relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-medium py-2 no-underline border-0 border-solid border-[rgb(229,231,235)] box-border"
              :class="
                currentRoute === item.path ? 'text-sky-800' : 'text-gray-800'
              "
            >
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
        <div class="flex">
          <UButton
            to="/about"
            color="sky"
            variant="soft"
            icon="i-uil:envelope"
            class="text-sm md:text-base rounded-full font-medium  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            <span class="hidden md:inline">Contact Me</span>
          </UButton>
          <UButton
            class="md:hidden"
            :ui="{ rounded: 'rounded-full' }"
            color="sky"
            variant="soft"
            :icon="iconClass"
            @click="toggleMenuHandler"
          />
        </div>
      </nav>
      <nav v-if="toggleMenu" class="md:hidden mt-4 pb-2">
        <div class="flex flex-col">
          <nuxt-link
            class="py-2 px-4 rounded-md transition-colors text-center font-medium"
            v-for="(item, index) in routesHeader"
            :key="index"
            :to="item.path"
            :class="
              currentRoute === item.path
                ? 'text-sky-800 bg-gray-200'
                : 'text-gray-800'
            "
            >
            {{ item.name }}
        </nuxt-link>
          
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const routesHeader = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

const route = useRoute();
const toggleMenu = ref(false);
const toggleMenuHandler = () => {
  toggleMenu.value = !toggleMenu.value;
};
const currentRoute = computed(() => {
  return route.path;
});
const iconClass = computed(() => (toggleMenu.value ? 'i-uil:times' : 'i-uil:apps'));
</script>

<style scoped lang="scss"></style>
