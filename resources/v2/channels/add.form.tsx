import React, { forwardRef, MouseEventHandler, useState } from 'react';
import { IResourceComponentsProps, useTranslate, useSelect } from '@pankod/refine-core';

import { Credential, Platform, Station } from 'types';

import { useForm, UseModalFormReturnType } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui2';
import Modal from '@/components/Modal'
import { Label, InputError } from '@/components/FormHelpers';
import { FaCheck } from 'react-icons/fa';
import ModalActions from '@/components/ui2/Modal/ModalActions';
import ModalHeader from '@/components/ui2/Modal/ModalHeader';
import { useRouter } from 'next/router';
import { Sheet } from '@/components/Sheet';
import { Select } from '@/components/Select';
import { ImageInput } from '@/components/ImageInput';
import Button from '@/components/ui2/Button';
import FormDrawer from '@/components/FormDrawer';
import JsonTree from '@/components/JSON';
import SubmitButton from '@/components/SubmitButton';
import { JSONTree } from 'react-json-tree';




// Select form aother table 
// Select 
// radio 
// image upload 



export type FormProps = IResourceComponentsProps & {
    onUpdated?: any
    open: boolean
    onClose: MouseEventHandler
}

export const ChannelAddForm: React.FC<UseModalFormReturnType> = ({
    register,
    refineCore: { onFinish, formLoading, },
    handleSubmit,
    setValue,
    modal: { visible, close },
    saveButtonProps,
    formState: { isSubmitting, errors },
}) => {
    const t = useTranslate();
    // const {
    //     refineCore: { redirect, onFinish, formLoading, queryResult, },
    //     register,
    //     handleSubmit,
    //     resetField,
    //     formState: { errors, isSubmitting },
    //     control,
    //     setValue,
    //     getValues,
    // } = useForm<Station>({

    //     refineCoreProps: {
    //         resource: 'stations',
    //         action: 'create',
    //         redirect: false,
    //         onMutationSuccess: onUpdated
    //     }
    // });


    //###### platforms select
    const { options: platforms, defaultValueQueryResult: defaultValueQueryResultPlatforms } = useSelect<Platform>({
        resource: 'platforms',
        optionLabel: 'label',
        optionValue: 'name',
        metaData: {
            id: 'name'
        },
    })
    const { data: defaultPlatform, isFetched: isFetchedDefaultPlatform } = defaultValueQueryResultPlatforms
    //###### countries select
    const { options: countries, defaultValueQueryResult: defaultValueQueryResultCountries, onSearch } = useSelect<Country>({
        resource: 'countries',
        fetchSize: 20,
        optionLabel: 'name',
        optionValue: 'id',
        onSearch: (value) => [
            {
                field: 'name',
                operator: 'containss',
                value
            }
        ],
    })
    const { data: defaultCountries, isFetched: isFetchedDefaultCountry } = defaultValueQueryResultCountries

    //###### languages select
    const { options: languages, defaultValueQueryResult: defaultValueQueryResultLanguages } = useSelect<Language>({
        resource: 'languages',
        optionLabel: 'name',
        optionValue: 'id',
    })
    const { data: defaultLanguages, isFetched: isFetchedDefaultLanguage } = defaultValueQueryResultLanguages
    //###### credentials select
    const { options: credentials, defaultValueQueryResult: defaultValueQueryResultCredentials } = useSelect<Credential>({
        resource: 'credentials',
        optionLabel: 'username',
        optionValue: 'id',
    })
    const { data: defaultCredential, isFetched: isCredentialFetched } = defaultValueQueryResultCredentials


    return (

        <FormDrawer
            closeable={false} isOpen={visible} position="right"
            onClose={close}
            title="Add new channel"
            actions={[
                <Button onClick={close}>
                    {t('close')}
                </Button>,
                <SubmitButton title="Create" {...saveButtonProps} />,
            ]}
        >
            {JSON.stringify(isSubmitting)}
            <Sheet className='pt-0'>
                <JsonTree data={errors} />
                <form
                    onSubmit={handleSubmit(onFinish)}
                >

                    {/************ Name ************/}
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>
                                {t('ResourceName:fields.name', 'Name')}
                            </span>
                        </label>
                        <input {...register('name', { required: false })}
                            type='text'
                            id='name'
                            placeholder={t('ResourceName:fields.name', 'Name')}
                            className={`input input-bordered w-full ${errors?.name ? 'input-error' : ''}`}
                            disabled={formLoading} />
                        {errors?.name && (
                            <label className='label text-error'>
                                <span className='label-text-alt'>{errors?.name}</span>
                            </label>
                        )}
                    </div>

                    {/************ Description ************/}
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>
                                {t('ResourceName:fields.description', 'Description')}
                            </span>
                        </label>
                        <input {...register('description', { required: false })}
                            type='text'
                            id='description'
                            placeholder={t('ResourceName:fields.description', 'Description')}
                            className={`input input-bordered w-full ${errors?.description ? 'input-error' : ''}`}
                            disabled={formLoading} />
                        {errors?.description && (
                            <label className='label text-error'>
                                <span className='label-text-alt'>{errors?.description}</span>
                            </label>
                        )}
                    </div>
                    {/************ Platform ************/}
                    <div className='form-control w-full '>
                        <label className='label'>
                            <span className='label-text'>
                                {t('ResourceName:fields.platform', 'Platform')}
                            </span>
                        </label>
                        <Select
                            isReady={true}
                            isSearchable={false}
                            onChange={({ value }) => setValue('platform_name', value)}
                            options={platforms} />

                        {errors?.platform && (
                            <label className='label text-error'>
                                <span className='label-text-alt'>{errors?.platform}</span>
                            </label>
                        )}
                    </div>
                    {/************ Country ************/}
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>
                                {t('ResourceName:fields.country', 'Country')}
                            </span>
                        </label>
                        <Select
                            isReady={true}
                            onChange={({ value }) => setValue('country_id', value)}
                            options={countries}
                            onInputChange={onSearch}
                            menuPortalTarget={document.querySelector('.drawer')}
                        />

                        {errors?.country && (
                            <label className='label text-error'>
                                <span className='label-text-alt'>{errors?.country}</span>
                            </label>
                        )}
                    </div>
                    {/************ Language ************/}
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>
                                {t('ResourceName:fields.language', 'Language')}
                            </span>
                        </label>
                        <Select
                            isReady={true}
                            onChange={({ value }) => setValue('language_id', value)}
                            options={languages}

                        />

                        {errors?.language && (
                            <label className='label text-error'>
                                <span className='label-text-alt'>{errors?.language}</span>
                            </label>
                        )}
                    </div>

                </form>

            </Sheet>
        </FormDrawer>
    );
}

export default ChannelAddForm