import React from 'react';
import '../index.css';

export default class History extends React.Component{

  render() {
          let {history} = this.props;
          return (
              <div className="history">
                  <p>{history}</p>
              </div>
      );}

}
