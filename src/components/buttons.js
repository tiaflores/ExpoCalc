import React from 'react';
import { Button } from 'reactstrap';
import '../index.css';

export default class Buttons extends React.Component{

  render(){
    return(

      <div className="container">

            <div className="row">
              <div className="col-xs-3">
                <Button color="primary" name='7' onClick={(e) => this.props.onClick(e.target.name)}>7</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" name='8' onClick={(e) => this.props.onClick(e.target.name)}>8</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" name='9' onClick={(e) => this.props.onClick(e.target.name)}>9</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="warning" name='/' onClick={(e) => this.props.onClick(e.target.name)}>/</Button>{' '}
              </div>
            </div>

            <div className="row">
              <div className="col-xs-3">
                <Button color="primary" name='4' onClick={(e) => this.props.onClick(e.target.name)}>4</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" name='5' onClick={(e) => this.props.onClick(e.target.name)}>5</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" name='6' onClick={(e) => this.props.onClick(e.target.name)}>6</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="warning" name='*' onClick={(e) => this.props.onClick(e.target.name)}>x</Button>{' '}
              </div>
            </div>


            <div className="row">
              <div className="col-xs-3">
                <Button color="primary" name='1' onClick={(e) => this.props.onClick(e.target.name)}>1</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" name='2' onClick={(e) => this.props.onClick(e.target.name)}>2</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" name='3' onClick={(e) => this.props.onClick(e.target.name)}>3</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="warning" name='-' onClick={(e) => this.props.onClick(e.target.name)}>-</Button>{' '}
              </div>
            </div>


            <div className="row">
              <div className="col-xs-3">
                <Button color="primary" name='0'  onClick={(e) => this.props.onClick(e.target.name)}>0</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="success" name='=' onClick={(e) => this.props.onClick(e.target.name)}>=</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="danger" name='CE' onClick={(e) => this.props.onClick(e.target.name)}>C</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="warning" name='+' onClick={(e) => this.props.onClick(e.target.name)}>+</Button>{' '}
              </div>
            </div>
      </div>
    );
  }

}
