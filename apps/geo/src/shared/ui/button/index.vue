<script setup lang="ts">
import { computed, type UnwrapRef } from 'vue';
import type { ClassType } from 'src/shared/types';
import { RouterLink, useLink } from 'vue-router';

import type { ButtonProps } from './types';
import ButtonInner from './ui/ButtonInner.vue';

const props = defineProps<ButtonProps>();
defineEmits<{ click: [e: MouseEvent] }>();

const buttonClassCommon = computed(
  () =>
    [
      props.rootClass,
      'group',
      'flex justify-center items-center',
      'shrink-0 border-0 outline-0 cursor-pointer',
      'transition-all duration-100 ease-out',
      'disabled:cursor-default',
      'relative',
      {
        'py-2 px-4': !props.size,
        'py-1.5 px-2 min-h-7': props.size === 'sm',
      },
      {
        'rounded-md': props.rounded === true,
        rounded: props.rounded === 'sm',
      },
      { 'opacity-70': props.disabled },
      {
        'bg-transparent dark:bg-transparent': props.text && !props.pressed,
        'bg-button-bg-secondary dark:bg-dark-button-bg-secondary': props.text && props.pressed,
        'hover:bg-button-bg-secondary dark:hover:bg-dark-button-bg-secondary':
          props.text && !props.disabled,
        'active:bg-button-bg-secondary dark:active:bg-dark-button-bg-secondary':
          props.text && !props.disabled,
      },
      {
        'bg-button-bg dark:bg-dark-button-bg': !props.text && !props.severity,
        'hover:bg-button-bg-hover dark:hover:bg-dark-button-bg-hover':
          !props.text && !props.severity && !props.disabled,
        'active:bg-button-bg-hover dark:active:bg-dark-button-bg-hover':
          !props.text && !props.severity && !props.disabled,
      },
      {
        'bg-button-bg-secondary dark:bg-dark-button-bg-secondary':
          !props.text && props.severity === 'secondary',
        'hover:bg-button-bg-hover dark:hover:bg-dark-button-bg-hover':
          !props.text && props.severity === 'secondary' && !props.disabled,
        'active:bg-button-bg-hover dark:active:bg-dark-button-bg-hover':
          !props.text && props.severity === 'secondary' && !props.disabled,
      },
      {
        'bg-button-bg-secondary dark:bg-dark-button-bg-secondary':
          !props.text && props.severity === 'error',
        'hover:bg-button-bg-hover dark:hover:bg-dark-button-bg-hover':
          !props.text && props.severity === 'error' && !props.disabled,
        'active:bg-button-bg-hover dark:active:bg-dark-button-bg-hover':
          !props.text && props.severity === 'error' && !props.disabled,
      },
    ] satisfies ClassType,
);

const onClickLink = (e: MouseEvent, { navigate }: UnwrapRef<ReturnType<typeof useLink>>) => {
  if (props.disabled) e.preventDefault();
  navigate(e);
};
</script>

<template>
  <RouterLink v-if="to" :to="to" custom v-slot="routerSlot" >
    <a
      @click="onClickLink($event, routerSlot)"
      :href="routerSlot.href"
      :class="[
        buttonClassCommon,
        {
          '!hover:bg-button-bg-secondary dark:hover:bg-dark-button-bg-secondary': props.text,
          '!active:bg-button-bg-secondary dark:active:bg-dark-button-bg-secondary': props.text,
          '!bg-transparent dark:bg-transparent': props.text && !routerSlot.isExactActive,
          '!bg-button-bg-secondary dark:bg-dark-button-bg-secondary':
            props.text && routerSlot.isExactActive,
        },
      ]"
      :style="rootStyle"
    >
      <ButtonInner v-bind="props" />
    </a>
  </RouterLink>
  <button
    v-else
    :class="buttonClassCommon"
    :style="rootStyle"
    :disabled="disabled"
    @click="(e) => $emit('click', e)"
  >
    <ButtonInner v-bind="props" />
  </button>
</template>
