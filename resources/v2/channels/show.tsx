import {
  useShow,
  IResourceComponentsProps,
  useTranslate,
  useOne,
  useNavigation,
  useMany,
  useList,
  useSelect,
  useCustom,
  useUpdate
} from '@pankod/refine-core';

import axios from 'axios'
import { Channel, Country, Language, Station, Video } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';
import { Sheet } from '@/components/Sheet';
import { Display } from '@/components/DataDispaly';
import { Button } from '@/components/ui2';
import Link from 'next/link';
import JsonTree from '@/components/JSON';
import { supabaseClient } from '@/utils/supabase-client';
import VideoItem from '@/components/VideoItem';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Controller } from '@pankod/refine-react-hook-form';
import { default as ReactSelect, StylesConfig, components, InputProps, Options } from 'react-select';
import { FC, useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import SocialIcon from '@/components/SocialIcon';
import { FiEdit, FiRefreshCcw } from 'react-icons/fi';


export const ChannelShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { edit, showUrl } = useNavigation()
  const router = useRouter()
  const { query } = router
  const { queryResult, setShowId } = useShow<Channel>({
    metaData: {
      // select: '*, videos(*)',
      select: '*, countries(name, iso2), credentials(*), stations(*), platforms(*), languages(*)',
      fields: [
        'id',
        'name',
        'apikey',
        // 'country_id',
        'metadata',
        'orginal_url',
        'thumb',
        'description',
        'logo',
        'watermark',
        'created_at',
        'updated_at',
      ],

      variables: {

      },


    },
  });
  const { data, isLoading, refetch } = queryResult;
  const record = data?.data;

  // Refetch on route changes
  useEffect(() => {
    refetch()
    console.log("Q", query?.id);

    console.log("REcorde: : ", record);
  }, [query?.id])


  // const countryQueryResult = useOne<Country>({
  //   resource: "countries",
  //   id: record?.country_id,
  // });
  // const credentialQueryResult = useOne<Credential>({
  //   resource: "credentials",
  //   id: record?.credential_id,
  // });
  // const languageQueryResult = useOne<Language>({
  //   resource: "languages",
  //   id: record?.language_id,
  // });
  const stationQueryResult = useOne<Station>({
    resource: "stations",
    metaData: {
      select: "*, channels(*)"
    },
    id: record?.station_id,
  });


  const { data: cData, isLoading: sIsLoading, isFetching: cIsFetching, refetch: cRefetch } = useOne({
    resource: 'channels',

    id: record?.uniqueId,
    dataProviderName: 'lab',
    queryOptions: {
      enabled: false,
      cacheTime: 3000,
      onSuccess: (data) => {
        refetch()
      }
      
    },
  },
  )


  const { mutate: updateChannel } = useUpdate<Channel>();

  // useEffect(() => {
  //   updateChannel({
  //     resource: 'channels',
  //     id: query?.id,
  //     values: cData,tati
  //   })

  // }, [cData])






  return (
    <Sheet
      title={
        <div className=' flex space-x-2 items-center justify-start'>
          {/* <p>{record?.name}</p> */}
          <PlatformSelect onChange={setShowId} loading={stationQueryResult.isLoading} channels={stationQueryResult.data?.data?.channels} />
        </div>
      }
      subtitle={record?.description}
      actions={[
        <Button endIcon={<FiEdit />} className=' btn btn-sm ' onClick={() => edit('channels', record?.id)} />,
        <Button loading={cIsFetching} endIcon={<FiRefreshCcw />} className=' btn btn-sm  ' onClick={() => cRefetch()} />,
        // <Button title="edit" className=' btn btn-sm  btn-ghost' onClick={() => edit('channels', record?.id)} />,
        // <Button title="edit" className=' btn btn-sm  btn-ghost' onClick={() => edit('channels', record?.id)} />,
      ]}

      key={query?.id}
    >

      <JsonTree data={cData} />

      <div className=' w-full flex items-center justify-center'>
        <Head channel={record} />
      </div>
      <div className=' grid grid-cols-2 gap-5'>
        <p className=' text-4xl text-orange-400'>
          {process.env.NEXT_PUBLIC_API_URL}
        </p>
        <Videos />
        <Sheet title={

          <div className="tabs tabs-boxed bg-">
            <a className="tab tab-active">Notifications</a>
            <a className="tab">Comments</a>
            <a className="tab">Tab 3</a>
          </div>
        }
          color="bg-base-300"

        >
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque distinctio quibusdam cum neque praesentium accusantium impedit, delectus provident odit natus necessitatibus voluptas in quod consequuntur aspernatur voluptates reiciendis hic. Natus?</p>
        </Sheet>
      </div>

      <div className=' grid grid-cols-2 gap-5'>

        <div className=' col-span-1'>
          <div className=' card bg-neutral card-compact'>
            <div className=' card-body'>

              <Display type="text" title="id" value={record?.id} />
              <Display type="text" title="name" value={record?.name} />
              <Display type="text" title="apikey" value={record?.apikey} />
              <Display type="text" resource="countries" key="id" title="country" value={record?.countries.name} />
              <Display type="text" title="credential" value={record?.credential_id.id} />
              <Display type="text" title="language" value={record?.languages.name} />
              {/* <Display type="text" title="metadata" value={record?.metadata} /> */}
              <Display type="text" title="orginal_url" value={record?.orginal_url} />
              <Display type="text" title="station" value={stationQueryResult.data?.data.name} />
              <Display type="text" title="platform" value={record?.platform_name} />
              <Display type="text" title="thumb" value={record?.thumb} />
              <Display type="text" title="description" value={record?.description} />
              <Display type="image" title="logo" value={record?.logo} />
              <Display type="text" title="watermark" value={record?.watermark} />
              <Display title="created_at" value={record?.created_at} />
              <Display title="updated_at" type='date' value={record?.updated_at} />
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  );
};




const Videos: FC<{}> = ({ }) => {


  const t = useTranslate();
  const { edit, showUrl } = useNavigation()
  const router = useRouter()
  const { query } = router

  const [ActiveTab, setActiveTab] = useState<string>()
  const videosQueryResult = useList<Video>({
    resource: "videos",
    config: {
      filters: [
        {
          field: 'channel_id',
          operator: 'eq',
          value: query?.id
        }
      ]
    }
  });




  const { data, isLoading } = videosQueryResult
  const getVideoSrc = (url: string) => {
    const { publicURL } = supabaseClient.storage.from('videos').getPublicUrl(url)
    return publicURL
  }

  const [videoShow, setVideoShow] = useState<boolean>(false)
  const { queryResult, showId, setShowId } = useShow<Video>({
    resource: 'videos',
    metaData: {
      fields: [
        'id',
        'title',
      ]
    }
  });
  const { data: video, isFetching: isVideoFetching } = queryResult;
  const record = video?.data;


  return (
    <Sheet title={
      <div className="tabs tabs-boxed">
        <a className={`tab ${ActiveTab === 'videos' ? 'tab-active' : ''}`} onClick={() => setActiveTab('videos')}>Videos</a>
        <a className={`tab ${ActiveTab === 'shorts' ? 'tab-active' : ''}`} onClick={() => setActiveTab('shorts')}>Shorts</a>
        <a className={`tab ${ActiveTab === 'stories' ? 'tab-active' : ''}`} onClick={() => setActiveTab('stories')}>Stories</a>
      </div>
    }
      color="bg-base-300"

    >
      <JsonTree data={data} />
      <VideoShow
        open={videoShow}
        onClose={() => setVideoShow(false)}
        video={record}

        isFetching={isVideoFetching}
      />
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {data?.data.map((video: Video) => (
            <li className="py-3 sm:py-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 max-w-[20%]  p-0.5 bg-base-300 rounded-lg card-bordered	">
                  <figure>
                    <video className='  object-fill max-h-36 min-h-12 max-w-full rounded-lg '  >
                      <source src={getVideoSrc(video?.url)} type='video/mp4'
                        poster="asd"
                      />
                    </video>
                  </figure>

                </div>
                <div className="flex-1 min-w-0">

                  <p onClick={() => {
                    setShowId(video.id)
                    setVideoShow(true)
                  }} className=" link link-hover text-sm font-medium text-gray-900 truncate dark:text-white">
                    {video.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {video?.description}
                  </p>
                </div>
                <div className="badge  badge-primary badge-outline">
                  {video?.status}
                </div>
              </div>
            </li>


          ))}
        </ul>
      </div>
    </Sheet>
  )
}


const PlatformSelect: FC<{ onChange: Function, loading: boolean, channels: Channel[] }> = ({
  loading, channels, onChange
}) => {
  const router = useRouter();
  const { query, replace, reload, push } = router;
  const t = useTranslate()
  const { showUrl } = useNavigation();

  // const { options: platforms, queryResult, } = useSelect({

  //   resource: 'platforms',
  //   optionLabel: 'label',
  //   optionValue: 'name',

  // })

  const Label = (name: string, paltform: string) => {
    return (
      <div className=' flex space-x-2'>
        <span className=''> {name} </span>
        <SocialIcon name={paltform} />
      </div>
    )
  }
  const options = channels?.map((i: Channel) => ({ label: Label(i.name, i.platform_name), value: i.id }))
  // .filter((c) => c.value !== query?.id)
  return (
    // <JsonTree data={options} />
    channels ?
      <ReactSelect
        onChange={({ value }) => replace(showUrl('channels', value)).then(() => onChange(value))}
        options={options}
        defaultValue={options?.filter((c) => c.value === query?.id)}
        // value={platforms.find((i) => i.value === query?.platform)}
        placeholder={t('select', 'Select')}
        // components={{ Input }}
        className="input-select-container"
        classNamePrefix="input-select"
        menuPlacement='auto'
        menuPosition='fixed'
      />
      : <></>


    // <Select
    //  control={control}
    //   options={platforms} 
    //   defaultValue={'tiktok'}
    //   onChange={({value}) => replace(`/channels/show/39d05171-d3f2-4102-978a-8a6b0dca781d?platform=${value}`)}
    //   // path: `channels/show/39d05171-d3f2-4102-978a-8a6b0dca781d?platform=${value}`)) 
    //   />
  )
}


const VideoShow = ({ video, open, onClose, isFetching }) => {
  const getVideoSrc = (url: string) => {
    const { publicURL } = supabaseClient.storage.from('videos').getPublicUrl(url)
    return publicURL
  }
  return (
    <Modal open={open} onClose={onClose} responsive={true} closeable size='w-11/12 max-w-5xl'>

      <div className=' grid grid-cols-1 gap-3'>
        <div>
          <figure>
            <video key={video?.url} className='  object-fill  w-full' controls  >
              <source src={getVideoSrc(video?.url)} type='video/mp4'
                poster="asd"
              />
            </video>
          </figure>
        </div>
        <div className='  flex items-center justify-start space-x-2'>
          <p className=' text-lg flex-1'>{video?.title}</p>
          <div className=' badge badge-primary badge-outline'>
            {video?.status}
          </div>
          <a className=' link-hover link-primary' href={video?.url}>
            <SocialIcon name='tiktok' />
          </a>
        </div>
        <div>
          <p>{video?.description}</p>
        </div>

        <div>
          <ul className=' flex space-x-2 items-center justify-center'>
            <li>
              <button className='btn btn-outline btn-sm'>one</button>
            </li>
            <li>
              <button className='btn btn-outline btn-sm'>one</button>
            </li>
            <li>
              <button className='btn btn-outline btn-sm'>one</button>
            </li>
            <li>
              <button className='btn btn-outline btn-sm'>one</button>
            </li>
          </ul>
        </div>

        <div className=' grid grid-cols-3 gap-3'>
          <div className=' col-span-2'>
            <Sheet color='bg-base-300'>
              commenys
            </Sheet>
          </div>
          <div className=' col-span-1'>
            <div className="stats stats-vertical shadow">

              <div className="stat">
                <div className="stat-title">Downloads</div>
                <div className="stat-value text-lg">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>

              <div className="stat">
                <div className="stat-title">New Users</div>
                <div className="stat-value text-lg">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-title">New Registers</div>
                <div className="stat-value text-lg">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className=' grid  grid-flow-row-dense grid-cols-1 grid-rows-1 gap-5'>
        <JsonTree data={video} />
      </div>
      {/* <ModalActions>
          <button className='btn btn-sm' onClick={back}>
            close
          </button>
        </ModalActions> */}
    </Modal>

  )
}







const Head: FC<{ channel: Channel }> = ({ channel }) => {

  return (
    <div className="stats shadow bg-neutral w-full">

      <div className="stat">
        <div className="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </div>
        <div className="stat-title">Total Likes</div>
        <div className="stat-value text-primary">25.6K</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-secondary">2.6M</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online w-20">
            <div className="  rounded-full">
              <Display type="image" title={channel?.name} value={channel?.logo} />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>

    </div>
  )
}
