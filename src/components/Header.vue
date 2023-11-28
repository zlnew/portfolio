<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Socials from './Socials.vue'
import Badge from './Badge.vue'
import { me } from '@/resources'

const navigation = ['about', 'experience', 'projects']
const activeContentId = ref<any>('about')

onMounted(() => {
  const handleScroll = () => {
    const contentSections = document.querySelectorAll('section')
    const scrollPosition = window.scrollY

    for (const section of contentSections) {
      if (section instanceof HTMLElement) {
        const sectionOffsetTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (
          scrollPosition >= sectionOffsetTop &&
          scrollPosition < sectionOffsetTop + sectionHeight
        ) {
          activeContentId.value = sectionId
          break
        }
      }
    }
  }

  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <header class="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 space-y-4">
    <div class="mb-8 lg:mb-0">
      <h1 class="mb-2 text-4xl">
        {{ me.name }}
      </h1>

      <h2 class="transition text-light mb-6 tracking-widest hover:text-accent">
        {{ me.title }}
      </h2>

      <p class="text-light mb-6 max-w-sm">
        {{ me.short_bio }}
      </p>

      <div class="flex gap-2">
        <a
          href="/resume/Maulana Aprizqy Sumaryanto's Resume.pdf"
          target="_blank"
          class="hover:no-underline"
          title="Download Resume"
        >
          <Badge size="lg">
            Resume
            <fa-icon icon="fa-solid fa-download" size="sm" />
          </Badge>
        </a>
        <a
          href="https://aprizqy.com/"
          target="_blank"
          class="hover:no-underline"
          title="Aprizqy's Blog"
        >
          <Badge size="lg">
            Blog
            <fa-icon icon="fa-solid fa-arrow-up-right-from-square" size="sm" />
          </Badge>
        </a>
      </div>

      <nav class="hidden lg:block lg:py-12">
        <ul class="space-y-6">
          <li v-for="nav in navigation" :key="nav">
            <a
              :href="`#${nav}`"
              :class="{
                'font-bold border-l-2 border-accent pl-2': activeContentId === `${nav}`,
                'font-medium opacity-60 hover:opacity-100': activeContentId !== `${nav}`
              }"
              class="transition font-serif uppercase hover:no-underline"
            >
              {{ nav }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <Socials />
  </header>
</template>
