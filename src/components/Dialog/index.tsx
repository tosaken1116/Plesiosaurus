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
  ({ children, asChild = false, className, ...props }, propRef) => {
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
        className={clsx(className)}
      >
        {children}
      </button>
    )
  },
)

type DialogContentProps = {
  overlayClassName?: string
  contentClassName?: string
} & HTMLProps<HTMLDivElement>

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, overlayClassName, contentClassName, ...props }, propRef) => {
    const { context: floatingContext, ...context } = useDialogContext()
    const ref = useMergeRefs([context.refs.setFloating, propRef])

    if (!context.open) return null

    return (
      <FloatingPortal>
        <FloatingOverlay className={clsx(dialogOverlay, overlayClassName)} lockScroll>
          <FloatingFocusManager context={floatingContext}>
            <div
              ref={ref}
              aria-describedby={context.descriptionId}
              {...context.getFloatingProps(props)}
              className={clsx(dialogBase, contentClassName)}
            >
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    )
  },
)

type DialogHeadingProps = {
  asChild?: boolean
} & HTMLProps<HTMLHeadingElement>
const DialogHeading = forwardRef<HTMLHeadingElement, DialogHeadingProps>(
  ({ children, asChild = false, className, ...props }, ref) => {
    const { setLabelId } = useDialogContext()
    const id = useId()

    useLayoutEffect(() => {
      setLabelId(id)
      return (): void => setLabelId(undefined)
    }, [id, setLabelId])

    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement, {
        ref,
        id,
        className: clsx(className),
      })
    }

    return (
      <h2 {...props} ref={ref} id={id} className={clsx(className)}>
        {children}
      </h2>
    )
  },
)

type DialogDescriptionProps = {
  asChild?: boolean
} & HTMLProps<HTMLParagraphElement>
const DialogDescription = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ children, asChild = false, className, ...props }, ref) => {
    const { setDescriptionId } = useDialogContext()
    const id = useId()

    useLayoutEffect(() => {
      setDescriptionId(id)
      return (): void => setDescriptionId(undefined)
    }, [id, setDescriptionId])

    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement, {
        ref,
        id,
        className: clsx(className),
      })
    }
    return (
      <p {...props} ref={ref} id={id} className={clsx(className)}>
        {children}
      </p>
    )
  },
)

type DialogCloseProps = {
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
