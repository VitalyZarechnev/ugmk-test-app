import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { createTheme } from '@mui/material/styles';

import { router } from '@/routes/router';

const theme = createTheme();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
