import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Media } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const MediaCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('media:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('media:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('media:fields.uuid', 'Uuid')}>
          <Form.Input
            {...register('uuid', { required: true })}
            type="text"
            id="uuid"
            placeholder={t('media:fields.uuid', 'Uuid')}
          />
        </Form.Item>

        <Form.Item label={t('media:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: true })}
            type="text"
            id="name"
            placeholder={t('media:fields.name', 'Name')}
          />
        </Form.Item>

        <Form.Item label={t('media:fields.fileType', 'File type')}>
          <Form.Input
            {...register('file_type', { required: true })}
            type="text"
            id="file_type"
            placeholder={t('media:fields.fileType', 'File type')}
          />
        </Form.Item>

        <Form.Item label={t('media:fields.metadata', 'Metadata')}>
          <Form.Input
            {...register('metadata', { required: false })}
            type="text"
            id="metadata"
            placeholder={t('media:fields.metadata', 'Metadata')}
          />
        </Form.Item>

        <Form.Item label={t('media:fields.fileSize', 'File size')}>
          <Form.Input
            {...register('file_size', { required: false })}
            type="text"
            id="file_size"
            placeholder={t('media:fields.fileSize', 'File size')}
          />
        </Form.Item>

        <Form.Item label={t('media:fields.url', 'Url')}>
          <Form.Input
            {...register('url', { required: true })}
            type="text"
            id="url"
            placeholder={t('media:fields.url', 'Url')}
          />
        </Form.Item>

        <Form.Item label={t('media:fields.thumb', 'Thumb')}>
          <Form.Input
            {...register('thumb', { required: false })}
            type="text"
            id="thumb"
            placeholder={t('media:fields.thumb', 'Thumb')}
          />
        </Form.Item>

        <Form.Item label={t('media:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('media:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('media:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('media:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
