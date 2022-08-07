import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'
import { Sheet } from './Sheet'
import { Modal } from './ui2'
import ModalActions from './ui2/Modal/ModalActions'
import ModalHeader from './ui2/Modal/ModalHeader'


export type CommonCrudOnModalProps = {
    title?: ReactNode
    extra?: ReactNode
}
export type CrudOnModalProps = CommonCrudOnModalProps & {
    resourceType: any
    resource: string
    list: ListPageProps
    create?: CreatePageProps
    edit?: EditPageProps
    delete?: DeleteProps
}

export const CrudOnModal: FC<CrudOnModalProps> = ({ title, resource, resourceType, list, edit }) => {
    return (
        <Sheet title={title} >
            <ListPage {...list} />
            <EditPage {...edit} />
        </Sheet>
    )
}


type MyCrudModalProps = CommonCrudOnModalProps & {
    openOnQuery: string
}

const MyCrudModal: FC<MyCrudModalProps> = ({ openOnQuery, title, children }) => {
    const { query, back } = useRouter();

    return (
        <Modal open={!!query[openOnQuery]} className="max-w-screen-md">
            {/* {JSON.stringify(data)} */}
            {query[openOnQuery] &&
                <div>
                    <ModalHeader>
                        {title}
                    </ModalHeader>
                    {children}
                    <ModalActions>
                        <button className='btn btn-sm' onClick={back}>
                            close
                        </button>
                    </ModalActions>

                </div>
            }
        </Modal>
    );
}
/**
 * 
 * ## List Page
 *  
 */
export type ListPageProps = {
    title?: ReactNode
    extra?: ReactNode
    query?: ReactNode
}

export const ListPage: FC<ListPageProps> = ({ title, extra, query, }) => {
    return (
        <p>List page</p>
    )
}

/**
 * 
 * ## Edit Page
 *  
 */
export type EditPageProps = CommonCrudOnModalProps & {}

export const EditPage: FC<ListPageProps> = ({ title, children }) => {
    return (
        <MyCrudModal openOnQuery='edit' title={title}>
            {children}
        </MyCrudModal>
    )
}

/**
 * 
 * ## Create Page
 *  
 */
export type CreatePageProps = {}

export const CreatePage: FC<ListPageProps> = () => {
    return (
        <div></div>
    )
}

/**
 * 
 * ## Delete Page
 *  
 */
export type DeleteProps = {}

// open in dialog
export const DeletePage: FC<ListPageProps> = () => {
    return (
        <div></div>
    )
}


export default CrudOnModal