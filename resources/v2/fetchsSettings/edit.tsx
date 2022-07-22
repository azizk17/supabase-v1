import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { FetchsSetting } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const FetchsSettingEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('fetchsSetting:fields.rateLimit', 'Rate limit')}>
          <Form.Input
            {...register('rate_limit', { required: true })}
            type="text"
            id="rate_limit"
            placeholder={t('fetchsSetting:fields.rateLimit', 'Rate limit')}
          />
        </Form.Item>

        <Form.Item label={t('fetchsSetting:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('fetchsSetting:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('fetchsSetting:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('fetchsSetting:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
