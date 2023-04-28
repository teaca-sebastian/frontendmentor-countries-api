import { useState, useEffect } from "react"

let initialTheme = localStorage.theme || null

const handleLocalStorageTheme = () => {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

// can use toggle
// can use only one useeffect

const useDarkToggle = () => {
	const [theme, setTheme] = useState(initialTheme)

	useEffect(() => {
		localStorage.theme = theme
        handleLocalStorageTheme()
	}, [theme])

	const handleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}
	return [theme, handleTheme]
}
export default useDarkToggle
