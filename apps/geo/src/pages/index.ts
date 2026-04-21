import type { RouteRecordRaw } from 'vue-router';

export { default as Routing } from './index.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('src/widgets/Layout'),
    children: [
      {
        path: '/',
        name: 'task-1',
        components: {
          panel: () => import('./Tasks/Task1'),
        },
      },
      {
        path: '/task2',
        name: 'task-2',
        components: {
          panel: () => import('./Tasks/Task2'),
        },
      },
      {
        path: '/task3',
        name: 'task-3',
        components: {
          panel: () => import('./Tasks/Task3'),
        },
      },
      {
        path: '/task4',
        name: 'task-4',
        components: {
          panel: () => import('./Tasks/Task4'),
        },
      },
    ],
  },
];
