import React from "react";

import Drink from "./DrinkList/Drink";
import ControlPanel from "./ControllPanel/ControlPanel";

export default class BeerStreak extends React.Component {
    constructor(){
        super();
        this.create = this.create.bind(this);
    }

    state = {
        sumPrice: 0,
        list: [],
    };
    create = (item) =>{
        var sum = this.state.sumPrice + item.price;
        this.setState({
            sumPrice: sum,
            list: [

                ...this.state.list,{
                name:item.name,
                price:item.price,
                }
            ]
        })
    };
    render = () => {
        return <div>
            <h1>{this.props.title}</h1>
            <h2>Celk cena: {this.state.sumPrice} Kč</h2>

            <ControlPanel onClick={(item) => this.create(item)}/>
            <ul>
                {this.state.list.map((item, index) => <li>
                    <Drink  key={ index } name={this.state.list[index].name}
                           price={this.state.list[index].price}/>
                </li>,this)}
            </ul>

        </div>
    }
}
