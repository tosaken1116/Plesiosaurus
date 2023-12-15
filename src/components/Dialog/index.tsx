import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

import { forwardRef, useLayoutEffect, useId, isValidElement, cloneElement } from 'react'
import type { HTMLAttributes, HTMLProps, ReactElement, ReactNode } from 'react'

import {
  useMergeRefs,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react'
import clsx from 'clsx'

import { assertNonNullable } from '../../libs/assertNonNullable'

import { useDialog } from './hooks/useDialog'
import { DialogContext, useDialogContext } from './hooks/useDialogContext'
import { dialogBase, dialogOverlay } from './index.css'

export type DialogProps = {
  initialOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * @name Dialog component
 * Dialogを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Dialog a={1} />
 */
const Dialog = ({
  children,
  ...options
}: {
  children: ReactNode
} & DialogProps): JSX.Element => {
  const dialog = useDialog(options)
  return <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
}

type DialogTriggerProps = {
  children: ReactNode
  asChild?: boolean
} & HTMLProps<HTMLElement>

const DialogTrigger = forwardRef<HTMLElement, DialogTriggerProps>(
  ({ children, asChild = false, ...props }, propRef) => {
    assertNonNullable(children)
    const context = useDialogContext()
    // @ts-expect-error `isValidElement`でチェックしているので、`children`は`ReactElement`であることが保証されるため問題ない
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const ref = useMergeRefs([context.refs.setReference, propRef, children.ref])
    if (asChild && isValidElement(children)) {
      return cloneElement(
        children,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          'data-state': context.open ? 'open' : 'closed',
        }),
      )
    }

    return (
      <button
        type='button'
        ref={ref}
        data-state={context.open ? 'open' : 'closed'}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    )
  },
)

const DialogContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ children, className, ...props }, propRef) => {
    const { context: floatingContext, ...context } = useDialogContext()
    const ref = useMergeRefs([context.refs.setFloating, propRef])

    if (!context.open) return null

    return (
      <FloatingPortal>
        <FloatingOverlay className={clsx(dialogOverlay)} lockScroll>
          <FloatingFocusManager context={floatingContext}>
            <div
              ref={ref}
              aria-describedby={context.descriptionId}
              {...context.getFloatingProps(props)}
              className={clsx(dialogBase, className)}
            >
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    )
  },
)

const DialogHeading = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(
  ({ children, ...props }, ref) => {
    const { setLabelId } = useDialogContext()
    const id = useId()

    useLayoutEffect(() => {
      setLabelId(id)
      return (): void => setLabelId(undefined)
    }, [id, setLabelId])

    return (
      <h2 {...props} ref={ref} id={id}>
        {children}
      </h2>
    )
  },
)

const DialogDescription = forwardRef<
  HTMLParagraphElement,
  HTMLProps<HTMLParagraphElement>
>(({ children, ...props }, ref) => {
  const { setDescriptionId } = useDialogContext()
  const id = useId()

  useLayoutEffect(() => {
    setDescriptionId(id)
    return (): void => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <p {...props} ref={ref} id={id}>
      {children}
    </p>
  )
})

type DialogCloseProps = {
  children: ReactNode
  asChild?: boolean
} & HTMLAttributes<HTMLButtonElement>

const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ children, asChild = false, ...props }, ref) => {
    const { setOpen } = useDialogContext()
    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement, {
        ref,
        ...props,
        onClick: () => setOpen(false),
      })
    }
    return (
      <button type='button' ref={ref} onClick={() => setOpen(false)} {...props}>
        {children}
      </button>
    )
  },
)

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeading,
  DialogDescription,
  DialogClose,
}
