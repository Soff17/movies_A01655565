import React from 'react';
import { IMovieCard } from './types';
import { IMAGE_SOURCE } from '../../constants/moviesMock';
import genres from '../../constants/genres.json';
import '../../index.css';
import { useNavigate } from 'react-router-dom';
import { ROTES } from '../../routes/constants';
import { Pill } from '../Pill';

const MovieCard: React.FC<IMovieCard> = ({
    title,
    genreId,
    movieId,
    voteAvergae,
    posterPath,
}) => {

    const navigate = useNavigate();

    const poster = IMAGE_SOURCE + posterPath;

    const getGenre = (genreId: number): string => {
        const key = Object.values(genres.genres).find(genre => genre.id === genreId);
        if (key) {
            return key.name;
        }
        return "Not classified";
    };

    const navigateMovies = (id: number, movieName: string) => {
        navigate(`${ROTES.SHOW}${id}`, {state: { movieName }});
    }
    
    const getVoteColor = (vote: number): string => {
        if (vote < 5) return 'red';
        if (vote >= 5 && vote <= 7) return 'orange';
        return 'green';
    };

    return (
        <div className="movie-card max-w-xs bg-black rounded-lg overflow-hidden shadow-md relative"
            onClick={() => navigateMovies(movieId, title)}
            style={{ position: 'relative' }}>
            <div className="movie-card-bg absolute inset-0 bg-no-repeat bg-center bg-cover z-0"
                 style={{ backgroundImage: `url(${poster})` }}></div>
            <div className="gradient-layer absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <div className="movie-card-content absolute bottom-0 w-full text-white p-4 z-20">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="text-base pb-2">
                    <Pill title={getGenre(genreId)} color={getVoteColor(voteAvergae)} />
                </div>
                <div className="text-base">
                    <span role="img" aria-label="star" className='pr-1'>⭐</span>{voteAvergae}/10
                </div>
            </div>
        </div>
    );
    
}

export default MovieCard;
