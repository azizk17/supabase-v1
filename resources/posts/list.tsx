import React from 'react';
import {
  useTable,
  Column,
  usePagination,
  useSortBy,
  useFilters
} from '@pankod/refine-react-table';

import { useDelete, useNavigation, useOne } from '@pankod/refine-core';

export const PostList: React.FC = () => {
  const { edit, create, show } = useNavigation();
  const { mutate } = useDelete();

  return <>Posts List</>;
};
