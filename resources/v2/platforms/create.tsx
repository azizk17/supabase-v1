import React, { useEffect, useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Platform, Enumplatformstatus } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card, Select } from '@/components/ui2';
import { Sheet } from '@/components/Sheet';
import { Actions } from '@/components/Actions';

export const PlatformCreate: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const {
    refineCore: { onFinish, formLoading, queryResult },
    register,
    handleSubmit,
    resetField,
    formState,
  } = useForm();

  return (
    <Form
      onSubmit={handleSubmit(onFinish)}
      ctx={formState}
      // errors={{err: "sde", msg: "do something"}}
      loading={formLoading}
      actions={
        {
          submit: {
            // onClick: handleSubmit(onFinish),
            loading: formLoading
          }
        }
      }
    >
      <Form.Item label={t('platform:fields.name', 'Name')} htmlFor="name">
        <Form.Input
          {...register('name', { required: "Name is Required" })}
          type="text"
          id="name"
          placeholder={t('platform:fields.name', 'Name')}

        />
      </Form.Item>

      <Form.Item  htmlFor="age">
        <Form.Input
          {...register('age',  { min: 18, })}
          type="number"
          id="age"
          placeholder={t('platform:fields.age', 'Age')}
        />
      </Form.Item>

      {/* <Form.Item label={t('platform:fields.status', 'Status')}>
          <Select
            {...register('status', { required: false })}
            options={[
              Object.keys(Enumplatformstatus).map((key) => ({
                label: t(`enums:EnumPlatformStatus.${key}`, key),
                value: key
              }))
            ]}
            id="status"
            placeholder={t('platform:fields.status', 'Status')}
          />
        </Form.Item> */}

      <Form.Item label={t('platform:fields.url', 'Url')} htmlFor="url">
        <Form.Input
          {...register('url', { required: false })}
          type="text"
          id="url"
          placeholder={t('platform:fields.url', 'Url')}
        />
      </Form.Item>

    </Form>
  );
};
