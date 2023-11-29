<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'md' | 'lg'
  }>(), {
    size: 'md'
  }
)
</script>

<template>
  <span
    :class="{
      'px-1 text-sm': size === 'md',
      'px-2 py-1 text-base': size === 'lg'
    }"
    class="transition font-medium tracking-wider rounded-sm bg-emerald-900 hover:bg-accent hover:text-primary hover:shadow-md hover:shadow-accent/30"
  >
    <slot />
  </span>
</template>
