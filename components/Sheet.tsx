import React, { ReactNode, FC } from 'react';
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
import { Button, ButtonProps, Card } from '@/components/ui2';
import CardBody from './ui2/Card/CardBody';
import CardTitle from './ui2/Card/CardTitle';

export type CreateButtonProps = ButtonProps & {
  resourceNameOrRouteName?: string;
  hideText?: boolean;
  ignoreAccessControlProvider?: boolean;
};
export type PageHeaderProps = {
  title: ReactNode;
  subtitle?: ReactNode;
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

type SheetProps = ListProps & {
  columns: any;
  loading: boolean;
}

export const Sheet: FC<SheetProps> = ({
  canCreate,
  title,
  children,
  createButtonProps,
  pageHeaderProps,
  resource: resourceFromProps,
  columns,
  loading
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
      endIcon={<FiPlusCircle />}
      href={createRoute}
      // resourceNameOrRouteName={resource.route}
      data-testid="list-create-button"
      size='sm'
      {...createButtonProps}
    >
      {!createButtonProps?.hideText && translate('actions.create', 'Create')}
    </Button>
  );

  return (
    <div className='p-2'>
      {loading ? <OnLoading /> :
        <Card compact bordered={false} className=' h-full  w-full  min-h-full '>
          <CardBody>
            <SheetHeader title={title} extra={defaultExtra} />
            <div className="  min-w-full  w-full ">
              {/* <h2 className="card-title">Shoes!</h2> */}
              <div className="overflow-x-auto">
                {/* <ListingTable br={columns} /> */}
                {children}
              </div>

            </div>
          </CardBody>
        </Card>
      }
    </div>
  );
};

const SheetHeader: FC<{ title: ReactNode, extra: ReactNode }> = ({ title, extra }) => {
  return (
    <div className='flex justify-between items-center'>
      <CardTitle>
        {title}
      </CardTitle>
      <div>
        {extra}
      </div>
    </div>
  )
}

const OnLoading: FC<{ loading?: boolean }> = ({ loading }) => {
  let height = 'h-2.5'
  let color = 'bg-base-300 '
  return (
    <div className="animate-pulse p-2 space-x-4">
      <div className=' flex justify-between items-center'>
        <div className={`${height} ${color} w-36  rounded col-span-1`}></div>

        <div className=' grid grid-cols-3 gap-2 w-24 py-5'>
          <div className={`${height} col-span-1 ${color} rounded `}></div>
          <div className={`${height} col-span-1 ${color} rounded `}></div>
          <div className={`${height} col-span-1 ${color} rounded `}></div>

        </div>
      </div>
      <div className="flex-1 space-y-5 py-1">
        <div className={`${height} ${color} rounded`}></div>
        <div className="grid grid-cols-4 gap-4">
          <div className={`${height} ${color} rounded col-span-1`}></div>
          <div className={`${height} ${color} rounded col-span-2`}></div>
          <div className={`${height} ${color} rounded col-span-3`}></div>
          {/* <div className="${height} ${color} rounded col-span-1"></div> */}
          <div className={`${height} ${color} rounded col-span-1`}></div>
          <div className={`${height} ${color} rounded col-span-1`}></div>
          <div className={`${height} ${color} rounded col-span-3`}></div>
          <div className={`${height} ${color} rounded col-span-2`}></div>
          <div className={`${height} ${color} rounded col-span-1`}></div>
          <div className={`${height} ${color} rounded col-span-1`}></div>
          <div className={`${height} ${color} rounded col-span-1`}></div>
          <div className={`${height} ${color} rounded col-span-2`}></div>
          <div className={`${height} ${color} rounded col-span-2`}></div>
        </div>
        {/* <div className={`${height} ${color} rounded`}></div> */}
      </div>
    </div>
  )
}