import {
  useShow,
  IResourceComponentsProps,
  useTranslate,
  useOne,
  useNavigation
} from '@pankod/refine-core';

import { Channel, Country, Language, Station } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';
import { Sheet } from '@/components/Sheet';
import { Display } from '@/components/DataDispaly';
import { Button } from '@/components/ui2';

export const ChannelShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { edit } = useNavigation()
  const { queryResult } = useShow<Channel>({
    metaData: {
      fields: [
        'id',
        'name',
        'apikey',
        'country_id',
        'credential_id',
        'language_id',
        'metadata',
        'orginal_url',
        'station_id',
        'platform_name',
        'thumb',
        'description',
        'logo',
        'watermark',
        'created_at',
        'updated_at'
      ]
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  console.log("REcorde: : ", record);

  const countryQueryResult = useOne<Country>({
    resource: "countries",
    id: record?.country_id,
  });
  const credentialQueryResult = useOne<Credential>({
    resource: "credentials",
    id: record?.credential_id,
  });
  const languageQueryResult = useOne<Language>({
    resource: "languages",
    id: record?.language_id,
  });
  const stationQueryResult = useOne<Station>({
    resource: "stations",
    id: record?.station_id,
  });
  return (
    <Sheet
      title={record?.name}
      subtitle={record?.description}
      actions={[
        <Button title="edit" className=' btn btn-sm' onClick={() => edit('channels', record?.id)} />
      ]}
      createButtonProps={{

      }}

    >
      <div className=' w-full flex items-center justify-center'>
        <Head />
      </div>
      <Display type="text" title="id" value={record?.id} />
      <Display type="text" title="name" value={record?.name} />
      <Display type="text" title="apikey" value={record?.apikey} />
      <Display type="text" resource="countries" key="id" title="country" value={countryQueryResult.data?.data.name} />
      <Display type="text" title="credential" value={credentialQueryResult.data?.data.id} />
      <Display type="text" title="language" value={languageQueryResult.data?.data.name} />
      <Display type="text" title="metadata" value={record?.metadata} />
      <Display type="text" title="orginal_url" value={record?.orginal_url} />
      <Display type="text" title="station" value={stationQueryResult.data?.data.name} />
      <Display type="text" title="platform" value={record?.platform_name} />
      <Display type="text" title="thumb" value={record?.thumb} />
      <Display type="text" title="description" value={record?.description} />
      <Display type="text" title="logo" value={record?.logo} />
      <Display type="text" title="watermark" value={record?.watermark} />
      <Display title="created_at" value={record?.created_at} />
      <Display title="updated_at" type='date' value={record?.updated_at} />
    </Sheet>
  );
};


const Head = () => {

  return (
    <div className="stats shadow">

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
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://placeimg.com/128/128/people" />
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
