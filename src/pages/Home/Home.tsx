import React, { useEffect, useState } from "react";
import { getPopular, getTopRated, getNowPlaying} from "../../services"; // Asegúrate de tener estas funciones implementadas
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import { IMovieResponse } from "../../components/MovieCard/types";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState<IMovieResponse[]>([]);
    const [ratedMovies, setRatedMovies] = useState<IMovieResponse[]>([]);
    const [playingMovies, setPlayingMovies] = useState<IMovieResponse[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getMovies = async () => {
        await getPopular().then((data) => {
            if (data && data.data){
                setPopularMovies(data.data.results);
                setIsLoading(false);
            }
        })

        await getTopRated().then((data) => {
            if (data && data.data){
                setRatedMovies(data.data.results);
                setIsLoading(false);
            }
        })

        await getNowPlaying().then((data) => {
            if (data && data.data){
                setPlayingMovies(data.data.results);
                setIsLoading(false);
            }
        })

        .catch((err) => {
            console.log(err);
        })
    };

    useEffect(() => {
        setIsLoading(true);
        getMovies();
    }, []);

    return (
        <div style={{ marginLeft: "20px", overflow: "hidden" }}>
            {isLoading && <div>Loading...</div>}
            <h1 className="text-3xl font-bold mb-4 pt-5">Popular Movies</h1>
            <div className="pb-5">
                {popularMovies?.length > 0 && 
                    <MovieCarousel movies={popularMovies} />
                }
            </div>
            
            <h1 className="text-3xl font-bold mb-4 pt-5">Top Rated Movies</h1>
            <div className="pb-5">
                {ratedMovies?.length > 0 && 
                    <MovieCarousel movies={ratedMovies} />
                }
            </div>

            <h1 className="text-3xl font-bold mb-4 pt-5">Now Playing Movies</h1>
            <div>
                {playingMovies?.length > 0 && 
                    <MovieCarousel movies={playingMovies} />
                }
            </div>
        </div>
    );
}

export default Home;
