import React, { Component } from 'react';

const ScreenRow = (props) => {
    return (
        <div className="screen-row">
            <input type="text" readOnly value={props.value} />
        </div>
    );
}

ScreenRow.propTypes = {
    value: React.propTypes.string.isRequired
}

export default ScreenRow;