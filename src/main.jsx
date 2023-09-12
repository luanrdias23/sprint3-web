import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Solicitacao from './routes/Solicitacao/index.jsx'
import Membros from './routes/Membros/index.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    Element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/soliticicao",
        element: <Solicitacao/>
      },
      {
        path: "/membros",
        element: <Membros/>

      }



    ]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
