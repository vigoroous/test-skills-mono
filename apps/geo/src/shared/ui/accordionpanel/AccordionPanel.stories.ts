// @unocss-include
import type { Decorator, Meta, StoryObj } from '@storybook/vue3';

import AccordionPanel from './index.vue';

const meta = {
  title: 'ui/AccordionPanel',
  component: AccordionPanel,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} satisfies Meta<typeof AccordionPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

const WithAccordeonContent: Decorator = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AccordionPanel },
  template: `
      <AccordionPanel title="Title" class="max-w-120" hoverable>
        <div class="px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </AccordionPanel>
    `,
});

export const Primary: Story = {
  args: {},
  decorators: [WithAccordeonContent],
};
