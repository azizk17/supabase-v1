import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Template } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const TemplateEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('template:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('template:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('template:fields.key', 'Key')}>
          <Form.Input
            {...register('key', { required: false })}
            type="text"
            id="key"
            placeholder={t('template:fields.key', 'Key')}
          />
        </Form.Item>

        <Form.Item label={t('template:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: false })}
            type="text"
            id="name"
            placeholder={t('template:fields.name', 'Name')}
          />
        </Form.Item>

        <Form.Item label={t('template:fields.description', 'Description')}>
          <Form.Input
            {...register('description', { required: false })}
            type="text"
            id="description"
            placeholder={t('template:fields.description', 'Description')}
          />
        </Form.Item>

        <Form.Item label={t('template:fields.thumb', 'Thumb')}>
          <Form.Input
            {...register('thumb', { required: false })}
            type="text"
            id="thumb"
            placeholder={t('template:fields.thumb', 'Thumb')}
          />
        </Form.Item>

        <Form.Item label={t('template:fields.metadata', 'Metadata')}>
          <Form.Input
            {...register('metadata', { required: false })}
            type="text"
            id="metadata"
            placeholder={t('template:fields.metadata', 'Metadata')}
          />
        </Form.Item>

        <Form.Item label={t('template:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('template:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('template:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('template:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
