import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Fetch } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const FetchEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('fetch:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('fetch:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('fetch:fields.title', 'Title')}>
          <Form.Input
            {...register('title', { required: false })}
            type="text"
            id="title"
            placeholder={t('fetch:fields.title', 'Title')}
          />
        </Form.Item>

        <Form.Item label={t('fetch:fields.description', 'Description')}>
          <Form.Input
            {...register('description', { required: false })}
            type="text"
            id="description"
            placeholder={t('fetch:fields.description', 'Description')}
          />
        </Form.Item>

        <Form.Item label={t('fetch:fields.output', 'Output')}>
          <Form.Input
            {...register('output', { required: false })}
            type="text"
            id="output"
            placeholder={t('fetch:fields.output', 'Output')}
          />
        </Form.Item>

        <Form.Item label={t('fetch:fields.status', 'Status')}>
          <Select
            {...register('status', { required: false })}
            options={[
              Object.keys(EnumFetchStatus).map((key) => ({
                label: t(`enums:EnumFetchStatus.${key}`, key),
                value: key
              }))
            ]}
            id="status"
            placeholder={t('fetch:fields.status', 'Status')}
          />
        </Form.Item>

        <Form.Item label={t('fetch:fields.duration', 'Duration')}>
          <Form.Input
            {...register('duration', { required: false })}
            type="text"
            id="duration"
            placeholder={t('fetch:fields.duration', 'Duration')}
          />
        </Form.Item>

        <Form.Item label={t('fetch:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('fetch:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('fetch:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('fetch:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
