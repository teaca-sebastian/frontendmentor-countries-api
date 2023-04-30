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
	<Route path='/' element={<RootLayout />}>
		<Route index element={<Home />}></Route>
		<Route path='/:country' element={<Details />}></Route>
	</Route>
	)
)

const App = () => {
	return <RouterProvider router={router} />
}
export default App
