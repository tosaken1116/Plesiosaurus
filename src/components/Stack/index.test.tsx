import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'

import { Stack } from '.'

describe('ui/Stack', () => {
  test('title is exist', () => {
    render(<Stack />)

    const stack = screen.getByTestId('stack')

    expect(stack).toBeInTheDocument()
  })
})
