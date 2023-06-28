<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';

const url = ref(new URL(window.location.href));
const navigation = ['about', 'experience', 'projects'];

function navigate(nav: string) {
  url.value = new URL(window.location.href);
  url.value.hash = nav;
}

defineExpose({ url });
</script>

<template>
  <header class="space-y-4">
    <div>
      <h1 class="mb-2 text-accent text-4xl lg:text-4xl xl:text-5xl">Maulana Aprizqy</h1>
      <h2 class="mb-6 font-medium text-xl lg:text-2xl">Web Developer</h2>
      <p class="mb-4 max-w-sm">I love visualizing ideas into useful websites for many.</p>
      <nav class="nav">
        <ul class="space-y-6">
          <li v-for="nav in navigation" :key="nav">
            <a
              @click="navigate(nav)"
              class="nav-link"
              :href="`#${nav}`"
              :class="{active: url.hash == `#${nav}`}"
              >{{ nav }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      Social Media
    </div>
  </header>
</template>