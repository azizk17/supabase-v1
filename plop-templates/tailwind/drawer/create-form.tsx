<%- include('../../util'); -%>
import React, { useState } from "react";
import { IResourceComponentsProps, useTranslate } from "@pankod/refine-core";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Checkbox
} from "@pankod/refine-antd";
<%- include('../../sub/imports'); -%>

export const CreateForm: React.FC<IResourceComponentsProps> = createFormProps => {
  const translate = useTranslate();
  
  <%- include('../../sub/selectData'); -%>

  
  return (
    <Form {...createFormProps} layout="vertical">
        <%- include('../sub/form'); -%>
    </Form>
  );
};
