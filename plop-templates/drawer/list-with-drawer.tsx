<%- include('../util'); -%>
<%- include('../functions'); -%>
import React, { useState } from "react";
import { useShow, IResourceComponentsProps, useTranslate } from "@pankod/refine-core";

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

<%- include('../sub/imports'); -%>

import { CreateForm } from "./create-form";
import { EditForm } from "./edit-form";
const { Title, Text } = Typography;

export const <%= definition.__moduleName %>List: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
 
  <%- include('../sub/useTable'); -%>
  <%- include('../sub/useMany'); -%>
  // Create Drawer
  const {
    formProps: createFormProps,
    drawerProps: createDrawerProps,
    show: createDrawerShow,
    saveButtonProps: createSaveButtonProps
  } = useDrawerForm<<%= definition.__moduleName %>>({
    action: "create",
    metaData: {
        fields: [<% getFields() %>]
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
  } = useDrawerForm<<%= definition.__moduleName %>>({
    action: "edit",
    warnWhenUnsavedChanges: true,
    metaData: {
        fields: [<%- getFields() %>]
      }
  });

  // Show Drawer
  const [visibleShowDrawer, setVisibleShowDrawer] = useState<boolean>(false);
  const { queryResult, showId, setShowId } = useShow<<%= definition.__moduleName %>>({
    metaData: {
        fields: [<%- getFields() %>]
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
      title={translate('<%= toLowerCase(definition.__moduleName) %>:title', '<%= definition.__resource %>')}
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
        <% definition.properties.map(fi => { %>
          <Title level={5}>{translate("<%= toLowerCase(definition.__moduleName) %>:fields.<%= fi.name %>", "<%= fi.name %>")}</Title>
          <Text>{record?.<%= fi.name %>}</Text>
        <% }).join('\n') -%>
        </Show>
      </Drawer>
    </>
  );
};
