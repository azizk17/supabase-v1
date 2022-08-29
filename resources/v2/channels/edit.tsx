import React, { useState } from 'react';
import { IResourceComponentsProps, useSelect, useTranslate } from '@pankod/refine-core';

import { Channel } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui';
import { Sheet } from '@/components/Sheet';
import FormSection from '@/components/FormSection';
import { Platform } from 'types/a';
import { Select } from '@/components/Select';
import { ImageInput } from '@/components/ImageInput';
import FileInput from '@/components/FileInput';

export const ChannelEdit: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const {
    refineCore: { onFinish, formLoading, queryResult },
    register,
    handleSubmit,
    resetField,
    setValue,
    control,
    getValues,
    formState: { errors }
  } = useForm();

  // Selects 
  const { options: platforms } = useSelect<Platform>({
    resource: 'platforms',
    optionLabel: 'name',
    optionValue: 'name'
  })
  const { options: countries } = useSelect<Platform>({
    resource: 'countries',
    optionLabel: 'name',
    optionValue: 'name'
  })
  const { options: languages } = useSelect<Platform>({
    resource: 'languages',
    optionLabel: 'name',
    optionValue: 'name'
  })
  const recordData = queryResult?.data?.data;
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
          {/************ Country ************/}
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>
                {t('ResourceName:fields.country', 'Country')}
              </span>
            </label>
            <Select
              defaultValue={'sa'}
              control={control}
              onChange={(e) => setValue('country_id', e?.value)}
              options={countries} />

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
              defaultValue={'ar'}
              control={control}
              onChange={(e) => setValue('language_id', e?.value)}
              options={languages} />

            {errors?.language && (
              <label className='label text-error'>
                <span className='label-text-alt'>{errors?.language}</span>
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
              defaultValue={'tiktok'}
              control={control}
              onChange={(e) => setValue('platform_name', e?.value)}
              options={platforms} />

            {errors?.platform && (
              <label className='label text-error'>
                <span className='label-text-alt'>{errors?.platform}</span>
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

    </Sheet>
  );
};
