import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'
import { FullWidth } from '../Carousel/Carousel.stories'

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    side: ReactNode
    id: string
    open?: boolean
    mobile?: boolean
    end?: boolean
    full?: boolean
  }

const Drawer = ({
  children,
  side,
  open,
  mobile,
  end,
  id,
  dataTheme,
  className,
  full,
  ...props
}: DrawerProps) => {
  const classes = twMerge(
    'drawer',
    className,
    clsx({
      'drawer-mobile': mobile,
      'drawer-end': end,
      'fixed z-40': full
    })
  )

  return (
    <div
      aria-expanded={open}
      {...props}
      data-theme={dataTheme}
      className={classes}
    >
      <input id={id} type="checkbox" className="drawer-toggle" checked={open} />
      <div className="drawer-content w-full h-full">{children}</div>
      <div className="drawer-side z-40 top-0 fixed  ">
        <label htmlFor={id} className="drawer-overlay w-full"></label>
        <div className=''>

        {side}
        </div>
      </div>
    </div>
  )
}

export default Drawer
