import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { vars } from '../global.css'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogTrigger,
} from '.'

describe('ui/Dialog', () => {
  it('title is exist', () => {
    render(
      <Dialog>
        <h1>This is Dialog</h1>,
        <DialogTrigger asChild>
          <button
            type='button'
            style={{
              display: 'flex',
              padding: '8px 16px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              border: 'none',
              margin: '5px',
              borderRadius: vars.radius.lg,
              background: vars.background.primary,
              color: vars.foreground.primary,
            }}
          >
            Open Dialog
          </button>
        </DialogTrigger>
        ,
        <DialogContent>
          <DialogHeading>My dialog heading</DialogHeading>
          <DialogDescription>My dialog description</DialogDescription>
          <DialogClose asChild>
            <button
              type='button'
              style={{
                display: 'flex',
                padding: '8px 16px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                border: 'none',
                margin: '5px',
                borderRadius: vars.radius.lg,
                background: vars.background.primary,
                color: vars.foreground.primary,
              }}
            >
              Close Dialog
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    )

    const title = screen.getByText(/This is Dialog/)

    expect(title).toBeInTheDocument()
  })
})
