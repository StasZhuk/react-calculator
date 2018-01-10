import React, { Component } from 'react';
import ScreenRow from './screenRow';

const Screen = (props) => {
    return (
        <div className="screen">
            <ScreenRow value={props.question} />
            <ScreenRow value={props.answer} />
        </div>
    );
}

Screen.propTypes = {
    question: React.propTypes.string.isRequired,
    answer: React.propTypes.string.isRequired,
}

export default Screen;