import React, { FC, ReactNode, useState } from 'react'
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import Link from 'next/link';
import Dropdown from './Dropdown';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

type Props = {
    title?: ReactNode
    subtitle?: ReactNode
    body?: ReactNode
    actions?: ReactNode
    childern?: ReactNode
    footer?: ReactNode
}



const ListCard: FC<Props> = ({ title, subtitle, childern, actions, footer }) => {

    const [open, setOpen] = useState(false)
    return (
        <div>

            <div className="card bg-neutral text-neutral-content card-compact  overflow-visible   ">
                <div className="card-body items-start justify-start">
                    <div className=' flex justify-between items-center w-full'>
                        {title &&
                            <h2 className="card-title text-lg" >
                                {title}
                            </h2>
                        }
                        {actions &&
                            <ActionsDropdwon items={actions} />
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

        </div>
    )
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ActionsDropdwon: FC = ({ items, align = '' }) => {
    return (

        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="btn btn-xs btn-circle">
                    <FiMoreVertical className=" h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right z-30 absolute right-0 mt-0.5 w-32 p-2 menu  menu-compact shadow-lg rounded-box focus:outline-none bg-base-100 text-base-content">

                    {items.map((item) => {
                        return (
                            <Menu.Item as="li">
                                {item}
                            </Menu.Item>
                        )
                    }
                    )}


                    {/* <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                            )}
                        >
                            License
                        </a>
                    )}
                </Menu.Item> */}
                    {/* <form method="POST" action="#">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                type="submit"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block w-full text-left px-4 py-2 text-sm'
                                )}
                            >
                                Sign out
                            </button>
                        )}
                    </Menu.Item>
                </form> */}
                </Menu.Items>
            </Transition>
        </Menu >
    )
}


export default ListCard