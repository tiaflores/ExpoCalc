import React from 'react';
import '../index.css';

export default class History extends React.Component{

  render() {
          let {history} = this.props;
          return (
              <view className="history">
                  <p>{history}</p>
              </view>
      );}

}
