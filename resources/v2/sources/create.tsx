import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Source } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const SourceCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('source:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('source:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('source:fields.username', 'Username')}>
          <Form.Input
            {...register('username', { required: false })}
            type="text"
            id="username"
            placeholder={t('source:fields.username', 'Username')}
          />
        </Form.Item>

        <Form.Item label={t('source:fields.disabled', 'Disabled')}>
          <Form.Input
            {...register('disabled', { required: false })}
            type="text"
            id="disabled"
            placeholder={t('source:fields.disabled', 'Disabled')}
          />
        </Form.Item>

        <Form.Item label={t('source:fields.screenshots', 'Screenshots')}>
          <Form.Input
            {...register('screenshots', { required: false })}
            type="text"
            id="screenshots"
            placeholder={t('source:fields.screenshots', 'Screenshots')}
          />
        </Form.Item>

        <Form.Item label={t('source:fields.status', 'Status')}>
          <Select
            {...register('status', { required: false })}
            options={[
              Object.keys(EnumSourceStatus).map((key) => ({
                label: t(`enums:EnumSourceStatus.${key}`, key),
                value: key
              }))
            ]}
            id="status"
            placeholder={t('source:fields.status', 'Status')}
          />
        </Form.Item>

        <Form.Item label={t('source:fields.thumb', 'Thumb')}>
          <Form.Input
            {...register('thumb', { required: false })}
            type="text"
            id="thumb"
            placeholder={t('source:fields.thumb', 'Thumb')}
          />
        </Form.Item>

        <Form.Item label={t('source:fields.url', 'Url')}>
          <Form.Input
            {...register('url', { required: false })}
            type="text"
            id="url"
            placeholder={t('source:fields.url', 'Url')}
          />
        </Form.Item>

        <Form.Item label={t('source:fields.platformName', 'Platform name')}>
          <Form.Input
            {...register('platform_name', { required: true })}
            type="text"
            id="platform_name"
            placeholder={t('source:fields.platformName', 'Platform name')}
          />
        </Form.Item>

        <Form.Item label={t('source:fields.credentialId', 'Credential id')}>
          <Form.Input
            {...register('credential_id', { required: false })}
            type="text"
            id="credential_id"
            placeholder={t('source:fields.credentialId', 'Credential id')}
          />
        </Form.Item>

        <Form.Item label={t('source:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('source:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('source:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('source:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
