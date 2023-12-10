import { Divider } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Divider> = {
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  decorators: [
    (Story): JSX.Element => (
      <div style={{ width: '100px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story): JSX.Element => (
      <div style={{ height: '100px' }}>
        <Story />
      </div>
    ),
  ],
}
