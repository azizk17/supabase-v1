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


type ActionsProps = ButtonProps & {
} | ReactNode
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
  subtitle?: ReactNode;
  createButtonProps?: CreateButtonProps;
  pageHeaderProps?: PageHeaderProps;
  resource?: string;
  route?: string;
  actions?: ActionsProps[]
}

type SheetProps = ListProps & {
  columns: any;
  loading: boolean;
  data: any
  total?: string | number
}

export const Sheet: FC<SheetProps> = ({
  canCreate,
  title,
  subtitle,
  children,
  data,
  total,
  createButtonProps,
  pageHeaderProps,
  resource: resourceFromProps,
  columns,
  loading,
  actions
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


  const topActions = (): ActionsProps[] => {
    let items: ActionsProps = []
    for (let i = 0; i < actions?.length; i++) {
      const element: ActionsProps = actions[i];
      <Button >
        {element?.title}
      </Button>

    }
  }


  const createRoute = createButtonProps?.resourceNameOrRouteName
    ? createButtonProps.resourceNameOrRouteName
    : `${resource.route}/create`;
  const isCreateButtonVisible =
    canCreate ?? (resource.canCreate || createButtonProps);




  const defaultExtra = isCreateButtonVisible && (
    <Button
      endIcon={<FiPlusCircle />}
      href={!createButtonProps?.onClick ? createRoute : undefined}
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
        <Card compact bordered={false} className=' h-full  w-full  min-h-full overflow-visible '>
          <CardBody>
            <SheetHeader
              title={title}
              subtitle={subtitle}
              extra={defaultExtra}
              actions={actions} />
            <div className="  min-w-full  w-full ">
              {total == 0 &&
                <div className="alert shadow-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-9 h-9"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{translate('noData')}</span>
                  </div>
                </div>
              }
              {/* <h2 className="card-title">Shoes!</h2> */}
              <div className=" overflow-visible  ">
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

type HeaderProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  extra: ReactNode;
  actions?: ReactNode[]
};

const SheetHeader: FC<HeaderProps> = ({ title, subtitle, extra, actions }) => {
  return (
    <div className='flex justify-between items-center'>
      <CardTitle>
        <div className='flex flex-col justify-start items-center'>
          {title}
          <div className=' text-sm '>
            {subtitle}
          </div>
        </div>
      </CardTitle>
      <div className=' flex items-center justify-start space-x-1'>
        {extra}
        {actions?.map((i) => (
          i
        ))}
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