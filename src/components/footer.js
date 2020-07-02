import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navigation from './nav';

const HomeLink = styled(Link)`
    color: white;
    text-align: center;
    text-decoration: none;
`;

const Footer = () => {
    return (
        <>
            <footer
                css={css`
                    background-color: #222;
                    margin-top: 5rem;
                    padding: 1rem;
                `}
            >
                <div
                    css={css`
                        max-width: 1200px;
                        margin: 0 auto;

                        @media (min-width: 768px) {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    `}
                >
                    <HomeLink
                        to="/"
                    ><h1>Hotel Gatsby</h1></HomeLink>

                    <Navigation />
                </div>
            </footer>
            <p
                css={css`
                    text-align: center;
                    color: white;
                    background-color: rgb(33,44,55);
                    margin: 0;
                    padding: 1rem;
                `}
            >Hotel Gatsby - All rights reserved {new Date().getFullYear()} &copy;</p>
        </>
    );
}
 
export default Footer;