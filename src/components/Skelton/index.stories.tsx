import { Skelton } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Skelton> = {
  component: Skelton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Skelton>

export const Default: Story = {
  args: { width: 200, height: 200 },
}
