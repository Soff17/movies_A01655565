import React, { useState, useEffect } from 'react';
import { IMAGE_SOURCE } from '../../constants/moviesMock';
import { Pill } from '../Pill';
import { IMovieDetail } from '../../pages/Show/types';

const MovieInformation: React.FC<IMovieDetail> = ({
    id,
  poster_path,
  original_title,
  overview,
  runtime,
  release_date,
  vote_average,
  vote_count,
  genres: genres_ids,
}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [favorites, setFavorites] = useState<string[]>([]);  // Estado espera un array de strings

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('favorites') || '[]') as (string | number)[];
        const stringFavs = favs.map(fav => String(fav));  // Convertimos todos los elementos a strings
        setFavorites(stringFavs);
        setIsFavorite(stringFavs.includes(String(id)));  // Aseguramos que id sea string
    }, [id]);

    const addFavorite = () => {
        const stringId = String(id);  // Convertimos id a string
        if (!favorites.includes(stringId)) {
            const newFavorites = [...favorites, stringId];
            setFavorites(newFavorites);
            setIsFavorite(true);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }
    };

    const removeFavorite = () => {
        const stringId = String(id);
        if (favorites.includes(stringId)) {
            const newFavorites = favorites.filter(favId => favId !== stringId);
            setFavorites(newFavorites);
            setIsFavorite(false);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }
    };
    
  return (
    <div className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] py-12 px-10 w-full max-w-5xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <div className="flex items-center max-sm:flex-col gap-10">
            <img src={IMAGE_SOURCE + poster_path} alt="Descripción de la imagen" className="w-80 shrink-0 rounded" />
            <div>
                <h3 className="text-xl font-semibold">{original_title}</h3>
                <p className="mt-2 text-sm text-gray-400">{overview}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 text-lg justify-items-start">
                    <span className="flex items-center justify-start">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                        </svg><p className="pl-1 text-sm">18+</p>
                    </span>
                    <span className="flex items-center justify-start">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                        </svg><p className="pl-1 text-sm">{runtime} min.</p>
                    </span>
                    <span className="flex items-center justify-start">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M6 5V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v2H3V7a2 2 0 0 1 2-2h1ZM3 19v-8h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm5-6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" clip-rule="evenodd"/>
                        </svg><p className="pl-1 text-sm">{release_date}</p>
                    </span>
                    <span className="flex items-center justify-start">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                        </svg><p className="pl-1 text-sm">{vote_average}</p>
                    </span>
                    <span className="flex items-center justify-start">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-1 9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm2-5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm4 4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z" clip-rule="evenodd"/>
                        </svg><p className="pl-1 text-sm">{vote_count}</p>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="flex flex-wrap gap-2">
                        {genres_ids?.map((genre, index) => (
                            <Pill key={index} title={genre.name} color={'red'} />
                        ))}
                    </div>
                    <div className="flex flex-col justify-end">
                        {isFavorite ? (
                            <button onClick={removeFavorite} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Remove from Favorites
                            </button>
                        ) : (
                            <button onClick={addFavorite} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add to Favorites
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MovieInformation;
