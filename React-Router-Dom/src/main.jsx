import { createRoot } from 'react-dom/client'
import {Home, About, Contact, App, User, GitHub } from "./Index/Index"
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },{
//          path:"about",
//         element:<About/>
//       },{
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   } 
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:UserId' element={<User/>} />
      <Route  
      // Loader={GithubInfoLoder}
       path='github' element={<GitHub/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
