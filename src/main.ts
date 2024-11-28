import '@/assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faInstagram, faLinkedin, faNpm } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faDownload,
  faPaperclip,
  faUpRightAndDownLeftFromCenter
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faPaperclip,
  faArrowUpRightFromSquare,
  faDownload,
  faUpRightAndDownLeftFromCenter,
  faGithub,
  faLinkedin,
  faInstagram,
  faNpm
)

const pinia = createPinia()
const app = createApp(App)

app.component('FaIcon', FontAwesomeIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
