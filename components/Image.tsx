import React, { MouseEventHandler, useEffect, useState } from "react"
import { default as RcImage } from "rc-image";
import { supabaseClient } from "@/utils/supabase-client";
import JsonTree from "./JSON";
import { default as NextImage } from 'next/image'
import Zoom from 'react-medium-image-zoom'

import cn from 'clsx';

type ImageProps = {
    src?: string
    size?: string
    onClick?: MouseEventHandler
    zoom?: boolean
}

const WithZoom = ({ zoom, children }) => (zoom ?
    <Zoom>
        {children}
    </Zoom>
    : children
);


export const Image = React.forwardRef<HTMLLabelElement, ImageProps>(
    ({ src, size = " h-28 w-28", onClick, zoom = true, ...props }, ref): JSX.Element => {
        const [isLoading, setLoading] = useState(true);


        const [data, setData] = useState()
        const [img, setImg] = useState()
        useEffect(() => {
            // getImages()
            getImg()
        }, [])

        const getImages = async () => {
            const text = src?.split('/')
            const images = await supabaseClient
                .storage
                .from(text[0])
                .list()
            setData(images)
            // .getPublicUrl(text[1])
            console.log("DATA", data);
        }

        const getImg = async () => {
            setLoading(true)
            const { data: image, error } = await supabaseClient.storage.from('app').createSignedUrl('16bcd188-6920-42dd-bff8-d3c4327e5d19', 33)
            setImg(image)
        }

        return (
            <div className={`relative ${size}`}>

                {isLoading &&
                    <div className=" h-full w-full flex items-center justify-center bg-base-300 ">
                        <ImgIcon />
                    </div>
                }
                {/* <div className=" bg-gray-900">

                <JsonTree data={img} />
                </div>
                
                <JsonTree data={data} />
                {JSON.stringify(data)} */}
                <WithZoom zoom={zoom}>
                    <NextImage
                        src={img?.signedURL}
                        height={150}
                        width={150}
                        // layout="fill"
                        alt={props.alt}
                        className={cn(
                            props.className,
                            'duration-700 ease-in-out',
                            isLoading
                                ? 'grayscale blur-2xl scale-110'
                                : 'grayscale-0 blur-0 scale-100'
                        )}
                        onLoadingComplete={() => setLoading(false)}
                    />
                </WithZoom>
            </div>
        )
    }
)


const ImgIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="animate-pulse h-8 w-8" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M168 100a12 12 0 0 1-12 12a12.3 12.3 0 0 1-8.5-3.5a11.9 11.9 0 0 1-3.5-8.5a12 12 0 0 1 24 0Zm64-44v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-16 108.7V56H40v92.7L76.7 112a16.1 16.1 0 0 1 22.6 0l44.7 44.7l20.7-20.7a16.1 16.1 0 0 1 22.6 0Z" /></svg>
)