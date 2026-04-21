// @unocss-include
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './index.vue';

const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    labelClass: 'text-sm',
    rounded: true,
  },
};

export const Icon: Story = {
  args: {
    icon: 'i-common:chevron-up text-xl',
    rounded: true,
  },
};

export const Badge: Story = {
  args: {
    label: 'Primary',
    rounded: true,
    badge: 3,
  },
};

export const IconEnd: Story = {
  args: {
    label: 'Добавить',
    rounded: true,
    iconEnd: 'i-common:plus',
  },
};

export const SizeSmall: Story = {
  args: {
    label: 'Удалить',
    rounded: true,
    iconEnd: 'i-common:trash-2',
    size: 'sm',
  },
};

export const Severity: Story = {
  args: {
    label: 'Экспортировать',
    rounded: true,
    icon: 'i-common:export',
    severity: 'secondary',
  },
};

export const Text: Story = {
  args: {
    label: 'Справочники',
    rounded: true,
    iconEnd: 'i-common:chevron-down',
    rootClass: 'w-65 justify-between',
    text: true,
  },
};
