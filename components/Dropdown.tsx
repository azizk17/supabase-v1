import React, { FC, ReactNode } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

type Props = {
    items: ReactNode[]
}
const Dropdown: FC<Props> = ({ items }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="btn btn-sm">
                    Options
                    {/* <FiMoreVertical className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
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
                <Menu.Items className="origin-top-right z-30 absolute right-0 mt-2 w-56 p-2 menu  menu-compact shadow-lg rounded-box focus:outline-none bg-base-100 text-base-content">
                    <Menu.Item as="li">
                        {items.map((item) => {
                            <div className=' text-lg text-red-400 p-2'>
                                {item}
                            </div>
                        })}
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-primary' : ' text-base-content',
                                    'block px-4 py-2 text-sm'
                                )}
                            >
                                Account settings
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item as="li">
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                            >
                                Support
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
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
                    </Menu.Item>
                    <form method="POST" action="#">
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
                    </form>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default Dropdown