import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, test } from 'vitest'

import { Skelton } from '.'

describe('ui/Skelton', () => {
  test('skelton is exist', () => {
    render(<Skelton width={200} height={200} />)

    const div = screen.getByRole('none')

    expect(div).toBeInTheDocument()
  })
})
