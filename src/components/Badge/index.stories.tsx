import { Heart } from 'lucide-react'

import { Badge } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Badge> = {
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem', backgroundColor: 'gray', borderRadius: '8px' }}>
        Badge
      </div>
    ),
    badgeComponent: '1',
  },
}

export const LargeBadge: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem', backgroundColor: 'gray', borderRadius: '8px' }}>
        Badge
      </div>
    ),
    badgeComponent: '1000000',
  },
}

export const CustomBadge: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem', backgroundColor: 'gray', borderRadius: '8px' }}>
        Badge
      </div>
    ),
    badgeComponent: (
      <span style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0' }}>
        <Heart />
        1000
      </span>
    ),
  },
}
