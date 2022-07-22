import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Animation } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const AnimationCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('animation:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('animation:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('animation:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: false })}
            type="text"
            id="name"
            placeholder={t('animation:fields.name', 'Name')}
          />
        </Form.Item>

        <Form.Item label={t('animation:fields.description', 'Description')}>
          <Form.Input
            {...register('description', { required: false })}
            type="text"
            id="description"
            placeholder={t('animation:fields.description', 'Description')}
          />
        </Form.Item>

        <Form.Item label={t('animation:fields.thumbs', 'Thumbs')}>
          <Form.Input
            {...register('thumbs', { required: false })}
            type="text"
            id="thumbs"
            placeholder={t('animation:fields.thumbs', 'Thumbs')}
          />
        </Form.Item>

        <Form.Item label={t('animation:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('animation:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('animation:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('animation:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
