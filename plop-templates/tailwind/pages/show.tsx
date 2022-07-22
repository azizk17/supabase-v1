<% const smallModuleName = definition.__moduleName.charAt(0).toLowerCase() + definition.__moduleName.slice(1); _%>
import { useShow, IResourceComponentsProps, useTranslate } from "@pankod/refine-core";

import { <%= definition.__moduleName %> } from "<%= type_path %>";

import {Title, Text, DateField, Card} from '@components';

export const <%= definition.__moduleName %>Show: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<<%= definition.__moduleName %>>({
    metaData: {
      fields: [<%- definition.properties.map(v => `"${v.name}"`).join(',  ') %>]
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Card title={record?.id} isLoading={isLoading}>
      <% for (const fi of definition.properties) { %>
         {/*
          * @property <%= fi.name %>
          * @type <%= fi.type _%>
          <% if(fi.description){ %>* <%- fi.description %> <% } %>
          */}
          <Title level={5}>{t(<%- localeKeyForField(fi.name) %>)}</Title>
          <% if(fi.type === 'Date') { %> <DateField format="LLL" value={record?.<%= fi.name %>} />
          <% } else { %> <Text>{record?.<%= fi.name %>}</Text> <% } %>

          
          {/* <Image width={200} src={record?.${_field}} /> */}
  
        
        <% } _%>
    </Card>
  );
};
