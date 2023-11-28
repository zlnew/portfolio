<script setup lang="ts">
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
</script>

<template>
  <div class="mx-auto min-h-screen max-w-screen-xl py-12 px-6 md:px-12 md:py-20 lg:px-24 lg:py-0">
    <div class="lg:flex lg:justify-between lg:gap-16">
      <Header />
      <main class="pt-24 lg:w-1/2 lg:py-24">
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
