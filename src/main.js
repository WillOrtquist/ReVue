import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';

import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

library.add(faTrash)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(store);
app.mount('#app');
