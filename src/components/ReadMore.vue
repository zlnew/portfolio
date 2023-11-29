<script setup lang="ts">
import { ref } from 'vue'

const readMoreStatus = ref(false)
</script>

<template>
  <div class="space-y-1">
    <p :class="{ 'line-clamp-2': !readMoreStatus }">
      <slot />
    </p>

    <div>
      <a
        v-if="!readMoreStatus"
        href="javascript:void(0)"
        class="text-xs md:text-sm link"
        @click="readMoreStatus = true"
      >
        Read More
      </a>
      <a
        v-if="readMoreStatus"
        href="javascript:void(0)"
        class="text-xs md:text-sm link"
        @click="readMoreStatus = false"
      >
        Read Less
      </a>
    </div>
  </div>
</template>
