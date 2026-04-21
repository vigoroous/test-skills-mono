<script setup lang="ts">
import Map from 'src/shared/ui/Map';

const testPoints = [
  { long: 37.6052, lat: 55.7447 },
  { long: 37.6083, lat: 55.7432 },
  { long: 37.6145, lat: 55.7441 },
  { long: 37.6178, lat: 55.7481 },
  { long: 37.6214, lat: 55.7517 },
  { long: 37.6231, lat: 55.7525 },
  { long: 37.6256, lat: 55.751 },
  { long: 37.6288, lat: 55.7505 },
];
</script>

<template>
  <div class="h-full relative">
    <div class="absolute bg-white top-0 z-1000 mt-4 ml-4 p-4">
      <h2 class="text-xl font-bold">Задание 1</h2>
      <div class="w-150">
        <a
          href="https://www.figma.com/design/JRrVNBIw4c7fufsZGJwU6a/test-skills?m=auto&t=i7q88bKCQMLhuT1e-6"
          class="text-blue"
        >
          Фигма с тулбарами.
        </a>
        <span>Напиши мне, чтобы я дал доступ</span>
        <br /><br />
        1. Сделать тулбар и прокинуть внутрь компонента Map<br />
        2. Позиционирование: Вывести тулбар поверх карты снизу по центру<br />
        3. В тулбаре должна работать только кнопка смены темы, остальные декоративные<br />
        4. Апи смены темы на effector написать в файле<br />
        5. Смена темы меняет тему карты и тулбара<br /><br />
        См. файлы:<br />
        /src/app/providers/theme.ts<br />
        /src/app/index.vue<br />
      </div>
    </div>
    <Map :points="testPoints" :dark="true"> </Map>
  </div>
</template>
