import React, { FunctionComponent } from 'react';
import './Box.scss';

interface IBox {
    color: string;
}
const Box: FunctionComponent<IBox> = ({color}) => {
    return (
        <div className="box" style={{ backgroundColor: color }}></div>
    );
};

export default Box;
