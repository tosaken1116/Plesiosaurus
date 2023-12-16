import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'

import { Typography } from '.'

describe('ui/Typography', () => {
  test('If Heading 1 Component is correctly rendered.', () => {
    render(
      <Typography component='h1' variant='h1'>
        This is H1.
      </Typography>,
    )

    const title = screen.getByRole('heading')

    expect(title).toHaveTextContent('This is H1.')
  })
})
