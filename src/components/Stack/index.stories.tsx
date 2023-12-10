import { Divider } from '..'

import { Stack } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Stack> = {
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Stack>

export const Horizontal: Story = {
  args: {
    children: [
      <div>This is Stack</div>,
      <div>This is Stack</div>,
      <div>This is Stack</div>,
    ],
    direction: { sm: 'row', md: 'row' },
    spacing: { sm: 0, md: 2 },
    alignItems: { sm: 'center', md: 'center' },
    justifyContent: { sm: 'center', md: 'center' },
    divider: <Divider orientation='vertical' />,
    style: { width: '100%', height: '30px' },
  },
}

export const Vertical: Story = {
  args: {
    children: [
      <div>This is Stack</div>,
      <div>This is Stack</div>,
      <div>This is Stack</div>,
    ],
    direction: { sm: 'column', md: 'column' },
    spacing: { sm: 0, md: 2 },
    alignItems: { sm: 'center', md: 'center' },
    justifyContent: { sm: 'center', md: 'center' },
    divider: <Divider orientation='horizontal' />,
    style: { width: '100px', height: '100%' },
  },
}
