import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Country } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';

export const CountryEdit: React.FC<IResourceComponentsProps> = () => {
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
        <Form.Item label={t('country:fields.id', 'Id')}>
          <Form.Input
            {...register('id', { required: true })}
            type="text"
            id="id"
            placeholder={t('country:fields.id', 'Id')}
          />
        </Form.Item>

        <Form.Item label={t('country:fields.name', 'Name')}>
          <Form.Input
            {...register('name', { required: false })}
            type="text"
            id="name"
            placeholder={t('country:fields.name', 'Name')}
          />
        </Form.Item>

        <Form.Item label={t('country:fields.iso2', 'Iso2')}>
          <Form.Input
            {...register('iso2', { required: true })}
            type="text"
            id="iso2"
            placeholder={t('country:fields.iso2', 'Iso2')}
          />
        </Form.Item>

        <Form.Item label={t('country:fields.iso3', 'Iso3')}>
          <Form.Input
            {...register('iso3', { required: false })}
            type="text"
            id="iso3"
            placeholder={t('country:fields.iso3', 'Iso3')}
          />
        </Form.Item>

        <Form.Item label={t('country:fields.localName', 'Local name')}>
          <Form.Input
            {...register('local_name', { required: false })}
            type="text"
            id="local_name"
            placeholder={t('country:fields.localName', 'Local name')}
          />
        </Form.Item>

        <Form.Item label={t('country:fields.continent', 'Continent')}>
          <Select
            {...register('continent', { required: false })}
            options={[
              Object.keys(Continent).map((key) => ({
                label: t(`enums:Continent.${key}`, key),
                value: key
              }))
            ]}
            id="continent"
            placeholder={t('country:fields.continent', 'Continent')}
          />
        </Form.Item>

        <Form.Item label={t('country:fields.Enabled', 'Enabled')}>
          <Form.Input
            {...register('Enabled', { required: false })}
            type="text"
            id="Enabled"
            placeholder={t('country:fields.Enabled', 'Enabled')}
          />
        </Form.Item>
      </Form>
    </Card>
  );
};
