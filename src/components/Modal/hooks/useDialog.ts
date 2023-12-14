import { useMemo, useState } from 'react'
import type { Dispatch } from 'react'

import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
} from '@floating-ui/react'

export type DialogProps = {
  initialOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
type Re = ReturnType<typeof useFloating>
type Ree = ReturnType<typeof useInteractions>

export type DialogHookResult = {
  open: boolean
  setOpen: (open: boolean) => void
  labelId?: string
  descriptionId?: string
  setLabelId: Dispatch<React.SetStateAction<string | undefined>>
  setDescriptionId: Dispatch<React.SetStateAction<string | undefined>>
} & Re &
  Ree

/**
 * Custom hook for managing a dialog component.
 *
 * @param {DialogProps} options - Options for the dialog.
 * @returns {DialogHookResult} - An object containing the dialog state and interaction functions.
 */
export function useDialog({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: DialogProps = {}): DialogHookResult {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)
  const [labelId, setLabelId] = useState<string | undefined>()
  const [descriptionId, setDescriptionId] = useState<string | undefined>()

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen
  console.log(open, setOpen)

  const data = useFloating({
    open,
    onOpenChange: setOpen,
  })

  const context = data.context

  const click = useClick(context, {
    enabled: controlledOpen == null,
  })
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' })
  const role = useRole(context)

  const interactions = useInteractions([click, dismiss, role])

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [open, setOpen, interactions, data, labelId, descriptionId],
  )
}

export type UseDialogReturnType = ReturnType<typeof useDialog>
