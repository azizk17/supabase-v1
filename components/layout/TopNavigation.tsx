import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun
} from 'react-icons/fa';
import { Dropdown } from '../ui2';

export const TopNavigation: React.FC = () => {
  return (
    // <div className="flex flex-row items-center justify-evenly bg-gray-300 dark:bg-gray-700 bg-opacity-90 w-full h-16 m-0 shadow-lg">
    //   <HashtagIcon />
    //   <Title />
    //   <Search />
    //   <BellIcon />
    //   <UserCircle />
    // </div>
    <Header />
  );
};

const Header: React.FC = () => {
  const hasSubMenu = false;
  return (
    <div
      className={`navbar w-full  bg-base-300 rounded-none m-0 ${
        hasSubMenu && 'ltr:ml-16 rtl:mr-16'
      }`}
    >
      <div className="flex-1">
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        <p> title here</p>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-sm input-bordered"
          />
        </div>
        {/* <div className="dropdown dropdown-end ltr:dropdown-left rtl:dropdown-right">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);
const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserCircle = () => (
  <div>
    <Dropdown horizontal="left" vertical="middle">
      <Dropdown.Toggle size="sm">
        <FaUserCircle size="24" className="top-navigation-icon" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-52">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);
const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
const Title = () => <h5 className="title-text">tailwind-css</h5>;

export default TopNavigation;
