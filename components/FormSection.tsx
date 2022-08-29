import { actions } from '@pankod/refine-react-table'
import React, { FC, ReactNode } from 'react'

type FormSectionProps = {
    title?: ReactNode
    actions?: ReactNode[]
    children: ReactNode
}
const FormSection: FC<FormSectionProps> = ({ title, children, actions }) => {
    return (
        <div>

            <div className=' py-4 flex justify-between items-center'>
                <div className=' text-primary card-title'>
                    {title}
                </div>
                <div className=''>
                    side actions
                </div>
            </div>
            <div className=' card card-compact bg-neutral'>
                <div className="card-body">
                    <div>
                        {children}
                    </div>
                    {actions &&
                        <div className='pt-4 flex space-x-3 items-center justify-start'>
                            <div className=' divider'></div>
                            {actions.map((action: ReactNode) => action)}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default FormSection