import React, { useState } from 'react';
import { BiImage, BiVideoRecording } from 'react-icons/bi';
import VidProjects from '../project/videoprojects';
import FotoProjects from '../project/fotoProject';
import { FaBook, FaFile } from 'react-icons/fa6';

const NavTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    

  const tabs = [<BiVideoRecording style={{fontSize:'250%'}}/>, <BiImage style={{fontSize:'250%'}}/>, <FaBook style={{fontSize:'250%'}}/>];
  const tabContents = [
    <div >
          <VidProjects/>
    </div>,
    <div>
        <FotoProjects/>
    </div>,
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
             <p>Konten Masih Dalam Tahap Pengembangan </p>

        </div>
    </div>
  ];

    return (
        <div>
      <p style={{marginBottom:0 ,fontSize:'25px'}} >MY PROJECT</p >
             <div className="nav-tabs">
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabContents[activeTab]}
            </div>
            
    </div>
      </div>    
     
  );
};

export default NavTabs;
