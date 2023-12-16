import { RadioButton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {},
};
