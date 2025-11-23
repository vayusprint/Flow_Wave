import React from 'react'
import { LoaderProvider } from './context/LoaderContext'
import MainWebRoutes from './navigation/MainWebRoutes'
import Loader from './components/Loader'

const App = () => {
  return (
    <LoaderProvider>  
      <Loader />
      <MainWebRoutes />
    </LoaderProvider>
  )
}

export default App