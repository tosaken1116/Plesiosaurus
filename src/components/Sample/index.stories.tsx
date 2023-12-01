import { Sample } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Sample> = {
  component: Sample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Sample>

export const Default: Story = {
  args: {},
}
