import React from 'react'
import Navbar from './component/Navbar'
import CardList from './component/CardList'
import Footer from './component/Footer'

const App = () => {
  return (
    <main className='w-full h-full'>
      <Navbar/>
      <CardList/>
      <Footer/>

    </main>
  )
}

export default App