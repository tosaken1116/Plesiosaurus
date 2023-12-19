import { BreadCrumbs } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BreadCrumbs> = {
  component: BreadCrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BreadCrumbs>

export const Default: Story = {
  args: {
    crumbs: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    currentHref: '/',
  },
}
