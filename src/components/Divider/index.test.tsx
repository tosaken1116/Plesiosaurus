import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { Divider } from '.'

describe('ui/Divider', () => {
  it('title is exist', () => {
    render(
      <div style={{ width: '100px' }}>
        <Divider />
      </div>,
    )

    const divider = screen.getByTestId('divider')

    expect(divider).toBeInTheDocument()
  })
})
