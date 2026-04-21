import App from './index.vue';
import { primevueConfig, router } from './providers';

import './providers/api';

import { VueQueryPlugin } from '@tanstack/vue-query';

import { queryClient } from './providers/api';
import VXETable from './providers/vxeLang';

import '@unocss/reset/tailwind.css';

import PrimeVue from 'primevue/config';
import DialogService from 'primevue/dialogservice';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';

// fonts
import 'src/shared/assets/fonts/inter/stylesheet.css';
import 'src/shared/styles/scrollbar-theme.css';
import 'virtual:uno.css';

import { createApp } from 'vue';

import 'vxe-table/lib/style.css';

const app = createApp(App);
app.use(PrimeVue, primevueConfig);
app.directive('tooltip', Tooltip);
app.use(DialogService);
app.use(ToastService);
app.use(router);
app.use(VXETable);
app.use(VueQueryPlugin, { queryClient });

export default app;
