import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getMovieInfo } from "../../services";
import { IMovieResponse } from "../../components/MovieCard/types";
import { MovieInformation } from "../../components/MovieInformation";

const Show: React.FC = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<IMovieResponse | null>(null); 
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const goBack = () => {
        navigate(-1);
    }
    
    const getMovieInfoMovies = async (MoviId:string) => {
        await getMovieInfo(MoviId).then((data) => {
            if (data && data.data){
                setMovie(data.data);
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
            getMovieInfoMovies(id);
        }
    }, [id]);

    return(
        <div>
            {isLoading && <div>Loading...</div>}
            <div> show: {id} </div>
            <div> titulo desde state: {location.state?.movie}</div>
            {movie && (
                <>
                <MovieInformation {...movie} />  
                </>
            )}
            <button onClick={goBack}>Ir atrás</button>
        </div>
    );
};

export default Show;