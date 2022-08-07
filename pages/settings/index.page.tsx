import React, { FC } from 'react';
import { LayoutWrapper } from '@pankod/refine-core';
import { FiChevronRight } from 'react-icons/fi';
import SettingsLayout from '@/components/layout/SettingsLayout';

const SettingsPage: React.FC<{}> = ({ children }) => {
  return (
    <SettingsLayout>
      <div>Settings Page</div>
    </SettingsLayout>
  );
};

export default SettingsPage;
