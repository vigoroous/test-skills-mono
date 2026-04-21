<script setup lang="ts">
import type { StyleValue } from 'vue';
import type { ClassType } from 'src/shared/types';

import AccordionContent from '../accordioncontent';

withDefaults(
  defineProps<{
    title?: string;
    hoverable?: boolean;
    titleClass?: ClassType;
    titleStyle?: StyleValue;
  }>(),
  {
    title: 'Заголовок',
  },
);

const show = defineModel({ default: true });
</script>

<template>
  <div class="flex flex-col">
    <button
      :class="[
        'flex items-center transition rounded-md px-2.5 py-1.5',
        { 'hover:bg-slate-100': hoverable },
      ]"
      @click="show = !show"
    >
      <div
        :class="[
          'leading-[20px] flex-1 text-sm font-500',
          'text-text-lines dark:text-dark-text-lines',
          'flex justify-start',
          titleClass,
        ]"
        :style="titleStyle"
      >
        {{ title }}
      </div>
      <div :class="['i-common:chevron-up transition-all text-2xl', { 'rotate-180': !show }]" />
    </button>
    <AccordionContent :show="show" content-class="pt-1">
      <slot />
    </AccordionContent>
  </div>
</template>
