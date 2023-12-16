<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import SectionSubheader from './SectionSubheader.vue'

const swiperModules = [Pagination]

defineEmits(['close'])

defineProps<{
  title: string
  description: string
  url: string | undefined
  overview: Array<{
    src: string
    title: string
    description: string
  }> | undefined
}>()
</script>

<template>
  <div class="p-4 flex justify-between items-center gap-8">
    <h2 class="text-xl">{{ title }}</h2>
    <span
      class="cursor-pointer float-right font-bold text-3xl hover:text-accent"
      @click="$emit('close')"
    >
      &times;
    </span>
  </div>

  <div class="p-4 max-w-lg space-y-6">
    <div class="space-y-2">
      <p>{{ description }}</p>
      <div v-if="url">
        <a :href="url" target="_blank" rel="noopener noreferrer" class="link">
          Visit site
        </a>
      </div>
    </div>

    <hr class="border-accent/30">

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
      <SwiperSlide v-for="item in overview" :key="item.title">
        <div class="flex flex-col gap-4 mb-14">
          <img
            :src="item.src"
            :alt="item.description"
            width="500"
            height="300"
            class="rounded-lg"
          >

          <div class="text-start space-y-3">
            <SectionSubheader :text="item.title" />

            <p class="text-light text-sm md:text-base">
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
