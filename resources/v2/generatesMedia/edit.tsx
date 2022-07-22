
import React, { useState } from "react";
import { IResourceComponentsProps, useTranslate } from "@pankod/refine-core";


import { GeneratesMedia } from "type3";
import { useForm } from '@pankod/refine-react-hook-form';
import {Form, Card} from '@/components/ui';

export const  GeneratesMediaEdit: React.FC<IResourceComponentsProps> = () => {

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
      
        <Form.Item label={t("generatesMedia:fields.generateId", "Generate id")}>
                      <Form.Input
              {...register('generate_id', { required:  })}
              type="text"
              id="generate_id"
              placeholder={t("generatesMedia:fields.generateId", "Generate id")}
            />
                  </Form.Item>
      
        <Form.Item label={t("generatesMedia:fields.mediaId", "Media id")}>
                      <Form.Input
              {...register('media_id', { required:  })}
              type="text"
              id="media_id"
              placeholder={t("generatesMedia:fields.mediaId", "Media id")}
            />
                  </Form.Item>
      
        <Form.Item label={t("generatesMedia:fields.createdAt", "Created at")}>
                      <DatePicker {...register('created_at', { required:  })}
            id="created_at"
            placeholder={t("generatesMedia:fields.createdAt", "Created at")} />
                  </Form.Item>
      
        <Form.Item label={t("generatesMedia:fields.updatedAt", "Updated at")}>
                      <DatePicker {...register('updated_at', { required:  })}
            id="updated_at"
            placeholder={t("generatesMedia:fields.updatedAt", "Updated at")} />
                  </Form.Item>
              </Form>
        </Card>
  );
};
