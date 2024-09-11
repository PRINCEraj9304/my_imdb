import { Star } from "@mui/icons-material"
import {styled, List, ListItem, Typography } from "@mui/material"

const Banner  = styled('img')({
    width :  47
})

const Listcss = styled(List)`
    display : flex;
`

const MoviesList = ({ movies }) => {
    return (
        <>
            {
                movies.map(movie => (
                    <Listcss>
                        <ListItem>
                            <Banner src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                        </ListItem>
                        <ListItem>
                            <Typography>{movie.original_title}</Typography>
                        </ListItem>
                        <ListItem>
                            <Star color = "warning"/>
                            <Typography>{movie.vote_average}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>{movie.release_date}</Typography>
                        </ListItem>
                    </Listcss>
                ))
            }

        </>
    )
}

export default MoviesList