import React, { useEffect, useState } from "react";
import { IMovieDetail } from "../Show/types";
import { MovieCard } from "../../components/MovieCard";
import { AxiosResponse } from 'axios';
import { getMovieInfo } from "../../services";
import { useNavigate } from 'react-router-dom';

const Favorite = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState<IMovieDetail[]>([]);
    const favorites: string = localStorage.getItem('favorites') || '';
    const navigate = useNavigate();

    const runGetFavorite = async () => {
        if(favorites.length > 0){
            const favoritesArray = JSON.parse(favorites);
            const newShows = await Promise.all(
                favoritesArray.map(async (favorites:string) => {
                    return getMovieInfo(String(favorites))
                    .then((res: AxiosResponse) => {
                        if (res && res.data){
                            return res.data;
                        }
                    })
                    .catch((err: Error) => {
                        console.log(err, "err");
                    });
                })
            );
            setShow(newShows);
            setLoading(false);
            
            
        }

    }

    useEffect(() => {
        setLoading(true);
        runGetFavorite();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <div>
            {!loading ? (
                <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
                    {favorites && JSON.parse(favorites).length > 0 ? (
                        <div style={{marginLeft: "20px", overflow: "hidden"}}>
                            <h1 className="text-3xl font-bold mb-4 pt-5">My favorites</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                                {show.map((movie: IMovieDetail) => (
                                    <MovieCard key={movie.id}
                                        movieId={movie.id}
                                        title={movie.title}
                                        genreId={movie.genres[0].id}
                                        voteAvergae={movie.vote_average}
                                        posterPath={movie.poster_path}/>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="pt-5">
                            <div className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] py-12 px-10 w-full max-w-5xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
                                <div
                                    className="block rounded-lg bg-white text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                                    <div
                                        className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white">
                                        You don't have favorite movies!
                                    </div>
                                    <div className="p-6">
                                        <h5 className="mb-2 text-xl font-medium leading-tight ">
                                        Our recommendation
                                        </h5>
                                        <p className="mb-2 text-base ">
                                        Browse among the best movies so you can save your favorites
                                        </p>
                                    </div>
                                    <div className="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white dark:text-neutral-300">
                                        <button onClick={() => navigate('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            See movies
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
    
}

export default Favorite;