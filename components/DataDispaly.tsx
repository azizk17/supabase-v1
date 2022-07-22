import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ComponentSize } from './ui2/types';

const DataDispaly = () => {
  return <div>DataDispaly</div>;
};

interface  DisplayProps  {
  title: string;
  value?: React.ReactNode | string;
  subtitle?: string;
  note?: string;
  size?: ComponentSize;
  className?: string
} ;

export const Display: React.FC<DisplayProps> = ({
  title,
  value,
  subtitle,
  note,
  children,
  className,
  size
}): JSX.Element => {
  const classes = twMerge(
    'font-semibold',
    className,
    clsx({
      [`text-${size}`]: size,
    })
  )
  return (
    <div className="flex items-center space-x-2">
      <span className={classes}>{title}: </span>
      {value && <div>{value}</div>}
      {children && <div>{children}</div>}
    </div>
  );
};

export default DataDispaly;
