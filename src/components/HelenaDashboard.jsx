import React, { useState } from 'react';

import {HelenaNavigation} from './HelenaNavigation';
import {HelenaMainContent} from './HelenaMainContent';
import '../dashboard.css';

export const  HelenaDashboard = () => {

  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleNavItemSelect = (item) => {
    setSelectedItem(item);
  };

  return (
      <>


        <div className="sidebar">
            <HelenaNavigation selectedItem={selectedItem} handleNavItemSelect={handleNavItemSelect} />
        </div>


        <div className="content">
        
              <HelenaMainContent selectedItem={selectedItem} />
        
        </div>
      </>
  );
}

/* <div className="app">
      <HelenaNavigation selectedItem={selectedItem} handleNavItemSelect={handleNavItemSelect} />
      
      <HelenaMainContent selectedItem={selectedItem} />
    </div>
     */
