import React, { useState } from "react";

export type TabProps = {
  tabs: string[];
};

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="flex mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } py-2 px-4 mr-2 rounded`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab, index) =>
          index === activeTab ? <div key={index}>{tab} content</div> : null
        )}
      </div>
    </>
  );
};
export default Tab;
