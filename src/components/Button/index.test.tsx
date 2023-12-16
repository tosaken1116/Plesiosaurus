/** @format */

import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import '@testing-library/jest-dom'

import { Button } from '.'

describe('ui/Button', () => {
  test('If Primary Button is correctly rendered.', () => {
    render(<Button state='primary'>Label</Button>)
    const button = screen.getByRole('button')
    const title = button.textContent
    expect(title).toBe('Label')
  })
})
