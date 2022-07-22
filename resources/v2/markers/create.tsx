import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Marker } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const MarkerCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('marker:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('marker:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('marker:fields.endAt', 'End at')}>
          <Form.Input
            {...register('end_at', { required: false })}
            type="text"
            id="end_at"
            placeholder={t('marker:fields.endAt', 'End at')}
          />
        </Form.Item>

        <Form.Item label={t('marker:fields.startAt', 'Start at')}>
          <Form.Input
            {...register('start_at', { required: false })}
            type="text"
            id="start_at"
            placeholder={t('marker:fields.startAt', 'Start at')}
          />
        </Form.Item>

        <Form.Item label={t('marker:fields.trackId', 'Track id')}>
          <Form.Input
            {...register('track_id', { required: false })}
            type="text"
            id="track_id"
            placeholder={t('marker:fields.trackId', 'Track id')}
          />
        </Form.Item>

        <Form.Item label={t('marker:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('marker:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('marker:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('marker:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
