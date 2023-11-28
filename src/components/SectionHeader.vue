<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>

<template>
  <a v-if="id" :href="`#${id}`" class="hover:no-underline">
    <h3 class="w-fit pl-2 uppercase border-l-2 border-accent">
      <slot />
    </h3>
  </a>

  <h3 v-else class="w-fit pl-2 uppercase border-l-2 border-accent">
    <slot />
  </h3>
</template>
