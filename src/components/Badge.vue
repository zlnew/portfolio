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
      'px-1': size === 'md',
      'px-2 py-1': size === 'lg'
    }"
    class="transition text-sm font-medium tracking-wider rounded-sm bg-accent/80 text-primary hover:bg-accent"
  >
    <slot />
  </span>
</template>
