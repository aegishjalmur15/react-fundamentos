import React, {useContext} from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "../context/ThemeContext";

export default function Button(props) {
    const context = useContext(ThemeContext);

    return (
        <button onClick={props.onClick}
        style={{
            color: context.theme ==='dark' ? '#fff' : '#000',
            background: context.theme ==='dark'? '#000':'#fff'
        }}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}