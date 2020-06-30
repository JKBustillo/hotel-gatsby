import React from 'react';
import Image from 'gatsby-image';

const RoomPreview = ({ room }) => {
    const { title, content, image, slug } = room;

    return (
        <div>
            <Image
                fluid={image.fluid}
            />
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
}
 
export default RoomPreview;