import { FieldError } from '@pankod/refine-react-hook-form'
import React, { FC } from 'react'
import { FieldErrors, Merge } from 'react-hook-form'

import { IComponentBaseProps } from './ui/types'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export type InputErrorProps = React.LabelHTMLAttributes<HTMLLabelElement> &
    IComponentBaseProps & {
        error?: FieldError | Merge<FieldError, FieldErrors<any>> | undefined
    }

export const InputError = React.forwardRef<HTMLLabelElement, InputErrorProps>(
    ({ children, error, dataTheme, className, ...props }, ref): JSX.Element => {
        return (
            <label {...props} className={classNames('label text-error')}>
                <span className='label-text-alt' ref={ref}>{error}</span>
                {children}
            </label>
        )
    }
)
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
    IComponentBaseProps & {
        title?: string
        htmlFor?: string
    }
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ children, title, htmlFor, dataTheme, className, ...props }, ref): JSX.Element => {
        return (
            <label {...props} className={classNames('label')} htmlFor={htmlFor}>
                <span className='label-text-alt' ref={ref}>{title}</span>
                {children}
            </label>
        )
    }
)

