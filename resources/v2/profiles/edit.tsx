import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Profile } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const ProfileEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('profile:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('profile:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('profile:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('profile:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>

        <Form.Item label={t('profile:fields.username', 'Username')}>
          <Form.Input
            {...register('username', { required: false })}
            type="text"
            id="username"
            placeholder={t('profile:fields.username', 'Username')}
          />
        </Form.Item>

        <Form.Item label={t('profile:fields.avatarUrl', 'Avatar url')}>
          <Form.Input
            {...register('avatar_url', { required: false })}
            type="text"
            id="avatar_url"
            placeholder={t('profile:fields.avatarUrl', 'Avatar url')}
          />
        </Form.Item>

        <Form.Item label={t('profile:fields.website', 'Website')}>
          <Form.Input
            {...register('website', { required: false })}
            type="text"
            id="website"
            placeholder={t('profile:fields.website', 'Website')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
