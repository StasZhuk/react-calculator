import React, { Component } from 'react';

const Button = (props) => {
    return (
        <input
            type="button"
            className={props.type === 'action' ? 'button action-button' : 'button input-button'}
            onClick={props.handleClick}
            value={props.label}
        />
    );
}

Button.propTypes = {
    type: React.propTypes.string.isRequired,
    handleClick: React.propTypes.func.isRequired,
    label: React.propTypes.string.isRequired
}

export default Button;