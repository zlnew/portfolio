<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Social from './Social.vue';
import { me } from '@/resources';

const navigation = ['about', 'experience', 'projects'];
const activeContentId = ref<any>('about');

onMounted(() => {
  const handleScroll = () => {
    const contentSections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    for (const section of contentSections) {
      if (section instanceof HTMLElement) {
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
  
        if (
          scrollPosition >= sectionOffsetTop &&
          scrollPosition < sectionOffsetTop + sectionHeight
        ) {
          activeContentId.value = sectionId;
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
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
              class="nav-link"
              :href="`#${nav}`"
              :class="{active: activeContentId == `${nav}`}"
              >{{ nav }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="space-x-4">
      <Social />
    </div>
  </header>
</template>