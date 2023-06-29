import "@/assets/main.css";

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPaperclip, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faNpm } from '@fortawesome/free-brands-svg-icons';

library.add(faPaperclip, faArrowUpRightFromSquare, faGithub, faLinkedin, faInstagram, faNpm);

const app = createApp(App);

app.component('fa-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
