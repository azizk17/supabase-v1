import {
    List,
    TextField,
    TagField,
    DateField,
    Table,
    useTable,
} from "@pankod/refine-antd";

export interface IPost {
    id: string;
    title: string;
    status: "published" | "draft" | "rejected";
    createdAt: string;
}

export const ChannelList: React.FC = () => {
    const { tableProps } = useTable<IPost>();

    return (
        {"required":["id","country_id","credential_id","language_id","station_id","platform_name"],"properties":[{"name":"id","type":"string","required":true,"description":"Note:This is a Primary Key.<pk/>","default":"extensions.uuid_generate_v4()"},{"name":"name","type":"string","required":false},{"name":"apikey","type":"string","required":false},{"name":"country_id","type":"integer","required":true,"description":"Note:This is a Foreign Key to `countries.id`.<fk table='countries' column='id'/>","relation":{"resource":"countries","column":"id","_type":"Country"}},{"name":"credential_id","type":"string","required":true,"description":"Note:This is a Foreign Key to `credentials.id`.<fk table='credentials' column='id'/>","relation":{"resource":"credentials","column":"id","_type":"Credential"}},{"name":"language_id","type":"integer","required":true,"description":"Note:This is a Foreign Key to `languages.id`.<fk table='languages' column='id'/>","relation":{"resource":"languages","column":"id","_type":"Language"}},{"name":"metadata","type":"string","required":false},{"name":"orginal_url","type":"string","required":false},{"name":"station_id","type":"string","required":true,"description":"Note:This is a Foreign Key to `stations.id`.<fk table='stations' column='id'/>","relation":{"resource":"stations","column":"id","_type":"Station"}},{"name":"platform_name","type":"string","required":true,"description":"Note:This is a Foreign Key to `platforms.name`.<fk table='platforms' column='name'/>","relation":{"resource":"platforms","column":"name","_type":"Platform"}},{"name":"thumb","type":"string","required":false},{"name":"description","type":"string","required":false},{"name":"logo","type":"string","required":false},{"name":"watermark","type":"string","required":false},{"name":"created_at","type":"Date","required":false,"default":"timezone('utc'::text, now())"},{"name":"updated_at","type":"Date","required":false,"default":"timezone('utc'::text, now())"}],"type":"object","__moduleName":"Channel","__resource":"channels","names":["channels"]}
        
        <Table {...tableProps} rowKey="id">
            {/*
            * @property id
            * @type string
             * Note:This is a Primary Key.<pk/> 
            */}
            <Table.Column title={translate(":fields.id", "id" )} dataIndex="id"
                key="id" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
            {/*
            * @property name
            * @type string
            
            */}
            <Table.Column title={translate(":fields.name", "name" )} dataIndex="name"
                key="name" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
            {/*
            * @property apikey
            * @type string
            
            */}
            <Table.Column title={translate(":fields.apikey", "apikey" )} dataIndex="apikey"
                key="apikey" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
            {/*
            * @property country_id
            * @type integer
             * Note:This is a Foreign Key to `countries.id`.<fk table='countries' column='id'/> 
            */}
            <Table.Column title={translate(":fields.country_id", "country_id" )} dataIndex="country_id"
                key="country_id" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                true
                render={(text, record) => {
                const countries = countriesIds.find(item => item.id === record.id);
                return countries?.id;
                }}
                />
            {/*
            * @property credential_id
            * @type string
             * Note:This is a Foreign Key to `credentials.id`.<fk table='credentials' column='id'/> 
            */}
            <Table.Column title={translate(":fields.credential_id", "credential_id" )} dataIndex="credential_id"
                key="credential_id" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                true
                render={(text, record) => {
                const credentials = credentialsIds.find(item => item.id === record.id);
                return credentials?.id;
                }}
                />
            {/*
            * @property language_id
            * @type integer
             * Note:This is a Foreign Key to `languages.id`.<fk table='languages' column='id'/> 
            */}
            <Table.Column title={translate(":fields.language_id", "language_id" )} dataIndex="language_id"
                key="language_id" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                true
                render={(text, record) => {
                const languages = languagesIds.find(item => item.id === record.id);
                return languages?.id;
                }}
                />
            {/*
            * @property metadata
            * @type string
            
            */}
            <Table.Column title={translate(":fields.metadata", "metadata" )} dataIndex="metadata"
                key="metadata" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
            {/*
            * @property orginal_url
            * @type string
            
            */}
            <Table.Column title={translate(":fields.orginal_url", "orginal_url" )} dataIndex="orginal_url"
                key="orginal_url" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
            {/*
            * @property station_id
            * @type string
             * Note:This is a Foreign Key to `stations.id`.<fk table='stations' column='id'/> 
            */}
            <Table.Column title={translate(":fields.station_id", "station_id" )} dataIndex="station_id"
                key="station_id" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                true
                render={(text, record) => {
                const stations = stationsIds.find(item => item.id === record.id);
                return stations?.id;
                }}
                />
            {/*
            * @property platform_name
            * @type string
             * Note:This is a Foreign Key to `platforms.name`.<fk table='platforms' column='name'/> 
            */}
            <Table.Column title={translate(":fields.platform_name", "platform_name" )} dataIndex="platform_name"
                key="platform_name" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                true
                render={(text, record) => {
                const platforms = platformsIds.find(item => item.id === record.id);
                return platforms?.name;
                }}
                />
            {/*
            * @property thumb
            * @type string
            
            */}
            <Table.Column title={translate(":fields.thumb", "thumb" )} dataIndex="thumb"
                key="thumb" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
            {/*
            * @property description
            * @type string
            
            */}
            <Table.Column title={translate(":fields.description", "description" )} dataIndex="description"
                key="description" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
            {/*
            * @property logo
            * @type string
            
            */}
            <Table.Column title={translate(":fields.logo", "logo" )} dataIndex="logo"
                key="logo" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
            {/*
            * @property watermark
            * @type string
            
            */}
            <Table.Column title={translate(":fields.watermark", "watermark" )} dataIndex="watermark"
                key="watermark" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
            {/*
            * @property created_at
            * @type Date
            
            */}
            <Table.Column title={translate(":fields.created_at", "created_at" )} dataIndex="created_at"
                key="created_at" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
            {/*
            * @property updated_at
            * @type Date
            
            */}
            <Table.Column title={translate(":fields.updated_at", "updated_at" )} dataIndex="updated_at"
                key="updated_at" sorter render={(text, record)=>
                <Link href={`/${record.id}`}>{text}</Link>}
                false
                />
        </Table>    );
};