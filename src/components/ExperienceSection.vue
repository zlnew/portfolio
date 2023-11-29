<script setup lang="ts">
import { experience } from '@/resources'
import SectionHeader from './SectionHeader.vue'
import Badge from './Badge.vue'
import SectionSubheader from './SectionSubheader.vue'
</script>

<template>
  <section id="experience" class="space-y-8">
    <SectionHeader id="experience">Experience</SectionHeader>

    <div class="space-y-8">
      <div
        v-for="exp in experience"
        :key="exp.title"
        class="grid grid-cols-4 gap-4"
      >
        <span class="text-xs md:text-sm tracking-widest text-light">
          {{ exp.period.from }} - {{ exp.period.to }}
        </span>

        <div class="col-span-3 space-y-3">
          <SectionSubheader :text="exp.company" :url="exp.url" />

          <p class="text-light text-sm md:text-base">
            {{ exp.description }}
          </p>

          <div class="flex flex-wrap gap-2" v-if="exp.projects">
            <span v-for="project in exp.projects" :key="project.url" class="text-sm">
              <a :href="project.url" target="_blank" class="transition hover:text-accent hover:no-underline">
                <fa-icon icon="fa-solid fa-paperclip" />
                {{ project.name }}
              </a>
            </span>
          </div>

          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="tech in exp.tech"
              :key="tech"
            >
              {{ tech }}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
