import React from 'react';
import Link from 'next/link';
import { ImVideoCamera } from 'react-icons/im';

export const Logo: React.FC<{ link: boolean; size: number; color: string }> = ({
  link,
  size,
  color
}) => {
  return (
    <Link href={link ? '/' : ''}>
      <ImVideoCamera color={color} size={size} />
    </Link>
  );
};
