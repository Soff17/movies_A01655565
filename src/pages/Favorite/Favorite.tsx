import React, { useEffect, useState } from "react";
import { IMovieDetail } from "../Show/types";
import { MovieCard } from "../../components/MovieCard";
import { AxiosResponse } from 'axios';
import { getMovieInfo } from "../../services";

const Favorite = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState<IMovieDetail[]>([]);
    const favorites: string = localStorage.getItem('favorites') || '';

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
        setLoading(false);
        runGetFavorite();
    }, [])
    
    return(
        <div>
            {!loading? (
                <div>
                    <h1>Favorites</h1>
                    {favorites && favorites.length > 0 ? (
                        <div>
                            {show && show.map((show:IMovieDetail) => (
                                <MovieCard key={show.id}
                                movieId={show.id}
                                title={show.title}
                                genreId={show.genres[0].id}
                                voteAvergae={show.vote_average}
                                posterPath={show.poster_path}/>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h2>No hay favoritos</h2>
                        </div>
                    )}
                </div>

            ) : (
                <div>
                    Loading...
                </div>
            )
            }
        </div>
    )
}

export default Favorite;