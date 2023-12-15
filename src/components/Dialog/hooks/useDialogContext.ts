import { createContext, useContext } from 'react'
import type { Context } from 'react'

import type { useDialog } from './useDialog'

export type ContextType =
  | {
      setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>
      setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>
    } & ReturnType<typeof useDialog>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const DialogContext: Context<ContextType> = createContext<ContextType>(null)

export const useDialogContext = (): ContextType => {
  const context = useContext(DialogContext)

  if (context == null) {
    throw new Error('Dialog components must be wrapped in <Dialog />')
  }

  return context
}
