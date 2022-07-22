import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Collection } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const CollectionEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('collection:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('collection:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('collection:fields.parentId', 'Parent id')}>
          <Form.Input
            {...register('parent_id', { required: false })}
            type="text"
            id="parent_id"
            placeholder={t('collection:fields.parentId', 'Parent id')}
          />
        </Form.Item>

        <Form.Item label={t('collection:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: false })}
            type="text"
            id="name"
            placeholder={t('collection:fields.name', 'Name')}
          />
        </Form.Item>

        <Form.Item label={t('collection:fields.thumb', 'Thumb')}>
          <Form.Input
            {...register('thumb', { required: false })}
            type="text"
            id="thumb"
            placeholder={t('collection:fields.thumb', 'Thumb')}
          />
        </Form.Item>

        <Form.Item label={t('collection:fields.metadata', 'Metadata')}>
          <Form.Input
            {...register('metadata', { required: false })}
            type="text"
            id="metadata"
            placeholder={t('collection:fields.metadata', 'Metadata')}
          />
        </Form.Item>

        <Form.Item label={t('collection:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('collection:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('collection:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('collection:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
