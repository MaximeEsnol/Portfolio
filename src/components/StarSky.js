import React, { useEffect, useRef, useState } from 'react';

const StarSky = ( { amountStars = 10 } ) => {

    const hasMounted = useRef(false);

    const [stars, setStars] = useState([]);

    useEffect(() => {
        const getStars = () => {
            let stars = [];
            for ( let i = 0; i < amountStars; i++ ) {
                let x = Math.round(Math.random() * 100);
                let y = Math.round(Math.random() * 75);
    
                stars.push(
                    <Star size={3} offsetX={x} offsetY={y}/>
                );
            }
            return stars;
        }

        if ( !hasMounted.current ) {
            setStars(getStars());
            hasMounted.current = true;
        }
    });

    

    return(
        <div className="sky" style={styles.sky}>
            {
                stars.map( (star) => {
                    return star;
                })
            }
        </div>
    )
}

const Star = ( {size, color = "#c5d2d8", offsetX = 0, offsetY = 0} ) => {

    const starStyle = {
        backgroundColor: color,
        top: offsetY + "%",
        left: offsetX + "%",
        width: size,
        height: size
    }

    return(
        <div className="star" style={{...starStyle, ...styles.star}}>

        </div>
    )
}

const styles = {
    sky: {
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        height: "25vh",
        minHeight: 250,
        maxHeight: 500
    },
    star: {
        position: "absolute",
        borderRadius: 500
    }
}

export default StarSky;