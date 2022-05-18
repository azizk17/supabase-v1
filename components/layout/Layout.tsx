import { useResource, useNavigation } from '@pankod/refine-core';

import Link from 'next/link';
import { Logo } from './Logo';
import { FiMoon, FiSun, FiUser } from 'react-icons/fi';
import ContentContainer from './ContentContainer';
import SideBar from './SideBar';
import ChannelBar from './ChannelBar';

export const Layout: React.FC = ({ children }) => {
  const { resources } = useResource();
  const { list } = useNavigation();
  return (
    <div className="flex w-full m-0">
      <SideBar />

      <ChannelBar />

      <ContentContainer children={children} />
    </div>
  );
};
