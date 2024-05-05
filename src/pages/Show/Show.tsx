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

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        setIsLoading(true);
        if (id) {
            getMovieInfo(id).then((data) => {
                if (data && data.data) {
                    setMovie(data.data);
                    setIsLoading(false);
                }
            });
            getSimilar(id).then((data) => {
                if (data && data.data) {
                    setSimilarMovies(data.data.results);
                    setIsLoading(false);
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [id]);

    return (
        <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
            {isLoading && <div>Loading...</div>}
            {movie && (
                <>
                <div className="flex justify-between items-center p-5">
                    <h1 className="text-xl font-bold" style={{color: "transparent"}}>Back</h1>
                    <button onClick={goBack} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go Back
                    </button>
                </div>
                <div className="pb-5">
                    <MovieInformation {...movie} />
                </div>
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
            
        </div>
    );
};

export default Show;
