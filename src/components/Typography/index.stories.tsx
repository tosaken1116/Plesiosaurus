import { vars } from '../../global.css'

import { Typography } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Typography> = {
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Typography>

export const H1: Story = {
  args: {
    component: 'h1',
    variant: 'h1',
    children: 'This is H1.',
  },
}

export const H2: Story = {
  args: {
    component: 'h2',
    variant: 'h2',
    children: 'This is H2.',
  },
}

export const H3: Story = {
  args: {
    component: 'h3',
    variant: 'h3',
    children: 'This is H3.',
  },
}

export const H4: Story = {
  args: {
    component: 'h4',
    variant: 'h4',
    children: 'This is H4.',
  },
}

export const H5: Story = {
  args: {
    component: 'h5',
    variant: 'h5',
    children: 'This is H5.',
  },
}

export const H6: Story = {
  args: {
    component: 'h6',
    variant: 'h6',
    children: 'This is H6.',
  },
}

export const Paragraph: Story = {
  args: {
    component: 'p',
    variant: 'p',
    children: 'This is Paragraph.',
  },
}

export const BodyLarge: Story = {
  args: {
    component: 'p',
    variant: 'body-large',
    children: 'This is BodyLarge.',
  },
}

export const BodyMedium: Story = {
  args: {
    component: 'p',
    variant: 'body-medium',
    children: 'This is BodyMedium.',
  },
}

export const BodySmall: Story = {
  args: {
    component: 'p',
    variant: 'body-small',
    children: 'This is BodySmall.',
  },
}

export const Backquote: Story = {
  args: {
    component: 'p',
    variant: 'backquote',
    children: 'This is Backquote.',
  },
}

export const ParagraphWithColor: Story = {
  args: {
    component: 'p',
    variant: 'p',
    children: 'This is Paragraph with orange color.',
    style: {
      color: vars.colors.orange['500'],
    },
  },
}
