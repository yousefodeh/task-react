import React, { Component } from 'react';
import './Answer.css'

class Answer extends Component {
  
    render() {
      const { data, handleClick } = this.props     
      return (
         <div> 
           {data.map(function (role, i) 
              {        
              return( 
                <div key={i}>
                   <a className="a" onClick={() => handleClick(role.A1)}>1) {role.A1}</a><br />
                   <a className="a" onClick={() => handleClick(role.A2)}>2) {role.A2}</a><br />
                   <a className="a" onClick={() => handleClick(role.A3)}>3) {role.A3}</a><br />
                   <a className="a" onClick={() => handleClick(role.A4)}>4) {role.A4}</a><br />
                </div>)
              })
            }
          </div>
      ); 
    }
}
             
export default Answer;