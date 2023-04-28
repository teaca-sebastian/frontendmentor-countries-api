import { useState } from 'react'
import Dropdown from './Dropdown'

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

const SearchInputs = () => {
	const [searchInput, setSearchInput] = useState('')

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value)
	}

	return (
		<div className='space-y-8 bg-gray-bg text-sm text-blue-text dark:bg-blue-bg dark:text-white'>
			<div className='flex items-center justify-start gap-7 rounded-md bg-white px-8 py-3 text-gray-text shadow-sm dark:bg-blue-body dark:text-white'>
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
					value={searchInput}
					onChange={(e) => handleSearchInput(e)}
					type='text'
					placeholder='Search for a country...'
					className='bg-white focus:outline-none dark:bg-blue-body placeholder:dark:text-white'
				/>
			</div>
			<Dropdown value={'Filter by Region'} items={regions} />
		</div>
	)
}
export default SearchInputs
