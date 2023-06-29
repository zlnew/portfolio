<script setup lang="ts">
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
</script>

<template>
  <div class="container">
    <div class="lg:flex lg:justify-between lg:gap-4">
      <Header ref="headerRef" />
      <main>
        <div class="space-y-24">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  </div>
</template>