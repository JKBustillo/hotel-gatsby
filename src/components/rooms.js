import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
    query($slug: String!) {
        allDatoCmsRoom(filter: { slug: { eq: $slug } }) {
            nodes {
                title
                content
                image {
                    fluid(maxWidth:1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;

const RoomTemplate = ({ data }) => {
    console.log(data.allDatoCmsRoom.nodes[0]);

    return (
        <h1>Rooms.js</h1>
    );
}
 
export default RoomTemplate;