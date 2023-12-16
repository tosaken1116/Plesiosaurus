import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { Sample } from '.'

describe('ui/Sample', () => {
  it('title is exist', () => {
    render(<Sample />)

    const title = screen.getByText(/this is ui of Sample/)

    expect(title).toBeInTheDocument()
  })
})
