<script setup lang="ts">
import { about } from '@/resources'
</script>

<template>
  <section id="about">
    <h3 class="section-header">About</h3>
    <p v-for="text in about" :key="text" v-html="text" />
  </section>
</template>
