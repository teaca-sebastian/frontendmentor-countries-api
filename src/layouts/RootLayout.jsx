// hooks
import { useImmer } from 'use-immer'
// components
import Navbar from "../components/Navbar"
// context
import { QueryContext } from "../context/QueryContext"
// react router
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    const [query, setQuery] = useImmer({
		input: '',
		region: null,
	})
	return (
		<div className='min-h-screen bg-gray-bg transition-all duration-300 dark:bg-blue-bg'>
			<Navbar />
			<main className='mt-6 px-5 transition-all duration-300 md:px-16'>
				<QueryContext.Provider value={{ query, setQuery }}>
                    <Outlet />
				</QueryContext.Provider>
			</main>
		</div>
	)
}
export default RootLayout
