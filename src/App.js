import React from 'react';
import Result from './components/result.js';
import Buttons from './components/buttons.js';
import History from './components/history.js';
import './index.css';

export default class App extends React.Component {
    constructor(){
        super();

        this.state = {
            result: "",
            history: "",
            histArr: [],
        }
    }

    onClick = button => {
        if(button === "="){
            this.calculate()
        } else if(button === "CE"){
            this.reset()
        }else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate(){
        try {
          let res = this.state.result
          let histArray = this.state.histArr
          let history = res + " = " + eval(res)

          this.setState({result: eval(res)})
          histArray.push(history)

        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset() {
        this.setState({
            result: "",
            history: "",
            histArr: []
        })
    };

    hist(){
        return this.state.histArr.map(historyArr => (
          <ul className="ulli">
          <li className="ulli">{historyArr}</li>
          </ul>
        ));
    }

    render() {
        return (
                <div className="appdiv">
                    <div className="resultdiv"><Result result={this.state.result}/></div>
                    <Buttons onClick={this.onClick}/>
                    <div className="historyDiv"><History history={this.hist()}/></div>
                </div>
        );
    }
}
