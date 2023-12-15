import clsx from 'clsx'

import { vars } from '../global.css'

import {
  DialogTrigger,
  DialogContent,
  DialogHeading,
  DialogDescription,
  DialogClose,
} from '.'
import { Dialog } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  args: {
    children: [
      <h1>This is Dialog</h1>,
      <DialogTrigger asChild>
        <button
          type='button'
          style={{
            display: 'flex',
            padding: '8px 16px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            border: 'none',
            margin: '5px',
            borderRadius: vars.radius.lg,
            background: vars.background.primary,
            color: vars.foreground.primary,
          }}
        >
          Open Dialog
        </button>
      </DialogTrigger>,
      <DialogContent className={clsx()}>
        <DialogHeading>My dialog heading</DialogHeading>
        <DialogDescription>My dialog description</DialogDescription>
        <DialogClose asChild>
          <button
            type='button'
            style={{
              display: 'flex',
              padding: '8px 16px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              border: 'none',
              margin: '5px',
              borderRadius: vars.radius.lg,
              background: vars.background.primary,
              color: vars.foreground.primary,
            }}
          >
            Close Dialog
          </button>
        </DialogClose>
      </DialogContent>,
    ],
  },
}
