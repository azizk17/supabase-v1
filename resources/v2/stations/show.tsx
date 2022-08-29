import {
  useShow,
  IResourceComponentsProps,
  useTranslate,
  useList,
  useNavigation
} from '@pankod/refine-core';

import { Station } from 'types';
import { Title, Text, DateField } from '@/components/ui';
import Card from '@/components/ui2/Card';
import { Sheet } from '@/components/Sheet';
import { channel, Channel } from 'diagnostics_channel';
import { Item } from '@/components/ui';
import Link from 'next/link';
import SocialIcon from '@/components/SocialIcon';

export const StationShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { show } = useNavigation()

  const { queryResult } = useShow<Station>({
    metaData: {
      fields: ['id', 'name', 'description', 'thumb', 'created_at', 'updated_at'],
      select: '*, channels(*)'
    },
  });

  const { data: channels } = useList<Channel>({
    resource: "channels",

    config: {

    }

  })


  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Sheet
      title={record?.name}
    >
      <div className=' grid grid-cols-2 gap-10'>

        <div className="w-full max-w-md  card card-bordered compact bg-neutral">
          <div className=" card-body">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-bold leading-none ">
                Content
              </h5>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                View all
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md  card card-bordered compact bg-neutral">
          <div className=" card-body">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-bold leading-none ">
                Channles
              </h5>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                {t('Add new', 'Add new')}
              </a>
            </div>
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              {record?.channels.map((item) => (

                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <SocialIcon name={item.platform_name} />
                      {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" /> */}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p onClick={() => show('channels', item?.id)} className=" link link-hover text-sm font-medium truncate ">
                          {item?.name}
                        </p>
                      {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
                      </p> */}
                    </div>
                    {/* <div className="inline-flex items-center text-base font-semibold ">
                      $320
                    </div> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </Sheet >
  );
};
