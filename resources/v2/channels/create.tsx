import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Channel } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const ChannelCreate: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const {
    refineCore: { onFinish, formLoading, queryResult },
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm();

  return (
    <Card title={t('pages.create', 'Create New')}>
      <Form
        onSubmit={handleSubmit(onFinish)}
        errors={errors}
        loading={formLoading}
      >
        <Form.Item label={t('channel:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('channel:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: false })}
            type="text"
            id="name"
            placeholder={t('channel:fields.name', 'Name')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.apikey', 'Apikey')}>
          <Form.Input
            {...register('apikey', { required: false })}
            type="text"
            id="apikey"
            placeholder={t('channel:fields.apikey', 'Apikey')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.countryId', 'Country id')}>
          <Form.Input
            {...register('country_id', { required: true })}
            type="text"
            id="country_id"
            placeholder={t('channel:fields.countryId', 'Country id')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.credentialId', 'Credential id')}>
          <Form.Input
            {...register('credential_id', { required: true })}
            type="text"
            id="credential_id"
            placeholder={t('channel:fields.credentialId', 'Credential id')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.languageId', 'Language id')}>
          <Form.Input
            {...register('language_id', { required: true })}
            type="text"
            id="language_id"
            placeholder={t('channel:fields.languageId', 'Language id')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.metadata', 'Metadata')}>
          <Form.Input
            {...register('metadata', { required: false })}
            type="text"
            id="metadata"
            placeholder={t('channel:fields.metadata', 'Metadata')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.orginalUrl', 'Orginal url')}>
          <Form.Input
            {...register('orginal_url', { required: false })}
            type="text"
            id="orginal_url"
            placeholder={t('channel:fields.orginalUrl', 'Orginal url')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.stationId', 'Station id')}>
          <Form.Input
            {...register('station_id', { required: true })}
            type="text"
            id="station_id"
            placeholder={t('channel:fields.stationId', 'Station id')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.platformName', 'Platform name')}>
          <Form.Input
            {...register('platform_name', { required: true })}
            type="text"
            id="platform_name"
            placeholder={t('channel:fields.platformName', 'Platform name')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.thumb', 'Thumb')}>
          <Form.Input
            {...register('thumb', { required: false })}
            type="text"
            id="thumb"
            placeholder={t('channel:fields.thumb', 'Thumb')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.description', 'Description')}>
          <Form.Input
            {...register('description', { required: false })}
            type="text"
            id="description"
            placeholder={t('channel:fields.description', 'Description')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.logo', 'Logo')}>
          <Form.Input
            {...register('logo', { required: false })}
            type="text"
            id="logo"
            placeholder={t('channel:fields.logo', 'Logo')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.watermark', 'Watermark')}>
          <Form.Input
            {...register('watermark', { required: false })}
            type="text"
            id="watermark"
            placeholder={t('channel:fields.watermark', 'Watermark')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('channel:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('channel:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('channel:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
