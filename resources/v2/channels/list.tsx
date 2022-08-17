import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import React from 'react';

import { useNavigation, useDelete } from '@pankod/refine-core';
import { Column } from '@pankod/refine-react-table';
import { FiEdit, FiEye, FiTrash2, FiMoreVertical } from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { Channel } from 'types';

export const ChannelList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();

  // const countriesIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  // const { data: countries } = useMany<Country>({
  //   resource: 'countries',
  //   ids: countriesIds
  // });

  // const credentialsIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  // const { data: credentials } = useMany<Credential>({
  //   resource: 'credentials',
  //   ids: credentialsIds
  // });

  // const languagesIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  // const { data: languages } = useMany<Language>({
  //   resource: 'languages',
  //   ids: languagesIds
  // });

  // const stationsIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  // const { data: stations } = useMany<Station>({
  //   resource: 'stations',
  //   ids: stationsIds
  // });

  // const platformsIds = tableProps?.dataSource?.map((item) => item.id) ?? [];
  // const { data: platforms } = useMany<Platform>({
  //   resource: 'platforms',
  //   ids: platformsIds
  // });

  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: t('channel:fields.id', 'Id'),
        accessor: 'id',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'name',
        Header: t('channel:fields.name', 'Name'),
        accessor: 'name',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'apikey',
        Header: t('channel:fields.apikey', 'Apikey'),
        accessor: 'apikey',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'country_id',
        Header: t('channel:fields.countryId', 'Country id'),
        accessor: 'country_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'credential_id',
        Header: t('channel:fields.credentialId', 'Credential id'),
        accessor: 'credential_id',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'language_id',
        Header: t('channel:fields.languageId', 'Language id'),
        accessor: 'language_id',
        Cell: ({ value }) => (value ? JSON.stringify(value) : '')
      },
      {
        id: 'metadata',
        Header: t('channel:fields.metadata', 'Metadata'),
        accessor: 'metadata',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'orginal_url',
        Header: t('channel:fields.orginalUrl', 'Orginal url'),
        accessor: 'orginal_url',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'station_id',
        Header: t('channel:fields.stationId', 'Station id'),
        accessor: 'station_id',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'platform_name',
        Header: t('channel:fields.platformName', 'Platform name'),
        accessor: 'platform_name',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'thumb',
        Header: t('channel:fields.thumb', 'Thumb'),
        accessor: 'thumb',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'description',
        Header: t('channel:fields.description', 'Description'),
        accessor: 'description',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'logo',
        Header: t('channel:fields.logo', 'Logo'),
        accessor: 'logo',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'watermark',
        Header: t('channel:fields.watermark', 'Watermark'),
        accessor: 'watermark',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'created_at',
        Header: t('channel:fields.createdAt', 'Created at'),
        accessor: 'created_at',
        Cell: ({ value }) => (value ? value.toLocaleString() : '')
      },
      {
        id: 'updated_at',
        Header: t('channel:fields.updatedAt', 'Updated at'),
        accessor: 'updated_at',
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

  return (
    <Listing
      canCreate={undefined}
      createButtonProps={undefined}
      pageHeaderProps={undefined}
      resource="channels"
    >
      <Table title={t('channel:title', 'channels')} columns={columns} />
    </Listing>
  );
};
