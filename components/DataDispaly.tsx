import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ComponentSize } from './ui2/types';
import { Icon } from '@iconify/react';
import checkCircle from '@iconify/icons-ph/check-circle';
import xCircle from '@iconify/icons-ph/x-circle';
import eyeIcon from '@iconify/icons-ph/eye';
import eyeSlashLight from '@iconify/icons-ph/eye-slash-light';
import CopyToClipboard from './CopyToClipboard';
import Link from 'next/link';
import { useTranslate } from '@pankod/refine-core';

const DataDispaly = () => {
  return <div>DataDispaly</div>;
};

type DataType = "text" | "number" | "date" | "image" | "file" | "avatar" | "username" | "link" | "secret" | "status" | "boolean" | "money";
interface DisplayProps {
  title: string;
  value?: string;
  subtitle?: string;
  note?: string;
  size?: ComponentSize;
  className?: string
  type?: DataType,
  copy?: boolean
};


function _renderEle(type: string, value: any) {

  // console.log(`Type: ${type} value: ${value} typeOf: ${typeof(value)}`);
  
  if (!value) return value
  switch (type) {
    case 'text':
      return value;
    case 'boolean':
      return (
        <div className="tooltip" data-tip={value}>
          {value ?
            <Icon icon={checkCircle} width={28} color={'green'} /> : <Icon icon={xCircle} width={28} color={'orange'} />
          }
        </div>
      );
    case 'date':
      return MyDate(value);
    case 'link':
      return value
      return <DataLink {...value} />;
    case 'secret':
      return Password(value);
    default:
      return value;
  }
}

// render one option: value or childern
export const Display: FC<DisplayProps> = ({
  title,
  value,
  subtitle,
  note,
  children,
  className,
  type = "text",
  size,
  copy
}, ...props): JSX.Element => {
  const classes = twMerge(
    'font-semibold capitalize',
    className,
    clsx({
      [`text-${size}`]: size,
    })
  )
  return (
    <div className="flex items-center space-x-2">

      {title && <span className={classes}>{title}: </span>}

      {value && <div className=' flex space-x-1 items-center'>
        {_renderEle(type, value)}
        {copy && <CopyToClipboard value={value} />}
      </div>
      }
      {children && <div>{children}</div>}
    </div>
  );
};


const Password = (value: string) => {
  const [show, setShow] = useState(false)
  let secret = value?.replace(/./g, '*');
  return (
    <div className=' flex items-center space-x-2'>
      <span>
        {show ? value : secret}
      </span>
      <div className=' link link-hover hover:opacity-60' onClick={() => setShow(!show)}>
        {show ? <Icon icon={eyeIcon} /> : <Icon icon={eyeSlashLight} />}
      </div>
    </div>
  )
}

const MyDate = (value: string) => {
  var date = new Date(value).toISOString().slice(0, 10);
  return date;
}

const Text = (value: string) => {
  const [more, setMore] = useState(false)
  return value;
}

const DataLink = (value: string) => {
  const t = useTranslate();
  console.log("Value", typeof(value));
  // !! value type must fix
  const link = value?.value.charAt(0) === '/' ? <Link href={value}>
    {t('common.clickHere')}
  </Link> : <a className='tooltip' data-tip={value} href={value} rel="noreferrer" target="_blank">{t('common.clickHere')}</a>;

  return <div className=" link link-hover " >
    {link}
  </div>;
}

type ImgProps = {
  size?: string
}
const DataImage = ({ size = "md" }: ImgProps): JSX.Element => {
  return (
    <div></div>
  )
}



export default DataDispaly;
