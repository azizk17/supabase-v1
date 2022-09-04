import { useTranslate } from '@pankod/refine-core';
import { Controller, FieldError } from '@pankod/refine-react-hook-form'
import React, { FC, useEffect, useState } from 'react'
import { FieldErrors, Merge } from 'react-hook-form'
import { JSONTree } from 'react-json-tree';
import StateManagedSelect, { default as ReactSelect, StylesConfig, components, InputProps } from 'react-select';

import { IComponentBaseProps } from './ui/types'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Input = props => (
    <components.Input
        {...props}
        inputClassName="select select-bordered w-full max-w-xs bg-red-300 text-green-500 "
    />
)
// const Input = ({ type, ...rest }: InputProps) => <components.Input {...rest} />;
const customStyles = {
    menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 20,
        zIndex: 20

    }),

    control: (_, { selectProps: { width } }) => ({
        width: width
    }),

    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

export type SelectProps =  {
    name: string,
    options: any
    className?: string
    onChange: any
    control: any
    defaultValue?: any,
    isReady?: boolean,
    isLoading?: boolean
    isClearable?: boolean
    isDisabled?: boolean
    isSearchable?: boolean
    onInputChange?: any
}

export const Select = React.forwardRef<HTMLLabelElement, SelectProps>(
    ({ children, name, options, className, onChange, isReady = false,
        isLoading, isDisabled, isSearchable,onInputChange,
        defaultValue,
        ...props }, ref): JSX.Element => {
        const t = useTranslate();
        return (
            <div>

                {isReady &&
                    // <JSONTree data={defaultValue} />
                    <ReactSelect
                        onChange={onChange}
                        options={options}
                        defaultValue={defaultValue}
                        isLoading={isLoading}
                        isDisabled={isLoading || isDisabled}
                        isSearchable={isSearchable}
                        onInputChange={onInputChange}
                        placeholder={t('select', 'Select')}
                        // components={{ Input }}
                        className="input-select-container"
                        classNamePrefix="input-select"
                        menuPlacement='auto'
                        menuPosition='absolute'
                        {...props}
                    // theme={(theme) => ({
                    //     ...theme,
                    //     borderRadius: 7,

                    //     colors: {
                    //         ...theme.colors,
                    //         primary25: 'hotpink',
                    //         primary: 'black',

                    //     },
                    // })}


                    />
                }

                {!isReady &&
                    <ReactSelect placeholder={t('select', 'Select...')} className="input-select-container"
                        classNamePrefix="input-select" isDisabled isLoading />
                }
            </div>

        )
    }
)
