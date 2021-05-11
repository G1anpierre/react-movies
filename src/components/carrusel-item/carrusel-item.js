import React from 'react'


const CarruserItem = ({image}) => {
    return (
        <div>
            <picture>
                <source media="(min-width: 800px)" srcset={image} />
                <img src={image} alt='mulan' width="1200" height="310"/>
            </picture>
        </div>
    )
}

export default CarruserItem;
