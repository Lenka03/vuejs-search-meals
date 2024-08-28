<template>
    <a :href="href" target="_blank"
    class="px-3 py-2 rounded border-2 text-black border-black-700 bg-white hover:border-red-600 transition-colors">
      <slot>YouTube</slot>
    </a>
  </template>
  
  <script setup>
  const props = defineProps({
    href: String
  })

  </script>