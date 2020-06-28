import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const HomeContent = () => {
    const info = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: { slug: { eq: "home" } }) {
                nodes {
                    title
                    content
                    image {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);
    
    const { title, content, image } = info.allDatoCmsPage.nodes[0];

    return (
        <>
            <h2>{title}</h2>

            <div>
                <p>{content}</p>
                <img src={image.fluid.src} alt={title} />
            </div>
        </>
    );
}
 
export default HomeContent;