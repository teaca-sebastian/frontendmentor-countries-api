import Navbar from './components/Navbar'
import SearchInputs from './components/SearchInputs'
import CountriesGrid from './components/CountriesGrid'

const App = () => {
	return (
		<div className='bg-gray-bg dark:bg-blue-bg min-h-screen'>
			<Navbar />
			<main className='md:px-16 px-5 my-6 '>
				
				<SearchInputs />
				<CountriesGrid />
			</main>
		</div>
	)
}
export default App

