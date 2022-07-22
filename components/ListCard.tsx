import React, { FC, ReactNode } from 'react'
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import Link from 'next/link';

type Props = {
    title?: ReactNode
    subtitle?: ReactNode
    body?: ReactNode
    actions?: ReactNode
    childern?: ReactNode
    footer?: ReactNode
}

const ListCard: FC<Props> = ({ title, subtitle, childern, actions, footer }) => {
    return (
        <div className="card bg-neutral text-neutral-content card-compact  ">
            <div className="card-body items-start justify-start">
                <div className=' flex justify-between items-center w-full'>
                    {title &&
                        <h2 className="card-title" >
                            {title}
                        </h2>
                    }
                    {actions &&
                        <ActionsDropdwon />

                    }
                </div>
                {childern &&

                    <div>
                        {childern}
                    </div>
                }
                {footer &&
                    <div className="card-actions justify-end">
                        {footer}
                    </div>
                }
            </div>
        </div>
    )
}

const ActionsDropdwon = ({ align = '' }) => {
    return (
        <div className="dropdown overflow-visible">
            <label tabIndex={0} className="btn btn-sm btn-circle">
                <FiMoreVertical />

            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-30">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    )
}


export default ListCard