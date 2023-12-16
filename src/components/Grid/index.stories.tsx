import { Grid, GridItem } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Grid> = {
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Grid>

export const Columns: Story = {
  args: {
    children: [
      <GridItem gridColumnStart={1} gridColumnEnd={3}>
        <div key='1' style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
          1
        </div>
      </GridItem>,
      <GridItem gridColumnStart={3} gridColumnEnd={5}>
        <div key='2' style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>
          2
        </div>
      </GridItem>,
      <GridItem gridColumnStart={5} gridColumnEnd={13}>
        <div key='3' style={{ backgroundColor: 'green', width: '100%', height: '100%' }}>
          3
        </div>
      </GridItem>,
      <GridItem gridColumnStart={1} gridColumnEnd={5}>
        <div key='1' style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
          4
        </div>
      </GridItem>,
      <GridItem gridColumnStart={5} gridColumnEnd={8}>
        <div key='2' style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>
          5
        </div>
      </GridItem>,
      <GridItem gridColumnStart={8} gridColumnEnd={13}>
        <div key='3' style={{ backgroundColor: 'green', width: '100%', height: '100%' }}>
          6
        </div>
      </GridItem>,
    ],
    columnSpacing: { xs: 2, lg: 3 },
    rowSpacing: { xs: 1, lg: 2 },
    style: { minWidth: '600px', minHeight: '400px' },
  },
}

export const Rows: Story = {
  args: {
    children: [
      <GridItem gridRowStart={1} gridRowEnd={3}>
        <div key='1' style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
          1
        </div>
      </GridItem>,
      <GridItem gridRowStart={3} gridRowEnd={5}>
        <div key='2' style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>
          2
        </div>
      </GridItem>,
      <GridItem gridRowStart={5} gridRowEnd={13}>
        <div key='3' style={{ backgroundColor: 'green', width: '100%', height: '100%' }}>
          3
        </div>
      </GridItem>,
      <GridItem gridRowStart={1} gridRowEnd={5}>
        <div key='1' style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
          4
        </div>
      </GridItem>,
      <GridItem gridRowStart={5} gridRowEnd={8}>
        <div key='2' style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>
          5
        </div>
      </GridItem>,
      <GridItem gridRowStart={8} gridRowEnd={13}>
        <div key='3' style={{ backgroundColor: 'green', width: '100%', height: '100%' }}>
          6
        </div>
      </GridItem>,
    ],
    columnSpacing: { xs: 2, lg: 3 },
    rowSpacing: { xs: 1, lg: 2 },
    style: { minWidth: '600px', minHeight: '400px' },
  },
}

export const Mixed: Story = {
  args: {
    children: [
      <GridItem gridColumnStart={1} gridColumnEnd={3} gridRowStart={1} gridRowEnd={3}>
        <div key='1' style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
          1
        </div>
      </GridItem>,
      <GridItem gridColumnStart={3} gridColumnEnd={5} gridRowStart={1} gridRowEnd={3}>
        <div key='2' style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>
          2
        </div>
      </GridItem>,
      <GridItem gridColumnStart={5} gridColumnEnd={13} gridRowStart={1} gridRowEnd={3}>
        <div key='3' style={{ backgroundColor: 'green', width: '100%', height: '100%' }}>
          3
        </div>
      </GridItem>,
      <GridItem gridColumnStart={1} gridColumnEnd={5} gridRowStart={3} gridRowEnd={13}>
        <div key='1' style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
          4
        </div>
      </GridItem>,
      <GridItem gridColumnStart={5} gridColumnEnd={8} gridRowStart={3} gridRowEnd={13}>
        <div key='2' style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>
          5
        </div>
      </GridItem>,
      <GridItem gridColumnStart={8} gridColumnEnd={13} gridRowStart={3} gridRowEnd={13}>
        <div key='3' style={{ backgroundColor: 'green', width: '100%', height: '100%' }}>
          6
        </div>
      </GridItem>,
    ],
    columnSpacing: { xs: 2, lg: 3 },
    rowSpacing: { xs: 1, lg: 2 },
    style: { minWidth: '600px', minHeight: '400px' },
  },
}

export const MixedResponsive: Story = {
  args: {
    children: [
      <GridItem
        gridColumnStart={{ sm: 1, lg: 1 }}
        gridColumnEnd={{ sm: 5, lg: 8 }}
        gridRowStart={1}
        gridRowEnd={3}
      >
        <div key='1' style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
          1
        </div>
      </GridItem>,
      <GridItem
        gridColumnStart={{ sm: 5, lg: 8 }}
        gridColumnEnd={{ sm: 9, lg: 10 }}
        gridRowStart={1}
        gridRowEnd={3}
      >
        <div key='2' style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>
          2
        </div>
      </GridItem>,
      <GridItem
        gridColumnStart={{ sm: 9, lg: 10 }}
        gridColumnEnd={{ sm: 13, lg: 13 }}
        gridRowStart={1}
        gridRowEnd={3}
      >
        <div key='3' style={{ backgroundColor: 'green', width: '100%', height: '100%' }}>
          3
        </div>
      </GridItem>,
      <GridItem
        gridColumnStart={{ sm: 1, lg: 1 }}
        gridColumnEnd={{ sm: 5, lg: 3 }}
        gridRowStart={3}
        gridRowEnd={13}
      >
        <div key='1' style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
          4
        </div>
      </GridItem>,
      <GridItem
        gridColumnStart={{ sm: 5, lg: 3 }}
        gridColumnEnd={{ sm: 9, lg: 7 }}
        gridRowStart={3}
        gridRowEnd={13}
      >
        <div key='2' style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>
          5
        </div>
      </GridItem>,
      <GridItem
        gridColumnStart={{ sm: 9, lg: 7 }}
        gridColumnEnd={{ sm: 13, lg: 13 }}
        gridRowStart={3}
        gridRowEnd={13}
      >
        <div key='3' style={{ backgroundColor: 'green', width: '100%', height: '100%' }}>
          6
        </div>
      </GridItem>,
    ],
    columnSpacing: { xs: 2, lg: 3 },
    rowSpacing: { xs: 1, lg: 2 },
    style: { minWidth: '600px', minHeight: '400px' },
  },
}
