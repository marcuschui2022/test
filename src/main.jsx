import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import CameraComponent from './CameraComponent'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App />*/}
        <CameraComponent/>
    </React.StrictMode>,
)
