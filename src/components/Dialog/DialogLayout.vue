<script setup lang="ts">
import { useDialogStore } from '@/stores/useDialogStore'

const dialog = useDialogStore()
</script>

<template>
  <Transition>
    <div
      v-if="dialog.state.component"
      class="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/80"
      @click.self="dialog.close"
    >
      <div
        class="z-20 max-w-xs rounded-lg bg-primary text-white shadow-lg shadow-accent/30 sm:max-w-md md:max-w-2xl"
      >
        <Component
          :is="dialog.state.component"
          v-bind="dialog.state.componentProps"
          @close="dialog.close"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
