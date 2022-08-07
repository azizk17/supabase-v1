import React, { forwardRef, useState } from 'react';
import { IResourceComponentsProps, useTranslate, useSelect } from '@pankod/refine-core';

import { Credential } from 'types';

import { useForm } from '@pankod/refine-react-hook-form';
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




// Select form aother table 
// Select 
// radio 
// image upload 



export type CreateFormProps = IResourceComponentsProps & {

}
const CreateForm = forwardRef<HTMLDivElement, CreateFormProps>(
    (
        { children, ...props },
        ref
    ): JSX.Element => {
        const t = useTranslate();
        const { query, back } = useRouter();

        const {
            refineCore: { redirect, onFinish, formLoading, queryResult, },
            register,
            handleSubmit,
            resetField,
            formState: { errors },
            control,
            setValue,
            getValues,
        } = useForm<Credential>({
            
            refineCoreProps: {
                resource: 'credentials',
                action: 'create',
                redirect: false
            }
        });

        const { options: platforms } = useSelect({
            resource: 'platforms',
            optionLabel: 'name',
            optionValue: 'name'
        })

        return (

            <Modal open={!!query.create} onClose={back}>
                {/* {JSON.stringify(data)} */}
                {query.create &&
                    <Sheet title={t('createNew', 'Create New')}

                    >

                        <form
                            onSubmit={handleSubmit(onFinish)}
                        >

                            <Select
                                defaultValue={'tiktok'}
                                control={control}
                                onChange={(e) => setValue('platform_name', e?.value)}
                                options={platforms} />





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
                                <ImageInput
                                    {...register('avatar')}
                                    id="avatar"
                                    name="avatar"
                                    disabled={formLoading}
                                    onChange={(val: string) => setValue('avatar', val)}
                                />

                            </div>
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
                                <div className=' flex space-x-2 items-center justify-start'>

                                    <label className='label'>
                                        <span className='label-text'>
                                            {t('ResourceName:fields.enabled', 'enabled')}
                                        </span>
                                    </label>
                                    <input {...register('enabled', { required: false })}
                                        type='checkbox'
                                        id='enabled'
                                        placeholder={t('ResourceName:fields.enabled', ' enabled ')}
                                        className={`toggle ${errors?.enabled ? 'input-error' : ''}`}
                                        disabled={formLoading} />
                                </div>
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


                        <ModalActions>
                            <button className=' btn' onClick={() => console.log(getValues())}>
                                V
                            </button>
                            <button className='btn btn-sm  btn-primary' onClick={handleSubmit(onFinish)}>
                                {t('submit')}
                            </button>
                            <button className='btn btn-sm' onClick={back}>
                                close
                            </button>
                        </ModalActions>

                    </Sheet>
                }
            </Modal>
        );
    }
);

export default CreateForm