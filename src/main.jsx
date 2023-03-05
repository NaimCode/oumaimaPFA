import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ConfigProvider } from 'antd';
import frFR from 'antd/locale/fr_FR';
import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById('root')).render(
    <ConfigProvider locale={frFR} >
        <App />
        <Toaster />
    </ConfigProvider>
)
