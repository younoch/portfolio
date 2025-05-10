<template>
  <div class="light">
    <NuxtLayout>
      <NuxtPage :page-key="(route) => route.fullPath" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

</script>