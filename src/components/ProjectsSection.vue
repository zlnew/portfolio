<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Mousewheel, FreeMode } from 'swiper/modules'
import { projects } from '@/resources'
import SectionHeader from './SectionHeader.vue'
import ReadMore from './ReadMore.vue'
import Badge from './Badge.vue'
import SectionSubheader from './SectionSubheader.vue'

const swiperModules = [Autoplay, Pagination, Mousewheel, FreeMode]
</script>

<template>
  <section id="projects" class="space-y-8">
    <SectionHeader id="projects">Projects</SectionHeader>

    <Swiper
      :modules="swiperModules"
      :free-mode="true"
      :mousewheel="true"
      :slides-per-view="2"
      :space-between="25"
      :autoplay="{
        delay: 5000,
        pauseOnMouseEnter: true,
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true
      }"
    >
      <SwiperSlide v-for="project in projects" :key="project.name">
        <div class="flex flex-col gap-4 mb-14">
          <a
            :href="project.url"
            target="_blank"
            class="rounded-lg transition-shadow hover:shadow-lg hover:shadow-accent/30"
          >
            <img
              :src="project.image"
              :alt="project.name"
              width="500"
              height="300"
              class="rounded-lg"
            >
          </a>

          <div class="col-span-3 space-y-3">
            <SectionSubheader :text="project.name" :url="project.url" />

            <ReadMore class="text-light text-sm md:text-base">
              {{ project.description }}
            </ReadMore>

            <div class="flex flex-wrap gap-4" v-if="project.download">
              <span v-for="(url, place) in project.download" :key="url" class="text-sm capitalize">
                <a :href="url" target="_blank" class="transition hover:text-accent hover:no-underline">
                  <fa-icon :icon="`fa-brands fa-${place}`" />
                  {{ place }}
                </a>
              </span>
            </div>

            <div class="flex flex-wrap gap-2">
              <Badge v-for="tech in project.tech" :key="tech">
                {{ tech }}
              </Badge>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style>
.swiper-pagination-bullet {
  background-color: #4ade80;
}
</style>
