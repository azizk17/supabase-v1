
import React, { useState } from "react";
import { IResourceComponentsProps, useTranslate } from "@pankod/refine-core";


import { Clip } from "type3";
import { useForm } from '@pankod/refine-react-hook-form';
import {Form, Card} from '@/components/ui';

export const  ClipEdit: React.FC<IResourceComponentsProps> = () => {

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
      
        <Form.Item label={t("clip:fields.id", "Id")}>
                      <Form.Input
              {...register('id', { required: true })}
              type="text"
              id="id"
              placeholder={t("clip:fields.id", "Id")}
            />
                  </Form.Item>
      
        <Form.Item label={t("clip:fields.title", "Title")}>
                      <Form.Input
              {...register('title', { required: false })}
              type="text"
              id="title"
              placeholder={t("clip:fields.title", "Title")}
            />
                  </Form.Item>
      
        <Form.Item label={t("clip:fields.description", "Description")}>
                      <Form.Input
              {...register('description', { required: false })}
              type="text"
              id="description"
              placeholder={t("clip:fields.description", "Description")}
            />
                  </Form.Item>
      
        <Form.Item label={t("clip:fields.sourceId", "Source id")}>
                      <Form.Input
              {...register('source_id', { required: false })}
              type="text"
              id="source_id"
              placeholder={t("clip:fields.sourceId", "Source id")}
            />
                  </Form.Item>
      
        <Form.Item label={t("clip:fields.thumb", "Thumb")}>
                      <Form.Input
              {...register('thumb', { required: false })}
              type="text"
              id="thumb"
              placeholder={t("clip:fields.thumb", "Thumb")}
            />
                  </Form.Item>
      
        <Form.Item label={t("clip:fields.url", "Url")}>
                      <Form.Input
              {...register('url', { required: false })}
              type="text"
              id="url"
              placeholder={t("clip:fields.url", "Url")}
            />
                  </Form.Item>
      
        <Form.Item label={t("clip:fields.createdAt", "Created at")}>
                      <DatePicker {...register('created_at', { required: false })}
            id="created_at"
            placeholder={t("clip:fields.createdAt", "Created at")} />
                  </Form.Item>
      
        <Form.Item label={t("clip:fields.updatedAt", "Updated at")}>
                      <DatePicker {...register('updated_at', { required: false })}
            id="updated_at"
            placeholder={t("clip:fields.updatedAt", "Updated at")} />
                  </Form.Item>
              </Form>
        </Card>
  );
};
