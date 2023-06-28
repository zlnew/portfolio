<script setup lang="ts">
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';
import { markRaw, onMounted, ref, watch } from 'vue';
import { extend } from '@vue/shared';

const component = extend({});
type VueComponent = InstanceType<typeof component>
const mainContent = ref<VueComponent>();
const url = new URL(window.location.href);
const headerRef = ref();
const width = screen.width;

console.log(width);

const isScreenSmall = (width: number) => {
  if (width >= 1024) return false;
  return true;
}

function navigate(hash: string) {
  switch(hash) {
    case '#about':
      mainContent.value = markRaw(About);
      break;
    case '#experience':
      mainContent.value = markRaw(Experience);
      break;
    case '#projects':
      mainContent.value = markRaw(Projects);
      break;
    default:
      mainContent.value = markRaw(About);
      break;
  }
}

onMounted(() => {
  if (isScreenSmall(width) == false) {
    navigate(url.hash);
    watch(() => headerRef.value.url, (url) => {
      navigate(url.hash);
    });
  }
});
</script>

<template>
  <div class="container">
    <div class="lg:flex lg:justify-between lg:gap-4">
      <Header ref="headerRef" />
      <main>
        <component v-if="width >= 1024" :is="mainContent" />
        <div v-else class="space-y-24">
          <About />
          <Experience />
          <Projects />
        </div>
      </main>
    </div>
  </div>
</template>