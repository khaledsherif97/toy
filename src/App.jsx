import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import { Suspense, lazy } from 'react'
import { FidgetSpinner } from 'react-loader-spinner'


const Home = lazy(() => import('./components/home'))
const LayOut = lazy(() => import('./components/layOut'))
const NotFound = lazy(() => import('./components/notFound'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Products = lazy(() => import('./components/Products'))
const Boy = lazy(() => import('./components/Boy'))
const Girl = lazy(() => import('./components/girl'))
const Soft = lazy(() => import('./components/soft'))
const Baby = lazy(() => import('./components/baby'))

function App() {
  let routes=createBrowserRouter([
    { path:"toy",element:<LayOut />,children:[
      {index:true,element:<Home />},
      {path:"home",element:<Home />},
      {path:"about",element:<About />},
      {path:"con",element:<Contact />},
      {path:"product",element:<Products /> ,children:[
        {index:true,element:<Boy/>},
        {path:"girl",element:<Girl/>},
        {path:"soft",element:<Soft/>},
        {path:"baby",element:<Baby/>},
       
      ]},
     
  
      {path:"*",element:<NotFound />},
  
    ]}
  ])

  return (
    <>
      <Suspense fallback={<FidgetSpinner
  visible={true}
  height="300"
  width="300"
  ariaLabel="fidget-spinner-loading"
  wrapperStyle={{}}
  backgroundColor="#60a5fa"
  ballColors={["rgb(148, 14, 9)", "rgb(3, 11, 42)", "rgb(40, 84, 7)"]}
  wrapperClass="fidget-spinner-wrapper w-100 mt-5 pt-5"
  />}>
      <RouterProvider router={routes} />
    </Suspense>
    </>
  )
}

export default App
