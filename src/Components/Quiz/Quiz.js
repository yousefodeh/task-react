import React, { Component } from 'react';
import Answer from '../Answer/Answer'
import './Quiz.css'

class Quiz extends Component {
    state={
        number:0
        ,questions:0
        ,count:0
        ,ResultsCountC:1
        ,ResultsCountInC:1   
        
    }
    Result = 0

    handleClick =(e)=> {
        if (this.Result===e){
            this.setState({
                ResultsCountC: this.state.ResultsCountC + 1
                });  
            this.props.callbackFromParent(this.state.ResultsCountC);             
        }
        if (this.Result!==e){
            this.setState({
                ResultsCountInC: this.state.ResultsCountInC + 1
                 });
            this.props.callbackFromParent1(this.state.ResultsCountInC);             
        }
        this.setState({
            number: this.state.number + 1
             });         
}
	render() {
        const{dataop}=this.props
        if(this.state.number===5){
            return(
                <div className="perant"><h1 className="end">*- The End -*</h1>
                    <div>
                        <span className="ResultsSymbolC1">    &#10004;    </span>
                        <span className="ResultsCount1">{this.state.ResultsCountC-1}</span>
                        <span className="ResultsSymbolInC1">  &#x2718;   </span>
                        <span className="ResultsCount1">{this.state.ResultsCountInC-1}</span>
                    </div>                          
                </div>
            )
        }
        return (
            <div>
                {JSON.parse(dataop).map((add, i) => {
                    if( i === this.state.number){
                        this.Result = add.A
                        console.log(this.state.number)
						return (
							<div key={i}>
                                <h1>{add.Q}</h1>
									<div>
										<Answer handleClick={this.handleClick} data={add.roles} />
									</div>
							</div>
                        );} 
                    })
				}
            </div>
        );
    }
} 
export default Quiz;