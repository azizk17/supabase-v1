import React, { useState, useEffect } from 'react';
import { IResourceComponentsProps, useSelect, useTranslate } from '@pankod/refine-core';

import { Channel } from 'types';

import { Controller, useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';
import { Sheet } from '@/components/Sheet';
import FormSection from '@/components/FormSection';
import { Country, Language, Platform, Credential } from 'types/a';
import { Select } from '@/components/Select';
import { ImageInput } from '@/components/ImageInput';
import FileInput from '@/components/FileInput';
import ReactSelect from 'react-select';
import JsonTree from '@/components/JSON';

export const ChannelEdit: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const {
    refineCore: { onFinish, formLoading, queryResult, redirect },
    register,
    handleSubmit,
    resetField,
    setValue,
    control,
    getValues,
    watch,
    formState: { errors }
  } = useForm<Channel>({
    refineCoreProps: {
      redirect: false
    }
  });
  const record = queryResult?.data?.data;
  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log(value, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  /**
   * 
  *
  * ############## Selects ###############
   * 
   *  
   * */
  //###### platforms select
  const { options: platforms, defaultValueQueryResult: defaultValueQueryResultPlatforms } = useSelect<Platform>({
    resource: 'platforms',
    optionLabel: 'label',
    optionValue: 'name',
    metaData: {
      id: 'name'
    },
    defaultValue: record?.platform_name
  })
  const { data: defaultPlatform, isFetched: isFetchedDefaultPlatform } = defaultValueQueryResultPlatforms


  //###### countries select
  const { options: countries, defaultValueQueryResult: defaultValueQueryResultCountries, onSearch } = useSelect<Country>({
    resource: 'countries',
    fetchSize: 20,
    optionLabel: 'name',
    optionValue: 'id',
    defaultValue: record?.country_id,
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
    defaultValue: record?.language_id
  })
  const { data: defaultLanguages, isFetched: isFetchedDefaultLanguage } = defaultValueQueryResultLanguages
  //###### credentials select
  const { options: credentials, defaultValueQueryResult: defaultValueQueryResultCredentials } = useSelect<Credential>({
    resource: 'credentials',
    optionLabel: 'username',
    optionValue: 'id',
    defaultValue: record?.credential_id
  })
  const { data: defaultCredential, isFetched: isCredentialFetched } = defaultValueQueryResultCredentials
  
  return (
    <Sheet title={t('pages.edit', 'Edit')}>
      <form
        onSubmit={handleSubmit(onFinish)}
      >
        <FormSection
          title="Info"

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
        </FormSection>
        <div className="divider"></div>

        <FormSection title={"Geolocation"}>
          {/************ Platform ************/}
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text'>
                {t('ResourceName:fields.platform', 'Platform')}
              </span>
            </label>
            <Select
              isReady={isFetchedDefaultPlatform}
              isSearchable={false}
              defaultValue={{ label: defaultPlatform?.data[0].label, value: defaultPlatform?.data[0].name }}
              onChange={({ value }) => onFinish({ 'platform_name': value })}
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
              defaultValue={{ label: defaultCountries?.data[0].name, value: defaultCountries?.data[0].iso2 }}
              isReady={isFetchedDefaultCountry}
              onChange={({ value }) => onFinish({ 'country_id': value })}
              options={countries}
              onInputChange={onSearch}
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
              defaultValue={{ label: defaultLanguages?.data[0].name, value: defaultLanguages?.data[0].id }}
              isReady={isFetchedDefaultLanguage}
              onChange={({ value }) => onFinish({ 'language_id': value })}
              options={languages}

            />

            {errors?.language && (
              <label className='label text-error'>
                <span className='label-text-alt'>{errors?.language}</span>
              </label>
            )}
          </div>
        </FormSection>
        <div className=' divider'></div>
        <FormSection title={"Media"} actions={[
          <button onClick={() => handleSubmit(onFinish)} className='btn btn-primary'>Save</button>,
          <button type='button' onClick={() => console.log("Values: ", getValues())} className='btn btn-outline'>Values</button>
        ]}>

          <div className=' grid grid-cols-5 gap-5'>


            {/************ Logo ************/}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>
                  {t('ResourceName:fields.logo', 'Logo')}
                </span>
              </label>
              <ImageInput
                {...register('logo')}
                name="logo"
                bucket='app'
                disabled={formLoading}
                onChange={(val: string) => setValue('logo', val)}
              />
              {errors?.logo && (
                <label className='label text-error'>
                  <span className='label-text-alt'>{errors?.logo}</span>
                </label>
              )}
            </div>
            <FileInput
              accept="image/png, image/jpg, image/jpeg, image/gif"
              name="file alt text"
              label="File Upload"
              type="avatar"
            />
            {/************ Watermark ************/}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>
                  {t('ResourceName:fields.watermark', 'Watermark')}
                </span>
              </label>
              <ImageInput
                {...register('watermark')}
                name="watermark"
                bucket='app'
                disabled={formLoading}

                onChange={(val: string) => setValue('watermark', val)}
              />

              {errors?.watermark && (
                <label className='label text-error'>
                  <span className='label-text-alt'>{errors?.watermark}</span>
                </label>
              )}
            </div>
          </div>


        </FormSection>


      </form>
      <div className=' divider'></div>
      <FormSection title={"Connection"}>
        {/************ credentials ************/}
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>
              {t('ResourceName:fields.credentials', 'credentials')}
            </span>
          </label>
          <Select
            defaultValue={
              { label: defaultCredential?.data[0].username, value: defaultCredential?.data[0].id }}
            onChange={({ value }) => onFinish({ 'credential_id': value })}
            isReady={isCredentialFetched}
            options={credentials}

          ></Select>


          {errors?.credentials && (
            <label className='label text-error'>
              <span className='label-text-alt'>{errors?.credentials}</span>
            </label>
          )}
        </div>


      </FormSection>

    </Sheet>
  );
};
