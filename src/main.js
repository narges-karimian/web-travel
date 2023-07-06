import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import VueCookies from 'vue-cookies';
import VeeValidate from '@/utils/plugins/VeeValidate.js';
import Toast from '@/utils/plugins/Toast';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import BaseInput from '@/components/base/BaseInput.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseSpinner from '@/components/base/BaseSpinner.vue';

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router)
});

pinia.use(piniaPluginPersistedstate)


app.use(VeeValidate);
app.use(Toast);
app.use(pinia);
app.use(router);
app.use(VueCookies);

app.component('base-input', BaseInput);
app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner);

app.mount('#app');