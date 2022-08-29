import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { Video } from 'types/a'
import { supabaseClient } from '@/utils/supabase-client'
import { useNavigation } from '@pankod/refine-core'

export type VideoItemProps = {
    video: Video
}
const getVideoSrc = (url: string) => {
    const { publicURL } = supabaseClient.storage.from('videos').getPublicUrl(url)
    return publicURL
}
const VideoItem: FC<VideoItemProps> = ({ video }): JSX.Element => {
    const { show } = useNavigation()
    return (
        <div className=' card bg-neutral card-bordered card-compact  h-full w-full max-w-md  '>
            <figure>
                <video className=' max-h-56 max-w-xs' controls controlsList='play' >
                    <source src={getVideoSrc(video?.url)} type='video/mp4'
                        poster="asd"
                    />
                </video>
            </figure>
            <div className=' card-body'>
                <p onClick={() => show('videos', video.id)} className='card-title link link-hover'>{video?.title}</p>
            </div>
        </div>
    )
}


export default VideoItem
