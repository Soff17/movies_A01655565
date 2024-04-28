import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MovieCard } from '../MovieCard';
import { movies } from '../../constants/moviesMock';

const MovieCarousel = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
            loop={true} 
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
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
