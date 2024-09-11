import { Box, styled } from '@mui/material';
import Header from '../components/common/Header';
import { useEffect, useState } from 'react';
import { categoriesMovies } from '../services/Api';
import { NOWPLAYING_API_URL } from '../constants/Constant';
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slides from '../components/Slides';

const Boxcss = styled(Box)`
    display : flex;
    padding : 20px 0;
`

const Component = styled(Box)`
     padding : 0 115px;
`

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await categoriesMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        }
        getData();
    }, [])


    return (

        <>
            <Header />
            <Component>
                <Boxcss>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </Boxcss>
                <Slides movies = {movies}/>
            </Component>

        </>

    )
}

export default Home;