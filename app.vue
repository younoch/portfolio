<template>
  <UNotifications>
    <NuxtLayout>
      <NuxtPage :page-key="(route) => route.fullPath" />
    </NuxtLayout>
  </UNotifications>
</template>
