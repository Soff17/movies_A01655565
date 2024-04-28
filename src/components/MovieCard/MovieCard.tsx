import React from 'react';
import { IMovieCard } from './types';
import { IMAGE_SOURCE } from '../../constants/moviesMock';
import genres from '../../constants/genres.json';
import '../../index.css';
import { useNavigate } from 'react-router-dom';
import { ROTES } from '../../routes/constants';

const MovieCard: React.FC<IMovieCard> = ({
    title,
    genreId,
    movieId,
    voteAvergae,
    posterPath,
}) => {
    //hooks
    const navigate = useNavigate();
    //state
    //constante que no sea estado
    const poster = IMAGE_SOURCE + posterPath;
    //funciones
    const getGenre = (genreId: number): string => {
        const key = Object.values(genres.genres).find(genre => genre.id === genreId);
        if (key) {
            return key.name;
        }
        return "Not classified";
    };

    const navigateMovies = (id: number, movieName: string) => {
        navigate(`${ROTES.SHOW}${id}`, {state: { movieName }});
        // estado {state: { movieName }
        //url ${ROTES.SHOW}${id}
    }
    //useeffect

    return (
        <div className="movie-card max-w-xs bg-white rounded-lg overflow-hidden shadow-md relative"
        onClick={() => {
            navigateMovies(movieId, title);
        }} style={{ backgroundImage: `url(${poster})`, backgroundSize: 'cover' }}>
            <div className=" movie-card-content absolute bottom-0 w-full text-white p-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="text-base pb-2">
                    <span className="bg-red-900 text-white rounded-full px-2 py-1">
                        {getGenre(genreId)}
                    </span>
                </div>
                <div className="text-base">
                    <span role="img" aria-label="star" className='pr-1'>⭐</span>{voteAvergae}/10
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
