<script setup lang="ts">
useHead({
  title: 'Nuxt3 Starter',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <a-button type="primary">
      Primary Button
    </a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">
      Dashed Button
    </a-button>
    <a-button type="text">
      Text Button
    </a-button>
    <a-button type="link">
      Link Button
    </a-button>
  </div>
</template>
