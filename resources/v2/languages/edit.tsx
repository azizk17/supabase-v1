import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Language } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const LanguageEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('language:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('language:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('language:fields.code', 'Code')}>
          <Form.Input
            {...register('code', { required: true })}
            type="text"
            id="code"
            placeholder={t('language:fields.code', 'Code')}
          />
        </Form.Item>

        <Form.Item label={t('language:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: false })}
            type="text"
            id="name"
            placeholder={t('language:fields.name', 'Name')}
          />
        </Form.Item>

        <Form.Item label={t('language:fields.enabled', 'Enabled')}>
          <Form.Input
            {...register('enabled', { required: false })}
            type="text"
            id="enabled"
            placeholder={t('language:fields.enabled', 'Enabled')}
          />
        </Form.Item>

        <Form.Item label={t('language:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('language:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
