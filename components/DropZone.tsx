import { useTranslate, useApiUrl } from '@pankod/refine-core';
import { Controller, FieldError } from '@pankod/refine-react-hook-form'
import React, { FC, useState, useCallback } from 'react'
import { FieldErrors, Merge } from 'react-hook-form'
import { default as ReactSelect, StylesConfig } from 'react-select';
import axios from 'axios'
import { IComponentBaseProps } from './ui/types'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import { useDropzone } from 'react-dropzone'
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export type DropzoneProps = {
    url: string
    className: string
    onChange: any
    value: any
    control: any
}

export const Dropzone = React.forwardRef<HTMLLabelElement, DropzoneProps>(
    ({ children, className, onChange, control, ...props }, ref): JSX.Element => {
        const t = useTranslate();
        // const apiURL = useApiUrl();
        const apiURL = "http://api.cp";
        const [isUploading, setIsUploading] = useState<boolean>(false);
        const [imageUrl, setImageUrl] = useState<string>()
        const { getRootProps, getInputProps } = useDropzone()

        const [crop, setCrop] = useState<Crop>()


        return (
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
        )
    }
)
