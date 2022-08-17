import SettingsLayout from '@/components/layout/SettingsLayout';
import { Sheet } from '@/components/Sheet'
import { Button } from '@/components/ui2';
import { LayoutWrapper, useTranslate } from '@pankod/refine-core';
import { useForm } from '@pankod/refine-react-hook-form';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

const PlatformShow: FC = ({ }) => {
    const t = useTranslate();
    const { query } = useRouter()
    const {
        refineCore: { redirect, onFinish, formLoading, queryResult, mutationResult },
        register,

        handleSubmit,
        reset,
        resetField,
        formState: { errors, isDirty,
            isSubmitting,
            isValid },
        control,
        setValue,
        getValues,


    } = useForm<Credential>({

        refineCoreProps: {
            resource: 'pltforms',
            action: 'edit',
            redirect: false,
            id: 'd',
            // onMutationSuccess: onUpdated,

        }
    });
    return (

        <LayoutWrapper>
            <Sheet
                title={query?.name}
            >

                <form onSubmit={handleSubmit(onFinish)}>
                    {/************ Url ************/}
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>
                                {t('platform:fields.url', 'Url')}
                            </span>
                        </label>
                        <input {...register('url', { required: false })}
                            type='url'
                            id='url'
                            placeholder={t('platform:fields.url', 'Url')}
                            className={`input input-bordered w-full ${errors?.url ? 'input-error' : ''}`}
                            disabled={formLoading} />
                        {errors?.url && (
                            <label className='label text-error'>
                                <span className='label-text-alt'>{errors?.url}</span>
                            </label>
                        )}
                    </div>

                    {/************ Enabled ************/}
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>
                                {t('platform:fields.enabled', 'Enabled')}
                            </span>
                        </label>
                        <input {...register('enabled', { required: false })}
                            type='checkbox'
                            id='enabled'
                            placeholder={t('platform:fields.enabled', 'Enabled')}
                            className={`toggle ${errors?.enabled ? 'input-error' : ''}`}
                            disabled={formLoading} />
                        {errors?.enabled && (
                            <label className='label text-error'>
                                <span className='label-text-alt'>{errors?.enabled}</span>
                            </label>
                        )}
                    </div>
                    <div className=' py-4 '>

                        <Button loading={isSubmitting}>
                            {t('save')}
                        </Button>
                    </div>
                </form>

            </Sheet>
        </LayoutWrapper >

    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale ?? 'en', ['platfrom']))
        }
    };
};

export default PlatformShow