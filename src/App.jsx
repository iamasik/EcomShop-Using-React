import NavBar from './components/NavBar'
import Body from './components/Body'
import Account from './components/Account'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
const PageRouting=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<NavBar/>}>
     <Route index element={<Body/>}/>
     <Route path="/Account" element={<Account/>}/>
  </Route>
))
function App() {
  return (
    <div>
        <RouterProvider router={PageRouting}/>
    </div>
  )
}

export default App
