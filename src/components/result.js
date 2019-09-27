import React from 'react';
import '../index.css';


export default class Result extends React.Component{


    render() {
            let {result} = this.props;
            return (
                <view className="results">
                    <p>{result}</p>
                </view>
        );
      }
}
