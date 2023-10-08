import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import {Github, Home} from './components';
import {About} from './components';
import {Contact} from './components';
import {User} from './components';
import { GithubLoader } from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <App />,
//     children:  [
//       {
//         path: '',
//         element : <Home /> 
//       } , 
//       {path : '/about' ,
//       element: <About /> 
//     } ,
//     {
//       path : '/Contact',
//       element : <Contact /> 
//     }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App /> } >
      <Route path='/' element={<Home /> } /> 
      <Route path='/about' element={<About /> } /> 
      <Route path='/Contact' element={<Contact /> } /> 
      <Route path='/user/:id' element={<User /> } /> 
      <Route loader={GithubLoader} path='/github' element={<Github /> } /> 
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} /> 
  </React.StrictMode>,
)
