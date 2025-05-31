import Navbar from './components/navbar'
import Hero from './components/hero'
import Latestmovies from './components/latestmovies'
import LatestTvShows from './components/latesttv'
import Upcoming from './components/upcoming'
import Top from './components/top'
import Footer from './components/footer'

function App() {

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

export default App
