import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Trend } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const TrendCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('trend:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('trend:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('trend:fields.title', 'Title')}>
          <Form.Input
            {...register('title', { required: false })}
            type="text"
            id="title"
            placeholder={t('trend:fields.title', 'Title')}
          />
        </Form.Item>

        <Form.Item label={t('trend:fields.description', 'Description')}>
          <Form.Input
            {...register('description', { required: false })}
            type="text"
            id="description"
            placeholder={t('trend:fields.description', 'Description')}
          />
        </Form.Item>

        <Form.Item label={t('trend:fields.thumb', 'Thumb')}>
          <Form.Input
            {...register('thumb', { required: false })}
            type="text"
            id="thumb"
            placeholder={t('trend:fields.thumb', 'Thumb')}
          />
        </Form.Item>

        <Form.Item label={t('trend:fields.views', 'Views')}>
          <Form.Input
            {...register('views', { required: false })}
            type="text"
            id="views"
            placeholder={t('trend:fields.views', 'Views')}
          />
        </Form.Item>

        <Form.Item label={t('trend:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('trend:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('trend:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('trend:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
