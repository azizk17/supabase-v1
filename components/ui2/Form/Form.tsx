import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

import Label from './Label';
import Input from '../Input';
import Button from '../Button';
import { Actions, ActionsProps } from '@/components/Actions';
import { FieldValues, FormState } from '@pankod/refine-react-hook-form';
export type FormProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    actions?: ActionsProps;
    ctx: FormState<FieldValues>;
  };

// create context
const FormContext = React.createContext<FormState<FieldValues>>({
  
});

const Form = React.forwardRef<HTMLDivElement, FormProps>(
  ({ children, dataTheme, className, ctx, actions, ...props }, ref): JSX.Element => {
    const classes = twMerge('form-control', className);

    return (
      <form
        role="form"
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        <div className=' text-blue-700'>
          Errors:
          {/* {JSON.stringify(errors)} */}
        </div>
        <FormContext.Provider value={ctx}>
          {children}
        </FormContext.Provider>

        <Actions {...actions} />
      </form>
    );
  }
);


// ######################## form item ################################
// TODO: 
// Default i18n validation messages
type FormItemProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    label?: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    error?: string;
    htmlFor: string;
  };

const Item = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ children, dataTheme, className, label, htmlFor, ...props }, ref): JSX.Element => {
    const classes = twMerge('form-control w-full max-w-xs mb-4', className);
    // const getError = (errors: any) => Object.keys(errors).find((key: string) => (errors as any)[key] === xx)
    return (
      <div className={classes}>
        {label &&
          <label className="label" >
            <span className="label-text">
              {label}
            </span>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>
        }
        {children}
        <FormContext.Consumer>
          {({errors}) => {
            const err = (errors as any)[htmlFor]
            return (
              <div>
                {err ?
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {err && err.message}
                      {err && !err.message ? `Validation Error: ${err.type}` : ""}
                    </span>
                    {/* <span className="label-text-alt">Alt label</span> */}
                  </label>
                  : ""}
              </div>
            )
          }}
        </FormContext.Consumer >
      </div >
    );
  }
);


export default Object.assign(Form, { Label, Input, Item });
