import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieInfo, getSimilar } from "../../services";
import { IMovieResponse } from "../../components/MovieCard/types";
import { MovieInformation } from "../../components/MovieInformation";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import { IMovieDetail } from "./types";

const Show: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<IMovieDetail | null>(null); 
    const [similarMovies, setSimilarMovies] = useState<IMovieResponse[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isFavorite, setIsFavorite]=useState<boolean>(false);
    const [favorites, setFavorites] = useState<string>('');

    const goBack = () => {
        navigate(-1);
    }

    const addFavorite = () => {
        const favs = favorites.length > 0 ? JSON.parse(favorites) : [];
        const newFavorites = [...favs, id];
        setFavorites(JSON.stringify(newFavorites));
        setIsFavorite(true);
        localStorage.setItem("Favorites", JSON.stringify(newFavorites));
    };

    const removeFavorite = () => {
        const favs = favorites.length > 0 ? JSON.parse(favorites) : [];
        let newFavorites = [...favs];
        newFavorites = newFavorites.filter((e) => e !== id);
        setFavorites(JSON.stringify(newFavorites));
        setIsFavorite(false);
        localStorage.setItem("Favorites", JSON.stringify(newFavorites));
    };
     
    const getMovieInfoMovies = async (MoviId:string) => {
        await getMovieInfo(MoviId).then((data) => {
            if (data && data.data){
                setMovie(data.data);
                setIsLoading(false);
            }
        })

        await getSimilar(MoviId).then((data) => {
            if (data && data.data){
                setSimilarMovies(data.data.results);
                setIsLoading(false);
            }
        })

        .catch((err) => {
            console.log(err);
        })
    };


    useEffect(()=> {
        setIsLoading(true);
        if (id) {
            const favs = localStorage.getItem('favorites') || '';
            setFavorites(favs);
            if (favs.includes(String(id))){
                setIsFavorite(true);
            }
            getMovieInfoMovies(id);
            getSimilar(id);
        }
    }, [id]);

    return(
        <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
            {isLoading && <div>Loading...</div>}
            {movie && (
                <>
                <div className="pt-5 pb-5">
                    <MovieInformation {...movie} />  
                </div>
                {isFavorite?(
                            <div className="flex flex-col justify-end">
                            <button onClick={removeFavorite} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Remove from favorites
                            </button>
                        </div>
                ) : (
                    <div className="flex flex-col justify-end">
                            <button onClick={addFavorite} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add to Favorites
                            </button>
                        </div>
                )}
                
                <div style={{ marginLeft: "20px", overflow: "hidden" }} className="pt-5">
                    <h1 className="text-3xl font-bold mb-4 pt-5">Similar Movies</h1>
                    <div className="pt-5">
                        {similarMovies?.length > 0 && 
                            <MovieCarousel movies={similarMovies} />
                        }
                    </div>
                </div>
                </>
            )}
            <button onClick={goBack}>Ir atrás</button>
        </div>
    );
};

export default Show;