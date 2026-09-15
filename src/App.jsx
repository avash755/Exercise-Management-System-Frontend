import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-between'>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App