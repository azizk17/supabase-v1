import React, { ReactDOM, FC } from "react";
import { twMerge } from "tailwind-merge";
import clsx from 'clsx'


/***
 * 
 * TODO: Add support to directions, and RTL
 */
 interface PropsType {
    isOpen: boolean;
    setIsOpen: Function;
    children: ReactDOM;
    // @de
    // dir?: string;
    closable?: boolean;
    className?: string;
 } 


 const Drawer: FC<PropsType> = ({ children, isOpen, setIsOpen , closable = true, className }) => {
    const _right = "";
    const _left = "translate-x-full"
    // const classes = twMerge(
    //    'drawer',
    //    className,
    //    clsx({
    //      'drawer-mobile': dir == "",
    //      'drawer-end': end,
    //      'fixed z-40': full
    //    })
    //  )
  return (
    <main
      className={
        " fixed overflow-hidden z-20 bg-base-300 bg-opacity-70 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full   ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0  absolute bg-base-100 h-full shadow-xl delay-200 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0  " : " translate-x-full  ")
        }
      >
        <article className="relative w-screen max-w-lg py-10 flex flex-col space-y-6 overflow-y-scroll h-full p-4">
          <header className="font-bold text-lg">Header</header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
            closable ? setIsOpen(false) : null;
        }}
      ></section>
    </main>
  );
}

export default Drawer
