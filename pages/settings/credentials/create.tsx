import React, { useState } from 'react';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';

import { Credential } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
import { Form, Card } from '@/components/ui2';
import { Sheet } from '@/components/Sheet';
import SettingsLayout from '@/components/layout/SettingsLayout';
import { Label, InputError } from '@/components/FormHelpers';
import { FaCheck } from 'react-icons/fa';

export const CredentialCreate: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const {
    refineCore: { onFinish, formLoading, queryResult },
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  return (

    <Sheet title="Create New " >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quisquam perspiciatis quasi repellat voluptates rerum laborum neque explicabo, delectus beatae vero, cupiditate, ducimus minus est autem quos sapiente labore consequuntur?</p>
      <form
        onSubmit={handleSubmit(onFinish)}
      >
        Aziz
        {/************ Aziz ************/}
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              {t('ResourceName:fields.aziz', 'Aziz')}
            </span>
          </label>
          <input {...register('aziz', { required: false })}
            type='text'
            id='aziz'
            placeholder={t('ResourceName:fields.aziz', ' aziz ')}
            className={`input input-bordered w-full max-w-xs ${errors?.aziz ?? 'input-error'}`}
            disabled={formLoading} />
          {errors?.aziz && (
            <label className='label text-error'>
              <span className='label-text-alt'>{errors?.aziz}</span>
            </label>
          )}
        </div>

        {/************ username ************/}
        <div className='form-control w-full max-w-xs'>
          <Label title={t('ResourceName:fields.username', 'username')} htmlFor="username" />
          <input {...register('username', { required: false })}
            type='text'
            id='username'
            placeholder={t('ResourceName:fields.username', ' username ')}
            className={`input input-bordered w-full max-w-xs ${errors?.username ? 'input-error' : ''}`}
            disabled={formLoading} />
          <InputError error={errors?.username} />
        </div>
        {/************ nickname ************/}
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              {t('ResourceName:fields.nickname', 'nickname')}
            </span>
          </label>
          <input {...register('nickname', { required: false })}
            type='text'
            id='nickname'
            placeholder={t('ResourceName:fields.nickname', ' nickname ')}
            className={`input input-bordered w-full max-w-xs ${errors?.nickname ? 'input-error' : ''}`}
            disabled={formLoading} />
          {errors?.nickname && (
            <label className='label text-error'>
              <span className='label-text-alt'>{errors?.nickname}</span>
            </label>
          )}
        </div>
        {/************ password ************/}
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              {t('ResourceName:fields.password', 'password')}
            </span>
          </label>
          <input {...register('password', { required: false })}
            type='password'
            id='password'
            placeholder={t('ResourceName:fields.password', ' password ')}
            className={`input input-bordered w-full max-w-xs ${errors?.password ? 'input-error' : ''}`}
            disabled={formLoading} />
          {errors?.password && (
            <label className='label text-error'>
              <span className='label-text-alt'>{errors?.password}</span>
            </label>
          )}
        </div>
        {/************ email ************/}
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              {t('ResourceName:fields.email', 'email')}
            </span>
          </label>
          <input {...register('email', { required: false })}
            type='email'
            id='email'
            placeholder={t('ResourceName:fields.email', ' email ')}
            className={`input input-bordered w-full max-w-xs ${errors?.email ? 'input-error' : ''}`}
            disabled={formLoading} />
          {errors?.email && (
            <label className='label text-error'>
              <span className='label-text-alt'>{errors?.email}</span>
            </label>
          )}
        </div>
        {/************ apiKey ************/}
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              {t('ResourceName:fields.apiKey', 'apiKey')}
            </span>
          </label>
          <input {...register('apiKey', { required: false })}
            type='text'
            id='apiKey'
            placeholder={t('ResourceName:fields.apiKey', ' apiKey ')}
            className={`input input-bordered w-full max-w-xs ${errors?.apiKey ? 'input-error' : ''}`}
            disabled={formLoading} />
          {errors?.apiKey && (
            <label className='label text-error'>
              <span className='label-text-alt'>{errors?.apiKey}</span>
            </label>
          )}
        </div>
        {/************ avatar ************/}
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              {t('ResourceName:fields.avatar', 'avatar')}
            </span>
          </label>
          <input {...register('avatar', { required: false })}
            type='text'
            id='avatar'
            placeholder={t('ResourceName:fields.avatar', ' avatar ')}
            className={`input input-bordered w-full max-w-xs ${errors?.avatar ? 'input-error' : ''}`}
            disabled={formLoading} />
          {errors?.avatar && (
            <label className='label text-error'>
              <span className='label-text-alt'>{errors?.avatar}</span>
            </label>
          )}
        </div>
        Status
        {/************ url ************/}
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              {t('ResourceName:fields.url', 'url')}
            </span>
          </label>
          <input {...register('url', { required: false })}
            type='text'
            id='url'
            placeholder={t('ResourceName:fields.url', ' url ')}
            className={`input input-bordered w-full max-w-xs ${errors?.url ? 'input-error' : ''}`}
            disabled={formLoading} />
          {errors?.url && (
            <label className='label text-error'>
              <span className='label-text-alt'>{errors?.url}</span>
            </label>
          )}
        </div>
        {/************ enabled ************/}
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              {t('ResourceName:fields.enabled', 'enabled')}
            </span>
          </label>
          <input {...register('enabled', { required: false })}
            type='radio'
            id='enabled'
            placeholder={t('ResourceName:fields.enabled', ' enabled ')}
            className={`input input-bordered w-full max-w-xs ${errors?.enabled ? 'input-error' : ''}`}
            disabled={formLoading} />
          {errors?.enabled && (
            <label className='label text-error'>
              <span className='label-text-alt'>{errors?.enabled}</span>
            </label>
          )}
        </div>
        <div className='form-control w-full max-w-xs'>
          <button
            type="submit"
            className='btn btn-primary'
          >
            {formLoading && <FaCheck />}
            <span>Save</span>
          </button>
        </div>

      </form>
    </Sheet>
  );
};

export default CredentialCreate