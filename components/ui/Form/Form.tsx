import React from 'react';
import { twMerge } from 'tailwind-merge';

// import { IComponentBaseProps } from '../types'

import Label from './Label';
import Input from '../Input';
import { IComponentBaseProps } from '../types';
export type FormProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    errors: any;
    loading: boolean;
  };

const Form = React.forwardRef<HTMLDivElement, FormProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('form-control', className);

    return (
      <div
        role="form"
        {...props}
        // data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

type FormElementType =
  | 'input'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'submit'
  | 'reset'
  | 'button'
  | 'image'
  | 'hidden'
  | 'object'
  | 'video'
  | 'audio';

interface FormControlProps {
  className?: string;
  type?: FormElementType;
  label?: string;
  error?: string;
  children?: React.ReactNode;
}

// form control
export const Item = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ children, label, className, error, ...props }, ref): JSX.Element => {
    const classes = twMerge('form-control mb-3', className);
    const childrenWithProps = React.Children.map(children, (child) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { error });
      }
      return child;
    });

    return (
      <div className={classes} {...props} ref={ref}>
        {label && <Label title={label} />}
        {childrenWithProps}

        {/* {children} */}
        {error ? (
          <label className="label ">
            <span className="label-text-alt text-error">{error}</span>
          </label>
        ) : null}
      </div>
    );
  }
);
export default Object.assign(Form, { Item, Input, Label });
