import React from 'react'
import Hero from './components/Hero';

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />

      <section className='min-h-screen bg-blue-500'></section>
    </main>
  )
}

export default App;