import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './items.css'

class Items extends Component {
  state={
    add: { text: "Addition"
         },
    sub:{
        text: "Subtraction"
        },
    mult:{
        text: "Multiply"   
    },
    Compar:{
        text: "Comparison"
    } 
}
   render() {   
        return (
            <div className="items__w">
                <ul className="items">   
                    {<li  key={`${this.state.add.text}`}>
                        <Link  to="/add">{this.state.add.text}</Link>
                        <Link  to="/sub">{this.state.sub.text}</Link>
                        <Link  to="/multiply">{this.state.mult.text}</Link>
                        <Link  to="/comparison">{this.state.Compar.text}</Link>
                     </li>
                    }
                </ul>
            </div>
        );
    }
}

export default Items;