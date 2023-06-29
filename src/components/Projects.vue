<script setup lang="ts">
import { projects } from '@/resources';

function toUrl(url: string | undefined): void {
  if (url) {
    window.open(url, '_blank');
  }
}
</script>

<template>
  <section id="projects">
    <h5 class="section-header">Projects</h5>

    <div class="space-y-10">
      <div class="section-content" v-for="project in projects" :key="project.name" @click="toUrl(project.url)">
        <div class="mb-4 lg:mb-0">
          <img class="border border-accent/10" :src="project.image" :alt="project.name">
        </div>
        <div class="col-span-3 space-y-3">
          <h5 class="section-content-header">{{ project.name }} <fa-icon icon="fa-solid fa-arrow-up-right-from-square" size="xs" class="section-content-link hidden ml-2" /></h5>
          <p class="section-content-desc"> {{ project.description }}</p>
          <div class="flex flex-wrap gap-4" v-if="project.download">
            <span v-for="(url, place) in project.download">
              <a :href="url" target="_blank" class="section-content-project capitalize">
                <fa-icon :icon="`fa-brands fa-${place}`" class="mr-1" /> {{ place }}
              </a>
            </span>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="section-content-badge" v-for="tech in project.tech">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.humbleicons {
	width: 1.2em;
	height: 1.2em;
	display: inline-block;
	align-self: center;
	vertical-align: middle;
	margin-top: -0.1em;
}
</style>