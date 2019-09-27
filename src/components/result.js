import React from 'react';
import '../index.css';


export default class Result extends React.Component{


    render() {
            let {result} = this.props;
            return (
                <div className="results">
                    <p>{result}</p>
                </div>
        );
      }
}
