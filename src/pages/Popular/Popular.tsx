import React, { useEffect, useState } from "react";
import { getPopular } from "../../services";
import { MovieCard } from "../../components/MovieCard";
import { IMovieResponse } from "../../components/MovieCard/types";

const Popular: React.FC = () => {
    const [movies, setMovies] = useState<IMovieResponse[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getPopularMovies = async () => {
        await getPopular().then((data) => {
            if (data && data.data){
                setMovies(data.data.results);
                setIsLoading(false);
            }
        })

        .catch((err) => {
            console.log(err);
        })
    };

    useEffect(() => {
        setIsLoading(true);
        getPopularMovies();
    }, []);

    return(
        <div>
            {isLoading && <div>Loading...</div>}
            <div style={{marginLeft: "20px", overflow: "hidden"}}>
                <h1 className="text-3xl font-bold mb-4 pt-5">Movie Grid</h1>
                <div className="grid grid-cols-5 gap-5">
                {movies?.length > 0 && 
                    movies.map((movie) => (
                        <MovieCard
                        title={movie.title}
                        genreId={movie.genre_ids[0]}
                        movieId={movie.id}
                        voteAvergae={movie.vote_average}
                        posterPath={movie.poster_path}
                    />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Popular;