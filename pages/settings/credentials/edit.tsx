import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Credential } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const CredentialEdit: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const {
    refineCore: { onFinish, formLoading, queryResult },
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm();

  const recordData = queryResult?.data?.data;
  return (
    <Card title={t('pages.edit', 'Edit')}>
      <Form
        onSubmit={handleSubmit(onFinish)}
        errors={errors}
        loading={formLoading}
      >
        <Form.Item label={t('credential:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('credential:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.username', 'Username')}>
          <Form.Input
            {...register('username', { required: false })}
            type="text"
            id="username"
            placeholder={t('credential:fields.username', 'Username')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.nickname', 'Nickname')}>
          <Form.Input
            {...register('nickname', { required: false })}
            type="text"
            id="nickname"
            placeholder={t('credential:fields.nickname', 'Nickname')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.email', 'Email')}>
          <Form.Input
            {...register('email', { required: false })}
            type="text"
            id="email"
            placeholder={t('credential:fields.email', 'Email')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.password', 'Password')}>
          <Form.Input
            {...register('password', { required: false })}
            type="text"
            id="password"
            placeholder={t('credential:fields.password', 'Password')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.apikey', 'Apikey')}>
          <Form.Input
            {...register('apikey', { required: false })}
            type="text"
            id="apikey"
            placeholder={t('credential:fields.apikey', 'Apikey')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.avatar', 'Avatar')}>
          <Form.Input
            {...register('avatar', { required: false })}
            type="text"
            id="avatar"
            placeholder={t('credential:fields.avatar', 'Avatar')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.status', 'Status')}>
          <Select
            {...register('status', { required: false })}
            options={[
              Object.keys(EnumCredentialStatus).map((key) => ({
                label: t(`enums:EnumCredentialStatus.${key}`, key),
                value: key
              }))
            ]}
            id="status"
            placeholder={t('credential:fields.status', 'Status')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.url', 'Url')}>
          <Form.Input
            {...register('url', { required: false })}
            type="text"
            id="url"
            placeholder={t('credential:fields.url', 'Url')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.enabled', 'Enabled')}>
          <Form.Input
            {...register('enabled', { required: false })}
            type="text"
            id="enabled"
            placeholder={t('credential:fields.enabled', 'Enabled')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('credential:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>

        <Form.Item label={t('credential:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('credential:fields.createdAt', 'Created at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
