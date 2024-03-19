import React from "react";
import ReactDOM  from "react-dom/client";

class App extends React. Component {
    constructor () {
        super ()
        this.state = {
            name : " ",
        }

        this.addName = this.addName.bind(this);

        }

        addwalue(e){
            this.setState({ name: e.target.value });
        }
        addName() {
            window.alert(this.state.name);
        }

    render () {
    

        return (
    <React.Fragment>
        <input type="text" value={this.state.name} onChange={(e)=> this.addwalue(e)} ></input>
      
        <button onClick={this.addName}>Try it</button>
        
        


    </React.Fragment>
 


             
        );  

    }

    }

    var root = document .getElementById("root");
    ReactDOM.createRoot(root).render(<App />); 