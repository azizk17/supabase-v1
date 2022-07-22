<%- include('../util'); -%>
import React, { useState } from "react";
import { IResourceComponentsProps, useTranslate } from "@pankod/refine-core";
import {
  Edit,
  Form,
  Input,
  useForm,
  useSelect,
  Select,
  DatePicker,
  Checkbox
} from "@pankod/refine-antd";
<%- include('../sub/imports'); -%>

export const EditForm: React.FC<IResourceComponentsProps> = editFormProps => {
  const translate = useTranslate();
  
  <%- include('../sub/selectData'); -%>

  
  return (
    <Form {...editFormProps} layout="vertical">
        <%- include('../sub/form'); -%>
    </Form>
  );
};
