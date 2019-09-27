import React from 'react';
import { Button } from 'reactstrap';
import '../index.css';

export default class Buttons extends React.Component{

  render(){
    return(

      <view className="container">

            <view className="row">
              <view className="col-xs-3">
                <Button color="primary" name='7' onClick={(e) => this.props.onClick(e.target.name)}>7</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="primary" name='8' onClick={(e) => this.props.onClick(e.target.name)}>8</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="primary" name='9' onClick={(e) => this.props.onClick(e.target.name)}>9</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="warning" name='/' onClick={(e) => this.props.onClick(e.target.name)}>/</Button>{' '}
              </view>
            </view>

            <view className="row">
              <view className="col-xs-3">
                <Button color="primary" name='4' onClick={(e) => this.props.onClick(e.target.name)}>4</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="primary" name='5' onClick={(e) => this.props.onClick(e.target.name)}>5</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="primary" name='6' onClick={(e) => this.props.onClick(e.target.name)}>6</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="warning" name='*' onClick={(e) => this.props.onClick(e.target.name)}>x</Button>{' '}
              </view>
            </view>


            <view className="row">
              <view className="col-xs-3">
                <Button color="primary" name='1' onClick={(e) => this.props.onClick(e.target.name)}>1</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="primary" name='2' onClick={(e) => this.props.onClick(e.target.name)}>2</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="primary" name='3' onClick={(e) => this.props.onClick(e.target.name)}>3</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="warning" name='-' onClick={(e) => this.props.onClick(e.target.name)}>-</Button>{' '}
              </view>
            </view>


            <view className="row">
              <view className="col-xs-3">
                <Button color="primary" name='0'  onClick={(e) => this.props.onClick(e.target.name)}>0</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="success" name='=' onClick={(e) => this.props.onClick(e.target.name)}>=</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="danger" name='CE' onClick={(e) => this.props.onClick(e.target.name)}>C</Button>{' '}
              </view>
              <view className="col-xs-3">
                <Button color="warning" name='+' onClick={(e) => this.props.onClick(e.target.name)}>+</Button>{' '}
              </view>
            </view>
      </view>
    );
  }

}
