import { Divider } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Divider> = {
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};
