import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Playlist } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const PlaylistEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('playlist:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('playlist:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('playlist:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: false })}
            type="text"
            id="name"
            placeholder={t('playlist:fields.name', 'Name')}
          />
        </Form.Item>

        <Form.Item label={t('playlist:fields.channelId', 'Channel id')}>
          <Form.Input
            {...register('channel_id', { required: true })}
            type="text"
            id="channel_id"
            placeholder={t('playlist:fields.channelId', 'Channel id')}
          />
        </Form.Item>

        <Form.Item label={t('playlist:fields.description', 'Description')}>
          <Form.Input
            {...register('description', { required: false })}
            type="text"
            id="description"
            placeholder={t('playlist:fields.description', 'Description')}
          />
        </Form.Item>

        <Form.Item label={t('playlist:fields.thumb', 'Thumb')}>
          <Form.Input
            {...register('thumb', { required: false })}
            type="text"
            id="thumb"
            placeholder={t('playlist:fields.thumb', 'Thumb')}
          />
        </Form.Item>

        <Form.Item label={t('playlist:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('playlist:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('playlist:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('playlist:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
