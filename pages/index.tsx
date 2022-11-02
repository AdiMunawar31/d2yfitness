import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home: NextPage = () => {
	return (
		<Box>
			<HeroBanner />
			<SearchExercises />
			<h1>Hello</h1>
		</Box>
	);
};

export default Home;
