import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { GeneratedVideo } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const GeneratedVideoCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('generatedVideo:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('generatedVideo:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('generatedVideo:fields.title', 'Title')}>
          <Form.Input
            {...register('title', { required: false })}
            type="text"
            id="title"
            placeholder={t('generatedVideo:fields.title', 'Title')}
          />
        </Form.Item>

        <Form.Item
          label={t('generatedVideo:fields.description', 'Description')}
        >
          <Form.Input
            {...register('description', { required: false })}
            type="text"
            id="description"
            placeholder={t('generatedVideo:fields.description', 'Description')}
          />
        </Form.Item>

        <Form.Item label={t('generatedVideo:fields.channelId', 'Channel id')}>
          <Form.Input
            {...register('channel_id', { required: false })}
            type="text"
            id="channel_id"
            placeholder={t('generatedVideo:fields.channelId', 'Channel id')}
          />
        </Form.Item>

        <Form.Item label={t('generatedVideo:fields.generateId', 'Generate id')}>
          <Form.Input
            {...register('generate_id', { required: false })}
            type="text"
            id="generate_id"
            placeholder={t('generatedVideo:fields.generateId', 'Generate id')}
          />
        </Form.Item>

        <Form.Item label={t('generatedVideo:fields.metadata', 'Metadata')}>
          <Form.Input
            {...register('metadata', { required: false })}
            type="text"
            id="metadata"
            placeholder={t('generatedVideo:fields.metadata', 'Metadata')}
          />
        </Form.Item>

        <Form.Item label={t('generatedVideo:fields.status', 'Status')}>
          <Select
            {...register('status', { required: false })}
            options={[
              Object.keys(EnumVideoStatus).map((key) => ({
                label: t(`enums:EnumVideoStatus.${key}`, key),
                value: key
              }))
            ]}
            id="status"
            placeholder={t('generatedVideo:fields.status', 'Status')}
          />
        </Form.Item>

        <Form.Item
          label={t(
            'generatedVideo:fields.textTracksFileUrl',
            'Text tracks file url'
          )}
        >
          <Form.Input
            {...register('text_tracks_file_url', { required: false })}
            type="text"
            id="text_tracks_file_url"
            placeholder={t(
              'generatedVideo:fields.textTracksFileUrl',
              'Text tracks file url'
            )}
          />
        </Form.Item>

        <Form.Item
          label={t('generatedVideo:fields.publishingAt', 'Publishing at')}
        >
          <DatePicker
            {...register('publishing_at', { required: false })}
            id="publishing_at"
            placeholder={t(
              'generatedVideo:fields.publishingAt',
              'Publishing at'
            )}
          />
        </Form.Item>

        <Form.Item label={t('generatedVideo:fields.thumbs', 'Thumbs')}>
          <Form.Input
            {...register('thumbs', { required: false })}
            type="text"
            id="thumbs"
            placeholder={t('generatedVideo:fields.thumbs', 'Thumbs')}
          />
        </Form.Item>

        <Form.Item label={t('generatedVideo:fields.url', 'Url')}>
          <Form.Input
            {...register('url', { required: false })}
            type="text"
            id="url"
            placeholder={t('generatedVideo:fields.url', 'Url')}
          />
        </Form.Item>

        <Form.Item label={t('generatedVideo:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('generatedVideo:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>

        <Form.Item label={t('generatedVideo:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('generatedVideo:fields.createdAt', 'Created at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
