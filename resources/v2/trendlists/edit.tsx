import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Trendlist } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const TrendlistEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('trendlist:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('trendlist:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('trendlist:fields.date', 'Date')}>
          <DatePicker
            {...register('date', { required: false })}
            id="date"
            placeholder={t('trendlist:fields.date', 'Date')}
          />
        </Form.Item>

        <Form.Item label={t('trendlist:fields.trends', 'Trends')}>
          <Form.Input
            {...register('trends', { required: false })}
            type="text"
            id="trends"
            placeholder={t('trendlist:fields.trends', 'Trends')}
          />
        </Form.Item>

        <Form.Item label={t('trendlist:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('trendlist:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('trendlist:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('trendlist:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
