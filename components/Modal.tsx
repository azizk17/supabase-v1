import React, { forwardRef, MouseEventHandler } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from './ui2/types'



export type ModalProps = React.HTMLAttributes<HTMLDivElement> &
    IComponentBaseProps & {
        open?: boolean
        responsive?: boolean
        closeable?: boolean
        onClose: MouseEventHandler
        onClickBackdrop?: () => void
    }

const Modal = forwardRef<HTMLDivElement, ModalProps>(
    (
        {
            children,
            open,
            responsive,
            closeable,
            onClose,
            onClickBackdrop,
            dataTheme,
            className,
            ...props
        },
        ref
    ): JSX.Element => {
        const containerClasses = twMerge(
            'modal',
            clsx({
                'modal-open': open,
                'modal-bottom sm:modal-middle': responsive,
            })
        )

        const bodyClasses = twMerge('modal-box', className)

        return (
            <div
                aria-label="Modal"
                aria-hidden={!open}
                aria-modal={open}
                data-theme={dataTheme}
                className={containerClasses}
                onClick={(e) => {

                    e.stopPropagation()

                    if (e.target === e.currentTarget) {
                        e.stopPropagation()

                        if (closeable) {
                            onClose(e)
                        }
                    }
                }}
            >
                <div
                    {...props}
                    data-theme={dataTheme}
                    className={bodyClasses}
                    ref={ref}
                >
                    {children}
                </div>
            </div>
        )
    }
)



type ModalActionsProps = React.HTMLAttributes<HTMLDivElement> &
    IComponentBaseProps

const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(
    ({ children, className, ...props }, ref) => {
        const classes = twMerge('modal-action', className)
        return (
            <div {...props} className={classes} ref={ref}>
                {children}
            </div>
        )
    }
)

type ModalBodyProps = React.HTMLAttributes<HTMLDivElement>

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div {...props} className={className} ref={ref}>
                {children}
            </div>
        )
    }
)


type ModalHeaderProps = React.HTMLAttributes<HTMLDivElement>

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
    ({ children, className, ...props }, ref) => {
        const classes = twMerge('w-full mb-8 text-xl', className)
        return (
            <div {...props} className={classes} ref={ref}>
                {children}
            </div>
        )
    }
)


Modal.displayName = 'Modal'

export default Object.assign(Modal, {
    Header: ModalHeader,
    Body: ModalBody,
    Actions: ModalActions,
})
