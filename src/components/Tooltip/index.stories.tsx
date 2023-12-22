import { Tooltip } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: { children: 'hoverしてぇ', text: 'こんにちは', width: 's' },
}

export const Moving: Story = {
  args: {
    children: 'hoverしてぇ',
    text: 'こんにちは',
    width: 'm',
    moving: true,
  },
}
