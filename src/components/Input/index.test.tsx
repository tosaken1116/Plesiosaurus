import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'

import { Input } from '.'

describe('ui/Input', () => {
  test('title is exist', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })
})
