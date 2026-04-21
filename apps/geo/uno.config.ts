// uno.config.ts
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import presetWind from '@unocss/preset-wind3';
import { defineConfig, presetIcons, transformerDirectives } from 'unocss';

import { colors } from './uno.figma';

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/shared/theme/**/*.{js,ts}',
      ],
    },
  },
  presets: [
    presetWind({ dark: 'class' }),
    presetIcons({
      collections: {
        common: FileSystemIconLoader('./src/shared/assets/icons/common'),
      },
      customizations: {
        iconCustomizer(collection, icon, props) {
          props.width = '1em';
          props.height = '1em';
        },
      },
    }),
  ],
  transformers: [transformerDirectives()],
  rules: [
    ['shadow-layout', { 'box-shadow': '0px 6px 12px 0px rgba(0, 0, 0, 0.08)' }],
    ['shadow-dark-layout', { 'box-shadow': '0px 6px 12px 0px rgba(0, 0, 0, 0.24)' }],
    ['shadow-project-card', { 'box-shadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.2)' }],
    ['shadow-dark-project-card', { 'box-shadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.6)' }],
    ['shadow-modal', { 'box-shadow': '0px 10px 10px 0px rgba(0, 0, 0, 0.25)' }],
    ['shadow-panel', { 'box-shadow': '-4px 0 10px 0 rgba(0, 0, 0, 0.1)' }],
    ['shadow-chart', { 'box-shadow': '0 6.23px 31.15px 0 rgba(0, 0, 0, 0.1)' }],
  ],
  theme: {
    colors: {
      ...colors,

      surface: {
        0: 'rgb(255, 255, 255)',
        50: 'rgb(248, 250, 252)',
        100: 'rgb(241, 245, 249)',
        200: 'rgb(226, 232, 240)',
        300: 'rgb(203, 213, 225)',
        400: 'rgb(148, 163, 184)',
        500: 'rgb(100, 116, 139)',
        600: 'rgb(71, 85, 105)',
        700: 'rgb(45, 55, 72)',
        800: 'rgb(30, 41, 59)',
        900: 'rgb(15, 23, 42)',
        950: 'rgb(3, 6, 23)',
      },
      primary: {
        50: 'rgb(236, 253, 245)',
        100: 'rgb(209, 250, 229)',
        200: 'rgb(167, 243, 208)',
        300: 'rgb(110, 231, 183)',
        400: 'rgb(52, 211, 153)',
        500: 'rgb(16, 185, 129)',
        600: 'rgb(5, 150, 105)',
        700: 'rgb(4, 120, 87)',
        800: 'rgb(6, 95, 70)',
        900: 'rgb(4, 78, 56)',
        950: 'rgb(2, 44, 34)',
      },
    },
  },
  preflights: [
    {
      getCSS: () => `
        * {
          font-family: "Inter";
        }
      `,
    },
  ],
});
