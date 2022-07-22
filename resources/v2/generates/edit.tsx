import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Generate } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const GenerateEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('generate:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('generate:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('generate:fields.templateId', 'Template id')}>
          <Form.Input
            {...register('template_id', { required: false })}
            type="text"
            id="template_id"
            placeholder={t('generate:fields.templateId', 'Template id')}
          />
        </Form.Item>

        <Form.Item label={t('generate:fields.metadata', 'Metadata')}>
          <Form.Input
            {...register('metadata', { required: false })}
            type="text"
            id="metadata"
            placeholder={t('generate:fields.metadata', 'Metadata')}
          />
        </Form.Item>

        <Form.Item label={t('generate:fields.status', 'Status')}>
          <Select
            {...register('status', { required: false })}
            options={[
              Object.keys(EnumGenerateVideoStatus).map((key) => ({
                label: t(`enums:EnumGenerateVideoStatus.${key}`, key),
                value: key
              }))
            ]}
            id="status"
            placeholder={t('generate:fields.status', 'Status')}
          />
        </Form.Item>

        <Form.Item label={t('generate:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('generate:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('generate:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('generate:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
