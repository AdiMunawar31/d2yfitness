import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HeroBanner from '../components/HeroBanner';

const Home: NextPage = () => {
	return (
		<Box>
			<HeroBanner />
			<h1>Hello</h1>
		</Box>
	);
};

export default Home;
