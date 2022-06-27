import React, {useContext} from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";


function Header({title, children}){
    const context = useContext(ThemeContext);
    return (
        <>
        <h1>{title}</h1>
        <Button onClick={context.handleToggleTheme}>Mudar Tema</Button>
        {children}
        </>
    );
}

Header.PropTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    onToggleTheme: PropTypes.func
}

Header.defaultProps = {
    title: `JStack's Blog`
}

export default Header;