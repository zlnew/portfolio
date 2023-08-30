<script setup lang="ts">
import { experience } from '@/resources'

function toUrl (url: string | undefined): void {
  if (url !== undefined) {
    window.open(url, '_blank')
  }
}
</script>

<template>
  <section id="experience">
    <h5 class="section-header">Experience</h5>

    <div class="space-y-10">
      <div class="section-content" v-for="exp in experience" :key="exp.title" @click="toUrl(exp.url)">
        <div class="mb-4 lg:mb-0">
          <p class="pt-1 section-content-period">{{ exp.period.from }} - {{ exp.period.to }}</p>
        </div>
        <div class="col-span-3 space-y-3">
          <h5 class="section-content-header">{{ exp.title }} - {{ exp.company }} <fa-icon icon="fa-solid fa-arrow-up-right-from-square" size="xs" class="section-content-link hidden ml-2" /></h5>
          <p class="section-content-desc"> {{ exp.description }}</p>
          <div class="flex flex-wrap gap-4" v-if="exp.projects">
            <span v-for="project in exp.projects" :key="project.url">
              <a :href="project.url" target="_blank" class="section-content-project">
                <fa-icon icon="fa-solid fa-paperclip" class="mr-1" /> {{ project.name }}
              </a>
            </span>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="section-content-badge" v-for="tech in exp.tech" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
