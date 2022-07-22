import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Income } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const IncomeEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('income:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('income:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('income:fields.amount', 'Amount')}>
          <Form.Input
            {...register('amount', { required: false })}
            type="text"
            id="amount"
            placeholder={t('income:fields.amount', 'Amount')}
          />
        </Form.Item>

        <Form.Item label={t('income:fields.channelId', 'Channel id')}>
          <Form.Input
            {...register('channel_id', { required: true })}
            type="text"
            id="channel_id"
            placeholder={t('income:fields.channelId', 'Channel id')}
          />
        </Form.Item>

        <Form.Item
          label={t('income:fields.transactionNumber', 'Transaction number')}
        >
          <Form.Input
            {...register('transaction_number', { required: false })}
            type="text"
            id="transaction_number"
            placeholder={t(
              'income:fields.transactionNumber',
              'Transaction number'
            )}
          />
        </Form.Item>

        <Form.Item label={t('income:fields.createdAt', 'Created at')}>
          <DatePicker
            {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t('income:fields.createdAt', 'Created at')}
          />
        </Form.Item>

        <Form.Item label={t('income:fields.updatedAt', 'Updated at')}>
          <DatePicker
            {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t('income:fields.updatedAt', 'Updated at')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
