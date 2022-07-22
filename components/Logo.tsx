import React from 'react';
import Link from 'next/link';
import { ImVideoCamera } from 'react-icons/im';

type Props = {
  link?: boolean; size?: number; color?: string, className?: string
}


export const Logo: React.FC<Props> = ({
  link,
  size,
  color,
  className,
  ...props
}) => {
  const WithLink = ({ link, children }) => (link ?
    <Link href={'/'} className={className}>
      {children}
    </Link>
    : children
  );
  return (
    <WithLink link={link}>
      <div className={`rounded-full p-1 relative origin-bottom -rotate-12 ${link ? 'hover:opacity-60 hover:cursor-pointer' : ''}`}>
        <div className="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className={"h-14 block text-pink-700 " + className}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 26 26"
            {...props}
          ><path
              fill="currentColor"
              d="M19.875 0a1 1 0 0 0-.594.281L13 6.563L9.719 3.28A1.016 1.016 0 1 0 8.28 4.72L11.562 8H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3h-8.563l6.282-6.281A1 1 0 0 0 19.875 0zM10.5 10c7.445 0 8.5.021 8.5 7c0 6.98-1.128 7-8.5 7c-7.406 0-8.5-.074-8.5-7c0-6.924 1.094-7 8.5-7zm12 2.938c.866 0 1.563.696 1.563 1.562a1.56 1.56 0 0 1-1.563 1.563a1.559 1.559 0 0 1-1.563-1.563a1.56 1.56 0 0 1 1.563-1.563zm0 4c.866 0 1.563.696 1.563 1.562a1.56 1.56 0 0 1-1.563 1.563a1.559 1.559 0 0 1-1.563-1.563a1.56 1.56 0 0 1 1.563-1.563z"
            /></svg
          >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className=" absolute w-8 z-10 fill-curren text-lime-200 left-2  top-5"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          ><path
              fill="currentColor"
              d="m768 576l192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0a160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0a64 64 0 0 0-128 0z"
            /></svg
          >
        </div>
      </div>
    </WithLink>
  );
};