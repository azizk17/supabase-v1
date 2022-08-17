import { Authenticated, LayoutWrapper, useTranslate } from '@pankod/refine-core';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Breadcrumbs from '../Breadcrumb';
import SubMenuBar from './SubMenuBar';


const SettingsLayout: React.FC<{}> = ({ children }) => {
  const t = useTranslate()
  return (
    <LayoutWrapper>
      <Authenticated>

        <div className=" flex ">
          <SubMenuBar
            title={'Settings'}
            menu={[
              {
                title: 'Credentials',
                icon: <FiChevronRight />,
                link: '/settings/credentials'
              },
              {
                title: 'Publishing',
                icon: <FiChevronRight />,
                link: '/settings/publishing'
              },
              {
                title: 'Fetching',
                icon: <FiChevronRight />,
                link: '/settings/fetching'
              },
              {
                title: 'Geolocation',
                icon: <FiChevronRight />,
                link: '/settings/geolocation'
              },
              {
                title: 'Notifications',
                icon: <FiChevronRight />,
                link: '/settings/notifications'
              },
              {
                title: 'Platforms',
                icon: <FiChevronRight />,
                link: '/settings/platforms'
              }
            ]}
          />
          <div className="flex-1">
            {children}
          </div>
        </div>
      </Authenticated>
    </LayoutWrapper>
  );
};

export default SettingsLayout;
