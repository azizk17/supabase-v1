<% include('../../functions') %>
<% const smallModuleName = definition.__moduleName.charAt(0).toLowerCase() + definition.__moduleName.slice(1); _%>
import React, { useState } from "react";
import { IResourceComponentsProps, useTranslate } from "@pankod/refine-core";


import { <%= definition.__moduleName %> } from "<%= type_path %>";
import { useForm } from '@pankod/refine-react-hook-form';
import {Form, Card} from '@/components/ui';

export const  <%= definition.__moduleName %>Edit: React.FC<IResourceComponentsProps> = () => {

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
      <% for (const fi of definition.properties) { _%>

        <Form.Item label={t(<%- localeKeyForField(fi.name) %>)}>
          <% if(fi.type === 'Date') { _%>
            <DatePicker {...register('<%= fi.name %>', { required: <%= fi.required %> })}
            id="<%= fi.name %>"
            placeholder={t(<%- localeKeyForField(fi.name) %>)} />
          <% } else if(fi.type === 'Boolean') { _%>
            <Checkbox {...register('<%= fi.name %>', { required: <%= fi.required %> })}
            id="<%= fi.name %>"
            placeholder={t(<%- localeKeyForField(fi.name) %>)} />
            <% } else if(fi.options) { _%>
              <Select 
              {...register('<%= fi.name %>', { required: <%= fi.required %> })}
              options={[
                Object.keys(<%= fi.type _%>).map((key) => ({
                  label: t(`enums:<%= fi.type %>.${key}`, key),
                  value: key,
                })),
              ]}
              id="<%= fi.name %>"
              placeholder={t(<%- localeKeyForField(fi.name) %>)} />

          <% } else { _%>
            <Form.Input
              {...register('<%= fi.name %>', { required: <%= fi.required %> })}
              type="text"
              id="<%= fi.name %>"
              placeholder={t(<%- localeKeyForField(fi.name) %>)}
            />
          <% } _%>
        </Form.Item>
      <% } _%>
        </Form>
        </Card>
  );
};
