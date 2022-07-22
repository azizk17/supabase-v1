import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { FetchSource } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const FetchSourceEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('fetchSource:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('fetchSource:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('fetchSource:fields.title', 'Title')}>
          <Form.Input
            {...register('title', { required: false })}
            type="text"
            id="title"
            placeholder={t('fetchSource:fields.title', 'Title')}
          />
        </Form.Item>

        <Form.Item label={t('fetchSource:fields.dexcription', 'Dexcription')}>
          <Form.Input
            {...register('dexcription', { required: false })}
            type="text"
            id="dexcription"
            placeholder={t('fetchSource:fields.dexcription', 'Dexcription')}
          />
        </Form.Item>

        <Form.Item label={t('fetchSource:fields.output', 'Output')}>
          <Form.Input
            {...register('output', { required: false })}
            type="text"
            id="output"
            placeholder={t('fetchSource:fields.output', 'Output')}
          />
        </Form.Item>

        <Form.Item label={t('fetchSource:fields.status', 'Status')}>
          <Select
            {...register('status', { required: false })}
            options={[
              Object.keys(EnumFetchStatus).map((key) => ({
                label: t(`enums:EnumFetchStatus.${key}`, key),
                value: key
              }))
            ]}
            id="status"
            placeholder={t('fetchSource:fields.status', 'Status')}
          />
        </Form.Item>

        <Form.Item label={t('fetchSource:fields.sourceId', 'Source id')}>
          <Form.Input
            {...register('source_id', { required: false })}
            type="text"
            id="source_id"
            placeholder={t('fetchSource:fields.sourceId', 'Source id')}
          />
        </Form.Item>

        <Form.Item label={t('fetchSource:fields.fetchId', 'Fetch id')}>
          <Form.Input
            {...register('fetch_id', { required: false })}
            type="text"
            id="fetch_id"
            placeholder={t('fetchSource:fields.fetchId', 'Fetch id')}
          />
        </Form.Item>

        <Form.Item label={t('fetchSource:fields.duration', 'Duration')}>
          <Form.Input
            {...register('duration', { required: false })}
            type="text"
            id="duration"
            placeholder={t('fetchSource:fields.duration', 'Duration')}
          />
        </Form.Item>

        <Form.Item label={t('fetchSource:fields.resultes', 'Resultes')}>
          <Form.Input
            {...register('resultes', { required: false })}
            type="text"
            id="resultes"
            placeholder={t('fetchSource:fields.resultes', 'Resultes')}
          />
        </Form.Item>

        <Form.Item label={t('fetchSource:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('fetchSource:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('fetchSource:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('fetchSource:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
