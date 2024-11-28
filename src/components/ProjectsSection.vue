<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'

import { projects } from '@/resources'
import { useDialogStore } from '@/stores/useDialogStore'
import { Autoplay, FreeMode, Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Badge from './Badge.vue'
import ProjectOverview from './ProjectOverview.vue'
import ReadMore from './ReadMore.vue'
import SectionHeader from './SectionHeader.vue'
import SectionSubheader from './SectionSubheader.vue'

const swiperModules = [Autoplay, Pagination, Mousewheel, FreeMode]

const dialog = useDialogStore()

function openProjectOverview({
  title,
  description,
  url,
  overview
}: {
  description: string
  overview:
    | Array<{
        description: string
        src: string
        title: string
      }>
    | undefined
  title: string
  url: string | undefined
}) {
  dialog.open({
    component: ProjectOverview,
    componentProps: {
      title,
      url,
      description,
      overview
    }
  })
}
</script>

<template>
  <section
    id="projects"
    class="space-y-8"
  >
    <SectionHeader id="projects">Projects</SectionHeader>

    <Swiper
      :modules="swiperModules"
      :free-mode="true"
      :mousewheel="true"
      :slides-per-view="2"
      :space-between="25"
      :autoplay="{
        delay: 5000,
        pauseOnMouseEnter: true
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true
      }"
    >
      <SwiperSlide
        v-for="project in projects"
        :key="project.name"
      >
        <div class="mb-14 flex flex-col gap-4">
          <div class="relative rounded-lg transition-shadow hover:shadow-lg hover:shadow-accent/30">
            <img
              :src="project.image"
              :alt="project.name"
              width="500"
              height="300"
              class="rounded-lg"
            />
            <div
              title="Click to expand"
              class="absolute right-1 top-1 flex cursor-pointer items-center justify-center rounded-full bg-black p-2 opacity-60 transition-opacity hover:opacity-100"
              @click="
                openProjectOverview({
                  title: project.name,
                  description: project.description,
                  url: project.url,
                  overview: project.overview
                })
              "
            >
              <fa-icon icon="fa-solid fa-up-right-and-down-left-from-center" />
            </div>
          </div>

          <div class="col-span-3 space-y-3">
            <SectionSubheader
              :text="project.name"
              :url="project.url"
            />

            <ReadMore class="text-sm text-light md:text-base">
              {{ project.description }}
            </ReadMore>

            <div
              v-if="project.download"
              class="flex flex-wrap gap-4"
            >
              <span
                v-for="(url, place) in project.download"
                :key="url"
                class="text-sm capitalize"
              >
                <a
                  :href="url"
                  target="_blank"
                  class="transition hover:text-accent hover:no-underline"
                >
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
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style>
.swiper-pagination-bullet {
  background-color: #4ade80;
}
</style>
