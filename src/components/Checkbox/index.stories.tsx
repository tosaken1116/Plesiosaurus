import { Checkbox } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    id: 'checkbox_storybook',
  },
  decorators: [
    (Story): JSX.Element => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Story />
        <label htmlFor='checkbox_storybook'>This is a checkbox.</label>
      </div>
    ),
  ],
}
