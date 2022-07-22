
import React, { useState } from "react";
import { useShow, IResourceComponentsProps, uset } from "@pankod/refine-core";

import {
  List,
  Create,
  Edit,
  Show,
  Table,
  Form,
  Select,
  Input,
  Drawer,
  Space,
  Typography,
  EditButton,
  ShowButton,
  DeleteButton,
  useTable,
  useMany,
  useDrawerForm,
  CrudFilters,
  TextField
} from "@pankod/refine-antd";

import { {{imports this}} } from "{{types_path}}";
// <%- include('../sub/imports'); -%>

import { CreateForm } from "./create-form";
import { EditForm } from "./edit-form";
const { Title, Text } = Typography;

export const {{ this.__moduleName }}List: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
 
  <%- include('../sub/useTable'); -%>
  <%- include('../sub/useMany'); -%>
  // Create Drawer
  const {
    formProps: createFormProps,
    drawerProps: createDrawerProps,
    show: createDrawerShow,
    saveButtonProps: createSaveButtonProps
  } = useDrawerForm<{{ this.__moduleName }}>({
    action: "create",
    metaData: {
        fields: [{{getFields}}]
      }
  });

  // Edit Drawer
  const {
    formProps: editFormProps,
    drawerProps: editDrawerProps,
    show: editDrawerShow,
    saveButtonProps: editSaveButtonProps,
    deleteButtonProps,
    id: editId,
    formLoading
  } = useDrawerForm<{{ this.__moduleName }}>({
    action: "edit",
    warnWhenUnsavedChanges: true,
    metaData: {
        fields: [{{{getFields}}}]
      }
  });

  // Show Drawer
  const [visibleShowDrawer, setVisibleShowDrawer] = useState<boolean>(false);
  const { queryResult, showId, setShowId } = useShow<{{this.__moduleName}}>({
    metaData: {
        fields: [{{getFields}}]
      }
  });

  const { data: showQueryResult, isLoading: showIsLoading } = queryResult;
  const record = showQueryResult?.data;

  return (
    <>
     {/*
       *
       * #################################################
       *                    List
       * #################################################
       *
       **/}
      <List 
      title={translate('<%= toLowerCase(this.__moduleName) %>:title', '<%= this.__resource %>')}
        canCreate
        createButtonProps={{
          onClick: () => {
            createDrawerShow();
          }
        }}
      >
      <%- dataDisplay === 'list' ? include('../sub/list') : include('../sub/table')  %>
      </List>
      {/*
       *
       * #################################################
       *                    Create 
       * #################################################
       *
      **/}
      <Drawer {...createDrawerProps}>
        <Create saveButtonProps={createSaveButtonProps}>
          <CreateForm {...createFormProps}/>
        </Create>
      </Drawer>
      {/*
       *
       * #################################################
       *                    Edit
       * #################################################
       *
       **/}
      <Drawer {...editDrawerProps}>
        <Edit
          recordItemId={editId}
          saveButtonProps={{
            ...editSaveButtonProps,
            disabled: formLoading
          }}
          deleteButtonProps={deleteButtonProps}
          >
          <EditForm {...editFormProps} />
        </Edit>
      </Drawer>
      {/*
       *
       * #################################################
       *                    Show
       * #################################################
       *
       **/}
      <Drawer
        visible={visibleShowDrawer}
        onClose={() => setVisibleShowDrawer(false)}
        width="500"
      >
        <Show
          isLoading={showIsLoading}
          actionButtons={<DeleteButton recordItemId={showId} />}
        >
        {/* <% this.properties.map(fi => { %>
          <Title level={5}>{translate("<%= toLowerCase(this.__moduleName) %>:fields.<%= fi.name %>", "<%= fi.name %>")}</Title>
          <Text>{record?.<%= fi.name %>}</Text>
        <% }).join('\n') -%> */}
        </Show>
      </Drawer>
    </>
  );
};
