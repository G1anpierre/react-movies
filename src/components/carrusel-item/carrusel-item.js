import React from 'react'
import './carrusel-item.css';
import Button from '../button/Button';

const CarruserItem = ({image}) => {
    return (
        <>
            <div className="carrusel-image-wrapper">
                <picture>
                    <source media="(min-width: 800px)" srcSet={image} />
                    <img src={image} alt='mulan' width="1200" height="310"/>
                </picture>
                <div className="button-container">
                    <Button styling='primary'><i className="icon-play" /> Ver ahora </Button>
                    <Button styling='secondary'><i className="icon-plus" /> Ver despues</Button>
                </div>
            </div>
        </>
    )
}

export default CarruserItem;
