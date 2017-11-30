import React, {Component} from 'react';
import './Title.css';

export default class Title extends Component {
  render() {
    return (
      <div className="Title">
        <h1 className="name">
          Ian Knox
        </h1>
        <div className="sub">
          <div className="title">
            Developer
          </div>
          <div className="city">
            Denver, CO
          </div>
        </div>
      </div>
    );
  }
}

