import SettingsLayout from '@/components/layout/SettingsLayout'
import { Sheet } from '@/components/Sheet'
import SocialIcon from '@/components/SocialIcon';
import { useList } from '@pankod/refine-core';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react'
import { Platform } from 'types';

const PlatformsIndex = () => {
    const {
        data,
        error,
        isLoading,
        refetch,
    } = useList<Platform>({
        resource: 'platforms',

        config: {
            // sort: [{ field: 'created_at', order: 'asc' }],

        },

    });
    return (
        <SettingsLayout>
            <Sheet
                loading={isLoading}
            >
                <div className=' grid grid-cols-3 gap-4 '>
                    {data?.data?.map((item) => (
                        <Link href={`platforms/${item.name}`}>
                            <div className="card hover:cursor-pointer h-32 min-w-full hover:bg-opacity-60  bg-neutral text-neutral-content">
                                <div className="card-body  items-center text-center ">
                                    <h2 className="card-title">
                                        <SocialIcon name={item.name} />
                                    </h2>
                                    <p>{item.label}</p>
                                    {/* <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Accept</button>
                                        <button className="btn btn-ghost">Deny</button>
                                    </div> */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Sheet>
        </SettingsLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
      props: {
        ...(await serverSideTranslations(context.locale ?? 'en', ['platfrom']))
      }
    };
  };
export default PlatformsIndex