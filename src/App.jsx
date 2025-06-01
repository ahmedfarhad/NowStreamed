import Navbar from './components/navbar'
import Hero from './components/hero'
import Latestmovies from './components/latestmovies'
import LatestTvShows from './components/latesttv'
import Upcoming from './components/upcoming'
import Top from './components/top'
import Footer from './components/footer'
import SearchResults from './components/searchresults'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

function App() {

  const Homelayout = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <Latestmovies />
        <LatestTvShows />
        <Upcoming />
        <Top />
        <Footer />
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Homelayout />}/>
           <Route path='/search-results' element={<SearchResults />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
