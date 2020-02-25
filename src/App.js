import React, { Component,Fragment } from 'react';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import items from './Components/Items/item'
import Headers from './Components/Headers/Headers'
import Add from './Components/Add'
import './App.css';

class App extends Component {
  state={
    data:""
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      this.setState({data:JSON.parse(xhr.responseText)});
            console.log(JSON.stringify(this.state.data.add[0]))
    })
    xhr.open('POST', 'https://demo2745512.mockable.io/data.json')
    xhr.send()
  }
  render() {
    return (
    <Fragment>
     <div className="App">
      <Headers className="head" />
        <Router> 
          <Switch>
              <Route path={"/"} exact component={items} />
              <Route path={"/add"}         render={props => <Add {...props} data1={JSON.stringify(this.state.data.add)} />} />
              <Route path={"/sub"}         render={props => <Add {...props} data1={JSON.stringify(this.state.data.sub)} />}/>
              <Route path={"/multiply"}    render={props => <Add {...props} data1={JSON.stringify(this.state.data.mult)}/>}/>
              <Route path={"/comparison"}  render={props => <Add {...props} data1={JSON.stringify(this.state.data.comp)}/>}/>
              <Route component={items} />
          </Switch>
        </Router>
     </div>
    </Fragment>
    );
  }
}

export default App;
