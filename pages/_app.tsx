import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
			<Navbar />
			<Component {...pageProps} />
		</Box>
	);
}

export default MyApp;
