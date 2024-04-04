import Header from './components/Header/Header'

import Sidebar from './components/Sidebar/Sidebar'
import SpotlightSection from './components/SpotlightSection/SpotlightSection'
import TrendingAnime from './components/TrendingAnime/TrendingAnime'
import UpcomingAnime from './components/UpcomingAnime/UpcomingAnime'

function App() {
	return (
		<>
			<Header />
			<Sidebar />
			<SpotlightSection />
			<TrendingAnime />
			<UpcomingAnime />
		</>
	)
}

export default App
