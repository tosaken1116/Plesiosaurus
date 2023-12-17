import { RadioButtonGroup } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RadioButtonGroup> = {
  component: RadioButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RadioButtonGroup>

export const Default: Story = {
  args: {
    options: ['Option1', 'Option2', 'Option3'],
    defaultValue: 'Option1',
  },
}

export const ZoomIn: Story = {
  args: {
    options: ['Option1', 'Option2', 'Option3'],
    defaultValue: 'Option1',
    zoomIn: true,
  },
}
