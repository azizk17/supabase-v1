import { useResource, useNavigation, Authenticated } from '@pankod/refine-core';

import ContentContainer from './ContentContainer';
import SideBar, { SubSideBar } from './SideBar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const contextClass = {
  success: "bg-base-300",
  error: "bg-error",
  info: "bg-info",
  warning: "bg-warning",
  default: "bg-base-300",
  dark: "bg-white-600 font-gray-300",
};
export const Layout: React.FC = ({ children, bar }) => {
  const { resources } = useResource();
  const { list } = useNavigation();
  return (
    <Authenticated>
      <div className="flex w-full m-0 ">
        <SideBar />

        <ContentContainer children={children} />

        {/* Notification */}
        <ToastContainer
          toastClassName={({ type }) => contextClass[type || "default"] +
            " relative flex p-1 min-h-10 rounded-md  justify-between overflow-hidden cursor-pointer"
          }
          bodyClassName={() => "flex p-3"}
          autoClose={3000}
        />
      </div>
    </Authenticated>
  );
};
