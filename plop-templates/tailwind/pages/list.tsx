import { IResourceComponentsProps, useTranslate } from "@pankod/refine-core";
import React from 'react';
<% const smallModuleName = definition.__moduleName.charAt(0).toLowerCase() + definition.__moduleName.slice(1); %>
import { useNavigation, useDelete } from '@pankod/refine-core';
import {
  Column,
} from '@pankod/refine-react-table';
import {
  FiEdit,
  FiEye,
  FiTrash2,
  FiMoreVertical
} from 'react-icons/fi';
import { Listing } from '@/components/crud';
import { ColumnActions, Table } from '@/components/crud/Table';

import { <%= definition.__moduleName %> } from "<%= type_path %>";

export const <%= definition.__moduleName %>List: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show, edit } = useNavigation();
  const { mutate } = useDelete();
  <%- include('../../sub/useMany'); -%>
  <%- include('../../sub/columns'); -%>
  

  return (
    <Listing
      canCreate={undefined}
      createButtonProps={undefined}
      pageHeaderProps={undefined}
      resource="<%= definition.__resource %>"
    >
      <Table title={t('<%= smallModuleName %>:title', '<%= definition.__resource %>')} columns={columns} />
    </Listing>
  );
};
