import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize
} from '../types';
import Link from 'next/link';

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'color'
> &
  IComponentBaseProps & {
    href?: string;
    shape?: ComponentShape;
    size?: ComponentSize;
    variant?: 'outline' | 'link';
    color?: ComponentColor;
    fullWidth?: boolean;
    responsive?: boolean;
    animation?: boolean;
    loading?: boolean;
    active?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      href,
      title,
      shape,
      size,
      variant,
      color,
      startIcon,
      endIcon,
      fullWidth,
      responsive,
      animation = true,
      loading,
      active,
      disabled,
      dataTheme,
      className,
      style,

      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'btn',
      className,
      clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
        [`btn-${size}`]: size,
        [`btn-${shape}`]: shape,
        [`btn-${variant}`]: variant,
        [`btn-${color}`]: color,
        'btn-block': fullWidth,
        'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
        'no-animation': !animation,
        'btn-active': active,
        'btn-disabled': disabled,
        loading: loading
      })
    );

    if (href) {
      return (
        <Link href={href}>
          <a className={classes} style={style}>
            {startIcon && startIcon}
            {children}
            {endIcon && endIcon}
          </a>
        </Link>
      );
    } else {
      return (
        <button
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
          style={style}
          disabled={disabled}
        >
          {startIcon && !loading && startIcon}
          {children}
          {title}
          {endIcon && endIcon}
        </button>
      );
    }
  }
);

Button.displayName = 'Button';

export default Button;
