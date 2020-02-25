import React, { Component } from 'react';
import './Add.css';
import Quiz from './Quiz/Quiz'

class Add extends Component {
   state={
    ResultsCountC:0
    , ResultsCountInC:0
    ,data:this.props.data1
   }
   myCallback = (dataFromChild) => {
        this.setState({ResultsCountC:dataFromChild})
        console.log(this.state.data)
   }
   myCallback1 = (dataFromChild) => {
        this.setState({ResultsCountInC:dataFromChild})
   }
    render() {
        return (
            <div className="App">
                <div className="Questions">
                    <div className="Results">
                        <div>
                            <span className="ResultsSymbolC">    &#10004;    </span>
                            <span className="ResultsCount">{this.state.ResultsCountC}</span>
                            <span className="ResultsSymbolInC">  &#x2718;   </span>
                            <span className="ResultsCount">{this.state.ResultsCountInC}</span>
                        </div>
                    </div>
                    <div className="puzzleGame">
                       <Quiz callbackFromParent={this.myCallback} callbackFromParent1={this.myCallback1} dataop={this.state.data}/>
                    </div>  
                </div>
            </div>
        );
    }
}
export default Add