import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrandingGames from './components/TrendingGames/TrandingGames'
import RecommendedArticles from './components/RecommendedArticles/RecommendedArticles'

const App = () => {
  return (
      <>
      <Navbar />
      <Hero />
      <TrandingGames/>
      <RecommendedArticles />
      <div className='h-[900px]'>
        For testing
      </div>
      </>
  )
}

export default App
