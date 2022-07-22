import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { CollectionsSource } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const CollectionsSourceEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('collectionsSource:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('collectionsSource:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('collectionsSource:fields.sourceId', 'Source id')}>
          <Form.Input
            {...register('source_id', { required: false })}
            type="text"
            id="source_id"
            placeholder={t('collectionsSource:fields.sourceId', 'Source id')}
          />
        </Form.Item>

        <Form.Item
          label={t('collectionsSource:fields.collectionId', 'Collection id')}
        >
          <Form.Input
            {...register('collection_id', { required: false })}
            type="text"
            id="collection_id"
            placeholder={t(
              'collectionsSource:fields.collectionId',
              'Collection id'
            )}
          />
        </Form.Item>

        <Form.Item
          label={t('collectionsSource:fields.createdAt', 'Created at')}
        >
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('collectionsSource:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item
          label={t('collectionsSource:fields.updatedAt', 'Updated at')}
        >
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('collectionsSource:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
