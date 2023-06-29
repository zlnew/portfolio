<script setup lang="ts">
import { about } from '@/resources';
</script>

<template>
  <section id="about">
    <h5 class="section-header">About</h5>
    <p v-for="text in about" v-html="text" />
  </section>
</template>