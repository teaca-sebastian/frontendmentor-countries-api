// components
import SearchInputs from "../components/SearchInputs"
import CountriesGrid from "../components/CountriesGrid"
// data
import data from '../assets/data.json'

const Home = () => {
	return (
		<>
			<SearchInputs />
			<CountriesGrid countries={data} />
		</>
	)
}
export default Home
