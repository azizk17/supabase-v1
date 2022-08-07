import { useTranslate } from '@pankod/refine-core';
import { Controller, FieldError } from '@pankod/refine-react-hook-form'
import React, { FC } from 'react'
import { FieldErrors, Merge } from 'react-hook-form'
import { default as ReactSelect, StylesConfig } from 'react-select';

import { IComponentBaseProps } from './ui/types'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const customStyles: StylesConfig = {
    option: (provided, state) => ({
        ...provided,
        // borderBottom: '1px dotted pink',
        // color: state.isSelected ? 'red' : 'blue',
        // padding: 20,
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        // width: 200,
    }),
    singleValue: (provided, state) => {
        // const opacity = state.isDisabled ? 0.5 : 1;
        // const transition = 'opacity 300ms';

        // return { ...provided, opacity, transition };
    }
}

export type SelectProps = {
    options: any
    className?: string
    onChange: any
    control: any
    defaultValue?: any
}
export const Select = React.forwardRef<HTMLLabelElement, SelectProps>(
    ({ children, options, className, onChange, control, defaultValue, ...props }, ref): JSX.Element => {
        const t = useTranslate();

        return (
            <Controller
                name="select"
                control={control}
                render={({ field }) => <ReactSelect
                    {...field}
                    onChange={onChange}
                    options={options}
                    defaultValue={defaultValue}
                    placeholder={t('select', 'Select')}

                />}
            />
        )
    }
)
