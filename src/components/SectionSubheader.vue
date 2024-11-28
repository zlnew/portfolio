<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  text: string
  url?: string
}>()

const hovered = ref(false)
</script>

<template>
  <a
    v-if="url"
    :href="url"
    target="_blank"
    class="flex w-fit items-center gap-2"
  >
    <h4
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
      @touchstart="hovered = true"
      @touchend="hovered = false"
    >
      {{ text }}
    </h4>

    <fa-icon
      v-if="hovered"
      icon="fa-solid fa-arrow-up-right-from-square"
      size="xs"
    />
  </a>

  <h4 v-else>
    {{ text }}
  </h4>
</template>
