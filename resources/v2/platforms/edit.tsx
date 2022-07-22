import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Platform } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const PlatformEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('platform:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: true })}
            type="text"
            id="name"
            placeholder={t('platform:fields.name', 'Name')}
          />
        </Form.Item>

        <Form.Item label={t('platform:fields.label', 'Label')}>
          <Form.Input
            {...register('label', { required: false })}
            type="text"
            id="label"
            placeholder={t('platform:fields.label', 'Label')}
          />
        </Form.Item>

        <Form.Item label={t('platform:fields.status', 'Status')}>
          <Select
            {...register('status', { required: false })}
            options={[
              Object.keys(EnumPlatformStatus).map((key) => ({
                label: t(`enums:EnumPlatformStatus.${key}`, key),
                value: key
              }))
            ]}
            id="status"
            placeholder={t('platform:fields.status', 'Status')}
          />
        </Form.Item>

        <Form.Item label={t('platform:fields.url', 'Url')}>
          <Form.Input
            {...register('url', { required: false })}
            type="text"
            id="url"
            placeholder={t('platform:fields.url', 'Url')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
