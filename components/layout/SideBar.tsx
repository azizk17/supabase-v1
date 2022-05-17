import { useNavigation, useResource } from '@pankod/refine-core';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { FiHome, FiLayers } from 'react-icons/fi';
import { Tooltip } from '../ui2';

export const SideBar: React.FC = () => {
  const { resources } = useResource();
  const { list } = useNavigation();

  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg justify-between"
    >
      <div>
        <div className="sidebar-icon group">
          <FiHome size={20} />
        </div>
        <Divider />
        {resources.map(({ name, icon }) => (
          <SideBarIcon icon={icon} text={name} onClick={() => list(name)} />
        ))}
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
      </div>
      <div>
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡', onClick }) => (
  <div className="sidebar-icon group" onClick={onClick}>
    {icon ? icon : <FiLayers />}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
