import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Setting } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const SettingCreate: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('setting:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('setting:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('setting:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: false })}
            type="text"
            id="name"
            placeholder={t('setting:fields.name', 'Name')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
