import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { RadioButtonGroup } from '.'

describe('ui/RadioButtonGroup', () => {
  it('title is exist', () => {
    render(
      <RadioButtonGroup
        name='ラジオボタンリスト'
        options={['test1', 'test2', 'test3']}
        defaultValue=''
      />,
    )

    const title = screen.getByRole('list')

    expect(title).toBeInTheDocument()
  })
})
