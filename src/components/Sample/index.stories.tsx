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
  args: {
    animationProps: {
      hover: {
        animation: 'slide',
        option: {
          duration: '1s',
          direction: 'right',
        },
      },
      in: {
        animation: 'slide',
        option: {
          direction: 'left',
          duration: '1s',
        },
      },
    },
  },
}
