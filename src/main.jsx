import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import store from './app/store.jsx'
import {Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
    
    <Provider store={store}>
    <RouterProvider router={router} >
    <App />
    </RouterProvider>
    </Provider>
)
