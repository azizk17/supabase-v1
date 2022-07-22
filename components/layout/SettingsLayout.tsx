import { LayoutWrapper } from '@pankod/refine-core';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Breadcrumbs from '../Breadcrumb';
import SubMenuBar from './SubMenuBar';


const SettingsLayout: React.FC<{}> = ({ children }) => {
  return (
    <LayoutWrapper>
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
            }
          ]}
        />
        <div className="flex-1">
          {children}
          </div>
      </div>
    </LayoutWrapper>
  );
};

export default SettingsLayout;
