import Navbar from './components/Navbar'
import { useImmer } from 'use-immer'
import SearchInputs from './components/SearchInputs'
import CountriesGrid from './components/CountriesGrid'
import data from './assets/data.json'
import { QueryContext } from './context/QueryContext'


const App = () => {
	const [query, setQuery] = useImmer({
		input: '',
		region: null
	})
	return (
		<div className='bg-gray-bg transition-all duration-300 dark:bg-blue-bg min-h-screen'>
			<Navbar />
			<main className='mt-6 px-5 transition-all duration-300 md:px-16'>
				<QueryContext.Provider value={{ query, setQuery }}>
					<SearchInputs />
					<CountriesGrid countries={data} />
				</QueryContext.Provider>
			</main>
		</div>
	)
}
export default App

// add transitions to darkmode
