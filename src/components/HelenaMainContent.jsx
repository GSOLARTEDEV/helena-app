// MainContent.js
//import React from 'react';
//{selectedItem == 'territories' ? <TerritoriesApp  title = {'HELENA'}/>: 'Crear'} 
import { RegisterTerrApp } from "./RegisterTerrApp";
import { TerritoriesApp } from "./TerritoriesApp";
import { ReportApp } from "./ReportApp";
import { SubTerritoriesApp } from "./SubTerritoriesApp";
import { ReporteTbla } from "./ReporteTbla";

export const HelenaMainContent = ({ selectedItem  }) => {
  return (
    <main className="main-content">
      {
        (() => {
          if(selectedItem==='territories') {
                  return (
                    <TerritoriesApp  title = {'HELENA'}/>
                  )
              } else if (selectedItem==='registers') {
                  return (
                    <RegisterTerrApp title = {'HELENA'}/>   
                  )
              } else if (selectedItem==='reports') {
                  return (
                    <ReportApp title = {'HELENA'}/>   
                  )
              } else if (selectedItem==='subterritories') {
                  return (
                    <SubTerritoriesApp title = {'HELENA'}/>   
                  )
              } else {
                  return (
                   <ReporteTbla title = {'HELENA'}/>  
                  )
              }
        })()  
      }  
    </main>
  );
};

