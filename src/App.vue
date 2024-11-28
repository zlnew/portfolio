<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import DialogLayout from './components/Dialog/DialogLayout.vue'

const hello = ref<string>()

onMounted(() => {
  showHelloWorlds()
  showHelloWorlds()
  showHelloWorlds()
})

const showHelloWorlds = () => {
  hello.value = 'Hello World!'
}
</script>

<template>
  <RouterView />
  <DialogLayout />

  <div class="text-black">
    {{ hello }}
  </div>

  <p class="text-red-100 hover:bg-blue-100">{{ hello }}</p>
</template>
