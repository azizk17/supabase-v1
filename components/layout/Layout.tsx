import { useResource, useNavigation } from '@pankod/refine-core';

import Link from 'next/link';
import { Logo } from './Logo';
import { FiMoon, FiSun, FiUser } from 'react-icons/fi';
import ContentContainer from './ContentContainer';
import SideBar from './SideBar';
import ChannelBar from './ChannelBar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Layout: React.FC = ({ children }) => {
  const { resources } = useResource();
  const { list } = useNavigation();
  return (
    <div className="flex w-full m-0">
      <SideBar />

      <ChannelBar />

      <ContentContainer children={children} />

      {/* Notification */}
      <ToastContainer />
    </div>
  );
};
