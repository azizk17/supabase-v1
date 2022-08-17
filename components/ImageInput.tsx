import { useTranslate, useApiUrl } from '@pankod/refine-core';
import { Controller, FieldError } from '@pankod/refine-react-hook-form'
import React, { FC, useState } from 'react'
import { FieldErrors, Merge } from 'react-hook-form'
import { default as ReactSelect, StylesConfig } from 'react-select';
import axios from 'axios'
import { IComponentBaseProps } from './ui/types'
import { v4 as uuidv4 } from 'uuid';

import { supabaseClient } from '@/utils/supabase-client'
import { FaCross, FaUser } from 'react-icons/fa';
import xCircle from '@iconify/icons-ph/x-circle';
import { Icon } from '@iconify/react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export type ImageInputProps = {
    url?: string
    className?: string
    onChange?: any
    value?: string
    name: string
    filename?: string
    bucket?: string

}


// server uploaded image url  
// image preview 
// remove btn 
// cancel btn 




export const ImageInput = React.forwardRef<HTMLLabelElement, ImageInputProps>(
    ({ children,
        className,
        onChange,
        value,
        name,
        filename,
        bucket = "app",
        ...props }, ref): JSX.Element => {
        const t = useTranslate();
        // const apiURL = useApiUrl();
        const apiURL = "http://api.cp";
        const [isUploading, setIsUploading] = useState<boolean>(false);
        const [imgPreview, setImgPreview] = useState<File | null>()
        const [imageUrl, setImageUrl] = useState<string>()

        const [uploadingError, setUploadingError] = useState<any | null>()



        filename = filename ?? uuidv4()
        if (value) {
            setImgPreview(value)
        }



        const onSubmitFile = async () => {
            setIsUploading(true);
            const inputFile = document.getElementById(
                "fileInput",
            ) as HTMLInputElement;

            const _file = inputFile?.files?.item(0) as File

            setImgPreview(_file)
            const formData = new FormData();

            formData.append("file", inputFile?.files?.item(0) as File);


            const { data, error } = await supabaseClient
                .storage
                .from(bucket)
                .upload(filename, formData, {
                    cacheControl: '3600',
                    upsert: false
                })

            if (error) {
                setUploadingError(error)
                console.log("errror: ", error);

            }
            setImageUrl(data);
            setIsUploading(false);
        };


        const removeImage = () => {
            // if it is preview remove it and replaced it server image if exited 
            setImgPreview(null)
            setImageUrl('')
            setUploadingError(null)
            const inputFile = document.getElementById(
                "fileInput",
            ) as HTMLInputElement;

            inputFile.value = null

        }

        return (
            <div className=' flex flex-col items-start justify-center '>
                <div
                    className=' avatar cursor-default bg-base-300 flex items-center justify-center bordered rounded-lg w-24 h-24'>
                    {isUploading &&
                        <div className=' bg-base-300 bg-opacity-80 absolute inset-0 h-full w-full flex items-center justify-center rounded-lg'>
                            <OnUploadingIcon />
                        </div>
                    }

                    {!imgPreview && <label htmlFor='fileInput' className=' flex items-center justify-center  h-full w-full hover:cursor-pointer hover:opacity-60'>
                        <ImageIcon />
                    </label>}


                    {uploadingError && <div className=' absolute flex h-full w-full bg-slate-700 bg-opacity-80 items-center justify-center inset-0'> <Icon width={90} height={90} icon={xCircle} /></div>}

                    {imgPreview && <div className=' '>
                        <img className=' rounded-lg' src={URL.createObjectURL(imgPreview)} />

                        <div className=' absolute z-10 inset-0 flex items-center justify-between space-x-2  p-0.5'>
                            <button type='button' onClick={removeImage} className=' btn btn-sm btn-circle  '>
                                <RemoveIcon />
                            </button>
                            <label htmlFor="fileInput" className=' btn btn-sm btn-circle '>
                                <EditIcon />
                            </label>
                        </div>
                    </div>}
                    <input disabled={!!isUploading} hidden id="fileInput" type="file" onChange={onSubmitFile} />
                    <input
                        type="hidden"
                        {...props}
                    />

                </div>

                {uploadingError && <p className='p-1 text-error'>{uploadingError?.message}</p>}


            </div>
        )
    }
)




const OnUploadingIcon: { img: string, progress: boolean } = ({ img, progress }): JSX.Element =>
(
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className=' h-8 w-8' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" /></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></g></svg>
)



const ImageIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8' aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" /><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71l-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" /></g></svg>
)

const RemoveIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className=' h-4 w-4' aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z" /><path fill="currentColor" d="M9 10h2v8H9zm4 0h2v8h-2z" /></svg>)

const EditIcon = () => (<svg className=' h-4 w-4' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z" /><path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" /></g></svg>)