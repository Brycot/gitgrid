import PropTypes from "prop-types";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GridContainer = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid" >
                {images.map(( image ) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};

GridContainer.propTypes = {
    category: PropTypes.string.isRequired,
}
