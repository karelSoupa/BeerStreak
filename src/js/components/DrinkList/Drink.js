/**
 * Created by karel on 06.09.2016.
 */
import React from "react";
export default class Drink extends React.Component {


    render() {
        return (
            <span>
                <h3>{this.props.name}</h3>
                <p>{this.props.price} Kč</p>
            </span>
        );
    }
}
