<script setup lang="ts">
import { computed } from 'vue';
import ProgressSpinner from 'primevue/progressspinner';
import type { ClassType } from 'src/shared/types';

import type { ButtonProps } from '../types';

const props = defineProps<ButtonProps>();

const labelClassCommon = computed(
  () =>
    [
      props.labelClass,
      'transition-all duration-100 ease-out',
      'font-500',
      {
        'text-sm leading-[24px]': !props.size,
        'text-xs leading-[100%]': props.size === 'sm',
      },
      {
        'xl:block hidden': props.compact,
        'ml-2': !!props.icon,
        'mr-2': !!props.iconEnd,
      },
      {
        'group-active:text-text-hover group-active:dark:text-dark-text-hover':
          props.text && !props.disabled,
      },
      { 'text-button-text dark:bg-dark-button-text': !props.text && !props.severity },
      {
        'text-button-text-secondary dark:bg-dark-button-text-secondary':
          !props.text && props.severity === 'secondary',
        'group-hover:text-button-text':
          !props.text && props.severity === 'secondary' && !props.disabled,
        'text-text-red dark:text-dark-text-red': !props.text && props.severity === 'error',
      },
    ] satisfies ClassType,
);

const iconClassCommon = computed(
  () =>
    [
      'transition-all duration-100 ease-out',
      {
        'text-xl': !props.size,
        'text-base': props.size === 'sm',
      },
      {
        'group-active:text-text-hover group-active:dark:text-dark-text-hover':
          props.text && !props.disabled,
      },
      { 'text-button-icon dark:bg-dark-button-icon': !props.text && !props.severity },
      {
        'text-button-icon-secondary dark:bg-dark-button-icon-secondary':
          !props.text && props.severity === 'secondary',
        'group-hover:text-button-icon':
          !props.text && props.severity === 'secondary' && !props.disabled,
      },
    ] satisfies ClassType,
);
</script>

<template>
  <div v-if="icon && !loading" :class="[iconClassCommon, icon]" />
  <ProgressSpinner v-else-if="loading" class="!h-4 !w-4 ml-0 mr-1" stroke-width="5" />
  <div v-if="label" :class="labelClassCommon">
    {{ label }}
  </div>
  <div v-if="iconEnd && !loading" :class="[iconClassCommon, iconEnd]" />
</template>
