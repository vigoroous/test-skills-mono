<script setup lang="ts">
import Navigation from '../Navigation';
</script>

<template>
  <div class="w-full h-screen relative">
    <div class="flex w-full h-full p-5 bg-background-secondary dark:bg-background-secondary">
      <Navigation class="h-full mr-5 shrink-0" />
      <div
        :class="[
          'h-full w-[calc(100%-50rem)] flex-1 p-5 rounded-[10px]',
          'bg-background-background dark:bg-background-background',
          'shadow-layout dark:shadow-dark-layout',
        ]"
      >
        <slot name="panel" />
      </div>
    </div>
  </div>
</template>
