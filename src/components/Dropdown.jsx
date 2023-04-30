/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useContext } from 'react'
import { QueryContext } from '../context/QueryContext'

const Dropdown = ({ value, items }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { query, setQuery } = useContext(QueryContext)

	const handleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleSelected = (item) => {
		setQuery((draft) => {
			draft.region = item
		})
	}

	return (
		<div
			onClick={handleDropdown}
			className='relative flex w-52 cursor-pointer items-center justify-between rounded-md bg-white px-6 py-3 text-sm text-blue-text shadow-sm transition-all duration-300 dark:bg-blue-body dark:text-white'
		>
			{query.region ? query.region : value}
			{isOpen ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					className='h-4 w-4'
				>
					<path
						fillRule='evenodd'
						d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
						clipRule='evenodd'
					/>
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					className='h-4 w-4'
				>
					<path
						fillRule='evenodd'
						d='M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z'
						clipRule='evenodd'
					/>
				</svg>
			)}
			{isOpen && (
				<ul className='absolute left-0 top-12 w-52 rounded-md bg-inherit px-6 py-3 shadow-sm'>
					{items?.map((item) => {
						return (
							<li
								key={item}
								className='cursor-pointer select-none py-1'
								onClick={() => handleSelected(item)}
							>
								{item}
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}
export default Dropdown
