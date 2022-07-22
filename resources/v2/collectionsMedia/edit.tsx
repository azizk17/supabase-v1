import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { CollectionsMedia } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const CollectionsMediaEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('collectionsMedia:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('collectionsMedia:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item
          label={t('collectionsMedia:fields.collectionId', 'Collection id')}
        >
          <Form.Input
            {...register('collection_id', { required: false })}
            type="text"
            id="collection_id"
            placeholder={t(
              'collectionsMedia:fields.collectionId',
              'Collection id'
            )}
          />
        </Form.Item>

        <Form.Item label={t('collectionsMedia:fields.mediaId', 'Media id')}>
          <Form.Input
            {...register('media_id', { required: false })}
            type="text"
            id="media_id"
            placeholder={t('collectionsMedia:fields.mediaId', 'Media id')}
          />
        </Form.Item>

        <Form.Item label={t('collectionsMedia:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('collectionsMedia:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('collectionsMedia:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('collectionsMedia:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>

        <Form.Item label={t('collectionsMedia:fields.deleted', 'Deleted')}>
          <Form.Input
            {...register('deleted', { required: false })}
            type="text"
            id="deleted"
            placeholder={t('collectionsMedia:fields.deleted', 'Deleted')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
