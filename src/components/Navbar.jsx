import useDarkToggle from '../hooks/useDarkToggle'

const Navbar = () => {
    const [currentTheme, toggleTheme] = useDarkToggle()
	return (
		<div className='transition-all duration-300 bg-white select-none dark:bg-blue-body md:px-16 px-5 py-7 flex items-center justify-between text-blue-text shadow-sm dark:text-white'>
			<a href='#' className="font-bold md:text-xl">Where in the world?</a>
			<div onClick={toggleTheme} className='cursor-pointer flex items-center justify-center font-semibold gap-1 md:gap-2 text-sm md:text-lg'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='h-4 w-4 dark:fill-current md:h-5 md:w-5'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
					/>
				</svg>
				Dark Mode
			</div>
		</div>
	)
}
export default Navbar
