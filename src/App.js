import './App.css';
import React from "react"
import FormClassComponent from './Components/FormClassComponent';
import FormFunctionComponent from './Components/FormFunctionComponent';
class App extends React.Component {
 
  render() {
    return (
      <div className="App">
      {/* <h1>Using class Component</h1>
       <FormClassComponent/> */}
        <h1>Using Function Component</h1>
        <FormFunctionComponent/>
      </div>
    );
  }
}


export default App;
