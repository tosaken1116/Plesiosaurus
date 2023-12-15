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
      <h1>Floating UI — Dialog</h1>,
      <DialogTrigger>My trigger</DialogTrigger>,
      <DialogContent className='Dialog'>
        <DialogHeading>My dialog heading</DialogHeading>
        <DialogDescription>My dialog description</DialogDescription>
        <DialogClose>Close</DialogClose>
      </DialogContent>,
    ],
  },
}
