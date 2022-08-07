import {
  BaseKey,
  IResourceComponentsProps,
  useList,
  useOne,
  useShow,
  useTranslate
} from '@pankod/refine-core';
import React, { FC, MouseEventHandler, useRef, useState } from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, } from '@/components/crud/Table';

import { Credential } from 'types';
import SettingsLayout from '@/components/layout/SettingsLayout';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Badge, Card, } from '@/components/ui2';
import Modal from '@/components/Modal';

import { Display } from '@/components/DataDispaly';
import SocialIcon from '@/components/SocialIcon';
import { Sheet } from '@/components/Sheet';
import Link from 'next/link';
import ListCard from '@/components/ListCard';
import ModalActions from '@/components/ui2/Modal/ModalActions';
import { Router, useRouter } from 'next/router';
import ModalHeader from '@/components/ui2/Modal/ModalHeader';
import NavLink from '@/components/NavLink';
import CrudOnModal from '@/components/CrudOnModal';
import Skeleton from '@/components/Skeleton';
import AppTable from '@/components/AppTable';
import CredentialCreate from './create';
import CreateForm from './create.form';
import { useDropzone } from 'react-dropzone';


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
      <CreateForm />
      <Edit />
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
              actions={[
                <Link href={`?edit=${credential.id}`} as={`credentials/edit/${credential.id}`} >
                  Edit
                </Link>,
                <a onClick={() => alert("remove")}>
                  Remove
                </a>,
                <a onClick={() => alert("disable")}>
                  Disable
                </a>,
              ]
              }
            />
          )
          )}
        </div>
      </Sheet>
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

  const { data, isFetching } = useOne<Credential>({
    resource: "credentials",
    id: query?.id,

    // queryOptions: {
    //   enabled: !!record,
    // },
  });
  return (
    <Modal open={!!query.id} onClose={back} responsive={false} closeable>

      <Sheet title={"Show page"} columns={undefined} loading={isFetching}>


        <div className=' grid  grid-flow-row-dense grid-cols-1 grid-rows-1 gap-5'>
          <Display title="ID" size='md' value={data?.data.id} />
          <Display title="nickname" size='md' value={data?.data.nickname} />
          <Display title="email" copy size='md' value={data?.data.email} />
          <Display title="password" type='secret' size='md' value={data?.data.password} />
          <Display title="apikey" size='md' value={data?.data.apikey} />
          <Display title="status" size='md' value={data?.data.status} />
          <Display title="url" size='md' value={data?.data.url} />
          <Display title="url" type='link' size='md' value={data?.data.url} />
          <Display title="enabled" type='boolean' size='md' value={data?.data.enabled} />
          <Display title="updated_at" type='date' size='md' value={data?.data.updated_at} />
          <Display title="created_at" size='md' value={data?.data.id} />

        </div>
        <ModalActions>
          <button className='btn btn-sm' onClick={back}>
            close
          </button>
        </ModalActions>
      </Sheet>
    </Modal>

  )
}


type CreateProps = {};

const Create: FC<CreateProps> = ({ }) => {
  const { query, back } = useRouter();
  const formRef = useRef()
  return (
    <Modal open={!!query.create} onClose={back}>
      {/* {JSON.stringify(data)} */}
      {query.create &&
        <div>
          <ModalHeader>
            Create new Item
          </ModalHeader>
          <CreateForm ref={formRef} />
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
      {query.edit &&
        <div>
          <ModalHeader>
            Edit {query?.edit}
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
