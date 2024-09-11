import Header from "../components/common/Header"
import { Box, Divider, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { POPULAR_API_URL, UPCOMING_API_URL, TOPRATED_API_URL } from "../constants/Constant";
import { categoriesMovies } from "../services/Api";
import { moviesType } from "../constants/Constant";
import MoviesList from "../components/MoviesList";

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

// ... (previous imports)

const Banner = styled('img')({
    height: 450,
    width: '100%'
})

// margin : auto is the best way for center alignment

const Componant = styled(Box)`
   width : 80%;
   margin : auto;  
`

const Container = styled(Box)`
   background : #F5F5F5;
   padding : 10px;
`


const CategoriesMovies = () => {
    const [movies, setMovies] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        let API_URL = '';
        const getData = async (API_URL) => {
            try {
                let response = await categoriesMovies(API_URL);
                setMovies(response.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
                // Handle error (e.g., show an error message to the user)
            }
        }

        if (search.includes('popular')) {
            API_URL = POPULAR_API_URL;
        } else if (search.includes('Toprated')) {
            API_URL = TOPRATED_API_URL;
        } else if (search.includes('Upcoming')) {
            API_URL = UPCOMING_API_URL;
        }

        getData(API_URL);
    }, [search]);

    return (
        <>
            <Header />
            <Componant>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                >
                    {
                        movies.map(movie => (
                            <Banner key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                        ))
                    }
                </Carousel>
                {/* typography hume variant deta hai jiske help se hum heading tag me change kar sakte hai */}
                <Container>
                    <Typography variant="h6">IMDb Chart</Typography>
                    <Typography variant="h5"> IMDb {moviesType[search.split('=')[1]]} Movies</Typography>
                    <Typography style = {{fontSize : 12, margin : 5}}>IMDb Top {movies.length} rated movies by regular IMDb voters</Typography>
                    <Divider/>
                    <MoviesList movies = {movies}/>
                </Container>
            </Componant>
        </>
    );
};

export default CategoriesMovies;
