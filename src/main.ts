import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaperclip, faArrowUpRightFromSquare, faDownload, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram, faNpm } from '@fortawesome/free-brands-svg-icons'

library.add(faPaperclip, faArrowUpRightFromSquare, faDownload, faUpRightAndDownLeftFromCenter, faGithub, faLinkedin, faInstagram, faNpm)

const pinia = createPinia()
const app = createApp(App)

app.component('fa-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
