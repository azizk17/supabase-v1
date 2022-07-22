import {
  BaseKey,
  IResourceComponentsProps,
  useList,
  useOne,
  useShow,
  useTranslate
} from '@pankod/refine-core';
import React, { FC, MouseEventHandler, useState } from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Credential } from 'types';
import SettingsLayout from '@/components/layout/SettingsLayout';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Badge, Card, Modal } from '@/components/ui2';
import { Display } from '@/components/DataDispaly';
import SocialIcon from '@/components/SocialIcon';
import { Sheet } from '@/components/Sheet';
import Link from 'next/link';
import ListCard from '@/components/ListCard';
import ModalActions from '@/components/ui2/Modal/ModalActions';
import { Router, useRouter } from 'next/router';
import ModalHeader from '@/components/ui2/Modal/ModalHeader';


const resourceName = 'credentials';

const CredentialList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit, goBack, listUrl } = useNavigation();
  const { mutate } = useDelete();

  const [openShow, setOpenShow] = useState(false)
  const {
    data: credentials,
    error,
    isLoading
  } = useList<Credential>({
    resource: 'credentials',
    config: {
      sort: [{ field: 'created_at', order: 'asc' }]
    }
  });
  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('credential:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'username',
        Header: t('credential:fields.username', 'Username'),
        accessor: 'username',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'nickname',
        Header: t('credential:fields.nickname', 'Nickname'),
        accessor: 'nickname',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'email',
        Header: t('credential:fields.email', 'Email'),
        accessor: 'email',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'password',
        Header: t('credential:fields.password', 'Password'),
        accessor: 'password',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'apikey',
        Header: t('credential:fields.apikey', 'Apikey'),
        accessor: 'apikey',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'avatar',
        Header: t('credential:fields.avatar', 'Avatar'),
        accessor: 'avatar',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'status',
        Header: t('credential:fields.status', 'Status'),
        accessor: 'status',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'url',
        Header: t('credential:fields.url', 'Url'),
        accessor: 'url',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'enabled',
        Header: t('credential:fields.enabled', 'Enabled'),
        accessor: 'enabled',
        Cell: ({ value }) => (value ? 'Yes' : 'No')
      },
      {
        id: 'updated_at',
        Header: t('credential:fields.updatedAt', 'Updated at'),
        accessor: 'updated_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('credential:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },

      {
        id: 'action',
        Header: 'Action',
        accessor: 'id',
        Cell: ({ value }) => (
          <ColumnActions
            label={<FiMoreVertical />}
            items={[
              {
                label: t('actions.show', 'Show'),
                icon: <FiEye />,
                onClick: () => show('definition.__resource', value)
              },
              {
                label: t('actions.edit', 'Edit'),
                icon: <FiEdit />,
                onClick: () => edit('definition.__resource', value)
              },
              {
                label: t('actions.delete', 'Delete'),
                icon: <FiTrash2 />,
                onClick: () =>
                  mutate({ id: value, resource: 'definition.__resource' })
              }
            ]}
          ></ColumnActions>
        )
      }
    ],
    []
  );

  const onClose = () => goBack()
  const { query, push } = useRouter()
  return (
    <SettingsLayout>
      <Show id={query?.id} />
      <Create />
      <Sheet
        title={t('credential:title', 'Credentials')}
        loading={isLoading}
        canCreate={true}
        createButtonProps={{
          // onClick: () => push({
          //   pathname: '/',
          //   query: {'mode': 'create'}
          // }),
          resourceNameOrRouteName: '?create=true'
        }}
      >

        <div className=' grid grid-cols-1 gap-2'>

          {credentials?.data.map((credential) => (

            <ListCard
              title={
                <div className=' flex items-center space-x-2'>
                  <SocialIcon name={credential.platform_name} />
                  {/* <Link href={
                    { pathname: '/settings/credentials/[id]', query: { id: credential.id } }
                  }> */}
                  {/* <Show id={credential.id} isOpen={openShow} close={() => setOpenShow(false)} /> */}


                  <Link href={`?id=${credential.id}`} as={`credentials/${credential.id}`}>

                    <span onClick={() => setOpenShow(true)} className=' link link-hover' >@{credential.username} </span>
                  </Link>
                  {/* </Link> */}
                  <Badge title={credential.status} color="success" variant='outline' >{credential.status}</Badge>
                </div>
              }
              actions={
                <p>asd</p>
              }
            />


            // <div className="card bg-neutral text-neutral-content card-compact  ">
            //   <div className="card-body items-start justify-start">
            //     <div className=' flex justify-between items-center w-full'>
            //       <h2 className="card-title" >
            //         <SocialIcon name={credential.platform_name} />
            //         <span className=' link link-hover' onClick={() => show('settings/credentials', credential.id)} >@{credential.username} </span>
            //         <Badge title={credential.status} color="success" variant='outline' >{credential.status}</Badge>
            //       </h2>
            //       <div className='btn btn-circle btn-xs'>
            //         <FiMoreVertical />
            //       </div>
            //     </div>
            //     <p>We are using cookies for no reason.</p>
            //     <div className="card-actions justify-end">
            //       <button className="btn btn-primary btn-xs">Accept</button>
            //       <button className="btn btn-ghost btn-xs">Deny</button>
            //     </div>
            //   </div>
            // </div>
          )
          )}
        </div>
      </Sheet>
      {/* <Card loading={isLoading} compact bordered={false}>
        < Card.Title > {t('credential:title', 'Credentials')}</Card.Title>
        <Card.Body>



          <div className=" grid grid-cols-1 gap-3  ">
            {isLoading ? (
              <div>Loading...</div>
            ) : (

              credentials?.data.map((credential) => (

                <div
                  className="p-4 rounded-lg  bg-base-300 w-full overflow-scroll"
                  key={credential.id}
                >
                  {JSON.stringify(credential)}
                  <Display title="ID" size='md' value={credential.id} />
                  <Display title="Username" value={credential.username} />
                  <Display title="Nickname">
                    {credential.nickname
                      ? credential.nickname.toLocaleString()
                      : ''}
                  </Display>
                  <Display title="Email">
                    {credential.email ? credential.email.toLocaleString() : ''}
                  </Display>
                  <Display title="Password">
                    {credential.password
                      ? credential.password.toLocaleString()
                      : ''}
                  </Display>
                  <Display title="Apikey">
                    {credential.apikey
                      ? credential.apikey.toLocaleString()
                      : ''}
                  </Display>

                  <Display title="Platform" value={<SocialIcon name={credential.platform_name} />} />
                  <Display title="Status">
                    {credential.status ? <Badge title={credential.status} color="success" variant='outline' >{credential.status}</Badge> : ''}
                  </Display>
                  <Display title="Url">
                    {credential.url}
                  </Display>
                  <Display title="Enabled">
                    {credential.enabled ? 'Yes' : 'No'}
                  </Display>
                  <Display title="Updated at">
                    {credential.updated_at
                      ? credential.updated_at.toLocaleString()
                      : ''}
                  </Display>
                </div>
              ))
            )}
          </div>
        </Card.Body>
      </Card> */}
    </SettingsLayout >
  );
};

type ShowProps = {
  query?: '';
  id: BaseKey;
  isOpen?: boolean;
  onClose?: MouseEventHandler
}

const Show: FC<ShowProps> = ({ id, isOpen, onClose }) => {

  const { query, back } = useRouter();

  // const { queryResult } = useShow<Credential>();
  // const { data } = queryResult;
  // const record = data?.data;

  const { data } = useOne<Credential>({
    resource: "credentials",
    id: query?.id,
    // queryOptions: {
    //   enabled: !!record,
    // },
  });
  return (
    <Modal open={!!query.id} className="max-w-screen-md">
      {/* {JSON.stringify(data)} */}
      {query.id &&
        <div>
          <ModalHeader>
            Title is here
          </ModalHeader>
          <div className=' grid  grid-flow-row-dense grid-cols-2 grid-rows-2 gap-5'>
            <Display title="ID" size='md' value={data?.data.id} />
            <Display title="nickname" size='md' value={data?.data.nickname} />
            <Display title="email" size='md' value={data?.data.email} />
            <Display title="password" size='md' value={data?.data.password} />
            <Display title="apikey" size='md' value={data?.data.apikey} />
            <Display title="status" size='md' value={data?.data.status} />
            <Display title="url" size='md' value={data?.data.url} />
            <Display title="enabled" size='md' value={data?.data.enabled} />
            <Display title="updated_at" size='md' value={data?.data.updated_at} />
            <Display title="created_at" size='md' value={data?.data.id} />

          </div>
          <ModalActions>
            <button className='btn btn-sm' onClick={back}>
              close
            </button>
          </ModalActions>

        </div>
      }
    </Modal>




  )
}


type CreateProps = {};

const Create: FC<CreateProps> = ({ }) => {
  const { query, back } = useRouter();

  return (
    <Modal open={!!query.create} className="max-w-screen-md">
      {/* {JSON.stringify(data)} */}
      {query.create &&
        <div>
          <ModalHeader>
            Create new Item
          </ModalHeader>
          <div className=' grid  grid-flow-row-dense grid-cols-2 grid-rows-2 gap-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Maxime, modi nam necessitatibus similique magnam
            dicta illum omnis, quisquam quas ut, rem sapiente sed nihil obcaecati officiis facilis porro placeat itaque.

          </div>
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
type EditProps = {};

const Edit: FC<CreateProps> = ({ }) => {
  const { query, back } = useRouter();

  return (
    <Modal open={!!query.edit} className="max-w-screen-md">
      {/* {JSON.stringify(data)} */}
      {query.create &&
        <div>
          <ModalHeader>
            Edit {query?.id}
          </ModalHeader>
          <div className=' grid  grid-flow-row-dense grid-cols-2 grid-rows-2 gap-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Maxime, modi nam necessitatibus similique magnam
            dicta illum omnis, quisquam quas ut, rem sapiente sed nihil obcaecati officiis facilis porro placeat itaque.

          </div>
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


export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['credential']))
    }
  };
};

export default CredentialList;
