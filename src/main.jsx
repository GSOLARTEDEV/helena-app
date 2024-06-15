import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TerritoriesApp } from './components/TerritoriesApp.jsx'
import { HelenaDashboard } from './components/HelenaDashboard.jsx';

//<TerritoriesApp title = {'HELENA'}/>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <HelenaDashboard />
  </React.StrictMode>,
)


