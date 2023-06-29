<script setup lang="ts">
import { ref } from 'vue';
import { me } from '@/resources';

const url = ref(new URL(window.location.href));
const navigation = ['about', 'experience', 'projects'];

function navigate(nav: string) {
  url.value = new URL(window.location.href);
  url.value.hash = nav;
}

if (url.value.hash.length < 1) {
  url.value.hash = navigation[0];
}

defineExpose({ url });
</script>

<template>
  <header class="space-y-4">
    <div>
      <h1 class="mb-2 text-4xl lg:text-5xl xl:text-5xl">{{ me.name }}</h1>
      <h2 class="mb-6 font-medium text-xl lg:text-xl">{{ me.title }}</h2>
      <p class="mb-4 max-w-sm">{{ me.short_bio }}</p>
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