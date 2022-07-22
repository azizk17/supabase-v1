import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Effect } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const EffectCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('effect:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('effect:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('effect:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: false })}
            type="text"
            id="name"
            placeholder={t('effect:fields.name', 'Name')}
          />
        </Form.Item>

        <Form.Item label={t('effect:fields.descriptions', 'Descriptions')}>
          <Form.Input
            {...register('descriptions', { required: false })}
            type="text"
            id="descriptions"
            placeholder={t('effect:fields.descriptions', 'Descriptions')}
          />
        </Form.Item>

        <Form.Item label={t('effect:fields.thumb', 'Thumb')}>
          <Form.Input
            {...register('thumb', { required: false })}
            type="text"
            id="thumb"
            placeholder={t('effect:fields.thumb', 'Thumb')}
          />
        </Form.Item>

        <Form.Item label={t('effect:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('effect:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('effect:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('effect:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
