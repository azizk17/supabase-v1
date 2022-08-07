import { useTranslate } from '@pankod/refine-core';
import React, { FC, useEffect, useState } from 'react'
import { CopyToClipboard as ReactCopy } from 'react-copy-to-clipboard';
import { ComponentSize } from './ui2/types';

const CopyToClipboard: FC<{ value: string, size?: ComponentSize }> = ({ value, size }) => {
    const t = useTranslate();

    const [copied, setCopied] = useState(false)
    useEffect(() => {
        setInterval(() => {
            setCopied(false)
        }, 3000);
    }, [copied]);

    return (
        <ReactCopy text={value}
            onCopy={() => setCopied(true)}>
            <div className=' tooltip flex items-center' data-tip={t('common.copy')}>
                <button className=' opacity-70'>
                    {copied ? <CopiedIcon size={size} /> : <CopyIcon size={size} />}
                </button>
            </div>
        </ReactCopy>
    )
}


type IconProps = {
    size?: ComponentSize
    color?: string
}

const _size = (size: ComponentSize) => {
    switch (size) {
        case 'lg':
            return 'h-8 w-8'
        case 'md':
            return 'h-5 w-5'
        case 'sm':
            return 'h-4 w-4'
        case 'xs':
            return 'h-3 w-3'
        default:
            return 'h-4 w-4';
    }
}
const CopyIcon = ({ size = "md" }: IconProps): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${_size(size)}`} aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
    )
}

const CopiedIcon = ({ size = "md" }: IconProps): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`text-success ${_size(size)}`} aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4" /></svg>
    )
}
export default CopyToClipboard