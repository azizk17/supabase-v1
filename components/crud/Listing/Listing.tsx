import React, { ReactNode } from 'react';
import { FiEdit, FiEye, FiFilter, FiSearch, FiTrash2 } from 'react-icons/fi';
import {
  useTable,
  Column,
  usePagination,
  useSortBy,
  useFilters
} from '@pankod/refine-react-table';
// import { Button } from '@/components/ui';
import {
  useResourceWithRoute,
  useRouterContext,
  useTranslate,
  userFriendlyResourceName,
  ResourceRouterParams
} from '@pankod/refine-core';
import { mutate } from 'swr';
import { Language } from 'types';

// export type CreateButtonProps = ButtonProps & {
export type CreateButtonProps = {
  resourceNameOrRouteName?: string;
  hideText?: boolean;
  ignoreAccessControlProvider?: boolean;
};
export type PageHeaderProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};
export interface ListProps {
  canCreate?: boolean;
  title?: ReactNode;
  createButtonProps?: CreateButtonProps;
  pageHeaderProps?: PageHeaderProps;
  resource?: string;
}

export const List = ({
  canCreate,
  title,
  children,
  createButtonProps,
  pageHeaderProps,
  resource: resourceFromProps,
  columns
}) => {
  // table or list
  // title
  // search
  // pagination
  // sort
  // filter
  // actions

  const { useParams } = useRouterContext();

  const { resource: routeResourceName } = useParams<ResourceRouterParams>();

  const translate = useTranslate();
  const resourceWithRoute = useResourceWithRoute();

  const resource = resourceWithRoute(resourceFromProps ?? routeResourceName);

  const isCreateButtonVisible =
    canCreate ?? (resource.canCreate || createButtonProps);

  // const defaultExtra = isCreateButtonVisible && (
  //   <Button
  //     size="md"
  //     resourceNameOrRouteName={resource.route}
  //     data-testid="list-create-button"
  //     {...createButtonProps}
  //   />
  // );

  return (
    <div className="card card-compact   w-full">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">List</h1>
        <div className="flex items-center">
          <button className="bg-indigo-500 text-white p-2 rounded-full">
            <FiSearch />
          </button>
          <button className="bg-indigo-500 text-white p-2 rounded-full">
            <FiFilter />
          </button>
        </div>
      </div>
      <div className="card-body">
        {/* <h2 className="card-title">Shoes!</h2> */}
        <div className="overflow-x-auto">
          {/* <ListingTable br={columns} /> */}
          {children}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

const ListingHeader = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">List</h1>
      <div className="flex items-center">
        <button className="bg-indigo-500 text-white p-2 rounded-full">
          <FiSearch />
        </button>
        <button className="bg-indigo-500 text-white p-2 rounded-full">
          <FiFilter />
        </button>
      </div>
    </div>
  );
};
