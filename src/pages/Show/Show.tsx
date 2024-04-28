import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Show: React.FC = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    useEffect(()=> {
        //llamar endopint de los detalles de la pelicula con el id
        //endpoint de recomendaciones
    }, []);

    return(
        <div>
            <div> show: {id} </div>
            <div> titulo desde state: {location.state.movie}</div>
            <button onClick={goBack}>Ir atrás</button>
        </div>
    );
};

export default Show;