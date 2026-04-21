<script setup lang="ts">
import type { ClassType } from 'src/shared/types';

const emit = defineEmits(['expanded']);
const props = defineProps<{
  show?: boolean;
  contentClass?: ClassType;
  maxHeightAuto?: boolean;
  appear?: boolean;
  forceRender?: boolean;
}>();

const hideContent = (el: Element) => {
  (el as HTMLElement).style.maxHeight = '0';
};

const showContent = (el: Element) => {
  if (props.maxHeightAuto) {
    (el as HTMLElement).style.maxHeight = 'none';
  } else {
    (el as HTMLElement).style.maxHeight = `${el.scrollHeight}px`;
  }
};

const afterShow = (el: Element) => {
  (el as HTMLElement).style.maxHeight = 'none';
  emit('expanded');
};
</script>

<template>
  <Transition
    v-if="forceRender"
    :appear="appear"
    @before-enter="hideContent"
    @enter="showContent"
    @after-enter="afterShow"
    @before-leave="showContent"
    @leave="hideContent"
  >
    <div v-show="show" ref="elRef" :class="['transition-all overflow-hidden', contentClass]">
      <slot />
    </div>
  </Transition>
  <Transition
    v-else
    :appear="appear"
    @before-enter="hideContent"
    @enter="showContent"
    @after-enter="afterShow"
    @before-leave="showContent"
    @leave="hideContent"
  >
    <div v-if="show" ref="elRef" :class="['transition-all overflow-hidden', contentClass]">
      <slot />
    </div>
  </Transition>
</template>
