<script setup lang="ts">
import { useDialogStore } from '@/stores/useDialogStore'

const dialog = useDialogStore()
</script>

<template>
  <Transition>
    <div
      v-if="dialog.state.component"
      class="z-10 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/80"
      @click.self="dialog.close"
    >
      <div class="z-20 max-w-xs sm:max-w-md md:max-w-2xl bg-primary text-white rounded-lg shadow-lg shadow-accent/30">
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
