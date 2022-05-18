import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

export const ChannelBar: React.FC = () => {
  return (
    <div className="w-80 h-auto m-0 ltr:ml-16 rtl:mr-16 bg-base-200 overflow-hidden shadow-lg min-h-screen  ">
      <ChannelBlock />
      <div className="channel-container">
        <Dropdown header="Topics" selections={topics} />
        <Dropdown header="Questions" selections={questions} />
        <Dropdown header="Random" selections={random} />
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

const ChannelBlock = () => (
  <div className="channel-block">
    <h5
      className="text-lg tracking-wider font-bold 
      text-gray-600 dark:text-gray-400 
      ltr:mr-auto rtl:ml-auto ltr:ml-4 rtl:mr-4 my-auto align-middle"
    >
      Channels
    </h5>
  </div>
);

export default ChannelBar;
