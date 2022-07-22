import {FC, MouseEventHandler, ReactNode} from 'react'
import { BsSave } from 'react-icons/bs';
import { FaFileCode } from 'react-icons/fa';
import { FiCrop, FiFile, FiFolderPlus, FiPenTool, FiXCircle } from 'react-icons/fi';
import { Button } from './ui2';

interface BtnProps {
    text?: string;
    loading?: boolean;
    children?: ReactNode;
    type?: "button" | "submit";
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ActionsProps  {
    submit?: BtnProps;
    cancel?: BtnProps;
    back?: Boolean;
    verical?: Boolean;
    position?: "inline" | "top" | "bottom" ; 
}
export const Actions : FC<ActionsProps> = ({submit, cancel, verical}) => {
    return (
        <div className={`flex space-x-3 rtl:space-x-reverse items-center justify-start ${verical ? 'flex-col' : 'flex-row'}`}>
            <Button  type={submit?.type} color='primary' endIcon={<FiFolderPlus  />} size="sm" loading={submit?.loading} onClick={submit?.onClick}>
                {submit?.text ? submit.text : 'Save'}
            </Button>
            <Button type='button' color='ghost' size='sm' endIcon={<FiXCircle />} onClick={() => cancel?.onClick}>
                {cancel?.text ? cancel.text : 'Cancel'}
            </Button>
        </div>
    )
}