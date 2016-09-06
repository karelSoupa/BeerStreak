import React from "react";

export default class ControlPanel extends React.Component {

    state = {
        list: [
            {
                name: "Pivo",
                price: 30,
            },
            {
                name: "Whiskey",
                price: 70,
            }
        ],
    };

    create (e){
        this.props.onClick(this.state.list[e]);
    }

    render = () => {
        return (

                <ul>
                {this.state.list.map((item, index) =>

                <li>
                    <button onClick={() => this.create(index)}> <img src= {"../../assets/img/" + index + ".png" } alt=""/> </button>
                </li>


             )}
                </ul>)
    }


}