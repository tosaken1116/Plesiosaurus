import { ProgressBar } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: { range: 300, progress: 50 },
}
