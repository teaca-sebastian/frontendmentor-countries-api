/* eslint-disable react/prop-types */

// hooks
import { useContext } from 'react'
// context
import { QueryContext } from '../context/QueryContext'
// react-router
import { Link } from 'react-router-dom'

const CountriesGrid = ({ countries }) => {
	const { query } = useContext(QueryContext)

	// query to filter countries
	const queriedCountries = countries.filter((country) => {
		if (!country.name.toLowerCase().includes(query.input)) return 
		return query.region === country.region || query.region === null
	})

	return (
		<div className='mx-auto my-10 grid w-10/12 grid-cols-1 gap-14 sm:grid-cols-2 md:w-full md:grid-cols-3 lg:grid-cols-4'>
			{queriedCountries?.map((country) => {
				return (
					<Link key={country.numericCode} state={country} to={`/frontendmentor-countries-api/${country.name.replace(/\s+/g, '-').toLowerCase()}`}>
						<div
							className='mx-auto w-60 rounded-lg bg-white shadow-sm dark:bg-blue-body dark:text-white md:w-auto'
						>
							<img
								src={country.flags.png}
								alt='flag img'
								className='h-48 w-full rounded-t-lg'
							/>
							<div className='px-8 pb-12 pt-8'>
								<h1 className='text-2xl font-bold'>{country.name}</h1>
								<ul>
									<li>
										<strong>Population:</strong> {country.population.toLocaleString()}
									</li>
									<li>
										<strong>Region:</strong> {country.region}
									</li>
									<li>
										<strong>Capital:</strong> {country.capital}
									</li>
								</ul>
							</div>
						</div>
					</Link>
				)
			})}
		</div>
	)
}
export default CountriesGrid
