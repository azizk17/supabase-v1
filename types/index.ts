export type Continent =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'North America'
  | 'South America';

export type Enumcredentialstatus = 'active' | 'hold' | 'removed';

export type Enumfetchstatus =
  | 'on_progress'
  | 'success'
  | 'failed'
  | 'canceled'
  | 'paused';

export type Enumfetchstatus =
  | 'on_progress'
  | 'success'
  | 'failed'
  | 'canceled'
  | 'paused';

export type Enumgeneratevideostatus =
  | 'on_progress'
  | 'success'
  | 'failed'
  | 'in_queue'
  | 'canceled'
  | 'paused'
  | 'scheduled';

export type Enumplatformstatus = 'active' | 'only_short' | 'disabled';

export type Enumsourcestatus = 'removed' | 'private' | 'public';

export type Enumvideostatus =
  | 'generateing'
  | 'editing'
  | 'ready'
  | 'published'
  | 'removed'
  | 'canceled'
  | 'scheduled';

export type Animation = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  name?: string;
  description?: string;
  thumbs?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Channel = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: string;
  name?: string;
  apikey?: string;
  /**
  * Note:
This is a Foreign Key to `countries.id`.<fk table='countries' column='id'/>
  *  
  */
  country_id: integer;
  /**
  * Note:
This is a Foreign Key to `credentials.id`.<fk table='credentials' column='id'/>
  *  
  */
  credential_id: string;
  /**
  * Note:
This is a Foreign Key to `languages.id`.<fk table='languages' column='id'/>
  *  
  */
  language_id: integer;
  metadata?: string;
  orginal_url?: string;
  /**
  * Note:
This is a Foreign Key to `stations.id`.<fk table='stations' column='id'/>
  *  
  */
  station_id: string;
  /**
  * Note:
This is a Foreign Key to `platforms.name`.<fk table='platforms' column='name'/>
  *  
  */
  platform_name: string;
  thumb?: string;
  description?: string;
  logo?: string;
  watermark?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Clip = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  title?: string;
  description?: string;
  /**
  * Note:
This is a Foreign Key to `sources.id`.<fk table='sources' column='id'/>
  *  
  */
  source_id?: integer;
  thumb?: string;
  url?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Collection = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  name?: string;
  thumb?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type CollectionsMedia = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  /**
  * Note:
This is a Foreign Key to `collections.id`.<fk table='collections' column='id'/>
  *  
  */
  collection_id?: integer;
  /**
  * Note:
This is a Foreign Key to `sources.id`.<fk table='sources' column='id'/>
  *  
  */
  media_id?: integer;
  created_at?: Date;
  updated_at?: Date;
  deleted?: boolean;
};
export type CollectionsSource = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  /**
  * Note:
This is a Foreign Key to `sources.id`.<fk table='sources' column='id'/>
  *  
  */
  source_id?: integer;
  /**
  * Note:
This is a Foreign Key to `collections.id`.<fk table='collections' column='id'/>
  *  
  */
  collection_id?: integer;
  created_at?: Date;
  updated_at?: Date;
};
export type Country = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  /**
   * Full country name.
   *
   */
  name?: string;
  /**
   * ISO 3166-1 alpha-2 code.
   *
   */
  iso2: string;
  /**
   * ISO 3166-1 alpha-3 code.
   *
   */
  iso3?: string;
  /**
   * Local variation of the name.
   *
   */
  local_name?: string;
  continent?: Continent;
  Enabled?: boolean;
};
export type Credential = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: string;
  username?: string;
  nickname?: string;
  email?: string;
  password?: string;
  apikey?: string;
  avatar?: string;
  status?: Enumcredentialstatus;
  url?: string;
  enabled?: boolean;
  updated_at?: Date;
  created_at?: Date;
};
export type Effect = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  name?: string;
  descriptions?: string;
  thumb?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type FetchSource = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  output?: string;
  status?: Enumfetchstatus;
  /**
  * Note:
This is a Foreign Key to `sources.id`.<fk table='sources' column='id'/>
  *  
  */
  source_id?: integer;
  /**
  * Note:
This is a Foreign Key to `fetchs.id`.<fk table='fetchs' column='id'/>
  *  
  */
  fetch_id?: integer;
  duration?: number;
  resultes?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Fetch = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  output?: string;
  status?: Enumfetchstatus;
  duration?: number;
  created_at?: Date;
  updated_at?: Date;
};
export type Filter = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  name?: string;
  thumb?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Generate = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  /**
  * Note:
This is a Foreign Key to `collections.id`.<fk table='collections' column='id'/>
  *  
  */
  collection_id?: integer;
  /**
  * Note:
This is a Foreign Key to `sources.id`.<fk table='sources' column='id'/>
  *  
  */
  media_id?: integer;
  /**
  * Note:
This is a Foreign Key to `templates.id`.<fk table='templates' column='id'/>
  *  
  */
  template_id?: integer;
  status?: Enumgeneratevideostatus;
  created_at?: Date;
  updated_at?: Date;
};
export type Income = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  amount?: number;
  /**
  * Note:
This is a Foreign Key to `channels.id`.<fk table='channels' column='id'/>
  *  
  */
  channel_id: string;
  transaction_number?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Language = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  code: string;
  name?: string;
  enabled?: boolean;
  updated_at?: Date;
};
export type Marker = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  end_at?: string;
  start_at?: string;
  track_id?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Media = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  uuid: string;
  name: string;
  file_type: string;
  metadata?: string;
  url: string;
  thumb?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Platform = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  name: string;
  label?: string;
  status?: Enumplatformstatus;
  url?: string;
};
export type Playlist = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  name?: string;
  /**
  * Note:
This is a Foreign Key to `channels.id`.<fk table='channels' column='id'/>
  *  
  */
  channel_id: string;
  description?: string;
  station_id?: string;
  thumb?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Profile = {
  id: string;
  updated_at?: Date;
  username?: string;
  avatar_url?: string;
  website?: string;
};
export type Scene = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  title?: string;
  /**
  * Note:
This is a Foreign Key to `clips.id`.<fk table='clips' column='id'/>
  *  
  */
  clip_id?: integer;
  created_at?: Date;
  updated_at?: Date;
};
export type Setting = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  name?: string;
};
export type Sound = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  title?: string;
  duration?: number;
  metadata?: string;
  /**
  * Note:
This is a Foreign Key to `sources.id`.<fk table='sources' column='id'/>
  *  
  */
  source_id?: integer;
  thumb?: string;
  url?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Source = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  username?: string;
  disabled?: boolean;
  screenshots?: string;
  status?: Enumsourcestatus;
  thumb?: string;
  url?: string;
  /**
  * Note:
This is a Foreign Key to `platforms.name`.<fk table='platforms' column='name'/>
  *  
  */
  platform_name: string;
  /**
  * Some sources required credentials to gain access

Note:
This is a Foreign Key to `credentials.id`.<fk table='credentials' column='id'/>
  *  
  */
  credential_id?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Station = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: string;
  name?: string;
  description?: string;
  thumb?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Template = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  key?: string;
  name?: string;
  description?: string;
  thumb?: string;
  metadata?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Track = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  title?: string;
  template_id?: string;
  thumb?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Trendlist = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  date?: Date;
  trends?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Trend = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  title?: string;
  description?: string;
  thumb?: string;
  views?: string;
  created_at?: Date;
  updated_at?: Date;
};
export type Video = {
  /**
  * Note:
This is a Primary Key.<pk/>
  *  
  */
  id: integer;
  title?: string;
  description?: string;
  /**
  * Note:
This is a Foreign Key to `channels.id`.<fk table='channels' column='id'/>
  *  
  */
  channel_id?: string;
  chapters?: string;
  metadata?: string;
  status?: Enumvideostatus;
  text_tracks_file_url?: string;
  publishing_at?: Date;
  thumbs?: string;
  url?: string;
  updated_at?: Date;
  created_at?: Date;
};
