<script setup lang="ts">
import { projects } from '@/resources'
import SectionHeader from './SectionHeader.vue'
import Badge from './Badge.vue'
</script>

<template>
  <section id="projects" class="space-y-8">
    <SectionHeader id="projects">Projects</SectionHeader>

    <div class="space-y-8">
      <div
        v-for="project in projects"
        :key="project.name"
        class="grid grid-cols-4 gap-4"
      >
        <a :href="project.url" target="_blank" class="h-fit">
          <img
            :src="project.image"
            :alt="project.name"
            width="500"
            height="300"
          >
        </a>

        <div class="col-span-3 space-y-3">
          <a v-if="project.url" :href="project.url" target="_blank">
            <h4>
              {{ project.name }}
            </h4>
          </a>

          <h4 v-else>
            {{ project.name }}
          </h4>

          <p class="text-light text-sm md:text-base">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-4" v-if="project.download">
            <span v-for="(url, place) in project.download" :key="url" class="text-sm capitalize">
              <a :href="url" target="_blank" class="transition hover:text-accent hover:no-underline">
                <fa-icon :icon="`fa-brands fa-${place}`" />
                {{ place }}
              </a>
            </span>
          </div>

          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="tech in project.tech"
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
