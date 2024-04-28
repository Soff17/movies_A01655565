import React from "react";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";

const Home = () => {
    return(
        <div style={{marginLeft: "20px", overflow: "hidden"}}>
            <h1 className="text-3xl font-bold mb-4 pt-5">Movie Grid</h1>
            <div>
                <MovieCarousel/>
            </div>
        </div>
    )
}

export default Home;