import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { PlatformSetting } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const PlatformSettingCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item
          label={t('platformSetting:fields.platformName', 'Platform name')}
        >
          <Form.Input
            {...register('platform_name', { required: true })}
            type="text"
            id="platform_name"
            placeholder={t(
              'platformSetting:fields.platformName',
              'Platform name'
            )}
          />
        </Form.Item>

        <Form.Item label={t('platformSetting:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('platformSetting:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('platformSetting:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('platformSetting:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
