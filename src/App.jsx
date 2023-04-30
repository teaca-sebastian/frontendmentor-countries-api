// react-router
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
// layouts
import RootLayout from './layouts/RootLayout'
// pages
import Home from './pages/Home'
import Details from './pages/Details'

const router = createBrowserRouter(
	createRoutesFromElements(
	<Route path='/frontendmentor-countries-api' element={<RootLayout />}>
		<Route index element={<Home />}></Route>
		<Route path='/frontendmentor-countries-api/:country' element={<Details />}></Route>
	</Route>
	)
)

const App = () => {
	return <RouterProvider router={router} />
}
export default App
