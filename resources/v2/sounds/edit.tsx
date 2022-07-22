import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Sound } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const SoundEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('sound:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('sound:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('sound:fields.title', 'Title')}>
          <Form.Input
            {...register('title', { required: false })}
            type="text"
            id="title"
            placeholder={t('sound:fields.title', 'Title')}
          />
        </Form.Item>

        <Form.Item label={t('sound:fields.duration', 'Duration')}>
          <Form.Input
            {...register('duration', { required: false })}
            type="text"
            id="duration"
            placeholder={t('sound:fields.duration', 'Duration')}
          />
        </Form.Item>

        <Form.Item label={t('sound:fields.metadata', 'Metadata')}>
          <Form.Input
            {...register('metadata', { required: false })}
            type="text"
            id="metadata"
            placeholder={t('sound:fields.metadata', 'Metadata')}
          />
        </Form.Item>

        <Form.Item label={t('sound:fields.sourceId', 'Source id')}>
          <Form.Input
            {...register('source_id', { required: false })}
            type="text"
            id="source_id"
            placeholder={t('sound:fields.sourceId', 'Source id')}
          />
        </Form.Item>

        <Form.Item label={t('sound:fields.thumb', 'Thumb')}>
          <Form.Input
            {...register('thumb', { required: false })}
            type="text"
            id="thumb"
            placeholder={t('sound:fields.thumb', 'Thumb')}
          />
        </Form.Item>

        <Form.Item label={t('sound:fields.url', 'Url')}>
          <Form.Input
            {...register('url', { required: false })}
            type="text"
            id="url"
            placeholder={t('sound:fields.url', 'Url')}
          />
        </Form.Item>

        <Form.Item label={t('sound:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('sound:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('sound:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('sound:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
