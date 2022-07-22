import React, { ReactNode } from 'react';
import {
  FiEdit,
  FiEye,
  FiFilter,
  FiPlusCircle,
  FiSearch,
  FiTrash2
} from 'react-icons/fi';
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
import { Button } from '@/components/ui2';

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
  route?: string;
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

  const createRoute = createButtonProps?.resourceNameOrRouteName
    ? createButtonProps.resourceNameOrRouteName
    : `${resource.route}/create`;
  const isCreateButtonVisible =
    canCreate ?? (resource.canCreate || createButtonProps);
  const defaultExtra = isCreateButtonVisible && (
    <Button
      className="p-2 rounded-full"
      icon={<FiPlusCircle />}
      href={createRoute}
      // resourceNameOrRouteName={resource.route}
      data-testid="list-create-button"
      {...createButtonProps}
    >
      {!createButtonProps?.hideText && translate('actions.create', 'Create')}
    </Button>
  );

  return (
    <div className="  min-w-full  w-full ">
      <ListingHeader title={title} extra={defaultExtra} />
      {/* <h2 className="card-title">Shoes!</h2> */}
      <div className="overflow-x-auto">
        {/* <ListingTable br={columns} /> */}
        {children}
      </div>
      {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
    </div>
  );
};

const ListingHeader = ({ title, extra }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center space-x-1">
        {extra}
        <button className=" p-2 rounded-full">
          <FiSearch />
        </button>
        <button className=" p-2 rounded-full">
          <FiFilter />
        </button>
      </div>
    </div>
  );
};
