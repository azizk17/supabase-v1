import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import NavLink from '../NavLink';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

export const SubMenuBar: React.FC = ({ title, menu }) => {
  const router = useRouter();

  return (
    <div className="w-56  h-auto   bg-neutral overflow-hidden shadow-lg min-h-screen  ">
      <h5
        className='p-2 text-2xl font-semibold opacity-60 '
      >
        {title}
      </h5>

      <div className=" px-4 py-1">
        {menu.map((item) => (
          <ul className=" grid grid-cols-1 list-none " key={item.link}>
            <li className=" py-0.5">
              <NavLink href={item.link}  activeClassName={"text-primary"}>
                <a
                  className={
                    ` font-semibold tracking-wide ltr:mr-auto rtl:ml-auto link link-hover `
                  }
                >
                  {item.title}
                </a>
                </NavLink>
              {/* <Link href={item.link}>
                <a
                  className={
                    ` font-semibold tracking-wide ltr:mr-auto rtl:ml-auto link link-hover ` +
                    (router.pathname === item.link
                      ? ' link-primary'
                      : 'text-gray-500')
                  }
                >
                  {item.title}
                </a>
              </Link> */}
            </li>
          </ul>
        ))}
        {/* <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Questions" selections={questions} />
        <Dropdown header="Random" selections={random} /> */}
      </div>
    </div>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown z-10">
      <div onClick={() => setExpanded(!expanded)} className="dropdown-header ">
        <ChevronIcon expanded={expanded} />
        <h5
          className={
            expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'
          }
        >
          {header}
        </h5>
        <FaPlus
          size="12"
          className="text-accent text-opacity-80 my-auto ltr:ml-auto rtl:mr-auto"
        />
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto ltr:mr-1 rtl:ml-1';
  return expanded ? (
    <FaChevronDown size="14" className={chevClass} />
  ) : (
    <FaChevronRight size="14" className={chevClass} />
  );
};

const TopicSelection = ({ selection }) => (
  <div className=" relative flex z-10 flex-row items-center justify-evenly mt-1 ltr:mr-auto rtl:ml-auto ltr:ml-2 rtl:mr-2 transition duration-300 ease-in-out cursor-pointer">
    {/* <BsHash size="20" className="text-gray-400" /> */}
    <h5
      className="text-gray-500 font-semibold tracking-wide
      ltr:mr-auto rtl:ml-auto 
      link link-hover"
    >
      {selection}
    </h5>
  </div>
);

const ChannelBlock = ({ title }) => (
  <div className="channel-block">
    <h5
      className="text-lg tracking-wider font-bold 
      text-gray-600 dark:text-gray-400 
      ltr:mr-auto rtl:ml-auto ltr:ml-4 rtl:mr-4 my-auto align-middle"
    >
      {title}
    </h5>
  </div>
);

export default SubMenuBar;
