import React, { forwardRef, MouseEventHandler, useState } from 'react';
import { IResourceComponentsProps, useTranslate, useSelect } from '@pankod/refine-core';

import { Credential, Station } from 'types';

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




// Select form aother table 
// Select 
// radio 
// image upload 



export type CreateFormProps = IResourceComponentsProps & {
    onUpdated?: any
    open: boolean
    onClose: MouseEventHandler
}

export const StationCreateForm: React.FC<UseModalFormReturnType> = ({
    register,
    formState: { errors },
    refineCore: { onFinish, formLoading },
    handleSubmit,
    modal: { visible, close },
    saveButtonProps,
    formState: {isSubmitting},
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

    const { options: platforms } = useSelect({
        resource: 'platforms',
        optionLabel: 'name',
        optionValue: 'name'
    })



    return (

        <Modal open={visible} onClose={close}>
            {/* {JSON.stringify(data)} */}
            <Sheet title={t('createNew', 'Create New')}
            >

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

                    {/************ Thumb ************/}
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>
                                {t('ResourceName:fields.thumb', 'Thumb')}
                            </span>
                        </label>
                        <input {...register('thumb', { required: false })}
                            type='file'
                            id='thumb'
                            placeholder={t('ResourceName:fields.thumb', 'Thumb')}
                            className={`input input-bordered w-full ${errors?.thumb ? 'input-error' : ''}`}
                            disabled={formLoading} />
                        {errors?.thumb && (
                            <label className='label text-error'>
                                <span className='label-text-alt'>{errors?.thumb}</span>
                            </label>
                        )}
                    </div>
                </form>


                <ModalActions>
                    <Button color='primary' disabled={
                        isSubmitting
                    } loading={isSubmitting} onClick={handleSubmit(onFinish)}>
                        {t('submit')}
                    </Button>
                    <Button onClick={close}>
                        {t('close')}
                    </Button>
                </ModalActions>

            </Sheet>
        </Modal>
    );
}

export default StationCreateForm