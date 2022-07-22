import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Track } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const TrackCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('track:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('track:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('track:fields.title', 'Title')}>
          <Form.Input
            {...register('title', { required: false })}
            type="text"
            id="title"
            placeholder={t('track:fields.title', 'Title')}
          />
        </Form.Item>

        <Form.Item label={t('track:fields.templateId', 'Template id')}>
          <Form.Input
            {...register('template_id', { required: false })}
            type="text"
            id="template_id"
            placeholder={t('track:fields.templateId', 'Template id')}
          />
        </Form.Item>

        <Form.Item label={t('track:fields.thumb', 'Thumb')}>
          <Form.Input
            {...register('thumb', { required: false })}
            type="text"
            id="thumb"
            placeholder={t('track:fields.thumb', 'Thumb')}
          />
        </Form.Item>

        <Form.Item label={t('track:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('track:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('track:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('track:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
