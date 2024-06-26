import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IMovieResponse } from '../MovieCard/types';
import { MovieCard } from '../MovieCard';

interface MovieCarouselProps {
    movies: IMovieResponse[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
                1200: { slidesPerView: 5 },
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                640: { slidesPerView: 2 },
                320: { slidesPerView: 1 },
            }}
        >
            {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <MovieCard
                        movieId={movie.id}
                        posterPath={movie.poster_path}
                        title={movie.title}
                        voteAvergae={movie.vote_average}
                        genreId={movie.genre_ids[0]}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MovieCarousel;
