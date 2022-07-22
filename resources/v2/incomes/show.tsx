import {
  useShow,
  IResourceComponentsProps,
  useTranslate
} from '@pankod/refine-core';

import { Income } from 'types';
import { Card, Title, Text, DateField } from '@/components/ui';

export const IncomeShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<Income>({
    metaData: {
      fields: [
        'id',
        'amount',
        'channel_id',
        'transaction_number',
        'created_at',
        'updated_at'
      ]
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Card title={record?.id} isLoading={isLoading}>
      {/*
       * @property id
       * @type integer          * Note:This is a Primary Key.<pk/>
       */}
      <Title level={5}>{t('income:fields.id', 'Id')}</Title>
      <Text>{record?.id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property amount
       * @type number
       */}
      <Title level={5}>{t('income:fields.amount', 'Amount')}</Title>
      <Text>{record?.amount}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property channel_id
       * @type string
       */}
      <Title level={5}>{t('income:fields.channelId', 'Channel id')}</Title>
      <Text>{record?.channel_id}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property transaction_number
       * @type string
       */}
      <Title level={5}>
        {t('income:fields.transactionNumber', 'Transaction number')}
      </Title>
      <Text>{record?.transaction_number}</Text>

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property created_at
       * @type Date
       */}
      <Title level={5}>{t('income:fields.createdAt', 'Created at')}</Title>
      <DateField format="LLL" value={record?.created_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}

      {/*
       * @property updated_at
       * @type Date
       */}
      <Title level={5}>{t('income:fields.updatedAt', 'Updated at')}</Title>
      <DateField format="LLL" value={record?.updated_at} />

      {/* <Image width={200} src={record?.${_field}} /> */}
    </Card>
  );
};
