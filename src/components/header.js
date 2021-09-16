import React from "react";
import styled from "styled-components";
import { breakpoint, SiteData } from "../constants";
import Menu from "./Menu";

const Nav = styled.div`
    padding-bottom: 2em;
    margin-bottom: 2em;
    border-bottom: 1px solid black;

    h2 {
        margin: 0 0 24px;
    }

    @media (min-width: ${breakpoint}) {
        h2 {
            margin: 0;
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Header = () => (
    <Nav>
        <h2>{SiteData.appName}</h2>
        <Menu></Menu>
    </Nav>
);

export default Header;
