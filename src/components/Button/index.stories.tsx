/** @format */

import { Mail } from 'lucide-react'

import { Button, ButtonIcon } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    state: 'primary',
    children: 'Label',
  },
}

export const Secondary: Story = {
  args: {
    state: 'secondary',
    children: 'Label',
  },
}

export const Error: Story = {
  args: {
    state: 'error',
    children: 'Label',
  },
}

export const Icon: Story = {
  args: {
    state: 'primary',
    children: (
      <ButtonIcon>
        <Mail />
      </ButtonIcon>
    ),
  },
}

export const WithIcon: Story = {
  args: {
    state: 'primary',
    children: (
      <>
        Label
        <ButtonIcon>
          <Mail />
        </ButtonIcon>
      </>
    ),
  },
  // create button with icon story here
}
