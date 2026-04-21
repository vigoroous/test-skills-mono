<script setup lang="ts">
import { items } from './consts';
import NavItem from './ui/NavItem.vue';
</script>

<template>
  <div
    :class="[
      'flex flex-col justify-between w-73.5 rounded-[10px] px-4 py-5',
      'bg-background-background dark:bg-dark-background-background',
    ]"
  >
    <div class="flex flex-col flex-1 gap-7.5 max-h-[calc(100%-101px)] pb-7.5">
      <div class="flex flex-col flex-1 max-h-[calc(100%-58px)] overflow-y-auto">
        <NavItem v-for="(item, idx) in items" :key="idx" v-bind="item" />
      </div>
    </div>
  </div>
</template>
