<script setup lang="ts">
import { experience } from '@/resources';
import LinkIcon from '@/icons/Link.vue';
</script>

<template>
  <section id="experience">
    <h5 class="section-header">Experience</h5>

    <div class="space-y-10">
      <div v-for="exp in experience" :key="exp.title">
        <a :href="exp.url" target="_blank" class="section-content">
          <div class="mb-4 lg:mb-0">
            <p class="pt-1 section-content-period">{{ exp.period.from }} - {{ exp.period.to }}</p>
          </div>
          <div class="col-span-3 space-y-3">
            <h5 class="section-content-header">{{ exp.title }} - {{ exp.company }}</h5>
            <p class="section-content-desc"> {{ exp.description }}</p>
            <div class="flex flex-wrap gap-4" v-if="exp.projects">
              <span v-for="project in exp.projects">
                <a :href="project.url" target="_blank" class="section-content-project">
                  <link-icon /> {{ project.name }}
                </a>
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="section-content-badge" v-for="tech in exp.tech">{{ tech }}</span>
            </div>
          </div>
        </a>
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