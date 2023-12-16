import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { Checkbox } from '.'

describe('ui/Checkbox', () => {
  it('title is exist', () => {
    render(<Checkbox id='checkbox' />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()
  })
})
