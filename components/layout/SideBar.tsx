import { useNavigation, useResource } from '@pankod/refine-core';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { FiHome, FiLayers, FiLogOut } from 'react-icons/fi';
import { Dropdown, Tooltip } from '../ui2';
import { ThemeChanger } from 'components/ThemeChanger';
import Link from 'next/link';
import { useLogout, useTranslate } from '@pankod/refine-core';
import { LocaleChanger } from '../LocaleChanger';

export const SideBar: React.FC = () => {
  const { resources } = useResource();
  const { list } = useNavigation();
  const t = useTranslate();

  const hasSubMenu = false;
  return (
    <div
      className={`fixed top-0 ltr:left-0 rtl:right-0 h-screen w-16 flex flex-col bg-base-300 shadow-lg justify-between ${
        hasSubMenu && 'ltr:ml-16 rtl:mr-16'
      }`}
    >
      <div>
        <Link href="/">
          <SideBarIcon icon={<FiHome size={20} />} text={t('home', 'Home')} />
        </Link>
        <Divider />
        {resources.map(({ name, icon }) => (
          <SideBarIcon icon={icon} text={name} onClick={() => list(name)} />
        ))}
        {/* <SideBarIcon icon={<BsFillLightningFill size="20" />} /> */}
        {/* <SideBarIcon icon={<FaPoo size="20" />} /> */}
      </div>
      <div>
        <Divider />
        <SettingsCircle />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡', onClick }) => (
  <div
    onClick={onClick}
    className=" tooltip ltr:tooltip-right rtl:tooltip-left relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto  hover:bg-primary bg-base-100 text-primary-500 hover:text-primary-content hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group group "
    data-tip={text}
  >
    {icon ? icon : <FiLayers />}
    {/* <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold z-10 transition-all duration-100 scale-0 origin-left   group-hover:scale-100">
      {text}
    </span> */}
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

const SettingsCircle: React.FC = () => {
  const t = useTranslate();
  const { mutate: logout, isLoading, error } = useLogout();
  return (
    <div>
      <div className="dropdown  dropdown-top rtl:dropdown-end ">
        <label tabIndex={0} className=" ">
          <SideBarIcon icon={<BsGearFill size="22" />} />
        </label>
        <div
          tabIndex={0}
          className="dropdown-content  items-center   card card-compact space-y-2  flex flex-col w-52 p-2 mb-3 shadow bg-primary text-primary-content"
        >
          <ul className=" menu menu-compact  w-full ">
            <li className="  ">
              <Link href={'/settings'}>
                <a className="flex items-center  ">
                  {t('settings', 'Settings')}
                </a>
              </Link>
            </li>
            <li>
              <LocaleChanger />
            </li>
          </ul>
          <Divider />
          <div className="flex items-center justify-between space-x-5 rtl:space-x-reverse">
            <button className="btn btn-sm">
              <ThemeChanger size="sm" />
            </button>
            <div className="tooltip  " data-tip={t('auth:signOut', 'Sign out')}>
              <button onClick={() => logout()} className="btn btn-sm">
                <FiLogOut size="20" />
              </button>
            </div>
          </div>
          {/* <ul className="menu menu-compact  menu-horizontal gap-4 w-full ">
            <li className="bg-base-300 rounded-lg">
              <ThemeChanger />
            </li>
            <li
              className="bg-base-300  rounded-lg tooltip"
              data-tip={t('auth:signOut', 'Sign out')}
              onClick={() => logout()}
            >
              s
              <FiLogOut size={36} />
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
