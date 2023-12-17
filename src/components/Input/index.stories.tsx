import { Input } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { title: 'test' },
}

export const Close: Story = {
  args: { title: 'test', close: true },
}

export const Moving: Story = {
  args: { title: 'test', moving: true },
}
