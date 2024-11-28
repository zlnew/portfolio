<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SectionSubheader from './SectionSubheader.vue'

const swiperModules = [Pagination]

defineEmits(['close'])

defineProps<{
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
}>()
</script>

<template>
  <div class="flex items-center justify-between gap-8 p-4">
    <h2 class="text-xl">{{ title }}</h2>
    <span
      class="float-right cursor-pointer text-3xl font-bold hover:text-accent"
      @click="$emit('close')"
    >
      &times;
    </span>
  </div>

  <div class="max-w-lg space-y-6 p-4">
    <div class="space-y-2">
      <p>{{ description }}</p>
      <div v-if="url">
        <a
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          Visit site
        </a>
      </div>
    </div>

    <hr class="border-accent/30" />

    <Swiper
      v-if="overview"
      :modules="swiperModules"
      :slides-per-view="1"
      :space-between="25"
      :pagination="{
        clickable: true,
        dynamicBullets: true
      }"
      :auto-height="true"
    >
      <SwiperSlide
        v-for="item in overview"
        :key="item.title"
      >
        <div class="mb-14 flex flex-col gap-4">
          <img
            :src="item.src"
            :alt="item.description"
            width="500"
            height="300"
            class="rounded-lg"
          />

          <div class="space-y-3 text-start">
            <SectionSubheader :text="item.title" />

            <p class="text-sm text-light md:text-base">
              {{ item.description }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-pagination-bullet {
  background-color: #4ade80;
}
.swiper-button-prev,
.swiper-button-next {
  color: #4ade80;
}
</style>
