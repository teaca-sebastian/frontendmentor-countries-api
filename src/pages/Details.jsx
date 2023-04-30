// react router
import { useLocation, Link } from 'react-router-dom'
// data
import data from '../assets/data.json'

const Details = () => {
	const { state } = useLocation()

	// creates array of country objects that border the state country
	const borderedCountries = []
	state.borders?.forEach((code) =>
		borderedCountries.push(data.find((country) => country.alpha3Code === code))
	)

	return (
		<div>
			<Link to={'/'} className='flex w-24 items-center justify-center gap-2 rounded bg-white py-2 text-sm shadow-md transition-all duration-300 dark:bg-blue-body dark:text-white'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					className='h-5 w-5'
				>
					<path
						fillRule='evenodd'
						d='M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z'
						clipRule='evenodd'
					/>
				</svg>
				Back
			</Link>
			<div className='gap-20 py-14 text-blue-text dark:text-white lg:gap-32 lg:flex lg:justify-between'>
				<img
					src={state.flags.png}
					className='mx-auto lg:mx-0 mb-8 w-full max-w-sm rounded shadow-sm lg:max-w-xl'
					alt={`${state.demonym} flag`}
				/>
				<div className='lg:w-1/2'>
					<h1 className='text-2xl font-bold sm:text-3xl lg:text-4xl'>{state.name}</h1>
					<div className='my-5 text-sm lg:text-lg sm:flex sm:gap-10 lg:gap-20'>
						<ul className='mb-7 space-y-2'>
							<li>
								<strong>Native Name:</strong> {state.nativeName}
							</li>
							<li>
								<strong>Population:</strong> {state.population.toLocaleString()}
							</li>
							<li>
								<strong>Region:</strong> {state.region}
							</li>
							<li>
								<strong>Sub Region:</strong> {state.subregion}
							</li>
							<li>
								<strong>Capital:</strong> {state.capital}
							</li>
						</ul>
						<ul className='space-y-2'>
							<li>
								<strong>Top Level Domain:</strong>{' '}
								{state.topLevelDomain.join(', ')}
							</li>
							<li>
								<strong>Currencies:</strong>{' '}
								{state.currencies.map((currency) => currency.name).join(', ')}
							</li>
							<li>
								<strong>Languages:</strong>{' '}
								{state.languages.map((language) => language.name).join(', ')}
							</li>
						</ul>
					</div>
					<div className='lg:flex lg:items-center'>
						<h2 className='mb-4 self-start whitespace-nowrap text-lg font-semibold lg:mb-0 lg:mr-4'>
							{borderedCountries.length === 0 ? 'Does not border any country' : 'Border Countries:'}
						</h2>
						<div className='flex flex-wrap gap-3'>
							{borderedCountries.map((country) => {
								return (
									<div
										className='rounded bg-white px-6 py-2 text-sm text-blue-text shadow-md dark:bg-blue-body dark:text-white'
										key={country.numericCode}
									>
										{country.name}
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Details
