import React, { useState } from "react";

import {
  IResourceComponentsProps,
  useMany,
  CrudFilters,
  HttpError,
  useTranslate
} from "@pankod/refine-core";
import {
  useSelect,
  Form,
  Input,
  Button,
  DatePicker,
  DateField,
  Card,
  Icons,
  Select,
  FormProps,
  Row,
  Col
} from "@pankod/refine-antd";
import { IPost, ICategory, IPostFilterVariables } from "interfaces";

const { RangePicker } = DatePicker;
const Filter: React.FC<{ formProps: FormProps }> = ({ formProps }) => {
  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "categories"
  });
  <%- include('../sub/useSelect'); -%>
  

  return (
    <Form layout="vertical" {...formProps}>
      <Form.Item label="Search" name="q">
        <Input
          placeholder="ID, Title, Content, etc."
          prefix={<Icons.SearchOutlined />}
        />
      </Form.Item>
      <Form.Item label="Status" name="status">
        <Select
          allowClear
          options={[
            {
              label: "Published",
              value: "published"
            },
            {
              label: "Draft",
              value: "draft"
            },
            {
              label: "Rejected",
              value: "rejected"
            }
          ]}
          placeholder="Post Status"
        />
      </Form.Item>
      <Form.Item label="Category" name="category">
        <Select
          {...categorySelectProps}
          allowClear
          placeholder="Search Categories"
        />
      </Form.Item>
      <Form.Item label="Created At" name="createdAt">
        <RangePicker />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Filter
        </Button>
      </Form.Item>
    </Form>
  );
};
