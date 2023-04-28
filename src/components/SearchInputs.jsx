import { useContext } from 'react'
import Dropdown from './Dropdown'
import { QueryContext } from '../context/QueryContext'

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

const SearchInputs = () => {
	const { query, setQuery } = useContext(QueryContext)

	const handleSearchInput = (e) => {
		setQuery(draft => {
			draft.input = e.target.value
		})
	}

	return (
		<div className='transition-all sm:flex items-center justify-between duration-300 sm:space-y-0 space-y-8 bg-gray-bg text-sm text-blue-text dark:bg-blue-bg dark:text-white'>
			<div className='transition-all lg:w-4/12 duration-300 flex items-center justify-start gap-7 rounded-md bg-white px-8 py-3 text-gray-text shadow-sm dark:bg-blue-body dark:text-white'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='h-5 w-5'
				>
					<path
						fillRule='evenodd'
						d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
						clipRule='evenodd'
					/>
				</svg>
				<input
					value={query.input}
					onChange={(e) => handleSearchInput(e)}
					type='text'
					placeholder='Search for a country...'
					className='bg-white focus:outline-none transition-all duration-300 dark:bg-blue-body placeholder:dark:text-white'
				/>
			</div>
			<Dropdown value={'Filter by Region'} items={regions} />
		</div>
	)
}
export default SearchInputs
