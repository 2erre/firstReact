import React from 'react'
import { NavbarComponent } from '../components/Navbar';

const LayoutPageHOC = (Component) => {

    const LayoutPage = () => {
        return(
            <>
            <NavbarComponent/>
            <Component />
            </>
        );

    };
    return LayoutPage;
};

export {LayoutPageHOC as LayoutPage};