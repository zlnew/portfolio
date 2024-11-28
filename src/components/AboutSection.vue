<script setup lang="ts">
import { about } from '@/resources'
import SectionHeader from './SectionHeader.vue'
</script>

<template>
  <section
    id="about"
    class="space-y-8"
  >
    <SectionHeader id="about">About</SectionHeader>

    <div class="space-y-4 text-light">
      <p
        v-for="text in about"
        :key="text"
        v-html="text"
      />
    </div>
  </section>
</template>
