import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Video } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const VideoCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('video:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('video:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.title', 'Title')}>
          <Form.Input
            {...register('title', { required: false })}
            type="text"
            id="title"
            placeholder={t('video:fields.title', 'Title')}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.description', 'Description')}>
          <Form.Input
            {...register('description', { required: false })}
            type="text"
            id="description"
            placeholder={t('video:fields.description', 'Description')}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.channelId', 'Channel id')}>
          <Form.Input
            {...register('channel_id', { required: false })}
            type="text"
            id="channel_id"
            placeholder={t('video:fields.channelId', 'Channel id')}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.chapters', 'Chapters')}>
          <Form.Input
            {...register('chapters', { required: false })}
            type="text"
            id="chapters"
            placeholder={t('video:fields.chapters', 'Chapters')}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.metadata', 'Metadata')}>
          <Form.Input
            {...register('metadata', { required: false })}
            type="text"
            id="metadata"
            placeholder={t('video:fields.metadata', 'Metadata')}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.status', 'Status')}>
          <Select
            {...register('status', { required: false })}
            options={[
              Object.keys(Enumvideostatus).map((key) => ({
                label: t(`enums:Enumvideostatus.${key}`, key),
                value: key
              }))
            ]}
            id="status"
            placeholder={t('video:fields.status', 'Status')}
          />
        </Form.Item>

        <Form.Item
          label={t('video:fields.textTracksFileUrl', 'Text tracks file url')}
        >
          <Form.Input
            {...register('text_tracks_file_url', { required: false })}
            type="text"
            id="text_tracks_file_url"
            placeholder={t(
              'video:fields.textTracksFileUrl',
              'Text tracks file url'
            )}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.publishingAt', 'Publishing at')}>
          <DatePicker
            {...register('publishing_at', { required: false })}
            id="publishing_at"
            placeholder={t('video:fields.publishingAt', 'Publishing at')}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.thumbs', 'Thumbs')}>
          <Form.Input
            {...register('thumbs', { required: false })}
            type="text"
            id="thumbs"
            placeholder={t('video:fields.thumbs', 'Thumbs')}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.url', 'Url')}>
          <Form.Input
            {...register('url', { required: false })}
            type="text"
            id="url"
            placeholder={t('video:fields.url', 'Url')}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('video:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>

        <Form.Item label={t('video:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('video:fields.createdAt', 'Created at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
